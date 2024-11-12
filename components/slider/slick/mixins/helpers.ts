import React from 'react';
import ReactDOM from 'react-dom';
import { getTrackCSS, getTrackLeft, getTrackAnimateCSS } from './trackHelper';
import type { InnerSliderProps, InnerSliderState } from '../../types';

export type MixinThisType = {
    props: InnerSliderProps;
    state: InnerSliderState;
    list?: HTMLDivElement;
    track?: HTMLDivElement;
    animationEndCallback: number | undefined;
    hasMounted: boolean;
    getWidth(elem: Element): number;
    getHeight(elem: Element): number;
    setState(state: InnerSliderState, cb?: () => void): void;
    autoPlay(): void;
    initialize(props: InnerSliderProps): void;
    canGoNext(opts: InnerSliderProps): boolean;
    slideHandler(index: number): void;
    play(): false | void;
    pause(): void;
    swipeDirection(
        touchObject: InnerSliderState['touchObject']
    ): 'left' | 'right' | 'vertical' | 'down' | 'up';
};

const helpers = {
    initialize(this: MixinThisType, props: InnerSliderProps) {
        const slickList = ReactDOM.findDOMNode(this.list) as Element;
        const slideCount = React.Children.count(props.children);
        const listWidth = this.getWidth(slickList) || 0;
        const trackWidth = this.getWidth(ReactDOM.findDOMNode(this.track) as Element) || 0;
        let slideWidth;

        if (!props.vertical) {
            const centerPaddingAdj = (props.centerMode &&
                parseInt(props.centerPadding!) * 2) as number;
            slideWidth = (listWidth - centerPaddingAdj) / props.slidesToShow!;
        } else {
            slideWidth = listWidth;
        }

        const slideHeight = this.getHeight(slickList.querySelector('[data-index="0"]')!) || 0;
        const listHeight = slideHeight * props.slidesToShow!;
        const slideHeightList = [];
        const newSlickList = Array.from(
            slickList.querySelectorAll(`.${props.prefix}slick-slide`) || []
        );
        for (const item of newSlickList) {
            const height = this.getHeight(item);
            slideHeightList.push(height);
        }
        const slidesToShow = props.slidesToShow || 1;

        const activeIndex = 'activeIndex' in props ? props.activeIndex : props.defaultActiveIndex;
        const currentSlide = props.rtl
            ? slideCount - 1 - (slidesToShow - 1) - activeIndex!
            : activeIndex;

        this.setState(
            {
                slideCount,
                slideWidth,
                listWidth,
                trackWidth,
                currentSlide,
                slideHeight,
                listHeight,
                slideHeightList,
            },
            () => {
                const targetLeft = getTrackLeft({
                    slideIndex: this.state.currentSlide!,
                    trackRef: this.track!,
                    ...props,
                    ...this.state,
                });
                // getCSS function needs previously set state
                const trackStyle = getTrackCSS({
                    left: targetLeft,
                    ...props,
                    ...this.state,
                });

                this.setState({ trackStyle: trackStyle });

                this.autoPlay(); // once we're set up, trigger the initial autoplay.
            }
        );
    },

    update(this: MixinThisType, props: InnerSliderProps) {
        this.initialize(props);
    },

    getWidth(elem: Element) {
        if ('clientWidth' in elem!) {
            return elem.clientWidth;
        }
        return elem && (elem as Element).getBoundingClientRect().width;
    },

    getHeight(elem: Element) {
        if ('clientHeight' in elem!) {
            return elem.clientHeight;
        }
        return elem && (elem as Element).getBoundingClientRect().height;
    },

    adaptHeight(this: MixinThisType) {
        if (this.props.adaptiveHeight) {
            const selector = `[data-index="${this.state.currentSlide}"]`;
            if (this.list) {
                const slickList = ReactDOM.findDOMNode(this.list) as HTMLElement;
                const slickElement = slickList.querySelector<HTMLElement>(selector);
                const listHeight = slickElement!.offsetHeight;
                slickList.style.height = `${listHeight}px`;
            }
        }
    },

    canGoNext(opts: InnerSliderProps & InnerSliderState) {
        let canGo = true;
        if (!opts.infinite) {
            if (opts.centerMode) {
                if (opts.currentSlide! >= opts.slideCount! - 1) {
                    canGo = false;
                }
            } else if (
                opts.slideCount! <= opts.slidesToShow! ||
                opts.currentSlide! >= opts.slideCount! - opts.slidesToShow!
            ) {
                // check if all slides are shown in slider
                canGo = false;
            }
        }
        return canGo;
    },

    slideHandler(this: MixinThisType, index: number) {
        const { rtl } = this.props;

        // Functionality of animateSlide and postSlide is merged into this function
        let targetSlide: number, currentSlide: number;
        let callback: () => void;

        if (this.props.waitForAnimate && this.state.animating) {
            return;
        }

        if (this.props.animation === 'fade') {
            currentSlide = this.state.currentSlide!;

            // don't change slide if it's not infinite and current slide is the first or last slide'
            if (this.props.infinite === false && (index < 0 || index >= this.state.slideCount!)) {
                return;
            }

            //  Shifting targetSlide back into the range
            if (index < 0) {
                targetSlide = index + this.state.slideCount!;
            } else if (index >= this.state.slideCount!) {
                targetSlide = index - this.state.slideCount!;
            } else {
                targetSlide = index;
            }

            if (this.props.lazyLoad && this.state.lazyLoadedList!.indexOf(targetSlide) < 0) {
                this.setState({
                    lazyLoadedList: this.state.lazyLoadedList!.concat(targetSlide),
                });
            }

            callback = () => {
                this.setState({
                    animating: false,
                });
                this.props.onChange!(targetSlide);
                delete this.animationEndCallback;
            };

            this.props.onBeforeChange!(this.state.currentSlide!, targetSlide);

            this.setState(
                {
                    animating: true,
                    currentSlide: targetSlide,
                },
                function () {
                    this.animationEndCallback = setTimeout(callback, this.props.speed + 20);
                }
            );

            this.autoPlay();
            return;
        }

        targetSlide = index;

        if (rtl) {
            if (targetSlide < 0) {
                if (this.props.infinite === false) {
                    currentSlide = 0;
                } else if (this.state.slideCount! % this.props.slidesToScroll! !== 0) {
                    if (targetSlide + this.props.slidesToScroll! <= 0) {
                        currentSlide = this.state.slideCount! + targetSlide;
                        targetSlide = this.state.slideCount! - this.props.slidesToScroll!;
                    } else {
                        currentSlide = targetSlide = 0;
                    }
                } else {
                    currentSlide = this.state.slideCount! + targetSlide;
                }
            } else if (targetSlide >= this.state.slideCount!) {
                if (this.props.infinite === false) {
                    currentSlide = this.state.slideCount! - this.props.slidesToShow!;
                } else if (this.state.slideCount! % this.props.slidesToScroll! !== 0) {
                    currentSlide = 0;
                } else {
                    currentSlide = targetSlide - this.state.slideCount!;
                }
            } else {
                currentSlide = targetSlide;
            }
        } else if (targetSlide < 0) {
            if (this.props.infinite === false) {
                currentSlide = 0;
            } else if (this.state.slideCount! % this.props.slidesToScroll! !== 0) {
                currentSlide =
                    this.state.slideCount! - (this.state.slideCount! % this.props.slidesToScroll!);
            } else {
                currentSlide = this.state.slideCount! + targetSlide;
            }
        } else if (targetSlide >= this.state.slideCount!) {
            if (this.props.infinite === false) {
                currentSlide = this.state.slideCount! - this.props.slidesToShow!;
            } else if (this.state.slideCount! % this.props.slidesToScroll! !== 0) {
                currentSlide = 0;
            } else {
                currentSlide = targetSlide - this.state.slideCount!;
            }
        } else {
            currentSlide = targetSlide;
        }

        let targetLeft = getTrackLeft({
            slideIndex: targetSlide,
            trackRef: this.track!,
            ...this.props,
            ...this.state,
        });

        const currentLeft = getTrackLeft({
            slideIndex: currentSlide,
            trackRef: this.track!,
            ...this.props,
            ...this.state,
        });

        if (this.props.infinite === false) {
            targetLeft = currentLeft;
        }

        if (this.props.lazyLoad) {
            let loaded = true;
            const slidesToLoad = [];
            const slidesLen = this.state.slideCount!;

            const sliderIndex = targetSlide < 0 ? slidesLen + targetSlide : currentSlide;

            for (let i = sliderIndex; i < sliderIndex + this.props.slidesToShow!; i++) {
                let k = i;
                if (rtl) {
                    k = i >= slidesLen ? slidesLen * 2 - i - 1 : slidesLen - i - 1;
                }

                const pre = k - 1 < 0 ? slidesLen - 1 : k - 1;
                const next = k + 1 >= slidesLen ? 0 : k + 1;

                this.state.lazyLoadedList!.indexOf(k) < 0 && slidesToLoad.push(k);
                this.state.lazyLoadedList!.indexOf(pre) < 0 && slidesToLoad.push(pre);
                this.state.lazyLoadedList!.indexOf(next) < 0 && slidesToLoad.push(next);
            }

            slidesToLoad.forEach(i => {
                if (this.state.lazyLoadedList!.indexOf(i) < 0) {
                    loaded = false;
                }
            });

            if (!loaded) {
                this.setState({
                    lazyLoadedList: this.state.lazyLoadedList!.concat(slidesToLoad),
                });
            }
        }

        this.props.onBeforeChange!(this.state.currentSlide!, currentSlide);

        // Slide Transition happens here.
        // animated transition happens to target Slide and
        // non - animated transition happens to current Slide
        // If CSS transitions are false, directly go the current slide.
        if (this.props.useCSS === false) {
            this.setState(
                {
                    currentSlide: currentSlide,
                    trackStyle: getTrackCSS({
                        left: currentLeft,
                        ...this.props,
                        ...this.state,
                    }),
                },
                () => {
                    this.props.onChange!(currentSlide);
                }
            );
        } else {
            const nextStateChanges = {
                animating: false,
                currentSlide: currentSlide,
                trackStyle: getTrackCSS({
                    left: currentLeft,
                    ...this.props,
                    ...this.state,
                }),
                swipeLeft: null,
            };

            callback = () => {
                this.setState(nextStateChanges);
                this.props.onChange!(currentSlide);
                delete this.animationEndCallback;
            };

            this.setState(
                {
                    animating: true,
                    currentSlide: currentSlide,
                    trackStyle: getTrackAnimateCSS({
                        left: targetLeft,
                        ...this.props,
                        ...this.state,
                    }),
                },
                function () {
                    this.animationEndCallback = setTimeout(callback, this.props.speed + 20);
                }
            );
        }

        this.autoPlay();
    },

    // 鼠标悬浮在 arrow 上时作出动画反馈
    arrowHoverHandler(this: MixinThisType, msg?: string) {
        const offset = 30; // slide 的位置偏移量
        const targetLeft = getTrackLeft({
            slideIndex: this.state.currentSlide!,
            trackRef: this.track!,
            ...this.props,
            ...this.state,
        });

        let left;
        /* istanbul ignore next */
        if (msg === 'next') {
            left = targetLeft - offset;
        } else if (msg === 'prev') {
            left = targetLeft + offset;
        } else {
            left = targetLeft;
        }

        this.setState({
            trackStyle: getTrackAnimateCSS({
                left,
                ...this.props,
                ...this.state,
            }),
        });
    },

    swipeDirection(touchObject: {
        startX?: number;
        startY?: number;
        curX?: number;
        curY?: number;
    }) {
        let swipeAngle;
        const xDist = touchObject.startX! - touchObject.curX!;
        const yDist = touchObject.startY! - touchObject.curY!;
        const r = Math.atan2(yDist, xDist);
        swipeAngle = Math.round((r * 180) / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }
        if ((swipeAngle <= 45 && swipeAngle >= 0) || (swipeAngle <= 360 && swipeAngle >= 315)) {
            return this.props.rtl === false ? 'left' : 'right';
        }
        if (swipeAngle >= 135 && swipeAngle <= 225) {
            return this.props.rtl === false ? 'right' : 'left';
        }
        if (this.props.verticalSwiping === true) {
            if (swipeAngle >= 35 && swipeAngle <= 135) {
                return 'down';
            } else {
                return 'up';
            }
        }
        return 'vertical';
    },

    play(this: MixinThisType) {
        let nextIndex;
        if (!this.hasMounted) {
            return false;
        }
        if (this.props.rtl) {
            nextIndex = this.state.currentSlide! - this.props.slidesToScroll!;
        } else if (this.canGoNext({ ...this.props, ...this.state })) {
            nextIndex = this.state.currentSlide! + this.props.slidesToScroll!;
        } else {
            return false;
        }
        this.slideHandler(nextIndex);
    },

    autoPlay(this: MixinThisType) {
        if (this.state.autoPlayTimer) {
            clearTimeout(this.state.autoPlayTimer);
        }
        if (this.props.autoplay) {
            this.setState({
                autoPlayTimer: setTimeout(this.play.bind(this), this.props.autoplaySpeed),
            });
        }
    },

    pause(this: MixinThisType) {
        if (this.state.autoPlayTimer) {
            clearTimeout(this.state.autoPlayTimer);
            this.setState({
                autoPlayTimer: null,
            });
        }
    },
};

export default helpers;

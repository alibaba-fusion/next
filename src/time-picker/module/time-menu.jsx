import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function scrollTo(element, to, duration) {
    const requestAnimationFrame =
        window.requestAnimationFrame ||
        function requestAnimationFrameTimeout(...params) {
            return setTimeout(params[0], 10);
        };

    if (duration <= 0) {
        element.scrollTop = to;
        return;
    }

    const difference = to - element.scrollTop;
    const perTick = (difference / duration) * 10;

    requestAnimationFrame(() => {
        element.scrollTop = element.scrollTop + perTick;

        if (element.scrollTop === to) {
            return;
        }

        scrollTo(element, to, duration - 10);
    });
}

const noop = () => {};

class TimeMenu extends React.Component {
    static propTypes = {
        prefix: PropTypes.string,
        title: PropTypes.node,
        mode: PropTypes.oneOf(['hour', 'minute', 'second']),
        step: PropTypes.number,
        activeIndex: PropTypes.number,
        disabledItems: PropTypes.func,
        onSelect: PropTypes.func,
        disabled: PropTypes.bool,
    };

    static defaultProps = {
        step: 1,
        disabledItems: () => false,
        onSelect: () => {},
        disabled: false,
    };

    componentDidMount() {
        this.scrollToSelected(0);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.activeIndex !== this.props.activeIndex) {
            this.scrollToSelected(120);
        }
    }

    scrollToSelected(duration = 0) {
        const { activeIndex, step } = this.props;
        const targetIndex = Math.floor((activeIndex || 0) / step);
        const firstItem = this.menu.children[targetIndex];
        const offsetTo = firstItem.offsetTop;
        scrollTo(this.menu, offsetTo, duration);
    }

    _menuRefHandler = ref => {
        this.menu = ref;
    };

    createTimeMenuItem = index => {
        const {
            prefix,
            mode,
            activeIndex,
            disabled,
            disabledItems,
            onSelect,
        } = this.props;
        const isDisabled = disabled || disabledItems(index);
        const itemCls = classnames({
            [`${prefix}time-picker-menu-item`]: true,
            [`${prefix}disabled`]: isDisabled,
            [`${prefix}selected`]: index === activeIndex,
        });
        const handleClick = isDisabled ? noop : () => onSelect(index, mode);

        return (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <li
                role="option"
                aria-selected={String(index === activeIndex)}
                key={index}
                title={index}
                className={itemCls}
                onClick={handleClick}
            >
                {index}
            </li>
        );
    };

    render() {
        const { prefix, title, mode, step } = this.props;
        const total = mode === 'hour' ? 24 : 60;
        const list = [];
        let last = 0;
        for (let i = 0; i < total; i++) {
            if (i % step === 0) {
                last = i;
                list.push(this.createTimeMenuItem(i));
            }
        }

        if (last < total - 1) {
            list.push(this.createTimeMenuItem(total - 1));
        }

        const menuTitle = title ? (
            <div className={`${prefix}time-picker-menu-title`}>{title}</div>
        ) : null;

        return (
            <div className={`${prefix}time-picker-menu`}>
                {menuTitle}
                <ul
                    role="listbox"
                    className={`${prefix}time-picker-menu-${mode}`}
                    ref={this._menuRefHandler}
                >
                    {list}
                </ul>
            </div>
        );
    }
}

export default TimeMenu;

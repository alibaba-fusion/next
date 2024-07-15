# Slider

-   category: Components
-   family: DataDisplay
-   type: Display

---

## Guide

The Slider component is a slide show that displays many components of the content horizontally on the page.
The Slider are independent of each other and there is no logical relationship between content and data.

### When To Use

-   **single picture**：This style is usually used to carry operational banners. It is a relatively fixed module.
-   **multiple picture**：browse multiple unit message

### Note

1. When there is only one picture in the Slider component, it will hides the navigation anchor, disables automatic cycling (even if the upper layer is set), and prohibits drag and drop playback (even if the upper layer is set).
2. If you want to put the Slider into the Dialog, you need to close the Dialog animation at this time, to avoid the Slider causing an error when calculating the inner element width.
3. If there is a 1px image height problem, try wrapping a `div` tag outside the `img` tag.

## API

### Slider

| Param              | Description                                                                                              | Type                                     | Default Value | Required |
| ------------------ | -------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------- | -------- |
| locale             | Locale object for components                                                                             | Partial\<Locale>                         | -             |          |
| adaptiveHeight     | Whether to use adaptive height                                                                           | boolean                                  | -             |          |
| animation          | Animation type, default value is 'slide'                                                                 | string \| boolean                        | 'slide'       |          |
| arrows             | Whether to display arrows                                                                                | boolean                                  | -             |          |
| arrowSize          | Size of the arrow                                                                                        | 'medium' \| 'large'                      | -             |          |
| arrowPosition      | Position of the arrow                                                                                    | 'inner' \| 'outer'                       | -             |          |
| arrowDirection     | Direction of the arrow                                                                                   | 'hoz' \| 'ver'                           | -             |          |
| autoplay           | Whether to play automatically                                                                            | boolean                                  | -             |          |
| autoplaySpeed      | Autoplay speed                                                                                           | number                                   | -             |          |
| prevArrow          | Prev arrow                                                                                               | React.ReactElement                       | -             |          |
| nextArrow          | Next arrow                                                                                               | React.ReactElement                       | -             |          |
| centerMode         | Whether to use center mode                                                                               | boolean                                  | -             |          |
| dots               | Whether to display dots                                                                                  | boolean                                  | -             |          |
| dotsDirection      | Direction for navigation dots                                                                            | 'hoz' \| 'ver'                           | -             |          |
| dotsRender         | Render navigation dots<br/><br/>**signature**:<br/>**params**:<br/>_index_: index<br/>_current_: current | (index: number, current: number) => void | -             |          |
| draggable          | Whether it can be dragged                                                                                | boolean                                  | -             |          |
| infinite           | Whether to use infinite loop mode                                                                        | boolean                                  | -             |          |
| defaultActiveIndex | The default activated slide index                                                                        | number                                   | -             |          |
| lazyLoad           | Whether to enable lazy load                                                                              | boolean                                  | -             |          |
| slideDirection     | Slide direction                                                                                          | 'hoz' \| 'ver'                           | -             |          |
| slidesToShow       | Number of slides showed at the same time                                                                 | number                                   | -             |          |
| slidesToScroll     | Number of slides scrolled at the same time                                                               | number                                   | -             |          |
| speed              | Carousel speed                                                                                           | number                                   | -             |          |
| activeIndex        | Jump to the specified carousel image (controlled)                                                        | number                                   | -             |          |
| triggerType        | Triggering method for navigation dots                                                                    | 'click' \| 'hover'                       | -             |          |
| onChange           | Callback function for slides switching                                                                   | (index: number) => void                  | -             |          |
| centerPadding      | Side padding when in center mode (px or %);                                                              | string                                   | -             |          |
| cssEase            | CSS3 Animation Easing, default value is 'ease'                                                           | string                                   | -             |          |
| focusOnSelect      | When multiple slides are rotated, whether to be automatically centered after clicking to select them.    | boolean                                  | -             |          |

## Other

next-slider is forked from [react-slick](https://github.com/akiran/react-slick)

# Slider

-   category: Components
-   family: DataDisplay
-   type: Display

---

## Guide

The Slider component is a slide show that displays many components of the content horizontally on the page.
The Slider are independent of each other and there is no logical relationship between content and data.

###  When To Use

-   **single picture**：This style is usually used to carry operational banners. It is a relatively fixed module.
-   **multiple picture**：browse multiple unit message

### Note

1. When there is only one picture in the Slider component, it will hides the navigation anchor, disables automatic cycling (even if the upper layer is set), and prohibits drag and drop playback (even if the upper layer is set).
2. If you want to put the Slider into the Dialog, you need to close the Dialog animation at this time, to avoid the Slider causing an error when calculating the inner element width.
3. If there is a 1px image height problem, try wrapping a `div` tag outside the `img` tag.

## API

### Slider

| Param | Descripiton  | Type  | Default Value |
| ------------------ | ------------------------------------------------------ | -------------- | -------- |
| adaptiveHeight     | Whether to use adaptive height                         | Boolean        | false    |
| animation          | Animation type, default is 'slide'                     | String/Boolean | 'slide'  |
| arrows             | Whether to show arrows                                 | Boolean        | true     |
| arrowSize          | Navigation arrow size , option has: 'medium', 'large'<br><br>**option**:<br>'medium', 'large'                                                                                    | Enum           | 'medium' |
| arrowPosition      | Position of navigation arrow, option: 'inner', 'outer'<br><br>**option**:<br>'inner', 'outer'                                                                                    | Enum           | 'inner'  |
| arrowDirection     | Direction of the arrow, option: 'hoz', 'ver'<br><br>**option**:<br>'hoz', 'ver'                                                                                                  | Enum           | 'hoz'    |
| autoplay           | Whether to play automatically                          | Boolean        | false    |
| autoplaySpeed      | Autoplay speed                                         | Number         | 3000     |
| nextArrow          | Backward arrow                                         | ReactElement   | null     |
| prevArrow          | Forward arrow                                          | ReactElement   | null     |
| centerMode         | Is centering mode enabled?                             | Boolean        | false    |
| dots               | Whether to display navigation anchor                   | Boolean        | true     |
| dotsDirection      | Navigation anchor position<br><br>**option**:<br>'hoz', 'ver'                                                                                                                    | Enum           | 'hoz'    |
| dotRender          | Custom navigation anchor, such as your custom components.<br><br>**signatures**:<br>Function() => void                                                                          | Function       | -        |
| draggable          | Can it be dragged                                      | Boolean        | true     |
| infinite           | Whether to use infinite circulation mode               | Boolean        | true     |
| defaultActiveIndex | Initially activated rotation map                       | Number         | 0        |
| lazyLoad           | Whether to enable lazy loading                         | Boolean        | false    |
| slideDirection     | Slide direction<br><br>**option**:<br>'hoz', 'ver'     | Enum           | 'hoz'    |
| slidesToShow       | Number of pictures displayed at the same time          | Number         | 1        |
| slidesToScroll     | Swiping number of pictures at the same time                     | Number         | 1        |
| speed              | Slide speed                                            | Number         | 500      |
| activeIndex        | Slide to the specified carousel (controlled)                                                                                      | Number         | -        |
| triggerType        | Anchor navigation trigger <br><br>**option**:<br>'click', 'hover'                                                                                                                | Enum           | 'click'  |
| onChange           | Slider switching callback function<br><br>**signatures**:<br>Function(index: Number) => void<br>**params**:<br>_index_: {Number} Slide index | Function       | () => {} |
| centerPadding      | Side padding when in center mode (px or %); The display part is center, padding will produce a preview before and after                             | String         | '50px'   |
| cssEase            | CSS3 Animation Easing, default is ‘ease’                                                                     | String         | 'ease'   |
| focusOnSelect      | Multi-mode swiping, click to automatically center       | Boolean        | false    |

## Other

next-slider is forked from [react-slick](https://github.com/akiran/react-slick)

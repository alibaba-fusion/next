# Avatar

-   category: Components
-   family: DataDisplay
-   chinese: 头像
-   type: Display

---

## Develop Guide

1.19.0+ supported

### When to Use

Avatars can be used to represent people or objects. It supports images, Icons, or letters.

## API

### Avatar

| Param    | Description                                                                                                  | Type                                                                                                        | Default Value | Required |
| -------- | ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- | ------------- | -------- |
| children | Children node list                                                                                           | React.ReactNode                                                                                             | -             |          |
| size     | The size of the avatar                                                                                       | 'small' \| 'medium' \| 'large' \| number                                                                    | 'medium'      |          |
| shape    | The shape of the avatar                                                                                      | 'circle' \| 'square'                                                                                        | 'circle'      |          |
| icon     | The icon type of the icon avatar, can be set to the `type` or `ReactElement` of Icon                         | React.ReactElement \| string                                                                                | -             |          |
| src      | The resource address of the image avatar                                                                     | string                                                                                                      | -             |          |
| onError  | The event of the image loading failure, returning false will close the component's default fallback behavior | () => boolean                                                                                               | -             |          |
| imgProps | The other properties of the image                                                                            | Omit\<<br/> React.ImgHTMLAttributes\<HTMLImageElement>,<br/> 'src' \| 'srcSet' \| 'onError' \| 'alt'<br/> > | -             |          |
| alt      | The alt replacement text when the image cannot be displayed                                                  | string                                                                                                      | -             |          |
| srcSet   | The responsive resource address of the image avatar                                                          | string                                                                                                      | -             |          |

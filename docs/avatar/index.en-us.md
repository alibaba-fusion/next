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

| Param                   | Description                  | Type              | Default Value                                      |
| ------- | ---------------------------------------------------------------------------- | ---------------- | -------- |
| size    | size of avatar                                                                      | Enum/Number      | 'medium' |
| shape   | shape of avatar <br><br>**option**:<br>'circle', 'square'                                  | Enum             | 'circle' |
| icon    | the `Icon` type for an icon avatar, it can be any type of `Icon` Component or `ReactNode`                                | ReactNode/String | -        |
| src     | the address of the image for an image avatars                         | String           | -        |
| onError | error handler of image, return false to prevent default fallback behavior<br><br>**signatures**:<br>Function() => void | Function         | -        |
| alt     | This attribute defines the alternative text describing the image         | String           | -        |
| srcSet  | a list of sources to use for different screen resolutions                             | String           | -        |

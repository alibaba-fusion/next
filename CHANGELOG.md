# Change Log 

## [1.27.5](https://github.com/alibaba-fusion/next/compare/1.27.4...1.27.5) (2024-02-22)

### Bug Fixes

* **ConfigProvider:** improve config types, close [#4751](https://github.com/alibaba-fusion/next/issues/4751) ([b442d93](https://github.com/alibaba-fusion/next/commit/b442d9310bf503203ba4cc36ac6fb5766f030289))
* **TimePicker2:** should has focus style when visible, close [#4657](https://github.com/alibaba-fusion/next/issues/4657) ([#4738](https://github.com/alibaba-fusion/next/issues/4738)) ([228b621](https://github.com/alibaba-fusion/next/commit/228b621023fb8e63d79b5783393954b8a6e12db5))
* **Overlay:** solve problems caused by numerical floating, close [#4740](https://github.com/alibaba-fusion/next/issues/4740) ([8f29094](https://github.com/alibaba-fusion/next/commit/8f290948b08d6fda23121f6c75178b738b2b84c2))
* rollback [#4746](https://github.com/alibaba-fusion/next/issues/4746) and fix textarea clear spec ([e486542](https://github.com/alibaba-fusion/next/commit/e486542d786f63ce189adc8c1908f782a2082a03))


### Code Refactoring

* **Cascader:** convert to TypeScript, impove docs and tests ([#4730](https://github.com/alibaba-fusion/next/pull/4730))
* **Grid:** convert to TypeScript, impove docs and tests ([#4703](https://github.com/alibaba-fusion/next/pull/4703))
* **List:** convert to TypeScript, impove docs and tests ([#4702](https://github.com/alibaba-fusion/next/pull/4702))
* **Validate:** convert to TypeScript, improve tests ([910c957](https://github.com/alibaba-fusion/next/commit/910c957fc9623f642c5400f680af497bc1e5c4c6))


## [1.27.5-beta.1](https://github.com/alibaba-fusion/next/compare/1.27.5-beta.0...1.27.5-beta.1) (2024-02-22)


## [1.27.5-beta.0](https://github.com/alibaba-fusion/next/compare/1.27.4...1.27.5-beta.0) (2024-02-22)


## [1.27.4](https://github.com/alibaba-fusion/next/compare/1.27.3...1.27.4) (2024-01-26)


### Bug Fixes

* **Util:** compatibility breaking introduced by Object.hasOwn ([6caea8e](https://github.com/alibaba-fusion/next/commit/6caea8e7a4c2ea5f4bd0ed3cd124b1cb074e12e4))


## [1.27.3](https://github.com/alibaba-fusion/next/compare/1.27.2...1.27.3) (2024-01-25)


### Features

* **Input:** TextArea support hasClear, close [#4334](https://github.com/alibaba-fusion/next/issues/4334) ([#4714](https://github.com/alibaba-fusion/next/issues/4714)) ([12333ed](https://github.com/alibaba-fusion/next/commit/12333ed583b641a2e390cf5640b2506b731c816f))


### Bug Fixes

* **Menu:** should update layout when children size changed, close [#4640](https://github.com/alibaba-fusion/next/issues/4640) ([#4722](https://github.com/alibaba-fusion/next/issues/4722)) ([f4ceaf7](https://github.com/alibaba-fusion/next/commit/f4ceaf77c6ae171cb1e59fb29d223eafefffc82a))
* **Overlay:** fix the crash issue when resize is caused by adjustment, close [#4692](https://github.com/alibaba-fusion/next/issues/4692) ([7315f9e](https://github.com/alibaba-fusion/next/commit/7315f9ed9343f6b9b9157c915c36a372b2219012))
* **Rating:** fix grade background, close [#4734](https://github.com/alibaba-fusion/next/issues/4734) ([#4735](https://github.com/alibaba-fusion/next/issues/4735)) ([54d7f57](https://github.com/alibaba-fusion/next/commit/54d7f573509f7f3fbcc5344bc2cf833d9dcad709))
* **Tree:** expand action area should not shrink when the content is oversize, close [#4689](https://github.com/alibaba-fusion/next/issues/4689) ([#4723](https://github.com/alibaba-fusion/next/issues/4723)) ([157835f](https://github.com/alibaba-fusion/next/commit/157835f992e370648287123ecdc1d492e6b07fe9))


### Documentation

* Generate docs from tsdoc ([f89d6b2](https://github.com/alibaba-fusion/next/commit/f89d6b29b483547c9c68f21d5cf4aa2819fc92f3))


### Code Refactoring

* **Animate:** convert to TypeScript, impove docs and tests ([#4719](https://github.com/alibaba-fusion/next/pull/4719))
* **Box:** convert to TypeScript, impove docs and tests ([e1805e2](https://github.com/alibaba-fusion/next/commit/e1805e251309a7f63214ef62670b663a1a55a189))
* **Core:** support node&sass tests, complete types, improve tests and docs ([9b1b054](https://github.com/alibaba-fusion/next/commit/9b1b054f3e61de6a073f5be198aca47e4078adc9))
* **MixinUiState:** convert to TypeScript, improve tests ([86e5414](https://github.com/alibaba-fusion/next/commit/86e5414e6652959e9ad3efa1e92631675edeeb91))
* **Search:** convert to TypeScript, impove docs and tests ([5997230](https://github.com/alibaba-fusion/next/commit/5997230f8a06f91341ade3e10049b6b44a915502))


## [1.27.2](https://github.com/alibaba-fusion/next/compare/1.27.1...1.27.2) (2024-01-11)


### Features

* **Rating:** add tip info background token, close [#4705](https://github.com/alibaba-fusion/next/issues/4705) ([#4706](https://github.com/alibaba-fusion/next/issues/4706)) ([2f71df9](https://github.com/alibaba-fusion/next/commit/2f71df9b18126487b880de595b269b917f23ff7b))


### Bug Fixes

* **DatePicker2:**  default current day when next range is empty, close [#3877](https://github.com/alibaba-fusion/next/issues/3877) ([#4711](https://github.com/alibaba-fusion/next/issues/4711)) ([62eec1b](https://github.com/alibaba-fusion/next/commit/62eec1b92c8312a03f6cba9292249aff147c8cc8))
* **Field:** compatible for Firefox, close [#4288](https://github.com/alibaba-fusion/next/issues/4288) ([#4712](https://github.com/alibaba-fusion/next/issues/4712)) ([b109dce](https://github.com/alibaba-fusion/next/commit/b109dceb74c91a4b3c1ae2faf933321cb738c961))
* **Form:** pass device to responsive-grid, close [#4513](https://github.com/alibaba-fusion/next/issues/4513) ([#4707](https://github.com/alibaba-fusion/next/issues/4707)) ([110937b](https://github.com/alibaba-fusion/next/commit/110937ba84255a888f77ca30a349caa26c239d2f))
* **Table:** fix merge width calculation logic when lock, close [#4264](https://github.com/alibaba-fusion/next/issues/4264) ([#4709](https://github.com/alibaba-fusion/next/issues/4709)) ([ed36371](https://github.com/alibaba-fusion/next/commit/ed36371b02acc1171c3abaa94e37be4e286d975d))


## [1.27.1](https://github.com/alibaba-fusion/next/compare/1.27.1-alpha.1...1.27.1) (2024-01-03)

### Bug Fixes
- Set esModuleInterop true to compat esbuild



## [1.27.1-alpha.1](https://github.com/alibaba-fusion/next/compare/1.27.1-alpha.0...1.27.1-alpha.1) (2024-01-03)


## [1.27.1-alpha.0](https://github.com/alibaba-fusion/next/compare/1.27.0...1.27.1-alpha.0) (2024-01-03)


## [1.27.0](https://github.com/alibaba-fusion/next/compare/1.26.37...1.27.0) (2024-01-02)

### Code Refactoring
- Create new project structure
- Upgrade to TypeScript Project progressive
- Improve maintenance for documentation and component APIs
- Improve test cases with cypress



## [1.27.0-alpha.2](https://github.com/alibaba-fusion/next/compare/1.27.0-alpha.1...1.27.0-alpha.2) (2023-12-29)


## [1.27.0-alpha.1](https://github.com/alibaba-fusion/next/compare/1.27.0-alpha.0...1.27.0-alpha.1) (2023-12-29)


## [1.27.0-alpha.0](https://github.com/alibaba-fusion/next/compare/1.26.37...1.27.0-alpha.0) (2023-12-27)


### Code Refactoring

- Create new project structure
- **BuildTool:** add tools for new project structure
- **Affix:** convert to TypeScript, impove docs and tests
- **Avatar:** convert to TypeScript, impove docs and tests ([#4682](https://github.com/alibaba-fusion/next/pull/4682))
- **Badge:** convert to TypeScript, impove docs and tests ([#4666](https://github.com/alibaba-fusion/next/pull/4666))
- **Button:** convert to TypeScript, impove docs and tests
- **ConfigProvider:** convert to TypeScript, impove docs and tests
- **Loading:** convert to TypeScript, impove docs and tests ([#4677](https://github.com/alibaba-fusion/next/pull/4677))
- **Locale:** convert to TypeScript, impove docs and tests
- **Typography:** convert to TypeScript, impove docs and tests ([#4675](https://github.com/alibaba-fusion/next/pull/4675))
- **Paragraph:** convert to TypeScript, impove docs and tests ([#4683](https://github.com/alibaba-fusion/next/pull/4683))
- **Util:** convert to TypeScript, impove docs and tests



## [1.26.37](https://github.com/alibaba-fusion/next/compare/1.26.36...1.26.37) (2023-12-14)


### Bug Fixes

* **TimePicker2:** improve stability when isPreview and complete related types, close [#4638](https://github.com/alibaba-fusion/next/issues/4638) ([#4643](https://github.com/alibaba-fusion/next/issues/4643)) ([e86e1fd](https://github.com/alibaba-fusion/next/commit/e86e1fd))


### Features

* **Field:** support watch and useWatch, close [#4547](https://github.com/alibaba-fusion/next/issues/4547) ([#4649](https://github.com/alibaba-fusion/next/issues/4649)) ([bf670ce](https://github.com/alibaba-fusion/next/commit/bf670ce))
* **Form:** support preferMarginToDisplayHelp, close [#4641](https://github.com/alibaba-fusion/next/issues/4641) ([#4645](https://github.com/alibaba-fusion/next/issues/4645)) ([5e7d9d3](https://github.com/alibaba-fusion/next/commit/5e7d9d3))
* **Table:** support keepForwardRenderRows, close [#4395](https://github.com/alibaba-fusion/next/issues/4395) ([#4648](https://github.com/alibaba-fusion/next/issues/4648)) ([cc5ed00](https://github.com/alibaba-fusion/next/commit/cc5ed00))




## [1.26.36](https://github.com/alibaba-fusion/next/compare/1.26.35...1.26.36) (2023-12-07)


### Bug Fixes

* **Cascader:** set cache false default when multiple=false, close [#3954](https://github.com/alibaba-fusion/next/issues/3954) ([#4531](https://github.com/alibaba-fusion/next/issues/4531)) ([8fece00](https://github.com/alibaba-fusion/next/commit/8fece00))
* **Message:** when only content, vertical icon and content, issue[#3910](https://github.com/alibaba-fusion/next/issues/3910) ([#4636](https://github.com/alibaba-fusion/next/issues/4636)) ([f619a0c](https://github.com/alibaba-fusion/next/commit/f619a0c))
* **Table:** correct table column resizing ([#4508](https://github.com/alibaba-fusion/next/issues/4508)) ([a81c7c2](https://github.com/alibaba-fusion/next/commit/a81c7c2))
* **Table:** lock columns table dislocation, close [#4248](https://github.com/alibaba-fusion/next/issues/4248) ([#4286](https://github.com/alibaba-fusion/next/issues/4286)) ([6133892](https://github.com/alibaba-fusion/next/commit/6133892))
* **Table:** scroll position error, close [#4484](https://github.com/alibaba-fusion/next/issues/4484) ([#4635](https://github.com/alibaba-fusion/next/issues/4635)) ([7ae8eaa](https://github.com/alibaba-fusion/next/commit/7ae8eaa))
* **Table:** set initial value for lastScrollTop, close [#4394](https://github.com/alibaba-fusion/next/issues/4394) ([#4633](https://github.com/alibaba-fusion/next/issues/4633)) ([1abe3f5](https://github.com/alibaba-fusion/next/commit/1abe3f5))
* **Field:** clear errors when the field is unmounted, close [#4017](https://github.com/alibaba-fusion/next/issues/4017) ([#107](https://github.com/alibaba-fusion/field/pull/107))([9b5bb9a](https://github.com/alibaba-fusion/field/commit/9b5bb9a))



## [1.26.35](https://github.com/alibaba-fusion/next/compare/1.26.34...1.26.35) (2023-11-30)


### Bug Fixes

* **Table:** header and body always scroll together while GroupHeader and StickyLock, close 4396 ([#4550](https://github.com/alibaba-fusion/next/issues/4550)) ([a11365a](https://github.com/alibaba-fusion/next/commit/a11365a)), closes [#4396](https://github.com/alibaba-fusion/next/issues/4396)


### Features

* **Form:** the error help does not affect the item margin, close [#3994](https://github.com/alibaba-fusion/next/issues/3994) ([#4546](https://github.com/alibaba-fusion/next/issues/4546)) ([99a08ba](https://github.com/alibaba-fusion/next/commit/99a08ba))




## [1.26.34](https://github.com/alibaba-fusion/next/compare/1.26.33...1.26.34) (2023-11-23)


### Bug Fixes
* **Balloon:** adjust overlay position at boundary when fixed, close [#4137](https://github.com/alibaba-fusion/next/issues/4137) ([#4541](https://github.com/alibaba-fusion/next/pull/4541)) ([c542089](https://github.com/alibaba-fusion/next/commit/c542089))
* **Slider:** some props should not affect index at didUpdate, close [#4533](https://github.com/alibaba-fusion/next/issues/4533) ([#4535](https://github.com/alibaba-fusion/next/pull/4535)) ([7d2bc79](https://github.com/alibaba-fusion/next/commit/7d2bc79))


### Others
* **Balloon:** implementation of arrow aligned with tooltip, close [#4186](https://github.com/alibaba-fusion/next/issues/4186) ([#4540](https://github.com/alibaba-fusion/next/pull/4540)) ([f306c4c](https://github.com/alibaba-fusion/next/commit/f306c4c))
* **Tree:** add control-expand demo, close [#4529](https://github.com/alibaba-fusion/next/issues/4529) ([#4538](https://github.com/alibaba-fusion/next/pull/4538)) ([cdaee10](https://github.com/alibaba-fusion/next/commit/cdaee10))
4538)) ([cdaee10](https://github.com/alibaba-fusion/next/commit/cdaee10))




## [1.26.33](https://github.com/alibaba-fusion/next/compare/1.26.32...1.26.33) (2023-11-16)


### Bug Fixes

* **Search:** enter search always be called once each time, close [#4049](https://github.com/alibaba-fusion/next/issues/4049) ([#4530](https://github.com/alibaba-fusion/next/issues/4530)) ([aac300f](https://github.com/alibaba-fusion/next/commit/aac300f))




## [1.26.32](https://github.com/alibaba-fusion/next/compare/1.26.31...1.26.32) (2023-11-16)


### Bug Fixes

* **Checkbox:** support boolean value type, close [#3931](https://github.com/alibaba-fusion/next/issues/3931) ([#4519](https://github.com/alibaba-fusion/next/issues/4519)) ([26a08d8](https://github.com/alibaba-fusion/next/commit/26a08d8))
* **Search:** press enter will call onSearch once when autoHighlightFirstItem=false, close [#4049](https://github.com/alibaba-fusion/next/issues/4049) ([#4524](https://github.com/alibaba-fusion/next/issues/4524)) ([1eea155](https://github.com/alibaba-fusion/next/commit/1eea155))
* **Table:** can use Input as column.title normally, close [#4370](https://github.com/alibaba-fusion/next/issues/4370) ([#4522](https://github.com/alibaba-fusion/next/issues/4522)) ([bde3b4e](https://github.com/alibaba-fusion/next/commit/bde3b4e))
* **Table:** change the way to use of sortable ([#4514](https://github.com/alibaba-fusion/next/issues/4514)) ([d73a9f1](https://github.com/alibaba-fusion/next/commit/d73a9f1))




## [1.26.31](https://github.com/alibaba-fusion/next/compare/1.26.30...1.26.31) (2023-11-09)


### Bug Fixes

* **Overlay:** support show-hide in nested scroll component ([#4517](https://github.com/alibaba-fusion/next/issues/4517)) ([8cef2a1](https://github.com/alibaba-fusion/next/commit/8cef2a1))




## [1.26.30](https://github.com/alibaba-fusion/next/compare/1.26.29...1.26.30) (2023-11-01)




## [1.26.29](https://github.com/alibaba-fusion/next/compare/1.26.28...1.26.29) (2023-11-01)


### Bug Fixes

* **Calendar:** calendar should support uncontrolled mode, close [#4491](https://github.com/alibaba-fusion/next/issues/4491) ([64396da](https://github.com/alibaba-fusion/next/commit/64396da))
* **Cascader:** first level menu always can collapse next level menus， close [#4472](https://github.com/alibaba-fusion/next/issues/4472) ([#4502](https://github.com/alibaba-fusion/next/issues/4502)) ([c8ed0b5](https://github.com/alibaba-fusion/next/commit/c8ed0b5))
* **Select:** should prevent scroll when click wrapper, close [#4492](https://github.com/alibaba-fusion/next/issues/4492) ([#4504](https://github.com/alibaba-fusion/next/issues/4504)) ([dae8daf](https://github.com/alibaba-fusion/next/commit/dae8daf))
* **Switch:** should unClickable while diabled, close [#4478](https://github.com/alibaba-fusion/next/issues/4478) ([28266ad](https://github.com/alibaba-fusion/next/commit/28266ad))
* **Tab:** scroll by active correctly, close [#4227](https://github.com/alibaba-fusion/next/issues/4227) ([#4505](https://github.com/alibaba-fusion/next/issues/4505)) ([1f0a4f4](https://github.com/alibaba-fusion/next/commit/1f0a4f4))


### Features

* **upload:** add listType 'none' to hide upload list ([#4500](https://github.com/alibaba-fusion/next/issues/4500)) ([bf5bf12](https://github.com/alibaba-fusion/next/commit/bf5bf12))
* **Breadcrumb:** Add onClick eventHandler for item, close [#4457](https://github.com/alibaba-fusion/next/issues/4457)([fdcf494](https://github.com/alibaba-fusion/next/commit/fdcf494))




## [1.26.28](https://github.com/alibaba-fusion/next/compare/1.26.27...1.26.28) (2023-10-25)


### Bug Fixes

* **TreeSelect:** valueRender prop type, close ([#4494](https://github.com/alibaba-fusion/next/issues/4494)) ([4ca767b](https://github.com/alibaba-fusion/next/commit/4ca767b))




## [1.26.27](https://github.com/alibaba-fusion/next/compare/1.26.26...1.26.27) (2023-10-25)


### Bug Fixes

* **CascaderSelect:** a typesetting error occurred while being at the … ([#4455](https://github.com/alibaba-fusion/next/issues/4455)) ([49bb89e](https://github.com/alibaba-fusion/next/commit/49bb89e))
* **DatePicker2:** change inputValue when only mode changes ([#4486](https://github.com/alibaba-fusion/next/issues/4486)) ([c98ec12](https://github.com/alibaba-fusion/next/commit/c98ec12))
* **Dialog:** in case of overlay is empty, close [#4333](https://github.com/alibaba-fusion/next/issues/4333) ([#4475](https://github.com/alibaba-fusion/next/issues/4475)) ([d96899a](https://github.com/alibaba-fusion/next/commit/d96899a))
* **Dialog2:** clear warning by ConfigProvider cross ref props with no forwardRef component ([496601c](https://github.com/alibaba-fusion/next/commit/496601c))
* **Field:** field props rules should be immutable, close [#4367](https://github.com/alibaba-fusion/next/issues/4367) ([#4479](https://github.com/alibaba-fusion/next/issues/4479)) ([cb7701e](https://github.com/alibaba-fusion/next/commit/cb7701e))
* **NumberPicker:** fix minimum value on initialization ([#4477](https://github.com/alibaba-fusion/next/issues/4477)) ([f5b999f](https://github.com/alibaba-fusion/next/commit/f5b999f))
* **Select:** can infinite scroll when useVirtual, close [#4175](https://github.com/alibaba-fusion/next/issues/4175) ([#4476](https://github.com/alibaba-fusion/next/issues/4476)) ([9044b0e](https://github.com/alibaba-fusion/next/commit/9044b0e))
* **Table:** error when columns is undefined, close [#4070](https://github.com/alibaba-fusion/next/issues/4070) ([#4474](https://github.com/alibaba-fusion/next/issues/4474)) ([c60faec](https://github.com/alibaba-fusion/next/commit/c60faec))


### Features

* **Radio:** add focus support for RadioGroup ([#4465](https://github.com/alibaba-fusion/next/issues/4465)) ([3eac44d](https://github.com/alibaba-fusion/next/commit/3eac44d))
* **TreeSelect:** support special valueRender, close [#4464](https://github.com/alibaba-fusion/next/issues/4464) ([#4470](https://github.com/alibaba-fusion/next/issues/4470)) ([a2d6fb1](https://github.com/alibaba-fusion/next/commit/a2d6fb1))




## [1.26.26](https://github.com/alibaba-fusion/next/compare/1.26.25...1.26.26) (2023-10-11)




## [1.26.25](https://github.com/alibaba-fusion/next/compare/1.26.24...1.26.25) (2023-09-25)


### Bug Fixes

* **Animate:** correct type of Animate, close [#3859](https://github.com/alibaba-fusion/next/issues/3859) ([#4412](https://github.com/alibaba-fusion/next/issues/4412)) ([c378b79](https://github.com/alibaba-fusion/next/commit/c378b79))
* **CascaderSelect:** fail to scroll menu when changeOnSelect and expandTriggerType is hover ([18fb080](https://github.com/alibaba-fusion/next/commit/18fb080))
* **DatePicker:** test case RangePicker & showTime failed ([dee574d](https://github.com/alibaba-fusion/next/commit/dee574d))
* **DatePicker2:** onChange empty when value not ISO8601, close [#4404](https://github.com/alibaba-fusion/next/issues/4404)  ([89a9091](https://github.com/alibaba-fusion/next/commit/89a9091))
* **Input:** remove input propType onClear, close [#4438](https://github.com/alibaba-fusion/next/issues/4438) ([#4446](https://github.com/alibaba-fusion/next/issues/4446)) ([72d5618](https://github.com/alibaba-fusion/next/commit/72d5618))
* **Overlay:** overlay eslint error ([1978e09](https://github.com/alibaba-fusion/next/commit/1978e09))
* **Tree:** test case should support keyboard & should support useVirtual failed ([8a1258e](https://github.com/alibaba-fusion/next/commit/8a1258e))
* **TreeSelect:**  should support keyboard test case fail ([2450132](https://github.com/alibaba-fusion/next/commit/2450132))
* **Upload:** the ts type is incomplete, close [#4442](https://github.com/alibaba-fusion/next/issues/4442) ([#4445](https://github.com/alibaba-fusion/next/issues/4445)) ([fa53328](https://github.com/alibaba-fusion/next/commit/fa53328))


### Features

* **Menu:** add new prop `footerWrapperClassName`, close [#4432](https://github.com/alibaba-fusion/next/issues/4432) ([6522209](https://github.com/alibaba-fusion/next/commit/6522209))
* **TreeSelect:** In check mode, click the node directly to check, close [#4408](https://github.com/alibaba-fusion/next/issues/4408) ([#4424](https://github.com/alibaba-fusion/next/issues/4424)) ([7055c4f](https://github.com/alibaba-fusion/next/commit/7055c4f))




## [1.26.24](https://github.com/alibaba-fusion/next/compare/1.26.23...1.26.24) (2023-09-06)


### Bug Fixes

* **Actions:** github actions fail caused by cache failure ([#4416](https://github.com/alibaba-fusion/next/issues/4416)) ([ba3a594](https://github.com/alibaba-fusion/next/commit/ba3a594))
* **Dialog:** the status returned by using onCancel in Promise loading added to the okProps ([286800f](https://github.com/alibaba-fusion/next/commit/286800f))
* **Input:** textarea autoHeight issue, close [#4414](https://github.com/alibaba-fusion/next/issues/4414) ([87fd26e](https://github.com/alibaba-fusion/next/commit/87fd26e))


### Features

* **Menu:** add new theme var menu-item-border-radius, close [#4403](https://github.com/alibaba-fusion/next/issues/4403) ([56a1fd0](https://github.com/alibaba-fusion/next/commit/56a1fd0))




## [1.26.23](https://github.com/alibaba-fusion/next/compare/1.26.22...1.26.23) (2023-08-11)


### Bug Fixes

* **Balloon:** the offset attribute does not take effect after the v2 version is enabled, close [#4378](https://github.com/alibaba-fusion/next/issues/4378) ([#4391](https://github.com/alibaba-fusion/next/issues/4391)) ([f373e41](https://github.com/alibaba-fusion/next/commit/f373e41))
* **Timeline:** fix i18n issue, close [#4398](https://github.com/alibaba-fusion/next/issues/4398) ([#4400](https://github.com/alibaba-fusion/next/issues/4400)) ([56b2906](https://github.com/alibaba-fusion/next/commit/56b2906))




## [1.26.22](https://github.com/alibaba-fusion/next/compare/1.26.21...1.26.22) (2023-07-12)


### Bug Fixes

* **Button:** fix style issue when set icon size, close [#4383](https://github.com/alibaba-fusion/next/issues/4383) ([#4388](https://github.com/alibaba-fusion/next/issues/4388)) ([8045d56](https://github.com/alibaba-fusion/next/commit/8045d56))
* **Button:** optimize type definition of component props ([#4380](https://github.com/alibaba-fusion/next/issues/4380)) ([fdf0033](https://github.com/alibaba-fusion/next/commit/fdf0033))


### Features

* **DatePicker2:** add onCalendarChange method to support disable dynamically, close [#4135](https://github.com/alibaba-fusion/next/issues/4135) ([#4389](https://github.com/alibaba-fusion/next/issues/4389)) ([96c84f7](https://github.com/alibaba-fusion/next/commit/96c84f7))




## [1.26.21](https://github.com/alibaba-fusion/next/compare/1.26.20...1.26.21) (2023-06-28)


### Bug Fixes

* **Tree:** virtualListProps is optional ([#4377](https://github.com/alibaba-fusion/next/issues/4377)) ([f82f6ba](https://github.com/alibaba-fusion/next/commit/f82f6ba))




## [1.26.20](https://github.com/alibaba-fusion/next/compare/1.26.19...1.26.20) (2023-06-27)


### Bug Fixes

* **CascaderSelect:** use multiple props over mode props when use together, close [#4355](https://github.com/alibaba-fusion/next/issues/4355) ([#4360](https://github.com/alibaba-fusion/next/issues/4360)) ([4bbf8c7](https://github.com/alibaba-fusion/next/commit/4bbf8c7))
* **ConfigProvider:** validate momentjs before locale ([#4373](https://github.com/alibaba-fusion/next/issues/4373)) ([15a2aa8](https://github.com/alibaba-fusion/next/commit/15a2aa8))
* **Tree:** support config virtualList props, close [#4326](https://github.com/alibaba-fusion/next/issues/4326) ([#4332](https://github.com/alibaba-fusion/next/issues/4332)) ([a97cced](https://github.com/alibaba-fusion/next/commit/a97cced))
* **Uploader:** add null check to improve robustness ([#4371](https://github.com/alibaba-fusion/next/issues/4371)) ([6f6cdae](https://github.com/alibaba-fusion/next/commit/6f6cdae))




## [1.26.19](https://github.com/alibaba-fusion/next/compare/1.26.18...1.26.19) (2023-06-05)


### Bug Fixes

* **Badge:** add type definition for showZero props ([#4344](https://github.com/alibaba-fusion/next/issues/4344)) ([f9e252a](https://github.com/alibaba-fusion/next/commit/f9e252a))
* **DatePicker2:** fix error state display, close [#3410](https://github.com/alibaba-fusion/next/issues/3410) ([#4340](https://github.com/alibaba-fusion/next/issues/4340)) ([e2eb732](https://github.com/alibaba-fusion/next/commit/e2eb732))
* **Rating:** update readAS function signature, close [#4350](https://github.com/alibaba-fusion/next/issues/4350) ([#4351](https://github.com/alibaba-fusion/next/issues/4351)) ([00a9e0c](https://github.com/alibaba-fusion/next/commit/00a9e0c))
* **TimePicker2:** fix error state display ([#4339](https://github.com/alibaba-fusion/next/issues/4339)) ([bd00439](https://github.com/alibaba-fusion/next/commit/bd00439))




## [1.26.18](https://github.com/alibaba-fusion/next/compare/1.26.17...1.26.18) (2023-05-08)


### Bug Fixes

* **Button:** add types support for react-router Link as component ([#4329](https://github.com/alibaba-fusion/next/issues/4329)) ([e9e956d](https://github.com/alibaba-fusion/next/commit/e9e956d))
* **CascaderSelect:** optimize default not-found text, close [#4325](https://github.com/alibaba-fusion/next/issues/4325) ([4199601](https://github.com/alibaba-fusion/next/commit/4199601))
* **switch:** add type definition for loading props ([#4324](https://github.com/alibaba-fusion/next/issues/4324)), close [#4323](https://github.com/alibaba-fusion/next/issues/4323) ([45554d8](https://github.com/alibaba-fusion/next/commit/45554d8))




## [1.26.17](https://github.com/alibaba-fusion/next/compare/1.26.16...1.26.17) (2023-04-19)




## [1.26.16](https://github.com/alibaba-fusion/next/compare/1.26.15...1.26.16) (2023-04-19)


### Bug Fixes

* **Checkbox:** optmize props type definitions, close [#4299](https://github.com/alibaba-fusion/next/issues/4299) ([#4303](https://github.com/alibaba-fusion/next/issues/4303)) ([c994892](https://github.com/alibaba-fusion/next/commit/c994892))
* **TreeSelect:** fix select bug when use preserveNonExistentValue ([#4320](https://github.com/alibaba-fusion/next/issues/4320)) ([0b24a45](https://github.com/alibaba-fusion/next/commit/0b24a45))
* **Typescript:** fix type conflict with @type/react, close [#4313](https://github.com/alibaba-fusion/next/issues/4313) ([#4317](https://github.com/alibaba-fusion/next/issues/4317)) ([41a2011](https://github.com/alibaba-fusion/next/commit/41a2011))




## [1.26.15](https://github.com/alibaba-fusion/next/compare/1.26.14...1.26.15) (2023-03-09)


### Bug Fixes

* **Input:** fix input groups hover style,close [#3849](https://github.com/alibaba-fusion/next/issues/3849) ([#4274](https://github.com/alibaba-fusion/next/issues/4274)) ([bb37360](https://github.com/alibaba-fusion/next/commit/bb37360))
* **Input:** update onChange function signature ([#4271](https://github.com/alibaba-fusion/next/issues/4271)) ([a73e73a](https://github.com/alibaba-fusion/next/commit/a73e73a))
* **Overlay:** filter unused props 'shouldUpdatePosition', close [#3812](https://github.com/alibaba-fusion/next/issues/3812) ([#4277](https://github.com/alibaba-fusion/next/issues/4277)) ([8131740](https://github.com/alibaba-fusion/next/commit/8131740))




## [1.26.14](https://github.com/alibaba-fusion/next/compare/1.26.13...1.26.14) (2023-02-27)




## [1.26.13](https://github.com/alibaba-fusion/next/compare/1.26.12...1.26.13) (2023-02-27)


### Bug Fixes

* **Card:** fix css style naming,close [#3930](https://github.com/alibaba-fusion/next/issues/3930) ([#4237](https://github.com/alibaba-fusion/next/issues/4237)) ([5f8d6e8](https://github.com/alibaba-fusion/next/commit/5f8d6e8))
* **Rating:** prevent triggering onChange when value not changed,close [#3639](https://github.com/alibaba-fusion/next/issues/3639) ([#4251](https://github.com/alibaba-fusion/next/issues/4251)) ([410454a](https://github.com/alibaba-fusion/next/commit/410454a))
* **Select:** improve code robustness, close [#3901](https://github.com/alibaba-fusion/next/issues/3901) ([#4263](https://github.com/alibaba-fusion/next/issues/4263)) ([0abbfaa](https://github.com/alibaba-fusion/next/commit/0abbfaa))
* **Table:** improve locking-column table scroll performance,close [#4058](https://github.com/alibaba-fusion/next/issues/4058) ([#4268](https://github.com/alibaba-fusion/next/issues/4268)) ([67ac494](https://github.com/alibaba-fusion/next/commit/67ac494))
* **Table:** optimize ts suggestion for cell function, close [#4196](https://github.com/alibaba-fusion/next/issues/4196),[#3743](https://github.com/alibaba-fusion/next/issues/3743) ([#4260](https://github.com/alibaba-fusion/next/issues/4260)) ([2252834](https://github.com/alibaba-fusion/next/commit/2252834))
* **Table:** prevent wanring on unknown tableEl prop on DOM element, close [#4118](https://github.com/alibaba-fusion/next/issues/4118) ([#4250](https://github.com/alibaba-fusion/next/issues/4250)) ([320cddb](https://github.com/alibaba-fusion/next/commit/320cddb))




## [1.26.12](https://github.com/alibaba-fusion/next/compare/1.26.11...1.26.12) (2023-01-11)


### Bug Fixes

* **Menu:** fix hozInLine mode popup bug when subMenu has a specified key, close [#4222](https://github.com/alibaba-fusion/next/issues/4222) ([#4226](https://github.com/alibaba-fusion/next/issues/4226)) ([7c747b0](https://github.com/alibaba-fusion/next/commit/7c747b0))




## [1.26.11](https://github.com/alibaba-fusion/next/compare/1.26.10...1.26.11) (2022-12-27)


### Bug Fixes

* **Select:** fix select popup autowidth, close [#4216](https://github.com/alibaba-fusion/next/issues/4216) ([#4217](https://github.com/alibaba-fusion/next/issues/4217)) ([120f897](https://github.com/alibaba-fusion/next/commit/120f897))




## [1.26.10](https://github.com/alibaba-fusion/next/compare/1.26.9...1.26.10) (2022-12-20)


### Bug Fixes

* **Tree:** clear dragNode when drag is over ([#4208](https://github.com/alibaba-fusion/next/issues/4208)) ([e200422](https://github.com/alibaba-fusion/next/commit/e200422))




## [1.26.9](https://github.com/alibaba-fusion/next/compare/1.26.8...1.26.9) (2022-12-06)


### Bug Fixes

* **ConfigProvider:** support using ref on function component, close [#4203](https://github.com/alibaba-fusion/next/issues/4203)([#4204](https://github.com/alibaba-fusion/next/issues/4204)) ([7f69703](https://github.com/alibaba-fusion/next/commit/7f69703))
* **Dialog:** add TS definition for wrapperClassName props, close [#4155](https://github.com/alibaba-fusion/next/issues/4155) ([#4198](https://github.com/alibaba-fusion/next/issues/4198)) ([2791f70](https://github.com/alibaba-fusion/next/commit/2791f70))




## [1.26.8](https://github.com/alibaba-fusion/next/compare/1.26.7...1.26.8) (2022-11-17)


### Bug Fixes

* **DatePicker2:** support config state props, close [#3750](https://github.com/alibaba-fusion/next/issues/3750) ([#4189](https://github.com/alibaba-fusion/next/issues/4189)) ([6fc1474](https://github.com/alibaba-fusion/next/commit/6fc1474))
* **DatePicker2:** update display value when toggle showTime props  ([#4190](https://github.com/alibaba-fusion/next/issues/4190)) ([fe7f913](https://github.com/alibaba-fusion/next/commit/fe7f913))
* **Table:** optimize cell props ts signature  ([#4188](https://github.com/alibaba-fusion/next/issues/4188)) ([1a86a5b](https://github.com/alibaba-fusion/next/commit/1a86a5b))




## [1.26.7](https://github.com/alibaba-fusion/next/compare/1.26.6...1.26.7) (2022-11-15)


### Bug Fixes

* **CascaderSelect:** prevent crash when use popup v2,close [#3992](https://github.com/alibaba-fusion/next/issues/3992) ([#4182](https://github.com/alibaba-fusion/next/issues/4182)) ([c415289](https://github.com/alibaba-fusion/next/commit/c415289))
* **Select:** filter addonTextAfter props, close [#3854](https://github.com/alibaba-fusion/next/issues/3854) ([#4171](https://github.com/alibaba-fusion/next/issues/4171)) ([142fbef](https://github.com/alibaba-fusion/next/commit/142fbef))
* **Select:** fix select ts definition, close [#3908](https://github.com/alibaba-fusion/next/issues/3908) ([#4187](https://github.com/alibaba-fusion/next/issues/4187)) ([e306e97](https://github.com/alibaba-fusion/next/commit/e306e97))
* **Table:** optimize onBodyScroll types, close [#4173](https://github.com/alibaba-fusion/next/issues/4173) ([5a5de05](https://github.com/alibaba-fusion/next/commit/5a5de05))




## [1.26.6](https://github.com/alibaba-fusion/next/compare/1.26.5...1.26.6) (2022-11-01)


### Bug Fixes

* **Drawer:** drawer add content ts, close [#4167](https://github.com/alibaba-fusion/next/issues/4167) ([4e123af](https://github.com/alibaba-fusion/next/commit/4e123af))
* **Slider:** fix sliderCount issue, close [#4162](https://github.com/alibaba-fusion/next/issues/4162) ([9902813](https://github.com/alibaba-fusion/next/commit/9902813))
* **Tab:** fix type definition of key props ([#4120](https://github.com/alibaba-fusion/next/issues/4120)) ([5cffd7f](https://github.com/alibaba-fusion/next/commit/5cffd7f))




## [1.26.5](https://github.com/alibaba-fusion/next/compare/1.26.4...1.26.5) (2022-10-27)


### Bug Fixes

* **Nav:** optimize nav ts definition and update theme input-group style, close [#4150](https://github.com/alibaba-fusion/next/issues/4150) ([#4166](https://github.com/alibaba-fusion/next/issues/4166)) ([8b60f5e](https://github.com/alibaba-fusion/next/commit/8b60f5e))




## [1.26.4](https://github.com/alibaba-fusion/next/compare/1.26.3...1.26.4) (2022-10-18)


### Bug Fixes

* **Select:** fix multiple select preview ([#4138](https://github.com/alibaba-fusion/next/issues/4138)) ([2a66eb4](https://github.com/alibaba-fusion/next/commit/2a66eb4))




## [1.26.3](https://github.com/alibaba-fusion/next/compare/1.26.2...1.26.3) (2022-10-11)


### Bug Fixes

* **Input:** add displayName for input-like compoennt, fix [#4128](https://github.com/alibaba-fusion/next/issues/4128) ([7c31288](https://github.com/alibaba-fusion/next/commit/7c31288))
* **Input:** prevent crash when pass nullish value, close [#4127](https://github.com/alibaba-fusion/next/issues/4127) ([#4130](https://github.com/alibaba-fusion/next/issues/4130)) ([59bc640](https://github.com/alibaba-fusion/next/commit/59bc640))
* **Select:** fix preview display when use valueRender, close [#4116](https://github.com/alibaba-fusion/next/issues/4116) ([#4117](https://github.com/alibaba-fusion/next/issues/4117)) ([a9c85ec](https://github.com/alibaba-fusion/next/commit/a9c85ec))




## [1.26.2](https://github.com/alibaba-fusion/next/compare/1.26.1...1.26.2) (2022-09-20)


### Bug Fixes

* **Balloon:** update safeNode ts ([b7b6bc6](https://github.com/alibaba-fusion/next/commit/b7b6bc6))


### Features

* **Tab:** feat addIcon func, close [#4109](https://github.com/alibaba-fusion/next/issues/4109) ([df84688](https://github.com/alibaba-fusion/next/commit/df84688))
* **Theme:** update theme style ([#4113](https://github.com/alibaba-fusion/next/issues/4113)) ([5e64dec](https://github.com/alibaba-fusion/next/commit/5e64dec))




## [1.26.1](https://github.com/alibaba-fusion/next/compare/1.26.0...1.26.1) (2022-09-08)


### Bug Fixes

* **Card:** limit show/hide divider selector ([cd8e782](https://github.com/alibaba-fusion/next/commit/cd8e782))
* **Form:** useLabelForErrorMessage of Form.Item  have a higher priority than Form  ([#4088](https://github.com/alibaba-fusion/next/issues/4088)) ([b0aec62](https://github.com/alibaba-fusion/next/commit/b0aec62))
* **Notification:** update notfication icon api and form labelAlign api document, close [#4087](https://github.com/alibaba-fusion/next/issues/4087) [#3917](https://github.com/alibaba-fusion/next/issues/3917) ([ae4413e](https://github.com/alibaba-fusion/next/commit/ae4413e))
* **Table:** optimize table loding ([e215a92](https://github.com/alibaba-fusion/next/commit/e215a92))
* **Table:** prevent crash when dataSource is undefined, close [#4073](https://github.com/alibaba-fusion/next/issues/4073) ([cc1817a](https://github.com/alibaba-fusion/next/commit/cc1817a))


### Features

* ballon-onVisibleChange add args ([64777e1](https://github.com/alibaba-fusion/next/commit/64777e1))




# [1.26.0-beta.4](https://github.com/alibaba-fusion/next/compare/1.25.45...1.26.0-beta.4) (2022-06-30)


### Bug Fixes

* **Table:** prevent loading crash, fix [#3369](https://github.com/alibaba-fusion/next/issues/3369) ([#3973](https://github.com/alibaba-fusion/next/issues/3973)) ([aaa332c](https://github.com/alibaba-fusion/next/commit/aaa332c))
* cellDomRef is undefined ([654dcae](https://github.com/alibaba-fusion/next/commit/654dcae))
* some pc h5 cross issue ([bbf871c](https://github.com/alibaba-fusion/next/commit/bbf871c))
* **CascaderSelect:** could pass menuProps={{focusable: true}} to cascader fix [#3685](https://github.com/alibaba-fusion/next/issues/3685) ([3a5c056](https://github.com/alibaba-fusion/next/commit/3a5c056))
* **CascaderSelect:** focus to input after select ([#3712](https://github.com/alibaba-fusion/next/issues/3712)) ([bd1d44f](https://github.com/alibaba-fusion/next/commit/bd1d44f))
* **Core:** division deprecation warning when using dart-sass ([001a21f](https://github.com/alibaba-fusion/next/commit/001a21f))
* **DatePicker2:** fix selected value display when disabled ([#3706](https://github.com/alibaba-fusion/next/issues/3706)), close [#3705](https://github.com/alibaba-fusion/next/issues/3705) ([ca84bc9](https://github.com/alibaba-fusion/next/commit/ca84bc9))
* **Dialog:** could custom margin-bottom when no footer fix [#3799](https://github.com/alibaba-fusion/next/issues/3799) ([#3809](https://github.com/alibaba-fusion/next/issues/3809)) ([a407931](https://github.com/alibaba-fusion/next/commit/a407931))
* **Dialog:** height type can be either number or string ([#3807](https://github.com/alibaba-fusion/next/issues/3807)) ([600efaf](https://github.com/alibaba-fusion/next/commit/600efaf))
* **Dialog:** rollback body style while unmount fix [#3725](https://github.com/alibaba-fusion/next/issues/3725) ([2447585](https://github.com/alibaba-fusion/next/commit/2447585))
* **Dialog:** style higher than props fix [#3797](https://github.com/alibaba-fusion/next/issues/3797) ([a7ee53c](https://github.com/alibaba-fusion/next/commit/a7ee53c))
* **Drawer:** rollback body style while unmount fix [#3725](https://github.com/alibaba-fusion/next/issues/3725) ([#3829](https://github.com/alibaba-fusion/next/issues/3829)) ([9155964](https://github.com/alibaba-fusion/next/commit/9155964))
* **Field:** fix field.validate function signature ([#3723](https://github.com/alibaba-fusion/next/issues/3723)) ([96f36ef](https://github.com/alibaba-fusion/next/commit/96f36ef))
* **Input:** 修复密码输入框在禁用态的时候仍然可以点击右侧的眼睛来切换显隐的问题 ([44a2d12](https://github.com/alibaba-fusion/next/commit/44a2d12))
* **Menu:** keys of more, close [#3733](https://github.com/alibaba-fusion/next/issues/3733) ([189b21f](https://github.com/alibaba-fusion/next/commit/189b21f))
* **NumberPicker:** repair field setValues 0 numberPicker unread, clos… ([#3752](https://github.com/alibaba-fusion/next/issues/3752)) ([47462eb](https://github.com/alibaba-fusion/next/commit/47462eb))
* **NumberPicker:** repair numberPicker log string, close [#3768](https://github.com/alibaba-fusion/next/issues/3768) ([#3769](https://github.com/alibaba-fusion/next/issues/3769)) ([d68df7f](https://github.com/alibaba-fusion/next/commit/d68df7f))
* **Overlay:** onTouchEnd stopPropagation by default ([#3714](https://github.com/alibaba-fusion/next/issues/3714)) ([8b0735a](https://github.com/alibaba-fusion/next/commit/8b0735a))
* **Overlay:** ts add placement ([#3753](https://github.com/alibaba-fusion/next/issues/3753)) ([504cca5](https://github.com/alibaba-fusion/next/commit/504cca5))
* **Range:** fix onChange/onProgress types ([3eb78e3](https://github.com/alibaba-fusion/next/commit/3eb78e3))
* **Range:** onProcess&onChange props type error fix [#2769](https://github.com/alibaba-fusion/next/issues/2769) ([#3816](https://github.com/alibaba-fusion/next/issues/3816)) ([3768a0d](https://github.com/alibaba-fusion/next/commit/3768a0d))
* **Range:** repair browser count float issue, close [#3652](https://github.com/alibaba-fusion/next/issues/3652) ([59c8d08](https://github.com/alibaba-fusion/next/commit/59c8d08))
* **Select:** could select item already selected fix [#3791](https://github.com/alibaba-fusion/next/issues/3791) ([a2640b0](https://github.com/alibaba-fusion/next/commit/a2640b0))
* **Select:** make highlight color configurable ([fce8a91](https://github.com/alibaba-fusion/next/commit/fce8a91))
* **Select:** make width stable ([2962edf](https://github.com/alibaba-fusion/next/commit/2962edf))
* **Select:** optimize controlled highlightKey question, close [#3795](https://github.com/alibaba-fusion/next/issues/3795) ([#3798](https://github.com/alibaba-fusion/next/issues/3798)) ([dfbd657](https://github.com/alibaba-fusion/next/commit/dfbd657))
* **Switch:** set children text size to form-element-font-size, fix [#3710](https://github.com/alibaba-fusion/next/issues/3710) ([#3711](https://github.com/alibaba-fusion/next/issues/3711)) ([5e63dc5](https://github.com/alibaba-fusion/next/commit/5e63dc5))
* **Tab:** config active line padding ([b818e6e](https://github.com/alibaba-fusion/next/commit/b818e6e))
* **Tab:** style compile fail ([d266f85](https://github.com/alibaba-fusion/next/commit/d266f85))
* **Table:** data should be mutable for async load ([3653a02](https://github.com/alibaba-fusion/next/commit/3653a02))
* **Table:** do not change dataSource ([#3811](https://github.com/alibaba-fusion/next/issues/3811)) ([0a52fc3](https://github.com/alibaba-fusion/next/commit/0a52fc3))
* **Table:** fix memory leak ([c04fb68](https://github.com/alibaba-fusion/next/commit/c04fb68))
* **Table:** hidden to __hidden ([6c3e54a](https://github.com/alibaba-fusion/next/commit/6c3e54a))
* **Table:** tree table support virtual ([5e7c865](https://github.com/alibaba-fusion/next/commit/5e7c865))
* **Table:** virtual table with selection should tell all records, fix [#3792](https://github.com/alibaba-fusion/next/issues/3792) ([62b4591](https://github.com/alibaba-fusion/next/commit/62b4591))
* 修复从只读态切换到输入态时无法删除已上传的问题 ([7f889d5](https://github.com/alibaba-fusion/next/commit/7f889d5))
* **TimePicker2:** fix RangePicker wrong minutes and seconds disabled ([#3771](https://github.com/alibaba-fusion/next/issues/3771)), close [#3766](https://github.com/alibaba-fusion/next/issues/3766) ([ecfc2d6](https://github.com/alibaba-fusion/next/commit/ecfc2d6))
* use Set to avoid duplication keys ([#3772](https://github.com/alibaba-fusion/next/issues/3772)),close [#3773](https://github.com/alibaba-fusion/next/issues/3773) ([2877a88](https://github.com/alibaba-fusion/next/commit/2877a88))
* **Transfer:** fix some wrong prop-types of transfer ([f1a5209](https://github.com/alibaba-fusion/next/commit/f1a5209))
* **TreeSelect:** clear search value when select, close [#3738](https://github.com/alibaba-fusion/next/issues/3738) ([f47e25e](https://github.com/alibaba-fusion/next/commit/f47e25e))
* **Upload:** card add ts ([b0e66af](https://github.com/alibaba-fusion/next/commit/b0e66af))


### Features

* **Avatar:** theme support config border ([#3967](https://github.com/alibaba-fusion/next/issues/3967)) ([c83fffc](https://github.com/alibaba-fusion/next/commit/c83fffc))
* **Badge:** theme support config border, close [#3963](https://github.com/alibaba-fusion/next/issues/3963) ([#3966](https://github.com/alibaba-fusion/next/issues/3966)) ([812e0f2](https://github.com/alibaba-fusion/next/commit/812e0f2))
* **Dialog:** add api wrapperClassName for v2 fix [#3703](https://github.com/alibaba-fusion/next/issues/3703) ([266d55f](https://github.com/alibaba-fusion/next/commit/266d55f))
* **Dialog:** new api noPadding for Dialog body padding fix [#3892](https://github.com/alibaba-fusion/next/issues/3892) ([#3893](https://github.com/alibaba-fusion/next/issues/3893)) ([ffb274f](https://github.com/alibaba-fusion/next/commit/ffb274f))
* **Search:** theme support config focus status, close [#3965](https://github.com/alibaba-fusion/next/issues/3965) ([#3970](https://github.com/alibaba-fusion/next/issues/3970)) ([f16f16f](https://github.com/alibaba-fusion/next/commit/f16f16f))
* use big.js instead of bignumber.js, for smaller bundle size ([#3946](https://github.com/alibaba-fusion/next/issues/3946)) ([88147bd](https://github.com/alibaba-fusion/next/commit/88147bd))
* **Drawer:** v2 version fix [#3330](https://github.com/alibaba-fusion/next/issues/3330), fix [#3258](https://github.com/alibaba-fusion/next/issues/3258), fix [#3045](https://github.com/alibaba-fusion/next/issues/3045), fix [#2618](https://github.com/alibaba-fusion/next/issues/2618), fix [#2419](https://github.com/alibaba-fusion/next/issues/2419) ([23309cd](https://github.com/alibaba-fusion/next/commit/23309cd))
* **Message:** can remove icon by iconType: false ([b0f732e](https://github.com/alibaba-fusion/next/commit/b0f732e))
* **Tab:** add api showAdd fix [#3632](https://github.com/alibaba-fusion/next/issues/3632), fix [#3661](https://github.com/alibaba-fusion/next/issues/3661), fix [#2869](https://github.com/alibaba-fusion/next/issues/2869), fix [#2848](https://github.com/alibaba-fusion/next/issues/2848) ([44bd710](https://github.com/alibaba-fusion/next/commit/44bd710))
* **Transfer:** transfer support different search config between panels ([#3724](https://github.com/alibaba-fusion/next/issues/3724)), close [#3664](https://github.com/alibaba-fusion/next/issues/3664) ([3a3e4ed](https://github.com/alibaba-fusion/next/commit/3a3e4ed))
* optimize id-ID language copy writer ([3847b6b](https://github.com/alibaba-fusion/next/commit/3847b6b))




# [1.26.0-beta.5](https://github.com/alibaba-fusion/next/compare/1.26.0-beta.4...1.26.0-beta.5) (2022-07-06)


### Bug Fixes

* **Slider:** activeIndex changes while rerender fix [#3722](https://github.com/alibaba-fusion/next/issues/3722) ([76b8284](https://github.com/alibaba-fusion/next/commit/76b8284))




# [1.26.0-beta.6](https://github.com/alibaba-fusion/next/compare/1.26.0-beta.5...1.26.0-beta.6) (2022-07-12)


### Bug Fixes

* **CascaderSelect:** filter duplicated non-existent value, close [#3921](https://github.com/alibaba-fusion/next/issues/3921) ([#3968](https://github.com/alibaba-fusion/next/issues/3968)) ([a9960a2](https://github.com/alibaba-fusion/next/commit/a9960a2))


### Features

* **TreeSelect:** support not clear search value when choose item, close [#3985](https://github.com/alibaba-fusion/next/issues/3985) ([3f09e6b](https://github.com/alibaba-fusion/next/commit/3f09e6b))




# [1.26.0-beta.8](https://github.com/alibaba-fusion/next/compare/1.25.50...1.26.0-beta.8) (2022-08-18)


### Bug Fixes

* **Tab:**  optimize type hints ([#4040](https://github.com/alibaba-fusion/next/issues/4040)) ([e36f02a](https://github.com/alibaba-fusion/next/commit/e36f02a))




# [1.26.0](https://github.com/alibaba-fusion/next/compare/1.25.51...1.26.0) (2022-08-30)


### Bug Fixes

* **Upload:** resolve onPreview method fails in preview mode, close [#3830](https://github.com/alibaba-fusion/next/issues/3830) ([c59d797](https://github.com/alibaba-fusion/next/commit/c59d797))




## [1.25.51](https://github.com/alibaba-fusion/next/compare/1.25.50...1.25.51) (2022-08-25)


### Bug Fixes

* **ConfigProvider:** add type definition for defaultPropsConfig ([#4060](https://github.com/alibaba-fusion/next/issues/4060)) ([2c24cc0](https://github.com/alibaba-fusion/next/commit/2c24cc0))
* **Core:** use '0px' as zero unit to prevent css error ([#4056](https://github.com/alibaba-fusion/next/issues/4056)) ([2d2656e](https://github.com/alibaba-fusion/next/commit/2d2656e))
* **Nav:** increase css priotiry, close [#4050](https://github.com/alibaba-fusion/next/issues/4050) ([3953968](https://github.com/alibaba-fusion/next/commit/3953968))
* **SplitButton:** fix typescript type error , close [#4037](https://github.com/alibaba-fusion/next/issues/4037) [#4047](https://github.com/alibaba-fusion/next/issues/4047) ([#4048](https://github.com/alibaba-fusion/next/issues/4048)) ([a2232bf](https://github.com/alibaba-fusion/next/commit/a2232bf)), closes [#40337](https://github.com/alibaba-fusion/next/issues/40337) [#4044](https://github.com/alibaba-fusion/next/issues/4044) [#40337](https://github.com/alibaba-fusion/next/issues/40337) [#4044](https://github.com/alibaba-fusion/next/issues/4044)
* **Table:** not modify columns props passed from outside, close [#4062](https://github.com/alibaba-fusion/next/issues/4062) ([e2e6581](https://github.com/alibaba-fusion/next/commit/e2e6581))




## [1.25.50](https://github.com/alibaba-fusion/next/compare/1.25.49...1.25.50) (2022-08-11)


### Bug Fixes

* **Table:** optimize expandedRowIndent type hints ([#4039](https://github.com/alibaba-fusion/next/issues/4039)) ([9d80631](https://github.com/alibaba-fusion/next/commit/9d80631))




## [1.25.49](https://github.com/alibaba-fusion/next/compare/1.25.48...1.25.49) (2022-08-04)


### Features

* **Dialog:** add wrapperClassName to Dialog v2 ([ddb7bc2](https://github.com/alibaba-fusion/next/commit/ddb7bc2))




## [1.25.48](https://github.com/alibaba-fusion/next/compare/1.25.47...1.25.48) (2022-07-28)


### Bug Fixes

* **NumberPicker:** ignore input not in -.\d fix [#3363](https://github.com/alibaba-fusion/next/issues/3363), [#3916](https://github.com/alibaba-fusion/next/issues/3916) ([e9c361f](https://github.com/alibaba-fusion/next/commit/e9c361f))
* **NumberPicker:** should not input bigger then max fix [#4002](https://github.com/alibaba-fusion/next/issues/4002) ([e2371e0](https://github.com/alibaba-fusion/next/commit/e2371e0))
* **Select:** auto close popup when item get clicked, close [#4004](https://github.com/alibaba-fusion/next/issues/4004) ([c879a52](https://github.com/alibaba-fusion/next/commit/c879a52))
* **Table:** table tree if without children should icon type equal, close [#4009](https://github.com/alibaba-fusion/next/issues/4009) ([#4022](https://github.com/alibaba-fusion/next/issues/4022)) ([09ea83e](https://github.com/alibaba-fusion/next/commit/09ea83e))




## [1.25.47](https://github.com/alibaba-fusion/next/compare/1.25.46...1.25.47) (2022-07-26)


### Bug Fixes

* **Tree:** fix select-all bug on parent node when treeCheckedStrategy set as "child", close [#3984](https://github.com/alibaba-fusion/next/issues/3984), [#3936](https://github.com/alibaba-fusion/next/issues/3936) ([7a86713](https://github.com/alibaba-fusion/next/commit/7a86713))




## [1.25.46](https://github.com/alibaba-fusion/next/compare/1.25.45...1.25.46) (2022-07-25)


### Bug Fixes

* fix sass build error ([7438bff](https://github.com/alibaba-fusion/next/commit/7438bff))




## [1.25.45](https://github.com/alibaba-fusion/next/compare/1.25.44...1.25.45) (2022-06-28)


### Bug Fixes

* **CascaderSelect:** filter duplicated non-existent value, close [#3921](https://github.com/alibaba-fusion/next/issues/3921) ([#3968](https://github.com/alibaba-fusion/next/issues/3968)) ([7b8ab75](https://github.com/alibaba-fusion/next/commit/7b8ab75))




## [1.25.44](https://github.com/alibaba-fusion/next/compare/1.25.43...1.25.44) (2022-06-21)


### Bug Fixes

* **Table:** table d.ts add wordBreak props ([#3960](https://github.com/alibaba-fusion/next/issues/3960)) ([5163641](https://github.com/alibaba-fusion/next/commit/5163641))
* **Tree:** not calculate all checked value when checkedStrategy is child ([#3961](https://github.com/alibaba-fusion/next/issues/3961)) ([5e2c577](https://github.com/alibaba-fusion/next/commit/5e2c577))
* **TreeSelect:** support turn off local filter, close [#3939](https://github.com/alibaba-fusion/next/issues/3939) ([#3959](https://github.com/alibaba-fusion/next/issues/3959)) ([6f6b3f1](https://github.com/alibaba-fusion/next/commit/6f6b3f1))




## [1.25.43](https://github.com/alibaba-fusion/next/compare/1.25.42...1.25.43) (2022-06-16)


### Bug Fixes

* **Form:**  fix onSubmit types ([#3955](https://github.com/alibaba-fusion/next/issues/3955)) ([99ff66f](https://github.com/alibaba-fusion/next/commit/99ff66f))




## [1.25.42](https://github.com/alibaba-fusion/next/compare/1.25.41...1.25.42) (2022-06-14)


### Bug Fixes

* **Menu:** focuseKey type contain obj, close [#3929](https://github.com/alibaba-fusion/next/issues/3929) ([086937b](https://github.com/alibaba-fusion/next/commit/086937b))
* **Slider:** add pauseOnHover on d.ts  ([#3950](https://github.com/alibaba-fusion/next/issues/3950)) ([fc8d20f](https://github.com/alibaba-fusion/next/commit/fc8d20f))
* **TreeSelect:** calculate all checked value only when treeCheckedStrategy=all, close[#3936](https://github.com/alibaba-fusion/next/issues/3936) ([35ff149](https://github.com/alibaba-fusion/next/commit/35ff149))
* **TreeSelect:** fix treeCheckedStrategy issue ([2558ce7](https://github.com/alibaba-fusion/next/commit/2558ce7))


### Features

* **Form:** new api errorMessageName for replace validate name fix [#3937](https://github.com/alibaba-fusion/next/issues/3937) ([ed0915d](https://github.com/alibaba-fusion/next/commit/ed0915d))




## [1.25.41](https://github.com/alibaba-fusion/next/compare/1.25.40...1.25.41) (2022-06-02)


### Bug Fixes

* **TimePicker2:** fix FooterPanel ok button locale, close [#3932](https://github.com/alibaba-fusion/next/issues/3932) ([1086b4b](https://github.com/alibaba-fusion/next/commit/1086b4b))




## [1.25.40](https://github.com/alibaba-fusion/next/compare/1.25.39...1.25.40) (2022-05-31)


### Bug Fixes

* **DatePicker2:** fix defaultPanelValue default value, close [#3803](https://github.com/alibaba-fusion/next/issues/3803) ([1491c51](https://github.com/alibaba-fusion/next/commit/1491c51))




## [1.25.39](https://github.com/alibaba-fusion/next/compare/1.25.38...1.25.39) (2022-05-26)


### Bug Fixes

* **Core:** remove s-auto for sass-build error ([41b5f84](https://github.com/alibaba-fusion/next/commit/41b5f84))
* **Menu:** repair menu focusedKey type warning, close [#3817](https://github.com/alibaba-fusion/next/issues/3817) ([a673175](https://github.com/alibaba-fusion/next/commit/a673175))




## [1.25.38](https://github.com/alibaba-fusion/next/compare/1.25.37...1.25.38) (2022-05-19)


### Bug Fixes

* **Icon:** prefix of customIcon fix [#3906](https://github.com/alibaba-fusion/next/issues/3906) ([4e8fb51](https://github.com/alibaba-fusion/next/commit/4e8fb51))




## [1.25.37](https://github.com/alibaba-fusion/next/compare/1.25.36...1.25.37) (2022-05-19)


### Bug Fixes

* **Icon:** remove circular dependency ([694ffb5](https://github.com/alibaba-fusion/next/commit/694ffb5))
* **Select:** dont show clear while value=[] fix [#3896](https://github.com/alibaba-fusion/next/issues/3896) ([#3899](https://github.com/alibaba-fusion/next/issues/3899)) ([4ae4d81](https://github.com/alibaba-fusion/next/commit/4ae4d81))
* **TimePicker2:** fix case of value=undefiend, fix [#3891](https://github.com/alibaba-fusion/next/issues/3891) ([#3894](https://github.com/alibaba-fusion/next/issues/3894)) ([7d6e649](https://github.com/alibaba-fusion/next/commit/7d6e649))
* **Tree:** add types definition for useVirtual ([#3904](https://github.com/alibaba-fusion/next/issues/3904)) ([b94b840](https://github.com/alibaba-fusion/next/commit/b94b840))




## [1.25.36](https://github.com/alibaba-fusion/next/compare/1.25.35...1.25.36) (2022-05-10)


### Bug Fixes

* **TimePicker2:** value under control on RangePicker ([9a4a517](https://github.com/alibaba-fusion/next/commit/9a4a517))




## [1.25.35](https://github.com/alibaba-fusion/next/compare/1.25.32...1.25.35) (2022-05-10)


### Bug Fixes

* **Balloon:** api placementOffset to Balloon ([#3881](https://github.com/alibaba-fusion/next/issues/3881)) ([6712175](https://github.com/alibaba-fusion/next/commit/6712175))
* **Input:** Add getInputNode signature, close [#3878](https://github.com/alibaba-fusion/next/issues/3878) ([267dffa](https://github.com/alibaba-fusion/next/commit/267dffa))
* **NumberPicker:** Add getInputNode signature, related to [#3878](https://github.com/alibaba-fusion/next/issues/3878) ([affdea2](https://github.com/alibaba-fusion/next/commit/affdea2))
* **Select:** repair multiple highlightKey and ts add popupAutoFocus, close [#3876](https://github.com/alibaba-fusion/next/issues/3876) [#3869](https://github.com/alibaba-fusion/next/issues/3869) ([c8edfb9](https://github.com/alibaba-fusion/next/commit/c8edfb9))


### Features

* **Nav:** add iconTextOnly, close [#3834](https://github.com/alibaba-fusion/next/issues/3834) ([b7d1a5d](https://github.com/alibaba-fusion/next/commit/b7d1a5d))
* **Upload:** add var card-border-radius ([af46a0f](https://github.com/alibaba-fusion/next/commit/af46a0f))




## [1.25.34](https://github.com/alibaba-fusion/next/compare/1.25.33...1.25.34) (2022-04-27)




## [1.25.33](https://github.com/alibaba-fusion/next/compare/1.26.0-beta.2...1.25.33) (2022-04-26)




## [1.25.32](https://github.com/alibaba-fusion/next/compare/1.25.31...1.25.32) (2022-04-21)


### Bug Fixes

* **Menu:** add variable for icon right fix [#3862](https://github.com/alibaba-fusion/next/issues/3862) ([00a3d43](https://github.com/alibaba-fusion/next/commit/00a3d43))




## [1.25.31](https://github.com/alibaba-fusion/next/compare/1.25.30...1.25.31) (2022-04-19)


### Bug Fixes

* **Tree:** fix onCheck not working when use isNodeBlock, close [#3850](https://github.com/alibaba-fusion/next/issues/3850) ([#3858](https://github.com/alibaba-fusion/next/issues/3858)) ([cf2c54e](https://github.com/alibaba-fusion/next/commit/cf2c54e))




## [1.25.30](https://github.com/alibaba-fusion/next/compare/1.25.29...1.25.30) (2022-04-12)


### Bug Fixes

* **Cascader:** do not render Menu Item when itemRender return null ([#3838](https://github.com/alibaba-fusion/next/issues/3838)) ([3da6cd2](https://github.com/alibaba-fusion/next/commit/3da6cd2))
* **Message:** repair message iconType warning, close [#3843](https://github.com/alibaba-fusion/next/issues/3843) ([86c7def](https://github.com/alibaba-fusion/next/commit/86c7def))
* **Slider:** config for hover on dot, fix [#3839](https://github.com/alibaba-fusion/next/issues/3839) ([#3840](https://github.com/alibaba-fusion/next/issues/3840)) ([bb3f704](https://github.com/alibaba-fusion/next/commit/bb3f704))
* **Typescript:** update Table cell props ([7c235b7](https://github.com/alibaba-fusion/next/commit/7c235b7))




## [1.25.29](https://github.com/alibaba-fusion/next/compare/1.25.28...1.25.29) (2022-03-31)


### Bug Fixes

* **Calendar2:** update header panel display value when panel value changed, close [#3831](https://github.com/alibaba-fusion/next/issues/3831) ([b33e0ba](https://github.com/alibaba-fusion/next/commit/b33e0ba))
* **Dialog:** use "确定" instead of "确认" for zh-cn ([201cacf](https://github.com/alibaba-fusion/next/commit/201cacf))




## [1.25.28](https://github.com/alibaba-fusion/next/compare/1.25.25...1.25.28) (2022-03-25)


### Bug Fixes

* **Dialog:** could custom margin-bottom when no footer fix [#3799](https://github.com/alibaba-fusion/next/issues/3799) ([#3809](https://github.com/alibaba-fusion/next/issues/3809)) ([6ddace0](https://github.com/alibaba-fusion/next/commit/6ddace0))
* **Dialog:** height type can be either number or string ([#3807](https://github.com/alibaba-fusion/next/issues/3807)) ([174a971](https://github.com/alibaba-fusion/next/commit/174a971))
* **Range:** onProcess&onChange props type error fix [#2769](https://github.com/alibaba-fusion/next/issues/2769) ([#3816](https://github.com/alibaba-fusion/next/issues/3816)) ([2235092](https://github.com/alibaba-fusion/next/commit/2235092))
* **Select:** make highlight color configurable ([13d3dea](https://github.com/alibaba-fusion/next/commit/13d3dea))
* **Table:** data should be mutable for async load ([1df62bf](https://github.com/alibaba-fusion/next/commit/1df62bf))
* **Table:** do not change dataSource ([#3811](https://github.com/alibaba-fusion/next/issues/3811)) ([3c70a31](https://github.com/alibaba-fusion/next/commit/3c70a31))
* **Table:** hidden to __hidden ([d818db6](https://github.com/alibaba-fusion/next/commit/d818db6))


### Features

* **Message:** can remove icon by iconType: false ([3cf723d](https://github.com/alibaba-fusion/next/commit/3cf723d))




## [1.25.27](https://github.com/alibaba-fusion/next/compare/1.25.26...1.25.27) (2022-03-18)


### Bug Fixes

* **Dialog:** height type can be either number or string ([#3807](https://github.com/alibaba-fusion/next/issues/3807)) ([174a971](https://github.com/alibaba-fusion/next/commit/174a971))




## [1.25.26](https://github.com/alibaba-fusion/next/compare/1.25.25...1.25.26) (2022-03-17)


### Bug Fixes

* **Table:** do not change dataSource ([#3811](https://github.com/alibaba-fusion/next/issues/3811)) ([3c70a31](https://github.com/alibaba-fusion/next/commit/3c70a31))
* **Table:** hidden to __hidden ([d818db6](https://github.com/alibaba-fusion/next/commit/d818db6))




## [1.25.25](https://github.com/alibaba-fusion/next/compare/1.25.24...1.25.25) (2022-03-17)


### Bug Fixes

* some pc h5 cross issue ([f5d23e2](https://github.com/alibaba-fusion/next/commit/f5d23e2))
* **Select:** could select item already selected fix [#3791](https://github.com/alibaba-fusion/next/issues/3791) ([15c373b](https://github.com/alibaba-fusion/next/commit/15c373b))
* **Select:** optimize controlled highlightKey question, close [#3795](https://github.com/alibaba-fusion/next/issues/3795) ([#3798](https://github.com/alibaba-fusion/next/issues/3798)) ([444680a](https://github.com/alibaba-fusion/next/commit/444680a))
* **Table:** virtual table with selection should tell all records, fix [#3792](https://github.com/alibaba-fusion/next/issues/3792) ([ff7bb16](https://github.com/alibaba-fusion/next/commit/ff7bb16))
* 修复从只读态切换到输入态时无法删除已上传的问题 ([2ded045](https://github.com/alibaba-fusion/next/commit/2ded045))




## [1.25.24](https://github.com/alibaba-fusion/next/compare/1.25.22...1.25.24) (2022-03-15)


### Bug Fixes

* **Input:** now allow to toggle visibility when password input is disabled ([91a2cf2](https://github.com/alibaba-fusion/next/commit/91a2cf2))
* **Range:** repair browser count float issue, close [#3652](https://github.com/alibaba-fusion/next/issues/3652) ([eef6e11](https://github.com/alibaba-fusion/next/commit/eef6e11))
* **Select:** make width stable ([1ff2b73](https://github.com/alibaba-fusion/next/commit/1ff2b73))
* **Tab:** style compile fail ([8033e4a](https://github.com/alibaba-fusion/next/commit/8033e4a))
* **Table:** tree table support virtual ([0a4a311](https://github.com/alibaba-fusion/next/commit/0a4a311))
* **TimePicker2:** fix RangePicker wrong minutes and seconds disabled ([#3771](https://github.com/alibaba-fusion/next/issues/3771)), close [#3766](https://github.com/alibaba-fusion/next/issues/3766) ([1aa6f16](https://github.com/alibaba-fusion/next/commit/1aa6f16))




## [1.25.23](https://github.com/alibaba-fusion/next/compare/1.25.22...1.25.23) (2022-03-03)


### Bug Fixes

* **Tab:** style compile fail ([8033e4a](https://github.com/alibaba-fusion/next/commit/8033e4a))
* **Table:** tree table support virtual ([0a4a311](https://github.com/alibaba-fusion/next/commit/0a4a311))
* **TimePicker2:** fix RangePicker wrong minutes and seconds disabled ([#3771](https://github.com/alibaba-fusion/next/issues/3771)), close [#3766](https://github.com/alibaba-fusion/next/issues/3766) ([1aa6f16](https://github.com/alibaba-fusion/next/commit/1aa6f16))




## [1.25.22](https://github.com/alibaba-fusion/next/compare/1.25.21...1.25.22) (2022-03-01)


### Bug Fixes

* **NumberPicker:** repair numberPicker log string, close [#3768](https://github.com/alibaba-fusion/next/issues/3768) ([#3769](https://github.com/alibaba-fusion/next/issues/3769)) ([1b4bfec](https://github.com/alibaba-fusion/next/commit/1b4bfec))
* use Set to avoid duplication keys ([#3772](https://github.com/alibaba-fusion/next/issues/3772)),close [#3773](https://github.com/alibaba-fusion/next/issues/3773) ([38df98f](https://github.com/alibaba-fusion/next/commit/38df98f))




## [1.25.21](https://github.com/alibaba-fusion/next/compare/1.25.20...1.25.21) (2022-02-24)


### Bug Fixes

* **Tab:** config active line padding ([66ee0cb](https://github.com/alibaba-fusion/next/commit/66ee0cb))
* **Transfer:** fix some wrong prop-types of transfer ([a4c95dd](https://github.com/alibaba-fusion/next/commit/a4c95dd))




## [1.25.20](https://github.com/alibaba-fusion/next/compare/1.25.19...1.25.20) (2022-02-22)


### Bug Fixes

* **NumberPicker:** repair field setValues 0 numberPicker unread, clos… ([#3752](https://github.com/alibaba-fusion/next/issues/3752)) ([53c6feb](https://github.com/alibaba-fusion/next/commit/53c6feb))
* **Overlay:** ts add placement ([#3753](https://github.com/alibaba-fusion/next/issues/3753)) ([6de9d6b](https://github.com/alibaba-fusion/next/commit/6de9d6b))
* **Upload:** card add ts ([78d3bb6](https://github.com/alibaba-fusion/next/commit/78d3bb6))




## [1.25.19](https://github.com/alibaba-fusion/next/compare/1.25.18...1.25.19) (2022-02-15)


### Bug Fixes

* **Dialog:** rollback body style while unmount fix [#3725](https://github.com/alibaba-fusion/next/issues/3725) ([93fffc4](https://github.com/alibaba-fusion/next/commit/93fffc4))
* **Menu:** keys of more, close [#3733](https://github.com/alibaba-fusion/next/issues/3733) ([2ca8af2](https://github.com/alibaba-fusion/next/commit/2ca8af2))
* **TreeSelect:** clear search value when select, close [#3738](https://github.com/alibaba-fusion/next/issues/3738) ([93ce487](https://github.com/alibaba-fusion/next/commit/93ce487))




## [1.25.18](https://github.com/alibaba-fusion/next/compare/1.25.17...1.25.18) (2022-02-10)


### Bug Fixes

* **Core:** division deprecation warning when using dart-sass ([a145c26](https://github.com/alibaba-fusion/next/commit/a145c26))
* **Field:** fix field.validate function signature ([#3723](https://github.com/alibaba-fusion/next/issues/3723)) ([2bca1f6](https://github.com/alibaba-fusion/next/commit/2bca1f6))
* **Overlay:** onTouchEnd stopPropagation by default ([#3714](https://github.com/alibaba-fusion/next/issues/3714)) ([fcc451d](https://github.com/alibaba-fusion/next/commit/fcc451d))
* **Switch:** set children text size to form-element-font-size, fix [#3710](https://github.com/alibaba-fusion/next/issues/3710) ([#3711](https://github.com/alibaba-fusion/next/issues/3711)) ([6e2c156](https://github.com/alibaba-fusion/next/commit/6e2c156))


### Features

* **Transfer:** transfer support different search config between panels ([#3724](https://github.com/alibaba-fusion/next/issues/3724)), close [#3664](https://github.com/alibaba-fusion/next/issues/3664) ([2ce740f](https://github.com/alibaba-fusion/next/commit/2ce740f))




## [1.25.17](https://github.com/alibaba-fusion/next/compare/1.25.13...1.25.17) (2022-01-27)


### Bug Fixes

* **CascaderSelect:** could pass menuProps={{focusable: true}} to cascader fix [#3685](https://github.com/alibaba-fusion/next/issues/3685) ([607a30c](https://github.com/alibaba-fusion/next/commit/607a30c))
* **CascaderSelect:** focus to input after select ([#3712](https://github.com/alibaba-fusion/next/issues/3712)) ([6a2537d](https://github.com/alibaba-fusion/next/commit/6a2537d))
* **DatePicker2:** fix selected value display when disabled ([#3706](https://github.com/alibaba-fusion/next/issues/3706)), close [#3705](https://github.com/alibaba-fusion/next/issues/3705) ([667a11b](https://github.com/alibaba-fusion/next/commit/667a11b))
* **Dialog:** could disappear one by one while click mask ([e1fd08e](https://github.com/alibaba-fusion/next/commit/e1fd08e))
* **Dialog:** lockcache pop ([04e471c](https://github.com/alibaba-fusion/next/commit/04e471c))
* **Menu:** bug of mode=popup with only 1 children Item ([4426f30](https://github.com/alibaba-fusion/next/commit/4426f30))
* **NumberPicker:** optimize delete value from `1.x` to  `1.` while under control, close [#3698](https://github.com/alibaba-fusion/next/issues/3698) ([#3700](https://github.com/alibaba-fusion/next/issues/3700)) ([148d713](https://github.com/alibaba-fusion/next/commit/148d713))
* **NumberPicker:** update displayValue, close [#3666](https://github.com/alibaba-fusion/next/issues/3666) ([#3689](https://github.com/alibaba-fusion/next/issues/3689)) ([dc412e2](https://github.com/alibaba-fusion/next/commit/dc412e2))
* **Range:** fix onChange/onProgress types ([04559e1](https://github.com/alibaba-fusion/next/commit/04559e1))
* **Select:** handleClear should selectAllYet is false ([#3690](https://github.com/alibaba-fusion/next/issues/3690)) ([593483c](https://github.com/alibaba-fusion/next/commit/593483c))
* **Select:** select useDetailValue optimize highlightkey, close [#3693](https://github.com/alibaba-fusion/next/issues/3693) ([420cb22](https://github.com/alibaba-fusion/next/commit/420cb22))


### Features

* optimize id-ID language copy writer ([985cb21](https://github.com/alibaba-fusion/next/commit/985cb21))




## [1.25.16](https://github.com/alibaba-fusion/next/compare/1.25.15...1.25.16) (2022-01-25)


### Bug Fixes

* **CascaderSelect:** could pass menuProps={{focusable: true}} to cascader fix [#3685](https://github.com/alibaba-fusion/next/issues/3685) ([607a30c](https://github.com/alibaba-fusion/next/commit/607a30c))
* **NumberPicker:** optimize delete value from `1.x` to  `1.` while under control, close [#3698](https://github.com/alibaba-fusion/next/issues/3698) ([#3700](https://github.com/alibaba-fusion/next/issues/3700)) ([148d713](https://github.com/alibaba-fusion/next/commit/148d713))


### Features

* optimize id-ID language copy writer ([985cb21](https://github.com/alibaba-fusion/next/commit/985cb21))




## [1.25.15](https://github.com/alibaba-fusion/next/compare/1.25.14...1.25.15) (2022-01-20)


### Bug Fixes

* **Dialog:** could disappear one by one while click mask ([e1fd08e](https://github.com/alibaba-fusion/next/commit/e1fd08e))
* **Select:** select useDetailValue optimize highlightkey, close [#3693](https://github.com/alibaba-fusion/next/issues/3693) ([420cb22](https://github.com/alibaba-fusion/next/commit/420cb22))




## [1.25.14](https://github.com/alibaba-fusion/next/compare/1.25.13...1.25.14) (2022-01-19)


### Bug Fixes

* **Dialog:** lockcache pop ([04e471c](https://github.com/alibaba-fusion/next/commit/04e471c))
* **Menu:** bug of mode=popup with only 1 children Item ([4426f30](https://github.com/alibaba-fusion/next/commit/4426f30))
* **NumberPicker:** update displayValue, close [#3666](https://github.com/alibaba-fusion/next/issues/3666) ([#3689](https://github.com/alibaba-fusion/next/issues/3689)) ([dc412e2](https://github.com/alibaba-fusion/next/commit/dc412e2))
* **Select:** handleClear should selectAllYet is false ([#3690](https://github.com/alibaba-fusion/next/issues/3690)) ([593483c](https://github.com/alibaba-fusion/next/commit/593483c))




## [1.25.13](https://github.com/alibaba-fusion/next/compare/1.25.11...1.25.13) (2022-01-11)


### Bug Fixes

* **Dialog:** add dialogRender types fix [#3648](https://github.com/alibaba-fusion/next/issues/3648) ([#3655](https://github.com/alibaba-fusion/next/issues/3655)) ([1e4790b](https://github.com/alibaba-fusion/next/commit/1e4790b))
* **Dialog:** hasMask not work for v2 fix [#3647](https://github.com/alibaba-fusion/next/issues/3647) ([987deb8](https://github.com/alibaba-fusion/next/commit/987deb8))
* **Dialog:** key ESC can close overlay one by one fix [#3606](https://github.com/alibaba-fusion/next/issues/3606) ([04adf1b](https://github.com/alibaba-fusion/next/commit/04adf1b))
* **Dialog:** rollback body.style in order fix [#3638](https://github.com/alibaba-fusion/next/issues/3638) ([689ed35](https://github.com/alibaba-fusion/next/commit/689ed35))
* **Form:** theme config for preview label font-size ([604d1c9](https://github.com/alibaba-fusion/next/commit/604d1c9))
* **Util:** take iframe in consider ([791305b](https://github.com/alibaba-fusion/next/commit/791305b))




## [1.25.12](https://github.com/alibaba-fusion/next/compare/1.25.11...1.25.12) (2022-01-05)


### Bug Fixes

* **Dialog:** add dialogRender types fix [#3648](https://github.com/alibaba-fusion/next/issues/3648) ([#3655](https://github.com/alibaba-fusion/next/issues/3655)) ([1e4790b](https://github.com/alibaba-fusion/next/commit/1e4790b))
* **Form:** theme config for preview label font-size ([604d1c9](https://github.com/alibaba-fusion/next/commit/604d1c9))




## [1.25.11](https://github.com/alibaba-fusion/next/compare/1.25.10...1.25.11) (2021-12-28)


### Bug Fixes

* **Popup:** set animation position while placement adjust to top ([0b9c313](https://github.com/alibaba-fusion/next/commit/0b9c313))
* **Select:** add highlightKey for ts ([#3650](https://github.com/alibaba-fusion/next/issues/3650)) ([18b9e56](https://github.com/alibaba-fusion/next/commit/18b9e56))
* **Select:** select ts add defaultHighlightKey ([bafaf75](https://github.com/alibaba-fusion/next/commit/bafaf75))
* **Table:** border issue, close [#3610](https://github.com/alibaba-fusion/next/issues/3610) ([#3642](https://github.com/alibaba-fusion/next/issues/3642)) ([08ce3ee](https://github.com/alibaba-fusion/next/commit/08ce3ee))




## [1.25.10](https://github.com/alibaba-fusion/next/compare/1.25.9...1.25.10) (2021-12-23)


### Bug Fixes

* **DatePicker2:** not allow to input a disabld value, close [#3616](https://github.com/alibaba-fusion/next/issues/3616) ([0a4a92e](https://github.com/alibaba-fusion/next/commit/0a4a92e))
* **Overlay:** set useCapture defaultValue as true ([9b80892](https://github.com/alibaba-fusion/next/commit/9b80892))




## [1.25.9](https://github.com/alibaba-fusion/next/compare/1.25.8...1.25.9) (2021-12-21)


### Bug Fixes

* **Collapse:** set content to $font-lineheight-2 fix [#3601](https://github.com/alibaba-fusion/next/issues/3601) ([6b15928](https://github.com/alibaba-fusion/next/commit/6b15928))
* **Dialog:** set content to $font-lineheight-2 fix [#3601](https://github.com/alibaba-fusion/next/issues/3601) ([1df8e8f](https://github.com/alibaba-fusion/next/commit/1df8e8f))
* **Dialog:** support okProps={loading} under control usage ([bfab278](https://github.com/alibaba-fusion/next/commit/bfab278))
* **Message:** set content to $font-lineheight-2 fix [#3601](https://github.com/alibaba-fusion/next/issues/3601) ([ca7e6fe](https://github.com/alibaba-fusion/next/commit/ca7e6fe))
* **Select:** optimize selectSearch hightLight ([354f824](https://github.com/alibaba-fusion/next/commit/354f824))
* **Step:** set content to $font-lineheight-2 fix [#3601](https://github.com/alibaba-fusion/next/issues/3601) ([77b621d](https://github.com/alibaba-fusion/next/commit/77b621d))
* **Timeline:** set content to $font-lineheight-2 fix [#3601](https://github.com/alibaba-fusion/next/issues/3601) ([d0230a8](https://github.com/alibaba-fusion/next/commit/d0230a8))




## [1.25.8](https://github.com/alibaba-fusion/next/compare/1.25.7...1.25.8) (2021-12-16)


### Bug Fixes

* **NumberPicker:** adaptor size add small ([07e395d](https://github.com/alibaba-fusion/next/commit/07e395d))
* **Tree:** fix auto select parent, close [#3603](https://github.com/alibaba-fusion/next/issues/3603) ([#3614](https://github.com/alibaba-fusion/next/issues/3614)) ([b98dc54](https://github.com/alibaba-fusion/next/commit/b98dc54))
* **VirtualList:** fix scroll bar size, close [#3600](https://github.com/alibaba-fusion/next/issues/3600) ([#3612](https://github.com/alibaba-fusion/next/issues/3612)) ([7e8d119](https://github.com/alibaba-fusion/next/commit/7e8d119))




## [1.25.7](https://github.com/alibaba-fusion/next/compare/1.25.6...1.25.7) (2021-12-13)


### Bug Fixes

* **TimePicker2:** fix bug not support string value ([5485517](https://github.com/alibaba-fusion/next/commit/5485517))




## [1.25.6](https://github.com/alibaba-fusion/next/compare/1.25.5...1.25.6) (2021-12-10)


### Bug Fixes

* **TimePicker2:** fix sass circular dependency ([#3602](https://github.com/alibaba-fusion/next/issues/3602)) ([f1df783](https://github.com/alibaba-fusion/next/commit/f1df783))




## [1.25.5](https://github.com/alibaba-fusion/next/compare/1.25.4...1.25.5) (2021-12-08)


### Bug Fixes

* **Button:** sass of rgba in css var fix [#3584](https://github.com/alibaba-fusion/next/issues/3584) ([6747d75](https://github.com/alibaba-fusion/next/commit/6747d75))
* using // sass comments in scss ([6058d3f](https://github.com/alibaba-fusion/next/commit/6058d3f))


### Features

* **Transfer:** add searchProps for Transfer ([#3596](https://github.com/alibaba-fusion/next/issues/3596)), fix [#3552](https://github.com/alibaba-fusion/next/issues/3552) ([ba90525](https://github.com/alibaba-fusion/next/commit/ba90525))


### Performance Improvements

* add font-display ([693795f](https://github.com/alibaba-fusion/next/commit/693795f))




## [1.25.4](https://github.com/alibaba-fusion/next/compare/1.25.3...1.25.4) (2021-12-03)


### Bug Fixes

* **DatePicker2:** prevent show popup when disabled, fix [#3583](https://github.com/alibaba-fusion/next/issues/3583) ([003cc0d](https://github.com/alibaba-fusion/next/commit/003cc0d))
* **Tab:** should realtime update dropdown, close [#3516](https://github.com/alibaba-fusion/next/issues/3516) ([#3517](https://github.com/alibaba-fusion/next/issues/3517)) ([3705db3](https://github.com/alibaba-fusion/next/commit/3705db3))
* **Tree:** fix auto focus when key is empty string, close [#3566](https://github.com/alibaba-fusion/next/issues/3566) ([d53c170](https://github.com/alibaba-fusion/next/commit/d53c170))




## [1.25.3](https://github.com/alibaba-fusion/next/compare/1.25.2...1.25.3) (2021-11-30)


### Bug Fixes

* **CascaderSelect:** add renderPreview type ([f08b134](https://github.com/alibaba-fusion/next/commit/f08b134))
* **CascadeSelect:** add isPreview types ([ada822c](https://github.com/alibaba-fusion/next/commit/ada822c))
* **Dialog:** compate with usage style.width ([43a748f](https://github.com/alibaba-fusion/next/commit/43a748f))
* **Dialog:** v2 compate with typeof  closeMode = string ([5d2e861](https://github.com/alibaba-fusion/next/commit/5d2e861))
* **Input:** set innerAfter color = label ([#3563](https://github.com/alibaba-fusion/next/issues/3563)) ([ec36d12](https://github.com/alibaba-fusion/next/commit/ec36d12))
* **Overlay:** support Functional Component ([01129c6](https://github.com/alibaba-fusion/next/commit/01129c6))
* **Search:** repair highlightKey, close [#3560](https://github.com/alibaba-fusion/next/issues/3560) ([35e3ea7](https://github.com/alibaba-fusion/next/commit/35e3ea7))
* **Utils:** improve dom.getStyle robustness ([40ed79d](https://github.com/alibaba-fusion/next/commit/40ed79d))




## [1.25.2](https://github.com/alibaba-fusion/next/compare/1.25.1...1.25.2) (2021-11-26)


### Bug Fixes

* **Dialog:** shake while dialog hiding after scrollbar show ([#3558](https://github.com/alibaba-fusion/next/issues/3558)) ([5c5125d](https://github.com/alibaba-fusion/next/commit/5c5125d))




## [1.25.1](https://github.com/alibaba-fusion/next/compare/1.25.0...1.25.1) (2021-11-25)


### Bug Fixes

* **Message:** fix typo ([b38f9eb](https://github.com/alibaba-fusion/next/commit/b38f9eb))
* **NumberPicker:** isPreview add innerAfter, close [#3553](https://github.com/alibaba-fusion/next/issues/3553) ([232b34f](https://github.com/alibaba-fusion/next/commit/232b34f))
* **Step:** fix wrong step body width in vertical mode ([#3548](https://github.com/alibaba-fusion/next/issues/3548)), close [#3377](https://github.com/alibaba-fusion/next/issues/3377) ([c2f0cf1](https://github.com/alibaba-fusion/next/commit/c2f0cf1))




# [1.25.0](https://github.com/alibaba-fusion/next/compare/1.24.17...1.25.0) (2021-11-22)


### Bug Fixes

* **DatePicker:** should not close popup while click input ([0c20a92](https://github.com/alibaba-fusion/next/commit/0c20a92))
* **DatePicker2:** double style margin on button ([372412f](https://github.com/alibaba-fusion/next/commit/372412f))
* **Dialog:** auto height/width fix [#941](https://github.com/alibaba-fusion/next/issues/941) ([f47f15b](https://github.com/alibaba-fusion/next/commit/f47f15b))
* **Dialog:** autoFocus for v2 ([8eafba7](https://github.com/alibaba-fusion/next/commit/8eafba7))
* **Dialog:** body padding without title fix [#2777](https://github.com/alibaba-fusion/next/issues/2777) ([72d1a66](https://github.com/alibaba-fusion/next/commit/72d1a66))
* **Dialog:** btn global loading fix [#2576](https://github.com/alibaba-fusion/next/issues/2576) ([b4caa8d](https://github.com/alibaba-fusion/next/commit/b4caa8d))
* **Dialog:** overflow while set height fix [#3262](https://github.com/alibaba-fusion/next/issues/3262) ([463ceea](https://github.com/alibaba-fusion/next/commit/463ceea))
* **Dialog:** update onClose usage ([a3f9690](https://github.com/alibaba-fusion/next/commit/a3f9690))
* **overlay:** compatible with react17, fix [#2959](https://github.com/alibaba-fusion/next/issues/2959) ([#3519](https://github.com/alibaba-fusion/next/issues/3519)) ([1583e14](https://github.com/alibaba-fusion/next/commit/1583e14))
* **Select:** autoHighlightFirstItem while search ([#3502](https://github.com/alibaba-fusion/next/issues/3502)) ([be28f95](https://github.com/alibaba-fusion/next/commit/be28f95))


### Features

* **Balloon:** new api v2 for Overlay v2 ([756fee1](https://github.com/alibaba-fusion/next/commit/756fee1))
* **DatePicker2:** move Popup panel when RangePicker focus change, close [#3492](https://github.com/alibaba-fusion/next/issues/3492) ([#3525](https://github.com/alibaba-fusion/next/issues/3525)) ([6d321bd](https://github.com/alibaba-fusion/next/commit/6d321bd))
* **Dialog:** add type succss/error/warning/notice/help fix [#3488](https://github.com/alibaba-fusion/next/issues/3488) ([38de821](https://github.com/alibaba-fusion/next/commit/38de821))
* **Dialog:** new Component for fixed Dialog ([f39034e](https://github.com/alibaba-fusion/next/commit/f39034e))
* **Dialog:** support draggable for Dialog fix [#231](https://github.com/alibaba-fusion/next/issues/231) ([d35f067](https://github.com/alibaba-fusion/next/commit/d35f067))
* **Overlay:** v2 fix [#3070](https://github.com/alibaba-fusion/next/issues/3070),[#3054](https://github.com/alibaba-fusion/next/issues/3054),[#2797](https://github.com/alibaba-fusion/next/issues/2797),[#2689](https://github.com/alibaba-fusion/next/issues/2689),[#2606](https://github.com/alibaba-fusion/next/issues/2606),[#2598](https://github.com/alibaba-fusion/next/issues/2598),[#2533](https://github.com/alibaba-fusion/next/issues/2533),[#2500](https://github.com/alibaba-fusion/next/issues/2500),[#742](https://github.com/alibaba-fusion/next/issues/742) ([e11555d](https://github.com/alibaba-fusion/next/commit/e11555d))
* **Select:** popupProps={{v2:true}} for v2 popup ([62c05ed](https://github.com/alibaba-fusion/next/commit/62c05ed))
* **TimePicker:** refacor & add TimePicker.RangePicker ([29a8c80](https://github.com/alibaba-fusion/next/commit/29a8c80))
* **TreeSelect:** support preserveNonExistentValue props ([#3424](https://github.com/alibaba-fusion/next/issues/3424)), close [#3375](https://github.com/alibaba-fusion/next/issues/3375) ([04abd78](https://github.com/alibaba-fusion/next/commit/04abd78))




## [1.24.17](https://github.com/alibaba-fusion/next/compare/1.24.16...1.24.17) (2021-11-19)


### Bug Fixes

* **Affix:** suport resize container width fix [#3536](https://github.com/alibaba-fusion/next/issues/3536) ([218c07d](https://github.com/alibaba-fusion/next/commit/218c07d))
* **Affix:** update container async to wait ref called ([62c3ba7](https://github.com/alibaba-fusion/next/commit/62c3ba7))




## [1.24.16](https://github.com/alibaba-fusion/next/compare/1.24.15...1.24.16) (2021-11-17)


### Bug Fixes

* **Rating:** prevent default for a11y input, close [#3526](https://github.com/alibaba-fusion/next/issues/3526) ([#3527](https://github.com/alibaba-fusion/next/issues/3527)) ([0ad9e36](https://github.com/alibaba-fusion/next/commit/0ad9e36))
* **Tab:** enhance robustness, close [#3515](https://github.com/alibaba-fusion/next/issues/3515) ([6a3b41e](https://github.com/alibaba-fusion/next/commit/6a3b41e))




## [1.24.15](https://github.com/alibaba-fusion/next/compare/1.24.14...1.24.15) (2021-11-09)


### Bug Fixes

* correct style order of next.var.css, close [#3493](https://github.com/alibaba-fusion/next/issues/3493) ([6b8ff04](https://github.com/alibaba-fusion/next/commit/6b8ff04))


### Features

* **Upload:** new api previewOnFileName to set onPreview on filename. fix [#3455](https://github.com/alibaba-fusion/next/issues/3455) ([fd3d04a](https://github.com/alibaba-fusion/next/commit/fd3d04a))




## [1.24.14](https://github.com/alibaba-fusion/next/compare/1.24.13...1.24.14) (2021-11-04)


### Bug Fixes

* **Affix:** container can update, close [#3473](https://github.com/alibaba-fusion/next/issues/3473) ([66e084f](https://github.com/alibaba-fusion/next/commit/66e084f))
* **Input:** ts add isPreview and renderPreview, close [#3478](https://github.com/alibaba-fusion/next/issues/3478) ([74c664a](https://github.com/alibaba-fusion/next/commit/74c664a))


### Features

* **Input:** add hoverShowClear api to show clear icon only when hover, resolve [#3441](https://github.com/alibaba-fusion/next/issues/3441) ([aee2c67](https://github.com/alibaba-fusion/next/commit/aee2c67))




## [1.24.13](https://github.com/alibaba-fusion/next/compare/1.24.12...1.24.13) (2021-11-03)


### Bug Fixes

* **DatePicker2:** use flex-basis instead width to be compiable with safari, close [#3463](https://github.com/alibaba-fusion/next/issues/3463) ([b13021e](https://github.com/alibaba-fusion/next/commit/b13021e))
* **Select:** select maxcount demo dataSource should string, close [#3462](https://github.com/alibaba-fusion/next/issues/3462) ([64f27ea](https://github.com/alibaba-fusion/next/commit/64f27ea))
* **Select:** set innerAfter element line-height, close [#2830](https://github.com/alibaba-fusion/next/issues/2830) ([#3469](https://github.com/alibaba-fusion/next/issues/3469)) ([f5899a5](https://github.com/alibaba-fusion/next/commit/f5899a5))




## [1.24.12](https://github.com/alibaba-fusion/next/compare/1.24.11...1.24.12) (2021-10-28)


### Bug Fixes

* **NumberPicker:** if max or min were undefined or null should be infinity, close [#3456](https://github.com/alibaba-fusion/next/issues/3456) ([eb8887c](https://github.com/alibaba-fusion/next/commit/eb8887c))




## [1.24.11](https://github.com/alibaba-fusion/next/compare/1.24.10...1.24.11) (2021-10-27)


### Bug Fixes

* **Calendar:** fix showOtherMonth bug close[#3436](https://github.com/alibaba-fusion/next/issues/3436) ([261b900](https://github.com/alibaba-fusion/next/commit/261b900))
* **Form:** add disabled props for d.ts ([eae8449](https://github.com/alibaba-fusion/next/commit/eae8449))
* **NumberPicker:** min max can be async, close [#3450](https://github.com/alibaba-fusion/next/issues/3450) ([bf41b9b](https://github.com/alibaba-fusion/next/commit/bf41b9b))


### Features

* **ConfigProvider:** support popupClassName ([#3422](https://github.com/alibaba-fusion/next/issues/3422)) ([975b163](https://github.com/alibaba-fusion/next/commit/975b163))




## [1.24.10](https://github.com/alibaba-fusion/next/compare/1.24.9...1.24.10) (2021-10-19)


### Bug Fixes

* **Input:** password compatible edge, close [#3289](https://github.com/alibaba-fusion/next/issues/3289) ([29b17e9](https://github.com/alibaba-fusion/next/commit/29b17e9))
* **Table:** Different sorts have different className of table header, close [#3386](https://github.com/alibaba-fusion/next/issues/3386) ([a03f292](https://github.com/alibaba-fusion/next/commit/a03f292))
* **Tree:** reduce rerender caused by onDrageLeave ([21049f4](https://github.com/alibaba-fusion/next/commit/21049f4))




## [1.24.9](https://github.com/alibaba-fusion/next/compare/1.24.8...1.24.9) (2021-10-15)


### Bug Fixes

* **Card:** arrow down rotate ([0ff263b](https://github.com/alibaba-fusion/next/commit/0ff263b))
* **Rating:** hover color when score<2 and disabled fix [#3400](https://github.com/alibaba-fusion/next/issues/3400) ([d883045](https://github.com/alibaba-fusion/next/commit/d883045))
* **Tab:** repair slipping question, close [#3342](https://github.com/alibaba-fusion/next/issues/3342) ([3f5ec74](https://github.com/alibaba-fusion/next/commit/3f5ec74))
* **Typescript:** add ts type for ConfigProvider Consumer ([#3401](https://github.com/alibaba-fusion/next/issues/3401)) ([17ae8d7](https://github.com/alibaba-fusion/next/commit/17ae8d7))




## [1.24.8](https://github.com/alibaba-fusion/next/compare/1.24.7...1.24.8) (2021-10-12)




## [1.24.7](https://github.com/alibaba-fusion/next/compare/1.24.6...1.24.7) (2021-10-12)


### Bug Fixes

* **DatePicker2:** should support fullWidth ([#3395](https://github.com/alibaba-fusion/next/issues/3395)) ([6b9a04b](https://github.com/alibaba-fusion/next/commit/6b9a04b))
* **Tree:** remove guide line when beyond boundary ([695efdc](https://github.com/alibaba-fusion/next/commit/695efdc))




## [1.24.6](https://github.com/alibaba-fusion/next/compare/1.24.5...1.24.6) (2021-09-26)


### Bug Fixes

* input should be ahead of select ([#3373](https://github.com/alibaba-fusion/next/issues/3373)) ([6c19f94](https://github.com/alibaba-fusion/next/commit/6c19f94))




## [1.24.5](https://github.com/alibaba-fusion/next/compare/1.24.4...1.24.5) (2021-09-24)


### Bug Fixes

* **Balloon:** close [#3357](https://github.com/alibaba-fusion/next/issues/3357) ([85f6b9b](https://github.com/alibaba-fusion/next/commit/85f6b9b))
* **Card:** hr should be visible, close [#3281](https://github.com/alibaba-fusion/next/issues/3281) ([a7936a5](https://github.com/alibaba-fusion/next/commit/a7936a5))
* **ConfigProvider:** popupContainer should work when container set undefined, close [#3368](https://github.com/alibaba-fusion/next/issues/3368) ([716ddc7](https://github.com/alibaba-fusion/next/commit/716ddc7))
* **DatePicker2:** popupTriggerType hover should work, close [#3366](https://github.com/alibaba-fusion/next/issues/3366) ([ac4baac](https://github.com/alibaba-fusion/next/commit/ac4baac))
* **Nav:** add disabled style ([4e06f71](https://github.com/alibaba-fusion/next/commit/4e06f71))
* **Select:** useVirtual when children > 10 ([cedf011](https://github.com/alibaba-fusion/next/commit/cedf011))




## [1.24.4](https://github.com/alibaba-fusion/next/compare/1.24.3...1.24.4) (2021-09-18)


### Bug Fixes

* **Breadcrumb:** empty node, close [#2699](https://github.com/alibaba-fusion/next/issues/2699) ([ed57bdc](https://github.com/alibaba-fusion/next/commit/ed57bdc))
* **Calendar:** showOtherMonth=false style, close [#3321](https://github.com/alibaba-fusion/next/issues/3321) ([2997a17](https://github.com/alibaba-fusion/next/commit/2997a17))
* **Collapse:** enhace empty node ([bc6564d](https://github.com/alibaba-fusion/next/commit/bc6564d))
* **DatePicker:** style issue, close [#3353](https://github.com/alibaba-fusion/next/issues/3353) ([#3354](https://github.com/alibaba-fusion/next/issues/3354)) ([860ec8f](https://github.com/alibaba-fusion/next/commit/860ec8f))
* **Input:** disabled mutual hasClear, drawer repair afterOpen warning, close [#2933](https://github.com/alibaba-fusion/next/issues/2933) [#3145](https://github.com/alibaba-fusion/next/issues/3145) ([39daa7c](https://github.com/alibaba-fusion/next/commit/39daa7c))
* move some props to behind others ([58cf157](https://github.com/alibaba-fusion/next/commit/58cf157))


### Features

* add main.scss for only main style ([97814ec](https://github.com/alibaba-fusion/next/commit/97814ec))




## [1.24.3](https://github.com/alibaba-fusion/next/compare/1.24.2...1.24.3) (2021-09-14)


### Bug Fixes

* **Dialog:** node-sass upgrade fix [#3338](https://github.com/alibaba-fusion/next/issues/3338) ([119976c](https://github.com/alibaba-fusion/next/commit/119976c))
* **Table:** noBorder with round corner should work, close [#3329](https://github.com/alibaba-fusion/next/issues/3329) ([cd5d61f](https://github.com/alibaba-fusion/next/commit/cd5d61f))
* **Table:** scroll alwaysshow + fixedHeader, close [#3328](https://github.com/alibaba-fusion/next/issues/3328) ([90d4f74](https://github.com/alibaba-fusion/next/commit/90d4f74))


### Features

* **Card:** add hasBorder ([14de219](https://github.com/alibaba-fusion/next/commit/14de219))




## [1.24.2](https://github.com/alibaba-fusion/next/compare/1.24.1...1.24.2) (2021-09-09)


### Bug Fixes

* **Dialog:** add font weight for dialog ([8dfd031](https://github.com/alibaba-fusion/next/commit/8dfd031))
* **Typescript:** dialog ([772a2e6](https://github.com/alibaba-fusion/next/commit/772a2e6))
* **Upload:** support capture ([3dbfb97](https://github.com/alibaba-fusion/next/commit/3dbfb97))


### Features

* expose componet props for adapter ([0f2ca58](https://github.com/alibaba-fusion/next/commit/0f2ca58))
* **Input:** add $input-feedback-error-color=$input-text-color ([2167b08](https://github.com/alibaba-fusion/next/commit/2167b08))
* **Table:** add asyncResizable for table ([0955927](https://github.com/alibaba-fusion/next/commit/0955927))




## [1.24.1](https://github.com/alibaba-fusion/next/compare/1.24.0...1.24.1) (2021-08-26)


### Bug Fixes

* **Form:** form label previewfor theme config ([238980f](https://github.com/alibaba-fusion/next/commit/238980f))
* **Nav:** increase weight of nav-item, close [#3187](https://github.com/alibaba-fusion/next/issues/3187) ([54e505c](https://github.com/alibaba-fusion/next/commit/54e505c))




# [1.24.0](https://github.com/alibaba-fusion/next/compare/1.23.24...1.24.0) (2021-08-23)


### Bug Fixes

* **Message:** animation for message ([f67e216](https://github.com/alibaba-fusion/next/commit/f67e216))
* **NumberPicker:** delete 0 at beginning for stringMode ([1ed7b45](https://github.com/alibaba-fusion/next/commit/1ed7b45))
* **NumberPicker:** onChange fired twice on win10 & cn input, close [#3110](https://github.com/alibaba-fusion/next/issues/3110) ([eed9b55](https://github.com/alibaba-fusion/next/commit/eed9b55))
* **NumberPicker:** step should work on undefined and win10 bug, close [#3110](https://github.com/alibaba-fusion/next/issues/3110) ([8366fdf](https://github.com/alibaba-fusion/next/commit/8366fdf))
* **Upload:** remove reUpload in ie9 ([c8f0021](https://github.com/alibaba-fusion/next/commit/c8f0021))


### Features

* remove dependency of next, in mobile mode, close [#3080](https://github.com/alibaba-fusion/next/issues/3080) ([3c3cdd7](https://github.com/alibaba-fusion/next/commit/3c3cdd7))
* **Form:** add api disabled for Form fix [#3024](https://github.com/alibaba-fusion/next/issues/3024) ([b966299](https://github.com/alibaba-fusion/next/commit/b966299))
* **Form:** move name to FormItem fix [#937](https://github.com/alibaba-fusion/next/issues/937) ([9977f45](https://github.com/alibaba-fusion/next/commit/9977f45))
* **Form:** support config label and text color when isPreview=true fix [#2418](https://github.com/alibaba-fusion/next/issues/2418),[#2107](https://github.com/alibaba-fusion/next/issues/2107) ([c5e0c14](https://github.com/alibaba-fusion/next/commit/c5e0c14))
* **Message:** support multiple instance by Message.config fix [#3259](https://github.com/alibaba-fusion/next/issues/3259) ([b28077a](https://github.com/alibaba-fusion/next/commit/b28077a))
* **NumberPicker:** add bignumber support ([eca241d](https://github.com/alibaba-fusion/next/commit/eca241d))
* **NumberPicker:** refactor interactive logic ([5eabf65](https://github.com/alibaba-fusion/next/commit/5eabf65))
* **Table:** update resize style, close [#3215](https://github.com/alibaba-fusion/next/issues/3215) ([b71f725](https://github.com/alibaba-fusion/next/commit/b71f725))
* **Upload:** add removeCallback for itemRender fix [#3022](https://github.com/alibaba-fusion/next/issues/3022) ([fb23c5d](https://github.com/alibaba-fusion/next/commit/fb23c5d))
* **Upload:** new api reUpload for upload error fix [#3010](https://github.com/alibaba-fusion/next/issues/3010) ([05d80a3](https://github.com/alibaba-fusion/next/commit/05d80a3))
* **Upload:** new api showDownload to show download icon ([638e001](https://github.com/alibaba-fusion/next/commit/638e001))




## [1.23.24](https://github.com/alibaba-fusion/next/compare/1.23.23...1.23.24) (2021-08-23)


### Bug Fixes

* **CascaderSelect:** deduplicate value ([3c86c31](https://github.com/alibaba-fusion/next/commit/3c86c31))
* **Table:** filter invalid dom attributes ([1a40ac6](https://github.com/alibaba-fusion/next/commit/1a40ac6))




## [1.23.23](https://github.com/alibaba-fusion/next/compare/1.23.22...1.23.23) (2021-08-17)


### Bug Fixes

* **Overlay:** resolve crash when Popup receives an empty node, close [#3233](https://github.com/alibaba-fusion/next/issues/3233) ([c1f5765](https://github.com/alibaba-fusion/next/commit/c1f5765))
* **Tab:** Maximum update depth on didUpdate fix [#2981](https://github.com/alibaba-fusion/next/issues/2981) ([c511de7](https://github.com/alibaba-fusion/next/commit/c511de7))




## [1.23.22](https://github.com/alibaba-fusion/next/compare/1.23.21...1.23.22) (2021-08-05)


### Bug Fixes

* **Slider:** activeIndex not work when resize, close [#3245](https://github.com/alibaba-fusion/next/issues/3245) ([f53a36a](https://github.com/alibaba-fusion/next/commit/f53a36a))
* **Table:** bug when list table with useVirtal ([856a352](https://github.com/alibaba-fusion/next/commit/856a352))


### Features

* **Table:** add defaultOpenRowKeys, close [#521](https://github.com/alibaba-fusion/next/issues/521) ([1f9fabf](https://github.com/alibaba-fusion/next/commit/1f9fabf))




## [1.23.21](https://github.com/alibaba-fusion/next/compare/1.23.20...1.23.21) (2021-08-04)


### Bug Fixes

* prefix of timeline&datepicker2 ([b59e6d1](https://github.com/alibaba-fusion/next/commit/b59e6d1))
* **Input:** prefix to group ([22629f2](https://github.com/alibaba-fusion/next/commit/22629f2))
* **Table:** style issue, close [#3238](https://github.com/alibaba-fusion/next/issues/3238) ([4545da7](https://github.com/alibaba-fusion/next/commit/4545da7))




## [1.23.20](https://github.com/alibaba-fusion/next/compare/1.23.19...1.23.20) (2021-07-30)


### Bug Fixes

* **DatePicker2:** FooterPanel miss locale prop ([6937505](https://github.com/alibaba-fusion/next/commit/6937505))
* **Select:** should support object without value in item, in case of useDetailValue ([0776a3b](https://github.com/alibaba-fusion/next/commit/0776a3b))
* **Table:** virtual not work with async dataSource, close [#3232](https://github.com/alibaba-fusion/next/issues/3232) ([e2aaf44](https://github.com/alibaba-fusion/next/commit/e2aaf44))




## [1.23.19](https://github.com/alibaba-fusion/next/compare/1.23.18...1.23.19) (2021-07-28)


### Bug Fixes

* **Select:** input space while custom popup fix [#1502](https://github.com/alibaba-fusion/next/issues/1502) ([03b6fc3](https://github.com/alibaba-fusion/next/commit/03b6fc3))
* **Select:** warning of state=success/warnign fix [#2333](https://github.com/alibaba-fusion/next/issues/2333) ([1ca147d](https://github.com/alibaba-fusion/next/commit/1ca147d))
* **Tree:** icon issue ([46a78cd](https://github.com/alibaba-fusion/next/commit/46a78cd))




## [1.23.18](https://github.com/alibaba-fusion/next/compare/1.23.17...1.23.18) (2021-07-27)


### Bug Fixes

* **Calendar:** select in calendar can't show in h5 ([5cb9f42](https://github.com/alibaba-fusion/next/commit/5cb9f42))
* **Select:** native onCompositionStart onCompositionEnd fix [#3181](https://github.com/alibaba-fusion/next/issues/3181) ([0b24e3a](https://github.com/alibaba-fusion/next/commit/0b24e3a))
* **Select:** position relative to warper fix [#3149](https://github.com/alibaba-fusion/next/issues/3149) ([c4c9a6c](https://github.com/alibaba-fusion/next/commit/c4c9a6c))
* **Tree:** change unfold icon content ([4416c62](https://github.com/alibaba-fusion/next/commit/4416c62))


### Features

* **Timeline:** add mode?: 'alternate' | 'left', close [#3183](https://github.com/alibaba-fusion/next/issues/3183)  ([439e9e4](https://github.com/alibaba-fusion/next/commit/439e9e4))




## [1.23.17](https://github.com/alibaba-fusion/next/compare/1.23.16...1.23.17) (2021-07-23)


### Bug Fixes

* **DaatePicker2:** should support value empty when showTime ([f07b5f8](https://github.com/alibaba-fusion/next/commit/f07b5f8))
* **DatePicker2:** format && outputFormat should support array type ([2287c39](https://github.com/alibaba-fusion/next/commit/2287c39))
* **DatePicker2:** panelValue issues, close [#3186](https://github.com/alibaba-fusion/next/issues/3186) ([86045fa](https://github.com/alibaba-fusion/next/commit/86045fa))
* **DatePikcer2:** timePanelProps.defaultValue issue, close [#3203](https://github.com/alibaba-fusion/next/issues/3203) ([1a7b25c](https://github.com/alibaba-fusion/next/commit/1a7b25c))


### Features

* **Tree:** support switcher icon config ([beb92b2](https://github.com/alibaba-fusion/next/commit/beb92b2))




## [1.23.16](https://github.com/alibaba-fusion/next/compare/1.23.15...1.23.16) (2021-07-16)


### Bug Fixes

* **Dialog:** bug when hasMask, close [#3189](https://github.com/alibaba-fusion/next/issues/3189) ([a224903](https://github.com/alibaba-fusion/next/commit/a224903))




## [1.23.15](https://github.com/alibaba-fusion/next/compare/1.23.14...1.23.15) (2021-07-14)




## [1.23.14](https://github.com/alibaba-fusion/next/compare/1.23.13...1.23.14) (2021-07-14)


### Bug Fixes

* remove usage of [@use](https://github.com/use) ([#3185](https://github.com/alibaba-fusion/next/issues/3185)) ([6e00c2c](https://github.com/alibaba-fusion/next/commit/6e00c2c))


### Features

* **Rating:** add allowClear api ([#3174](https://github.com/alibaba-fusion/next/issues/3174)) ([92c7dee](https://github.com/alibaba-fusion/next/commit/92c7dee))




## [1.23.13](https://github.com/alibaba-fusion/next/compare/1.23.12...1.23.13) (2021-07-13)


### Bug Fixes

* **DatePicker:** correct color of DatePicker2 ([0523bed](https://github.com/alibaba-fusion/next/commit/0523bed))


### Features

* support react 17 ([#3180](https://github.com/alibaba-fusion/next/issues/3180)) ([256b054](https://github.com/alibaba-fusion/next/commit/256b054))
* support sass 2.0 ([#3179](https://github.com/alibaba-fusion/next/issues/3179)) ([c000a6c](https://github.com/alibaba-fusion/next/commit/c000a6c))




## [1.23.12](https://github.com/alibaba-fusion/next/compare/1.23.11...1.23.12) (2021-07-07)


### Features

* **Table:** table column support wordBreak config, close [#3148](https://github.com/alibaba-fusion/next/issues/3148) ([424fd2f](https://github.com/alibaba-fusion/next/commit/424fd2f))




## [1.23.11](https://github.com/alibaba-fusion/next/compare/1.23.10...1.23.11) (2021-07-02)


### Bug Fixes

* **Core:** close [#3147](https://github.com/alibaba-fusion/next/issues/3147) ([4f4f22a](https://github.com/alibaba-fusion/next/commit/4f4f22a))
* **Divider:** chrome style, close [#3142](https://github.com/alibaba-fusion/next/issues/3142) ([a491555](https://github.com/alibaba-fusion/next/commit/a491555))
* **MenuButton:** fix typescript defination ([28c5025](https://github.com/alibaba-fusion/next/commit/28c5025))


### Features

* **Nav:** support item gradient bg color ([4e29c22](https://github.com/alibaba-fusion/next/commit/4e29c22))




## [1.23.10](https://github.com/alibaba-fusion/next/compare/1.23.9...1.23.10) (2021-06-24)


### Bug Fixes

* **Overlay:** should ignore hidden container ([0ede924](https://github.com/alibaba-fusion/next/commit/0ede924))
* **Select:** invalid `cssFloat` due to stylelint autofix ([17b4dc3](https://github.com/alibaba-fusion/next/commit/17b4dc3))


### Features

* **CascaderSelect:** support onSearch prop && async search ([ab4b7dd](https://github.com/alibaba-fusion/next/commit/ab4b7dd))
* **Select:** add `adjustTagSize` prop ([6d28b37](https://github.com/alibaba-fusion/next/commit/6d28b37))
* **Table:** make header corner configuaable ([cee6da5](https://github.com/alibaba-fusion/next/commit/cee6da5))




## [1.23.9](https://github.com/alibaba-fusion/next/compare/1.23.8...1.23.9) (2021-06-21)


### Bug Fixes

* **DatePicker2:** bug on checkRangeDate ([d011a72](https://github.com/alibaba-fusion/next/commit/d011a72))
* **Overlay:** overflow bug with mulitple overlay ([ffa20f3](https://github.com/alibaba-fusion/next/commit/ffa20f3))


### Features

* **DatePicker2:** support outputFormat ([976d712](https://github.com/alibaba-fusion/next/commit/976d712))
* **Progress:** bg can be gradient ([44d33a5](https://github.com/alibaba-fusion/next/commit/44d33a5))
* **Table:** can get ref of Table.Column ([93e4446](https://github.com/alibaba-fusion/next/commit/93e4446))




## [1.23.8](https://github.com/alibaba-fusion/next/compare/1.23.7...1.23.8) (2021-06-17)


### Bug Fixes

* **Breadcurmb:** fix height to 16px in case of $s-base=3 fix [#3111](https://github.com/alibaba-fusion/next/issues/3111) ([420c3ca](https://github.com/alibaba-fusion/next/commit/420c3ca))
* **Form:** line-height of label fix [#3087](https://github.com/alibaba-fusion/next/issues/3087), [#2418](https://github.com/alibaba-fusion/next/issues/2418) ([0dc17d2](https://github.com/alibaba-fusion/next/commit/0dc17d2))
* **Range:** track bg can be gradient color ([ca73389](https://github.com/alibaba-fusion/next/commit/ca73389))
* **Tag:** add spacing for close icon, close [#3119](https://github.com/alibaba-fusion/next/issues/3119) ([89bb1cb](https://github.com/alibaba-fusion/next/commit/89bb1cb))




## [1.23.7](https://github.com/alibaba-fusion/next/compare/1.23.6...1.23.7) (2021-06-16)


### Bug Fixes

* **Balloon:** normal border issue, close [#3097](https://github.com/alibaba-fusion/next/issues/3097) ([6beb025](https://github.com/alibaba-fusion/next/commit/6beb025))
* **ConfigProvider:** close [#3102](https://github.com/alibaba-fusion/next/issues/3102) ([e6e727f](https://github.com/alibaba-fusion/next/commit/e6e727f))
* **Select:** item can selected in popupAutoFocus fix [#3038](https://github.com/alibaba-fusion/next/issues/3038) ([8f92f4c](https://github.com/alibaba-fusion/next/commit/8f92f4c))




## [1.23.6](https://github.com/alibaba-fusion/next/compare/1.23.5...1.23.6) (2021-06-10)


### Bug Fixes

* **DatePicker2:** RangeDate check bug when set disabled, close [#3086](https://github.com/alibaba-fusion/next/issues/3086) ([91d4b70](https://github.com/alibaba-fusion/next/commit/91d4b70))


### Features

* **Input:** add api composition for call onChange after IME finished fix [#3032](https://github.com/alibaba-fusion/next/issues/3032) ([baf94db](https://github.com/alibaba-fusion/next/commit/baf94db))




## [1.23.5](https://github.com/alibaba-fusion/next/compare/1.23.4...1.23.5) (2021-06-07)


### Bug Fixes

* **ConfigProvider:** fix moment import ([1ceecd4](https://github.com/alibaba-fusion/next/commit/1ceecd4))
* **ConfigProvider:** more robust ([63a2424](https://github.com/alibaba-fusion/next/commit/63a2424))
* **Form:** error state in functional children of FormItem fix [#3075](https://github.com/alibaba-fusion/next/issues/3075) ([ae74464](https://github.com/alibaba-fusion/next/commit/ae74464))
* **Overlay:** fix svg element position bug,close #[#3070](https://github.com/alibaba-fusion/next/issues/3070) ([8b449d8](https://github.com/alibaba-fusion/next/commit/8b449d8))
* **Table:** height issue of virtual table, close [#3069](https://github.com/alibaba-fusion/next/issues/3069) ([350f7f4](https://github.com/alibaba-fusion/next/commit/350f7f4))
* **Table:** too much expanded-row width, close [#3057](https://github.com/alibaba-fusion/next/issues/3057) ([257e8ea](https://github.com/alibaba-fusion/next/commit/257e8ea))


### Features

* **Button:** add gradient bg for primary button ([63a770e](https://github.com/alibaba-fusion/next/commit/63a770e))
* **Range:** support gradient color ([307dc40](https://github.com/alibaba-fusion/next/commit/307dc40))




## [1.23.4](https://github.com/alibaba-fusion/next/compare/1.23.3...1.23.4) (2021-06-02)


### Bug Fixes

* **Form.Item:** add fullWidth type ([fbd41ae](https://github.com/alibaba-fusion/next/commit/fbd41ae))
* **Message:** quick mode should be fixed, close [#3059](https://github.com/alibaba-fusion/next/issues/3059) ([383c332](https://github.com/alibaba-fusion/next/commit/383c332))
* **Overlay:** popupContainer won\'t work in Overlay&Popup ([3cd801b](https://github.com/alibaba-fusion/next/commit/3cd801b))
* **Overlay:** should set overflow hidden to container ([9b8c8d3](https://github.com/alibaba-fusion/next/commit/9b8c8d3))
* **Table:** custom header misses its scrollLeft while update,close [#3050](https://github.com/alibaba-fusion/next/issues/3050) ([926d81e](https://github.com/alibaba-fusion/next/commit/926d81e))




## [1.23.3](https://github.com/alibaba-fusion/next/compare/1.23.2...1.23.3) (2021-05-31)


### Bug Fixes

* **Overlay:** update position after children change size, close [#2868](https://github.com/alibaba-fusion/next/issues/2868) ([a2743c2](https://github.com/alibaba-fusion/next/commit/a2743c2))




## [1.23.2](https://github.com/alibaba-fusion/next/compare/1.23.1...1.23.2) (2021-05-21)


### Bug Fixes

* **Balloon:** popups disappear too fast, close [#3007](https://github.com/alibaba-fusion/next/issues/3007) ([950fed8](https://github.com/alibaba-fusion/next/commit/950fed8))
* **Cascader:** set width auto, close [#3012](https://github.com/alibaba-fusion/next/issues/3012) ([f89a79c](https://github.com/alibaba-fusion/next/commit/f89a79c))
* **Switch:** animation! close [#3016](https://github.com/alibaba-fusion/next/issues/3016) ([f1f06f9](https://github.com/alibaba-fusion/next/commit/f1f06f9))
* **Table:** close [#3009](https://github.com/alibaba-fusion/next/issues/3009) ([d5c8201](https://github.com/alibaba-fusion/next/commit/d5c8201))
* **Table:** correct ExpandedRow width after switch loading, close [#3000](https://github.com/alibaba-fusion/next/issues/3000) ([283ce7f](https://github.com/alibaba-fusion/next/commit/283ce7f))
* **Tag:** close [#791](https://github.com/alibaba-fusion/next/issues/791) ([6af7c9a](https://github.com/alibaba-fusion/next/commit/6af7c9a))
* **Tag:** style issue, close [#3015](https://github.com/alibaba-fusion/next/issues/3015) ([e6af3f9](https://github.com/alibaba-fusion/next/commit/e6af3f9))


### Features

* **Drodpown:** popup should disappear by default, close [#3004](https://github.com/alibaba-fusion/next/issues/3004) ([49f9a69](https://github.com/alibaba-fusion/next/commit/49f9a69))




## [1.23.1](https://github.com/alibaba-fusion/next/compare/1.23.0...1.23.1) (2021-05-14)


### Bug Fixes

* **Cascader:** suport immutable dataSource, close [#1558](https://github.com/alibaba-fusion/next/issues/1558) ([c2f1927](https://github.com/alibaba-fusion/next/commit/c2f1927))
* **Checkbox:** types ([be38adb](https://github.com/alibaba-fusion/next/commit/be38adb))
* **Gateway:** document undefined on ssr ([#2982](https://github.com/alibaba-fusion/next/issues/2982)) ([bca6089](https://github.com/alibaba-fusion/next/commit/bca6089))
* **Input:** eye close/open, close [#2193](https://github.com/alibaba-fusion/next/issues/2193) ([bd6b6be](https://github.com/alibaba-fusion/next/commit/bd6b6be))
* **NumberPicker:** enable input -0.0, close [#2989](https://github.com/alibaba-fusion/next/issues/2989) ([9a93440](https://github.com/alibaba-fusion/next/commit/9a93440))
* **SplitButton:** some api in triggerProps should work, close [#2977](https://github.com/alibaba-fusion/next/issues/2977) ([6ac8a14](https://github.com/alibaba-fusion/next/commit/6ac8a14))
* **Tree:** support immutable prop ([ff97655](https://github.com/alibaba-fusion/next/commit/ff97655))


### Features

* **Breadcrumb:** add API showHiddenItems, close [#2968](https://github.com/alibaba-fusion/next/issues/2968) ([d9eec16](https://github.com/alibaba-fusion/next/commit/d9eec16))
* **Switch:** add autoWidth, close [#2993](https://github.com/alibaba-fusion/next/issues/2993) ([4bf0b72](https://github.com/alibaba-fusion/next/commit/4bf0b72))




# [1.23.0](https://github.com/alibaba-fusion/next/compare/1.22.25...1.23.0) (2021-05-10)

### Bug Fixes

* add spacing for popup of MenuButton, SplitButton ([fd5a18e](https://github.com/alibaba-fusion/next/commit/fd5a18e))
* **Pagination:** add item padding config, close [#2822](https://github.com/alibaba-fusion/next/issues/2822) ([3f71889](https://github.com/alibaba-fusion/next/commit/3f71889))
* fix some words ([cdad5f3](https://github.com/alibaba-fusion/next/commit/cdad5f3))
* maxLength text ([593ed92](https://github.com/alibaba-fusion/next/commit/593ed92))
* **Locale:** ja-ja should be ja-jp ([0f27ccf](https://github.com/alibaba-fusion/next/commit/0f27ccf))
* modify some words of ja-jp lang ([2f6b286](https://github.com/alibaba-fusion/next/commit/2f6b286))
* some pt words by @Andrey ([6c5b583](https://github.com/alibaba-fusion/next/commit/6c5b583))
* **Dialog:** update dialog motion ([c6139f5](https://github.com/alibaba-fusion/next/commit/c6139f5))


### Features

* add balloon ([e0274e6](https://github.com/alibaba-fusion/next/commit/e0274e6))
* upgrade motion of Drawer/Select ([50a5114](https://github.com/alibaba-fusion/next/commit/50a5114))
* **Balloon:** add title & faster animation ([5b22a5a](https://github.com/alibaba-fusion/next/commit/5b22a5a))
* **Form:** support i18n fix [#2829](https://github.com/alibaba-fusion/next/issues/2829) ([dff80ae](https://github.com/alibaba-fusion/next/commit/dff80ae))
* **Locale:** add id-id ([1b221f9](https://github.com/alibaba-fusion/next/commit/1b221f9))
* **Popup:** add spacing config ([7854561](https://github.com/alibaba-fusion/next/commit/7854561))
* **Switch:** add loading & style refactor ([2472233](https://github.com/alibaba-fusion/next/commit/2472233))
* add multiple language of validate ([813c691](https://github.com/alibaba-fusion/next/commit/813c691))
* **Nav:** style refactor, close[#2725](https://github.com/alibaba-fusion/next/issues/2725) ([fa6ae9e](https://github.com/alibaba-fusion/next/commit/fa6ae9e))
* **Table:** add sortDirections, close [#2882](https://github.com/alibaba-fusion/next/issues/2882) ([14d9c9f](https://github.com/alibaba-fusion/next/commit/14d9c9f))
* **Button:** gradient background, close [#2970](https://github.com/alibaba-fusion/next/issues/2970) ([521fec0](https://github.com/alibaba-fusion/next/commit/521fec0))


## [1.22.25](https://github.com/alibaba-fusion/next/compare/1.22.24...1.22.25) (2021-05-10)


### Bug Fixes

* **DatePicker:** default format of WeekPicker, close [#1491](https://github.com/alibaba-fusion/next/issues/1491) ([94d4764](https://github.com/alibaba-fusion/next/commit/94d4764))
* **DatePicker2:** default time don`t work ([bfd7743](https://github.com/alibaba-fusion/next/commit/bfd7743))



## [1.22.24](https://github.com/alibaba-fusion/next/compare/1.22.23...1.22.24) (2021-04-29)


### Bug Fixes

* **DatePicker:** interactive optimization, close [#2951](https://github.com/alibaba-fusion/next/issues/2951) ([eaeefdb](https://github.com/alibaba-fusion/next/commit/eaeefdb))
* **DatePicker2:** disabled support array type ([f05aab7](https://github.com/alibaba-fusion/next/commit/f05aab7))
* **DatePicker2:** fix value check logic on showTime ([f825cce](https://github.com/alibaba-fusion/next/commit/f825cce))
* **Typescript:** add DatePicker2.RangePicker index.d.ts ([b882ab7](https://github.com/alibaba-fusion/next/commit/b882ab7))
* **DatePicker2:** should reset value on showOk ([6ba229c](https://github.com/alibaba-fusion/next/commit/6ba229c))
* **DatePicker2:** style issues ([5932238](https://github.com/alibaba-fusion/next/commit/5932238))
* **DatePicker2:** support props label and separator ([151d48b](https://github.com/alibaba-fusion/next/commit/151d48b)) ([52691a8](https://github.com/alibaba-fusion/next/commit/52691a8))



## [1.22.23](https://github.com/alibaba-fusion/next/compare/1.22.22...1.22.23) (2021-04-28)


### Bug Fixes

* **Nav:** remove next-nav-icon to 1.23 ([fe83639](https://github.com/alibaba-fusion/next/commit/fe83639))




## [1.22.22](https://github.com/alibaba-fusion/next/compare/1.22.21...1.22.22) (2021-04-27)


### Bug Fixes

* add default for sass vars ([4e45f87](https://github.com/alibaba-fusion/next/commit/4e45f87))
* **Table:** wrong row height in ExpandTable with Lock, close [#2943](https://github.com/alibaba-fusion/next/issues/2943) ([e140373](https://github.com/alibaba-fusion/next/commit/e140373))
* **Upload:** enhance robustness, close #[#2922](https://github.com/alibaba-fusion/next/issues/2922) ([530d11c](https://github.com/alibaba-fusion/next/commit/530d11c))




## [1.22.21](https://github.com/alibaba-fusion/next/compare/1.22.20...1.22.21) (2021-04-25)


### Bug Fixes

* **ConfigProvider:** add method for clear cache on SSR, close [#2920](https://github.com/alibaba-fusion/next/issues/2920) ([ceed3a4](https://github.com/alibaba-fusion/next/commit/ceed3a4))
* **DatePicker2:** update icon size ([a6f5269](https://github.com/alibaba-fusion/next/commit/a6f5269))
* **MenuButton:** fix wrong arrow hover color, close [#2603](https://github.com/alibaba-fusion/next/issues/2603) ([f93b366](https://github.com/alibaba-fusion/next/commit/f93b366))
* **Overlay:** side effects of overlay on SSR, close [#2269](https://github.com/alibaba-fusion/next/issues/2269) ([b36bf1d](https://github.com/alibaba-fusion/next/commit/b36bf1d))
* **Search:** add fillProps for search ([a65577e](https://github.com/alibaba-fusion/next/commit/a65577e))
* **Step:** update step demo(step-process-failed) ([3c1b517](https://github.com/alibaba-fusion/next/commit/3c1b517))
* **Switch:** set Switch user-select: none, close [#2896](https://github.com/alibaba-fusion/next/issues/2896) ([4105ce8](https://github.com/alibaba-fusion/next/commit/4105ce8))
* **Tab:** make tab scrollable, close [#2918](https://github.com/alibaba-fusion/next/issues/2918) ([6e5f397](https://github.com/alibaba-fusion/next/commit/6e5f397))
* **Table:** ExpandTable can be Virtual, close [#2646](https://github.com/alibaba-fusion/next/issues/2646) ([47b4aa6](https://github.com/alibaba-fusion/next/commit/47b4aa6))
* **Typescript:** for Search & Table ([934a7f4](https://github.com/alibaba-fusion/next/commit/934a7f4))
* **Upload:** Upload.Card d.ts missing multiple, fix [#2906](https://github.com/alibaba-fusion/next/issues/2906) ([7bf32f8](https://github.com/alibaba-fusion/next/commit/7bf32f8))


### Features

* **Nav:** add iconOnlyWidth for Nav, close [#2888](https://github.com/alibaba-fusion/next/issues/2888) ([a0357c4](https://github.com/alibaba-fusion/next/commit/a0357c4))




## [1.22.20](https://github.com/alibaba-fusion/next/compare/1.22.19...1.22.20) (2021-04-14)


### Bug Fixes

* **DatePicker2:** fix typeof Dayjs ([68e6da5](https://github.com/alibaba-fusion/next/commit/68e6da5))
* **TreeSelect:** hasClear with multiple=true fix [#2837](https://github.com/alibaba-fusion/next/issues/2837) ([edc548b](https://github.com/alibaba-fusion/next/commit/edc548b))




## [1.22.19](https://github.com/alibaba-fusion/next/compare/1.22.18...1.22.19) (2021-04-13)


### Bug Fixes

* DatePicker2 etc. locale issues ([7b6db23](https://github.com/alibaba-fusion/next/commit/7b6db23))
* global popupContainer for MenuButton & SplitButton, close [#2871](https://github.com/alibaba-fusion/next/issues/2871) ([9a4cc35](https://github.com/alibaba-fusion/next/commit/9a4cc35))
* **DatePicker2:** remove required types ([dae50c6](https://github.com/alibaba-fusion/next/commit/dae50c6))




## [1.22.18](https://github.com/alibaba-fusion/next/compare/1.22.17...1.22.18) (2021-04-09)


### Bug Fixes

* avoid empty content being corrected as 0, close [#2856](https://github.com/alibaba-fusion/next/issues/2856) ([731da6f](https://github.com/alibaba-fusion/next/commit/731da6f))
* **NumberPicker:** make trigger untabbable, close [#2794](https://github.com/alibaba-fusion/next/issues/2794) ([b1e12da](https://github.com/alibaba-fusion/next/commit/b1e12da))




## [1.22.17](https://github.com/alibaba-fusion/next/compare/1.22.16...1.22.17) (2021-04-06)


### Bug Fixes

* **Calendar2:** show icon for year select, close [#2841](https://github.com/alibaba-fusion/next/issues/2841) ([e99bc38](https://github.com/alibaba-fusion/next/commit/e99bc38))
* **NumberPicker:** avoid input - when min >=0, close [#2335](https://github.com/alibaba-fusion/next/issues/2335) ([a8f0e89](https://github.com/alibaba-fusion/next/commit/a8f0e89))
* **NumberPicker:** fix some corrections, close [#2849](https://github.com/alibaba-fusion/next/issues/2849) ([603f897](https://github.com/alibaba-fusion/next/commit/603f897))
* **Table:** StickyLock has no shadow after didupdate, close [#2673](https://github.com/alibaba-fusion/next/issues/2673) ([86269a5](https://github.com/alibaba-fusion/next/commit/86269a5))
* **Table:** style issue of StickyLock ([e987b83](https://github.com/alibaba-fusion/next/commit/e987b83))
* **Typescript:** add triggerType for Menu.PopupItem ([bd3c2bd](https://github.com/alibaba-fusion/next/commit/bd3c2bd))




## [1.22.16](https://github.com/alibaba-fusion/next/compare/1.22.15...1.22.16) (2021-03-30)


### Bug Fixes

* fix Radio.Group and Checkbox.Group api lost in demo, close [#2834](https://github.com/alibaba-fusion/next/issues/2834) ([6510882](https://github.com/alibaba-fusion/next/commit/6510882))
* **Table:** z-index of stickyheader with lock columns, close [#2832](https://github.com/alibaba-fusion/next/issues/2832) ([7286429](https://github.com/alibaba-fusion/next/commit/7286429))
* **Typescript:** add calendar2 ([f979f39](https://github.com/alibaba-fusion/next/commit/f979f39))




## [1.22.15](https://github.com/alibaba-fusion/next/compare/1.22.14...1.22.15) (2021-03-29)


### Bug Fixes

* **Tab:** children can be undefined, close [#2827](https://github.com/alibaba-fusion/next/issues/2827) ([c0cf38e](https://github.com/alibaba-fusion/next/commit/c0cf38e))
* **Table:** lock right not work when useVirtual, close [#2807](https://github.com/alibaba-fusion/next/issues/2807) ([ead63c2](https://github.com/alibaba-fusion/next/commit/ead63c2))
* **Table:** stickyLock right style disorder, close [#2806](https://github.com/alibaba-fusion/next/issues/2806) ([4342b25](https://github.com/alibaba-fusion/next/commit/4342b25))
* **Typescript:** fix Nav, close [#2698](https://github.com/alibaba-fusion/next/issues/2698) ([5652325](https://github.com/alibaba-fusion/next/commit/5652325))


### Features

* **Table:** support scrollToRow for ordinary table ([e2dfc76](https://github.com/alibaba-fusion/next/commit/e2dfc76))




## [1.22.14](https://github.com/alibaba-fusion/next/compare/1.22.13...1.22.14) (2021-03-25)


### Bug Fixes

* **Table:** empty width should change when screen resize, close [#2818](https://github.com/alibaba-fusion/next/issues/2818) ([71ca870](https://github.com/alibaba-fusion/next/commit/71ca870))
* **Table:** get correct width after screen resize, close [#2399](https://github.com/alibaba-fusion/next/issues/2399) ([a75024f](https://github.com/alibaba-fusion/next/commit/a75024f))
* **Table:** z-index issues, close [#2820](https://github.com/alibaba-fusion/next/issues/2820) ([522a19f](https://github.com/alibaba-fusion/next/commit/522a19f))




## [1.22.13](https://github.com/alibaba-fusion/next/compare/1.22.12...1.22.13) (2021-03-23)


### Bug Fixes

* **Button:** loading button of <a> should vertical align center ([0e36fbc](https://github.com/alibaba-fusion/next/commit/0e36fbc))
* **Checkbox:** fix tree checkbox disorder ([f328660](https://github.com/alibaba-fusion/next/commit/f328660))
* **Tab:** should be type="button", close [#2812](https://github.com/alibaba-fusion/next/issues/2812) ([b6f8cd5](https://github.com/alibaba-fusion/next/commit/b6f8cd5))
* **Table:** lock columns should be in topmost ([822ad61](https://github.com/alibaba-fusion/next/commit/822ad61))




## [1.22.12](https://github.com/alibaba-fusion/next/compare/1.22.11...1.22.12) (2021-03-19)


### Bug Fixes

* **checkbox:** correct checkbox icon ([9b56b50](https://github.com/alibaba-fusion/next/commit/9b56b50))
* **Input:** disabled color in safari fix [#2766](https://github.com/alibaba-fusion/next/issues/2766) ([1f2c88c](https://github.com/alibaba-fusion/next/commit/1f2c88c))
* **Menu:** remove box-shadow in embeddable, close [#2781](https://github.com/alibaba-fusion/next/issues/2781) ([6c3b9c1](https://github.com/alibaba-fusion/next/commit/6c3b9c1))
* **NumberPicker:** add size=small theme config fix [#1897](https://github.com/alibaba-fusion/next/issues/1897) ([241e02e](https://github.com/alibaba-fusion/next/commit/241e02e))
* **Pagination:** button should align center, close [#2791](https://github.com/alibaba-fusion/next/issues/2791) ([8adc19c](https://github.com/alibaba-fusion/next/commit/8adc19c))
* **Search:** remove shadow of input in type=simple fix [#2717](https://github.com/alibaba-fusion/next/issues/2717) ([e3e306f](https://github.com/alibaba-fusion/next/commit/e3e306f))
* **Typescript:** update message quick props ([6648735](https://github.com/alibaba-fusion/next/commit/6648735))




## [1.22.11](https://github.com/alibaba-fusion/next/compare/1.22.10...1.22.11) (2021-03-04)


### Bug Fixes

* **DatePicker2:** ts file lost name ([12887c9](https://github.com/alibaba-fusion/next/commit/12887c9))
* **Step:** add stretch type ([0aaa574](https://github.com/alibaba-fusion/next/commit/0aaa574))
* **Step:** stretch props warning ([5762d7d](https://github.com/alibaba-fusion/next/commit/5762d7d))




## [1.22.10](https://github.com/alibaba-fusion/next/compare/1.22.9...1.22.10) (2021-02-25)


### Bug Fixes

* **DatePicker:** demo bug on riddle ([eb6cb07](https://github.com/alibaba-fusion/next/commit/eb6cb07))
* **Datepicker2:** update demo ([93ee965](https://github.com/alibaba-fusion/next/commit/93ee965))
* **DatePicker2:** ts issues ([c7d73d8](https://github.com/alibaba-fusion/next/commit/c7d73d8))
* **Typescript:** update Message ([0a11978](https://github.com/alibaba-fusion/next/commit/0a11978))




## [1.22.9](https://github.com/alibaba-fusion/next/compare/1.22.8...1.22.9) (2021-02-24)


### Bug Fixes

* **DatePicker:** wrong style import ([bfb5120](https://github.com/alibaba-fusion/next/commit/bfb5120))
* **Icon:** line-height inherit ([a3af842](https://github.com/alibaba-fusion/next/commit/a3af842))
* **Paginaton:** make autoWidth false, add selectProps, close [#2720](https://github.com/alibaba-fusion/next/issues/2720) ([7efb23d](https://github.com/alibaba-fusion/next/commit/7efb23d))
* **Table:** prefix of Table.StickyLock not working, close [#2722](https://github.com/alibaba-fusion/next/issues/2722) ([0dfd0cd](https://github.com/alibaba-fusion/next/commit/0dfd0cd))
* **Typescripts:** update message props ([8ac9d56](https://github.com/alibaba-fusion/next/commit/8ac9d56))




## [1.22.8](https://github.com/alibaba-fusion/next/compare/1.22.7...1.22.8) (2021-02-23)


### Bug Fixes

* **DatePicker:** bug on isValueChanged ([2841951](https://github.com/alibaba-fusion/next/commit/2841951))
* **DatePicker2:** time picker panel lost prefix prop ([c4d8786](https://github.com/alibaba-fusion/next/commit/c4d8786))
* **Dialog:** closeMode types ([e40208a](https://github.com/alibaba-fusion/next/commit/e40208a))
* **Transfer:** fix wrong behavior of check-all while using search ([1204592](https://github.com/alibaba-fusion/next/commit/1204592))


### Features

* **Select:** pass event to onSearch callback ([e134ca8](https://github.com/alibaba-fusion/next/commit/e134ca8))
* **Step:** support stretch, close [#2651](https://github.com/alibaba-fusion/next/issues/2651) ([04db8bb](https://github.com/alibaba-fusion/next/commit/04db8bb))




## [1.22.7](https://github.com/alibaba-fusion/next/compare/1.22.6...1.22.7) (2021-02-05)


### Bug Fixes

* **Button:** text fluttered when toggle loading, close [#2691](https://github.com/alibaba-fusion/next/issues/2691) ([6afebd0](https://github.com/alibaba-fusion/next/commit/6afebd0))
* **Overlay:** correct top for tab ([d88009f](https://github.com/alibaba-fusion/next/commit/d88009f))
* **Tab:** prefix not work, close [#2692](https://github.com/alibaba-fusion/next/issues/2692) ([d8628ea](https://github.com/alibaba-fusion/next/commit/d8628ea))
* **Transfer:** add onSelect callback, close [#2665](https://github.com/alibaba-fusion/next/issues/2665) ([918ccd7](https://github.com/alibaba-fusion/next/commit/918ccd7))
* **Tree:** correct checkbox icon ([5a4e5b2](https://github.com/alibaba-fusion/next/commit/5a4e5b2))


### Features

* **Step:** add node size config ([e8609a4](https://github.com/alibaba-fusion/next/commit/e8609a4))




## [1.22.6](https://github.com/alibaba-fusion/next/compare/1.22.5...1.22.6) (2021-02-04)


### Bug Fixes

* correct version of @alifd/meet-react ([ea60d4a](https://github.com/alibaba-fusion/next/commit/ea60d4a))
* **DatePicker:** bug on preview when showTime ([a9d166e](https://github.com/alibaba-fusion/next/commit/a9d166e))
* **DatePicker2:** controlled bug ([9680106](https://github.com/alibaba-fusion/next/commit/9680106))
* **Menu:** enhance robotness, close [#2680](https://github.com/alibaba-fusion/next/issues/2680) ([#2681](https://github.com/alibaba-fusion/next/issues/2681)) ([ffaa5f5](https://github.com/alibaba-fusion/next/commit/ffaa5f5))
* **Checkbox:** icon vertical algin text top ([#2681](https://github.com/alibaba-fusion/next/issues/2681)) ([ffaa5f5](https://github.com/alibaba-fusion/next/commit/ffaa5f5))
* **Balloon:** 0 => 0px  ([#2681](https://github.com/alibaba-fusion/next/issues/2681)) ([ffaa5f5](https://github.com/alibaba-fusion/next/commit/ffaa5f5))
* **Nav:** fix compare 0 with 0px ([3f2444d](https://github.com/alibaba-fusion/next/commit/3f2444d))
* **Overlay:** bug on postion when bottom overflow ([e2c1be9](https://github.com/alibaba-fusion/next/commit/e2c1be9))




## [1.22.5](https://github.com/alibaba-fusion/next/compare/1.22.4...1.22.5) (2021-01-28)


### Bug Fixes

* **Balloon:** fit calc ([ff9fc1a](https://github.com/alibaba-fusion/next/commit/ff9fc1a))
* **Search:** support api onToggleHighlightItem fix [#2653](https://github.com/alibaba-fusion/next/issues/2653) ([72d7eb9](https://github.com/alibaba-fusion/next/commit/72d7eb9))




## [1.22.4](https://github.com/alibaba-fusion/next/compare/1.22.3...1.22.4) (2021-01-28)


### Bug Fixes

* **DatePicker2:** value controlled issue ([c94067a](https://github.com/alibaba-fusion/next/commit/c94067a))
* **Overlay:** wrong container when followTrigger ([d215470](https://github.com/alibaba-fusion/next/commit/d215470))
* **WeekPicker:** format bug ([f6e002c](https://github.com/alibaba-fusion/next/commit/f6e002c))




## [1.22.3](https://github.com/alibaba-fusion/next/compare/1.22.2...1.22.3) (2021-01-27)


### Bug Fixes

* **Core:** update next-sr-only for select ([fb4e0f7](https://github.com/alibaba-fusion/next/commit/fb4e0f7))
* **Icon:** make icon square ([d7ca661](https://github.com/alibaba-fusion/next/commit/d7ca661))
* **Overlay:** bug on right & bottom overflow,close [#2602](https://github.com/alibaba-fusion/next/issues/2602) ([3588da6](https://github.com/alibaba-fusion/next/commit/3588da6))
* **Search:** remove highlightKey while input not match fix [#2642](https://github.com/alibaba-fusion/next/issues/2642) ([2bfaf1f](https://github.com/alibaba-fusion/next/commit/2bfaf1f))
* **Tab:** can pass data-* props to Tab.Item fix [#2636](https://github.com/alibaba-fusion/next/issues/2636) ([fe0c379](https://github.com/alibaba-fusion/next/commit/fe0c379))
* **Tab:** remove line animation while animation=false fix [#2226](https://github.com/alibaba-fusion/next/issues/2226) ([2869bf0](https://github.com/alibaba-fusion/next/commit/2869bf0))
* **Tab:** reset activeKey be first one while children update fix [#1835](https://github.com/alibaba-fusion/next/issues/1835) ([3b039e6](https://github.com/alibaba-fusion/next/commit/3b039e6))
* **Tab:** tab item positon while slider fix [#2096](https://github.com/alibaba-fusion/next/issues/2096) ([7720048](https://github.com/alibaba-fusion/next/commit/7720048))
* **Table:** fix multiheaders, close [#2631](https://github.com/alibaba-fusion/next/issues/2631) ([b7d10e8](https://github.com/alibaba-fusion/next/commit/b7d10e8))




## [1.22.2](https://github.com/alibaba-fusion/next/compare/1.22.1...1.22.2) (2021-01-20)


### Bug Fixes

* **Calendar2:** style issues ([2f9ae92](https://github.com/alibaba-fusion/next/commit/2f9ae92))
* **CascaderSelect:** cannot type when showSearch on ([3a67739](https://github.com/alibaba-fusion/next/commit/3a67739))
* **Form:** add valueName ([96c97a5](https://github.com/alibaba-fusion/next/commit/96c97a5))
* **Form:** types ([cf2c1cc](https://github.com/alibaba-fusion/next/commit/cf2c1cc))
* **Menu:** do not autoFocus highLight while focusable=false fix [#2565](https://github.com/alibaba-fusion/next/issues/2565) ([364ed28](https://github.com/alibaba-fusion/next/commit/364ed28))
* **Message:** font of config demo not work ([94b9b8a](https://github.com/alibaba-fusion/next/commit/94b9b8a))
* **Message:** types ([f1005ed](https://github.com/alibaba-fusion/next/commit/f1005ed))
* **Pagination:** flash when page number switched ([9e5d3fd](https://github.com/alibaba-fusion/next/commit/9e5d3fd))
* **Upload:** add types: fileKeyName, isPreview, renderPreview ([a2dfa94](https://github.com/alibaba-fusion/next/commit/a2dfa94))


### Features

* **ConfigProvider:** add defaultPropsConfig ([059cd48](https://github.com/alibaba-fusion/next/commit/059cd48))




## [1.22.1](https://github.com/alibaba-fusion/next/compare/1.22.0...1.22.1) (2021-01-08)


### Bug Fixes

* **Mask:** compile theme variables error ([#2599](https://github.com/alibaba-fusion/next/issues/2599)) ([471ca0f](https://github.com/alibaba-fusion/next/commit/471ca0f))




# [1.22.0](https://github.com/alibaba-fusion/next/compare/1.21.16...1.22.0) (2020-12-30)


### Bug Fixes

* remove config provider of radio and checkbox index ([98c5bdf](https://github.com/alibaba-fusion/next/commit/98c5bdf))
* **Checkbox:** fix some style problem, close [#2478](https://github.com/alibaba-fusion/next/issues/2478) [#1541](https://github.com/alibaba-fusion/next/issues/1541) ([03703ae](https://github.com/alibaba-fusion/next/commit/03703ae))
* **Form:** avoid affecting nested fields ([502a27d](https://github.com/alibaba-fusion/next/commit/502a27d))
* **Form:** getFieldInitCfg support multiple config Provider wrapper ([bedcc9b](https://github.com/alibaba-fusion/next/commit/bedcc9b))
* **Nav:** close [#2420](https://github.com/alibaba-fusion/next/issues/2420) ([cefbe49](https://github.com/alibaba-fusion/next/commit/cefbe49))
* **Radio:** fix button radio group margin-right ([#2523](https://github.com/alibaba-fusion/next/issues/2523)) ([dc4b817](https://github.com/alibaba-fusion/next/commit/dc4b817))
* **Radio:** fix some style problem, close [#1748](https://github.com/alibaba-fusion/next/issues/1748) [#2079](https://github.com/alibaba-fusion/next/issues/2079) [#1541](https://github.com/alibaba-fusion/next/issues/1541) [#2379](https://github.com/alibaba-fusion/next/issues/2379) ([a9c6a5c](https://github.com/alibaba-fusion/next/commit/a9c6a5c))
* **Rating:** show not-allowed cursor in disabled mode ([13a86a4](https://github.com/alibaba-fusion/next/commit/13a86a4))
* **Select:** disabled with max tag bg color fix [#2410](https://github.com/alibaba-fusion/next/issues/2410) ([4c46487](https://github.com/alibaba-fusion/next/commit/4c46487))
* **Select:** linear-gradient in safari fix [#2228](https://github.com/alibaba-fusion/next/issues/2228) ([2dd2087](https://github.com/alibaba-fusion/next/commit/2dd2087))
* **Step:** auto resize while step content changed, close [#2445](https://github.com/alibaba-fusion/next/issues/2445) ([c2dc02f](https://github.com/alibaba-fusion/next/commit/c2dc02f))
* **Table:** border chaos when Table in ExpandTable, close [#2053](https://github.com/alibaba-fusion/next/issues/2053) ([15768a6](https://github.com/alibaba-fusion/next/commit/15768a6))


### Features

* **Balloon:** update the way of drawing direction angle, close [#2351](https://github.com/alibaba-fusion/next/issues/2351) ([69c466b](https://github.com/alibaba-fusion/next/commit/69c466b))
* **Checkbox:** itemDirection => direction ([d84b1b7](https://github.com/alibaba-fusion/next/commit/d84b1b7))
* **Form:** add api colon, close [#1507](https://github.com/alibaba-fusion/next/issues/1507) ([de6143f](https://github.com/alibaba-fusion/next/commit/de6143f))
* **Form:** new sass var for preview label font size. fix [#2364](https://github.com/alibaba-fusion/next/issues/2364) ([3fd8f6d](https://github.com/alibaba-fusion/next/commit/3fd8f6d))
* **Input:** add focus border for Input ([1706a95](https://github.com/alibaba-fusion/next/commit/1706a95))
* **Input:** hasLimitHint => showLimitHint ([2ffeed7](https://github.com/alibaba-fusion/next/commit/2ffeed7))
* **Locale:** add pt ([#2536](https://github.com/alibaba-fusion/next/issues/2536)) ([df9811d](https://github.com/alibaba-fusion/next/commit/df9811d))
* **Menu:** split item padding left and right for design, close [#2427](https://github.com/alibaba-fusion/next/issues/2427) ([#2428](https://github.com/alibaba-fusion/next/issues/2428)) ([ed147d0](https://github.com/alibaba-fusion/next/commit/ed147d0))
* **Nav:** expand icon of subNav can be hidden, close [#2386](https://github.com/alibaba-fusion/next/issues/2386) ([efae574](https://github.com/alibaba-fusion/next/commit/efae574))
* **Radio:** itemDirection => direction ([e9b16c1](https://github.com/alibaba-fusion/next/commit/e9b16c1))




## [1.21.16](https://github.com/alibaba-fusion/next/compare/1.21.15...1.21.16) (2020-12-24)


### Bug Fixes

* **Cascader:** width in IE, close [#2518](https://github.com/alibaba-fusion/next/issues/2518) ([e722e9f](https://github.com/alibaba-fusion/next/commit/e722e9f))




## [1.21.15](https://github.com/alibaba-fusion/next/compare/1.21.14...1.21.15) (2020-12-18)


### Bug Fixes

* **Overlay:**  should clean paddingRight when dialog disappears ([7e513cc](https://github.com/alibaba-fusion/next/commit/7e513cc))
* **Table:** tableOuterWidth can be undefined ([e3b7b22](https://github.com/alibaba-fusion/next/commit/e3b7b22))
* **Tag:** cant set border color for primary closable tag ([52c5c99](https://github.com/alibaba-fusion/next/commit/52c5c99))
* **TreeSelect:** bug on preview when value is empty ([1c095c4](https://github.com/alibaba-fusion/next/commit/1c095c4))


### Features

* **Loading:** add disableScroll ([c0f7592](https://github.com/alibaba-fusion/next/commit/c0f7592))




## [1.21.14](https://github.com/alibaba-fusion/next/compare/1.21.13...1.21.14) (2020-12-15)


### Bug Fixes

* **CascaderSelect:** should ignore case when searching ([f34c82f](https://github.com/alibaba-fusion/next/commit/f34c82f))
* **ConfigProvider:** add missed static methods types, close [#2486](https://github.com/alibaba-fusion/next/issues/2486) ([7d1225b](https://github.com/alibaba-fusion/next/commit/7d1225b))
* **Form:** add missing `useLabelForErrorMessage` definition of props ([0620124](https://github.com/alibaba-fusion/next/commit/0620124))
* **NumberPicker:** fix default type prop, close [#2370](https://github.com/alibaba-fusion/next/issues/2370) ([a6c203f](https://github.com/alibaba-fusion/next/commit/a6c203f))
* **Table:** close [#2497](https://github.com/alibaba-fusion/next/issues/2497) ([f801aee](https://github.com/alibaba-fusion/next/commit/f801aee))
* **Table:** correct signature of `getExpandedColProps` in Table props ([a286710](https://github.com/alibaba-fusion/next/commit/a286710))
* **Table:** make vertical rolling smoother ([60e0ea4](https://github.com/alibaba-fusion/next/commit/60e0ea4))
* **TreeSelect:** should ignore case on searching ([fad02fa](https://github.com/alibaba-fusion/next/commit/fad02fa))


### Features

* **NumberPicker:** support ref.getInputNode ([11c0827](https://github.com/alibaba-fusion/next/commit/11c0827))




## [1.21.13](https://github.com/alibaba-fusion/next/compare/1.21.12...1.21.13) (2020-12-01)


### Bug Fixes

* **Checkbox:** fix disabled checkbox label color and cursor display, close [#2231](https://github.com/alibaba-fusion/next/issues/2231) ([#2471](https://github.com/alibaba-fusion/next/issues/2471)) ([1a1e69a](https://github.com/alibaba-fusion/next/commit/1a1e69a))
* **Table:** virtual table doubled height, close [#2475](https://github.com/alibaba-fusion/next/issues/2475) ([5b96708](https://github.com/alibaba-fusion/next/commit/5b96708))




## [1.21.12](https://github.com/alibaba-fusion/next/compare/1.21.11...1.21.12) (2020-11-27)


### Bug Fixes

* **Select:** google translate bug fix [#2424](https://github.com/alibaba-fusion/next/issues/2424) ([8656521](https://github.com/alibaba-fusion/next/commit/8656521))
* **Step:** extend icon's animation duration, close [#2414](https://github.com/alibaba-fusion/next/issues/2414) ([df0f25f](https://github.com/alibaba-fusion/next/commit/df0f25f))
* **Typescript:** update  Radio.Group  ([c51b0bb](https://github.com/alibaba-fusion/next/commit/c51b0bb))




## [1.21.11](https://github.com/alibaba-fusion/next/compare/1.21.10...1.21.11) (2020-11-20)


### Bug Fixes

* fix warning of style ([b865019](https://github.com/alibaba-fusion/next/commit/b865019))
* **Checkbox:** wrong style in .disabled.focus, close [#2280](https://github.com/alibaba-fusion/next/issues/2280) ([4e474cc](https://github.com/alibaba-fusion/next/commit/4e474cc))
* **Typescript:** add StickyLock ([79fd9db](https://github.com/alibaba-fusion/next/commit/79fd9db))
* **Upload:** Card progress under controled value. fix [#2411](https://github.com/alibaba-fusion/next/issues/2411) ([edcea69](https://github.com/alibaba-fusion/next/commit/edcea69))




## [1.21.10](https://github.com/alibaba-fusion/next/compare/1.21.9...1.21.10) (2020-11-18)


### Bug Fixes

* **Nav:** color of a link, close [#2388](https://github.com/alibaba-fusion/next/issues/2388) ([8c93ae7](https://github.com/alibaba-fusion/next/commit/8c93ae7))
* **NumberPicker:** dts for size=small ([7e1d2a0](https://github.com/alibaba-fusion/next/commit/7e1d2a0))
* **NumberPicker:** fix trigger style in firefox fix [#2281](https://github.com/alibaba-fusion/next/issues/2281) ([a88d81e](https://github.com/alibaba-fusion/next/commit/a88d81e))
* **Table** size of sort icon should be xs ([40c6686](https://github.com/alibaba-fusion/next/commit/40c6686))
* **Upload:** correct typo for old ts version ([#2368](https://github.com/alibaba-fusion/next/issues/2368)) ([1345652](https://github.com/alibaba-fusion/next/commit/1345652))




## [1.21.9](https://github.com/alibaba-fusion/next/compare/1.21.8...1.21.9) (2020-11-13)


### Bug Fixes

* **Balloon:** remove shadow of arrow, close [#2257](https://github.com/alibaba-fusion/next/issues/2257) ([4c84f4e](https://github.com/alibaba-fusion/next/commit/4c84f4e))
* **DatePicker:** close [#2198](https://github.com/alibaba-fusion/next/issues/2198), [#2129](https://github.com/alibaba-fusion/next/issues/2129) ([3e974cc](https://github.com/alibaba-fusion/next/commit/3e974cc))
* **List:** bug of show empty when 1 data left, close alibaba/ice[#3799](https://github.com/alibaba-fusion/next/issues/3799) ([9623241](https://github.com/alibaba-fusion/next/commit/9623241))
* **Menu:** increase weight of a in menu, close [#2337](https://github.com/alibaba-fusion/next/issues/2337) ([5e9d345](https://github.com/alibaba-fusion/next/commit/5e9d345))
* **Message:** withContext Demo affect global ConfigProvider ([a8a098d](https://github.com/alibaba-fusion/next/commit/a8a098d))
* **NumberPicker:** enable ie Number.MAX_SAFE_VALUE/MIN_SAFE_VALUE ([6dfe049](https://github.com/alibaba-fusion/next/commit/6dfe049))
* **NumberPicker:** fix overflow, close[#2048](https://github.com/alibaba-fusion/next/issues/2048) ([01b005b](https://github.com/alibaba-fusion/next/commit/01b005b))
* **NumberPicker:** fix trigger height problem in firefox, close[#2281](https://github.com/alibaba-fusion/next/issues/2281) ([1c7f190](https://github.com/alibaba-fusion/next/commit/1c7f190))
* **NumberPicker:** fix unexpected scientific notation display,close[#2243](https://github.com/alibaba-fusion/next/issues/2243) ([5504b83](https://github.com/alibaba-fusion/next/commit/5504b83))
* **Overlay:** dom should ready when call onOpen & afterOpen evnet ([bf8b879](https://github.com/alibaba-fusion/next/commit/bf8b879))
* **ResponsiveGrid:** columns can be string ([96b7fb7](https://github.com/alibaba-fusion/next/commit/96b7fb7))
* **Step:** style disorder while switching  direction dynamically ([8192867](https://github.com/alibaba-fusion/next/commit/8192867)), closes [#2266](https://github.com/alibaba-fusion/next/issues/2266)
* **Table:** close [#2354](https://github.com/alibaba-fusion/next/issues/2354) ([70ebc01](https://github.com/alibaba-fusion/next/commit/70ebc01))
* **Table:** close [#2362](https://github.com/alibaba-fusion/next/issues/2362) ([a0fe83e](https://github.com/alibaba-fusion/next/commit/a0fe83e))
* **Table:** error when colspan with ListTable, close [#2004](https://github.com/alibaba-fusion/next/issues/2004) ([bae77c1](https://github.com/alibaba-fusion/next/commit/bae77c1))
* **Table:** right not work sometimes in StickyTable, close [#2276](https://github.com/alibaba-fusion/next/issues/2276) ([810de2d](https://github.com/alibaba-fusion/next/commit/810de2d))
* **Table/List:** correct signature of `loadingComponent` ([5b31fc0](https://github.com/alibaba-fusion/next/commit/5b31fc0))
* **Tree:** style issue when use virtual ([c9e9efa](https://github.com/alibaba-fusion/next/commit/c9e9efa))
* **TreeSelect:** search bug when useVirtual and checkable,close [#2271](https://github.com/alibaba-fusion/next/issues/2271) ([dedb342](https://github.com/alibaba-fusion/next/commit/dedb342))




## [1.21.8](https://github.com/alibaba-fusion/next/compare/1.21.7...1.21.8) (2020-10-15)


### Bug Fixes

* correct typemark to fit forwardref ([2cb0fd7](https://github.com/alibaba-fusion/next/commit/2cb0fd7))
* fix style ([0d8fc47](https://github.com/alibaba-fusion/next/commit/0d8fc47))
* **Button:** make text button selectable, close [#2248](https://github.com/alibaba-fusion/next/issues/2248) ([467acf9](https://github.com/alibaba-fusion/next/commit/467acf9))
* **Message:** $message-close-icon-size lose default statement ([fb65a17](https://github.com/alibaba-fusion/next/commit/fb65a17))
* **Search:** correct use of this and avoid warning for esm bundle ([1a25a1a](https://github.com/alibaba-fusion/next/commit/1a25a1a))
* **Upload:** Card renderPreview fix [#2239](https://github.com/alibaba-fusion/next/issues/2239) ([e698721](https://github.com/alibaba-fusion/next/commit/e698721))




## [1.21.7](https://github.com/alibaba-fusion/next/compare/1.21.6...1.21.7) (2020-10-12)


### Bug Fixes

* css var ([5c788c1](https://github.com/alibaba-fusion/next/commit/5c788c1))
* css var color ([592b892](https://github.com/alibaba-fusion/next/commit/592b892))
* **Select:** preview value fix [#2229](https://github.com/alibaba-fusion/next/issues/2229) ([#2230](https://github.com/alibaba-fusion/next/issues/2230)) ([063cb20](https://github.com/alibaba-fusion/next/commit/063cb20))
* **Table:** style issue, close [#2213](https://github.com/alibaba-fusion/next/issues/2213) ([7897738](https://github.com/alibaba-fusion/next/commit/7897738))
* **Upload:** control uploading state, no value set while uploading ([5114a01](https://github.com/alibaba-fusion/next/commit/5114a01))


### Features

* **ResponsiveGrid:** support ie11 for css grid ([#2225](https://github.com/alibaba-fusion/next/issues/2225)) ([8a539b4](https://github.com/alibaba-fusion/next/commit/8a539b4))




## [1.21.6](https://github.com/alibaba-fusion/next/compare/1.21.5...1.21.6) (2020-09-25)


### Bug Fixes

* add disabled className for input/menu/search ([c0ac701](https://github.com/alibaba-fusion/next/commit/c0ac701))
* **NumberPicker:** fix bug that cannot input 0 decimal's last position ([3fe963b](https://github.com/alibaba-fusion/next/commit/3fe963b))
* **NumberPicker:** use regexp to solve ([0fafb20](https://github.com/alibaba-fusion/next/commit/0fafb20))
* **Range:** fix range position with custom range-size-m-scale-height ([#2208](https://github.com/alibaba-fusion/next/issues/2208)) ([68aa95c](https://github.com/alibaba-fusion/next/commit/68aa95c))


### Features

* **Dialog:** add closeMode ([fc931d9](https://github.com/alibaba-fusion/next/commit/fc931d9))
* **Dialog, Message:** add withContext ([#2009](https://github.com/alibaba-fusion/next/issues/2009)) ([2608700](https://github.com/alibaba-fusion/next/commit/2608700))
* **Drawer:** add closeMode ([8dddb72](https://github.com/alibaba-fusion/next/commit/8dddb72))




## [1.21.5](https://github.com/alibaba-fusion/next/compare/1.21.4...1.21.5) (2020-09-17)


### Bug Fixes

* **Input:** ui of radius in password autofill. fix [#2017](https://github.com/alibaba-fusion/next/issues/2017) ([916f0f0](https://github.com/alibaba-fusion/next/commit/916f0f0))
* **Menu:** avoid errors while dom removed and js executing ([4c4732a](https://github.com/alibaba-fusion/next/commit/4c4732a))
* **Nav:** correct inline level when iconOnly switched, close [#1676](https://github.com/alibaba-fusion/next/issues/1676) ([b4a03d7](https://github.com/alibaba-fusion/next/commit/b4a03d7))
* **Select:** crash when mode=tag&&value={null}&&isPreview, close [#2175](https://github.com/alibaba-fusion/next/issues/2175) ([bcc4ddc](https://github.com/alibaba-fusion/next/commit/bcc4ddc))
* **Select:** enhance defaultValue type. fix [#2071](https://github.com/alibaba-fusion/next/issues/2071) ([d6a090d](https://github.com/alibaba-fusion/next/commit/d6a090d))
* **Select:** only close popup in disabled state. fix [#2072](https://github.com/alibaba-fusion/next/issues/2072) ([f9f7456](https://github.com/alibaba-fusion/next/commit/f9f7456))
* **Table:** add _typeMark to func, close [#2180](https://github.com/alibaba-fusion/next/issues/2180) ([0176594](https://github.com/alibaba-fusion/next/commit/0176594))
* **Table:** rowselection bug when children is null, close [#2179](https://github.com/alibaba-fusion/next/issues/2179) ([b756075](https://github.com/alibaba-fusion/next/commit/b756075))
* **Upload:** startUpload in card mode. fix [#2097](https://github.com/alibaba-fusion/next/issues/2097) ([6032d0d](https://github.com/alibaba-fusion/next/commit/6032d0d))


### Features

* **Upload:** add api itemRender for Card. fix [#2100](https://github.com/alibaba-fusion/next/issues/2100) ([c982886](https://github.com/alibaba-fusion/next/commit/c982886))




## [1.21.4](https://github.com/alibaba-fusion/next/compare/1.21.3...1.21.4) (2020-09-15)


### Bug Fixes

* **Calendar:** set button type to button ([2b1d8a7](https://github.com/alibaba-fusion/next/commit/2b1d8a7))
* **NumberPicker:** add alwaysShowTrigger in types/number-picker ([0852dfa](https://github.com/alibaba-fusion/next/commit/0852dfa))
* **Select:** placeholder in ie11. fix [#2170](https://github.com/alibaba-fusion/next/issues/2170) ([da047c6](https://github.com/alibaba-fusion/next/commit/da047c6))
* **Select:** resolve preview bug, close [#2175](https://github.com/alibaba-fusion/next/issues/2175) ([243ea6c](https://github.com/alibaba-fusion/next/commit/243ea6c))
* **Typescript:** fix table ([013b86f](https://github.com/alibaba-fusion/next/commit/013b86f))


### Features

* **Switch:** use checkedChildren first if set preview but not renderPreview([#2173](https://github.com/alibaba-fusion/next/issues/2173)) ([608f1bd](https://github.com/alibaba-fusion/next/commit/608f1bd))




## [1.21.3](https://github.com/alibaba-fusion/next/compare/1.21.2...1.21.3) (2020-09-10)


### Bug Fixes

* add className for scrollbar size getter helper ([2714a83](https://github.com/alibaba-fusion/next/commit/2714a83))
* **Badge:** fix badge count min-width ([989566c](https://github.com/alibaba-fusion/next/commit/989566c))
* **Badge:** fix count scroll position ([03d6b9a](https://github.com/alibaba-fusion/next/commit/03d6b9a))
* **Select:** remove useless code ([0b373bc](https://github.com/alibaba-fusion/next/commit/0b373bc))
* **Shell:** navigation blocked content when device is phone, close [#2157](https://github.com/alibaba-fusion/next/issues/2157) ([3ee9158](https://github.com/alibaba-fusion/next/commit/3ee9158))
* **Table:** add cursor: pointer for sort, close [#2138](https://github.com/alibaba-fusion/next/issues/2138) ([0c49a2c](https://github.com/alibaba-fusion/next/commit/0c49a2c))
* **Table:** highlight filter when active, close [#2163](https://github.com/alibaba-fusion/next/issues/2163) ([f00a2da](https://github.com/alibaba-fusion/next/commit/f00a2da))
* **Tree:** bug when object is not extensible,close [#2070](https://github.com/alibaba-fusion/next/issues/2070) ([b70d9e6](https://github.com/alibaba-fusion/next/commit/b70d9e6))


### Features

* **Table:** add rowExpandable to remove + before row, close [#1518](https://github.com/alibaba-fusion/next/issues/1518) ([e7880a8](https://github.com/alibaba-fusion/next/commit/e7880a8))
* **Tree:** support icon prop ([#2132](https://github.com/alibaba-fusion/next/issues/2132)) ([ac0f856](https://github.com/alibaba-fusion/next/commit/ac0f856))




## [1.21.2](https://github.com/alibaba-fusion/next/compare/1.21.1...1.21.2) (2020-09-02)


### Bug Fixes

* fix css-var error ([9adb580](https://github.com/alibaba-fusion/next/commit/9adb580))
* **Input:** enhance robotness, close [#2135](https://github.com/alibaba-fusion/next/issues/2135) ([8713552](https://github.com/alibaba-fusion/next/commit/8713552))
* **TreeSelect:** bug after setState onSearch ([371cef8](https://github.com/alibaba-fusion/next/commit/371cef8))




## [1.21.1](https://github.com/alibaba-fusion/next/compare/1.20.28...1.21.1) (2020-08-28)


### Bug Fixes

* bugfix for icon in css variable ([6039021](https://github.com/alibaba-fusion/next/commit/6039021))
* ensure all [@import](https://github.com/import) 'scss/variable.scss' is replaced ([53f59d7](https://github.com/alibaba-fusion/next/commit/53f59d7))
* **List:** make loading state display: block ([96f0502](https://github.com/alibaba-fusion/next/commit/96f0502))
* **Message:** fix css var calc ([0494ad0](https://github.com/alibaba-fusion/next/commit/0494ad0))
* **Step:** fix arrow position ([503040f](https://github.com/alibaba-fusion/next/commit/503040f))
* **Tree:** add calc to tree variable ([2ee789e](https://github.com/alibaba-fusion/next/commit/2ee789e))
* **Typescript:** correct type of rating onChange ([a99a047](https://github.com/alibaba-fusion/next/commit/a99a047))


### Features

* Css variable into Next ([#2038](https://github.com/alibaba-fusion/next/issues/2038)) ([bed22a2](https://github.com/alibaba-fusion/next/commit/bed22a2))
* update theme-template ([90236b7](https://github.com/alibaba-fusion/next/commit/90236b7))
* **Button:** add active ([51107d1](https://github.com/alibaba-fusion/next/commit/51107d1))
* **Button:** update disabled configuration ([18140ab](https://github.com/alibaba-fusion/next/commit/18140ab))
* **List:** add loading/emptyContent/dataSource/renderItem, close [#2050](https://github.com/alibaba-fusion/next/issues/2050) ([#2105](https://github.com/alibaba-fusion/next/issues/2105)) ([1fb62bf](https://github.com/alibaba-fusion/next/commit/1fb62bf))
* **Locale:** add vi and it ([#2051](https://github.com/alibaba-fusion/next/issues/2051)) ([efd5da9](https://github.com/alibaba-fusion/next/commit/efd5da9))
* **NumberPicker:** add disabled classname ([de72a99](https://github.com/alibaba-fusion/next/commit/de72a99))
* **Table:** ExpandTable with StickyLock ([343a550](https://github.com/alibaba-fusion/next/commit/343a550))
* **Table:** support columns ([83ef263](https://github.com/alibaba-fusion/next/commit/83ef263))
* **Table:** update lock with position sticky, close [#1728](https://github.com/alibaba-fusion/next/issues/1728) ([8732416](https://github.com/alibaba-fusion/next/commit/8732416))
* **Upload:** add fileKeyName to set form-data name for file. fix [#1940](https://github.com/alibaba-fusion/next/issues/1940) ([6f5d5f4](https://github.com/alibaba-fusion/next/commit/6f5d5f4))
* **Upload:** add fileKeyName to set form-data name for file. fix [#1940](https://github.com/alibaba-fusion/next/issues/1940) ([df561e2](https://github.com/alibaba-fusion/next/commit/df561e2))
* **Upload:** api fileNameRender/actionRender fix [#910](https://github.com/alibaba-fusion/next/issues/910),[#1934](https://github.com/alibaba-fusion/next/issues/1934),[#1778](https://github.com/alibaba-fusion/next/issues/1778) ([acd381d](https://github.com/alibaba-fusion/next/commit/acd381d))
* **Upload:** api fileNameRender/actionRender fix [#910](https://github.com/alibaba-fusion/next/issues/910),[#1934](https://github.com/alibaba-fusion/next/issues/1934),[#1778](https://github.com/alibaba-fusion/next/issues/1778) ([d681304](https://github.com/alibaba-fusion/next/commit/d681304))




# [1.21.0](https://github.com/alibaba-fusion/next/compare/1.20.28...1.21.0) (2020-08-25)


### Features

* **Button:** add active ([51107d1](https://github.com/alibaba-fusion/next/commit/51107d1))
* **Button:** update disabled configuration ([18140ab](https://github.com/alibaba-fusion/next/commit/18140ab))
* **List:** add loading/emptyContent/dataSource/renderItem, close [#2050](https://github.com/alibaba-fusion/next/issues/2050) ([#2105](https://github.com/alibaba-fusion/next/issues/2105)) ([1fb62bf](https://github.com/alibaba-fusion/next/commit/1fb62bf))
* **Locale:** add vi and it ([#2051](https://github.com/alibaba-fusion/next/issues/2051)) ([efd5da9](https://github.com/alibaba-fusion/next/commit/efd5da9))
* **Table:** ExpandTable with StickyLock ([343a550](https://github.com/alibaba-fusion/next/commit/343a550))
* **Table:** support columns ([83ef263](https://github.com/alibaba-fusion/next/commit/83ef263))
* **Table:** update lock with position sticky, close [#1728](https://github.com/alibaba-fusion/next/issues/1728) ([8732416](https://github.com/alibaba-fusion/next/commit/8732416))
* **Upload:** add fileKeyName to set form-data name for file. fix [#1940](https://github.com/alibaba-fusion/next/issues/1940) ([6f5d5f4](https://github.com/alibaba-fusion/next/commit/6f5d5f4))
* **Upload:** add fileKeyName to set form-data name for file. fix [#1940](https://github.com/alibaba-fusion/next/issues/1940) ([df561e2](https://github.com/alibaba-fusion/next/commit/df561e2))
* **Upload:** api fileNameRender/actionRender fix [#910](https://github.com/alibaba-fusion/next/issues/910),[#1934](https://github.com/alibaba-fusion/next/issues/1934),[#1778](https://github.com/alibaba-fusion/next/issues/1778) ([acd381d](https://github.com/alibaba-fusion/next/commit/acd381d))
* **Upload:** api fileNameRender/actionRender fix [#910](https://github.com/alibaba-fusion/next/issues/910),[#1934](https://github.com/alibaba-fusion/next/issues/1934),[#1778](https://github.com/alibaba-fusion/next/issues/1778) ([d681304](https://github.com/alibaba-fusion/next/commit/d681304))




## [1.20.28](https://github.com/alibaba-fusion/next/compare/1.20.26...1.20.28) (2020-08-12)


### Bug Fixes

* **Menu:** in caseof children null, close [#2088](https://github.com/alibaba-fusion/next/issues/2088) ([7f20168](https://github.com/alibaba-fusion/next/commit/7f20168))
* **Select:** compact with string value while useDetailValue=true ([59bd67a](https://github.com/alibaba-fusion/next/commit/59bd67a))




## [1.20.26](https://github.com/alibaba-fusion/next/compare/1.20.25...1.20.26) (2020-08-11)


### Bug Fixes

* **Tree:** bug when selectable is false ([8aeeae5](https://github.com/alibaba-fusion/next/commit/8aeeae5))




## [1.20.25](https://github.com/alibaba-fusion/next/compare/1.20.24...1.20.25) (2020-08-07)


### Bug Fixes

* **Tab:** narrow close icon hot area, close [#2061](https://github.com/alibaba-fusion/next/issues/2061) ([44eaed6](https://github.com/alibaba-fusion/next/commit/44eaed6))
* **Typescript:** for Shell.Navigation, close [#2049](https://github.com/alibaba-fusion/next/issues/2049) ([36ff9a8](https://github.com/alibaba-fusion/next/commit/36ff9a8))
* **VirtualList:** prevent extra calculations, close [#2068](https://github.com/alibaba-fusion/next/issues/2068) ([e35dde7](https://github.com/alibaba-fusion/next/commit/e35dde7))




## [1.20.24](https://github.com/alibaba-fusion/next/compare/1.20.23...1.20.24) (2020-07-30)


### Bug Fixes

* **Select:** enhance value type must be object ([45c6bd8](https://github.com/alibaba-fusion/next/commit/45c6bd8))
* **Shell:** phone navigaiton should be fullscreen & fix ie 11 ([0b709ff](https://github.com/alibaba-fusion/next/commit/0b709ff))
* **Typescript:** add preview ([cb8c854](https://github.com/alibaba-fusion/next/commit/cb8c854))




## [1.20.23](https://github.com/alibaba-fusion/next/compare/1.20.22...1.20.23) (2020-07-28)


### Bug Fixes

* **Menu:** enhance robotness ([9098d95](https://github.com/alibaba-fusion/next/commit/9098d95))
* **Tab:** offest exception when set translate scale, close [#1928](https://github.com/alibaba-fusion/next/issues/1928) ([c42e0f7](https://github.com/alibaba-fusion/next/commit/c42e0f7))
* **Typescript:** replace {} with any ([d3bfd09](https://github.com/alibaba-fusion/next/commit/d3bfd09))


### Features

* **Select:** add defaultHighlightKey ([ad8c5cb](https://github.com/alibaba-fusion/next/commit/ad8c5cb))




## [1.20.22](https://github.com/alibaba-fusion/next/compare/1.20.21...1.20.22) (2020-07-27)


### Bug Fixes

* **Overlay:** bug on Gateway when settting ContainerNode,close [#2033](https://github.com/alibaba-fusion/next/issues/2033) ([0cdac60](https://github.com/alibaba-fusion/next/commit/0cdac60))




## [1.20.21](https://github.com/alibaba-fusion/next/compare/1.20.20...1.20.21) (2020-07-23)


### Bug Fixes

* **Menu:** renderMore with className ([51b412a](https://github.com/alibaba-fusion/next/commit/51b412a))
* **Typescript:** correct d.ts ([0a6833a](https://github.com/alibaba-fusion/next/commit/0a6833a))


### Features

* **Select:** api tagClosable for disable Tag close fix [#2025](https://github.com/alibaba-fusion/next/issues/2025) ([c754ee9](https://github.com/alibaba-fusion/next/commit/c754ee9))




## [1.20.20](https://github.com/alibaba-fusion/next/compare/1.20.19...1.20.20) (2020-07-22)


### Bug Fixes

* **Menu:** shake and endless loop, close [#2014](https://github.com/alibaba-fusion/next/issues/2014) ([4da815c](https://github.com/alibaba-fusion/next/commit/4da815c))
* **Search:** sass syntax error ([13515b5](https://github.com/alibaba-fusion/next/commit/13515b5))
* **Select:** linear-gradient in safari. fix [#1922](https://github.com/alibaba-fusion/next/issues/1922) ([5081e7a](https://github.com/alibaba-fusion/next/commit/5081e7a))
* **Typescript:** fix {} ([#2011](https://github.com/alibaba-fusion/next/issues/2011)) ([e3b934b](https://github.com/alibaba-fusion/next/commit/e3b934b))
* **Upload:** value must be Array close [#2019](https://github.com/alibaba-fusion/next/issues/2019) ([19c687f](https://github.com/alibaba-fusion/next/commit/19c687f))




## [1.20.19](https://github.com/alibaba-fusion/next/compare/1.20.18...1.20.19) (2020-07-15)


### Bug Fixes

* **DatePicker:** disabledDate invalid when type year/month,close [#1565](https://github.com/alibaba-fusion/next/issues/1565) ([d88beac](https://github.com/alibaba-fusion/next/commit/d88beac))
* **GateWay:** getDerivedStateFromProps don`t execute ([faf6a90](https://github.com/alibaba-fusion/next/commit/faf6a90))
* **Search:** fix Incompatible units on sass compile ([ecfd10f](https://github.com/alibaba-fusion/next/commit/ecfd10f))
* **Table:** fix expanded table border, close [#884](https://github.com/alibaba-fusion/next/issues/884) ([18d82e5](https://github.com/alibaba-fusion/next/commit/18d82e5))
* **Tree:** should stop stopPropagation keyboard event when editing node ([70233fb](https://github.com/alibaba-fusion/next/commit/70233fb))
* **Typescript:** close [#1789](https://github.com/alibaba-fusion/next/issues/1789) ([d1b296e](https://github.com/alibaba-fusion/next/commit/d1b296e))




## [1.20.18](https://github.com/alibaba-fusion/next/compare/1.20.17...1.20.18) (2020-07-08)




## [1.20.17](https://github.com/alibaba-fusion/next/compare/1.20.16...1.20.17) (2020-07-08)


### Bug Fixes

* **Button:** fix iconSize propType ([#1963](https://github.com/alibaba-fusion/next/issues/1963)) ([a995d38](https://github.com/alibaba-fusion/next/commit/a995d38))
* **Typescript:** update table upload ([804afe4](https://github.com/alibaba-fusion/next/commit/804afe4))
* **Util:** enhance robotness ([097f43c](https://github.com/alibaba-fusion/next/commit/097f43c))




## [1.20.16](https://github.com/alibaba-fusion/next/compare/1.20.15...1.20.16) (2020-06-28)


### Bug Fixes

* **Select:** showDataSourceChildren with empty child ([dee1bfb](https://github.com/alibaba-fusion/next/commit/dee1bfb))




## [1.20.15](https://github.com/alibaba-fusion/next/compare/1.20.14...1.20.15) (2020-06-28)


### Features

* **Select:** add showDataSourceChildren to ignore children fix [#1955](https://github.com/alibaba-fusion/next/issues/1955) ([ada0ff6](https://github.com/alibaba-fusion/next/commit/ada0ff6))




## [1.20.14](https://github.com/alibaba-fusion/next/compare/1.20.13...1.20.14) (2020-06-22)


### Bug Fixes

* **Progress:** unexpected style when number is under threshold, close [#1813](https://github.com/alibaba-fusion/next/issues/1813) ([e0ce8aa](https://github.com/alibaba-fusion/next/commit/e0ce8aa))
* **TreeSelect:** bug on search when use virtual ([4debed7](https://github.com/alibaba-fusion/next/commit/4debed7))
* **Typescript:** close [#1951](https://github.com/alibaba-fusion/next/issues/1951) ([1d3b1b9](https://github.com/alibaba-fusion/next/commit/1d3b1b9))




## [1.20.13](https://github.com/alibaba-fusion/next/compare/1.20.12...1.20.13) (2020-06-17)


### Bug Fixes

* **Table:** filter under control should work, close [#1945](https://github.com/alibaba-fusion/next/issues/1945) ([433bfc0](https://github.com/alibaba-fusion/next/commit/433bfc0))




## [1.20.12](https://github.com/alibaba-fusion/next/compare/1.20.11...1.20.12) (2020-06-11)


### Bug Fixes

* **Transfer:** fix item of right panel can't be checked when ds changed ([8737a08](https://github.com/alibaba-fusion/next/commit/8737a08))


### Features

* **Tab:** add disableKeyboard property ([#1929](https://github.com/alibaba-fusion/next/issues/1929)) ([494ee93](https://github.com/alibaba-fusion/next/commit/494ee93))




## [1.20.11](https://github.com/alibaba-fusion/next/compare/1.20.10...1.20.11) (2020-06-10)


### Bug Fixes

* **Dialog:** should has max-height when setting height,close [#1912](https://github.com/alibaba-fusion/next/issues/1912) ([902a2d2](https://github.com/alibaba-fusion/next/commit/902a2d2))
* **Select:** AutoComplete input focus selectionStart close [#1913](https://github.com/alibaba-fusion/next/issues/1913) ([#1921](https://github.com/alibaba-fusion/next/issues/1921)) ([a3f17c3](https://github.com/alibaba-fusion/next/commit/a3f17c3))
* **Table:** table should scroll inside itself ([9398869](https://github.com/alibaba-fusion/next/commit/9398869))
* **Tree:** fix bug on isLeaf and level ([#1917](https://github.com/alibaba-fusion/next/issues/1917)) ([f4d89fd](https://github.com/alibaba-fusion/next/commit/f4d89fd))
* **Typescript:** update ConfigProvider ([9950b51](https://github.com/alibaba-fusion/next/commit/9950b51))
* **VirtualList:** enhance robotness ([ddcde86](https://github.com/alibaba-fusion/next/commit/ddcde86))




## [1.20.10](https://github.com/alibaba-fusion/next/compare/1.20.9...1.20.10) (2020-06-03)


### Bug Fixes

* **Tree:** fix error when dataSource is empty ([a8fbffb](https://github.com/alibaba-fusion/next/commit/a8fbffb))




## [1.20.9](https://github.com/alibaba-fusion/next/compare/1.20.8...1.20.9) (2020-06-03)


### Bug Fixes

* **Tree:** support styled component ([be52446](https://github.com/alibaba-fusion/next/commit/be52446))




## [1.20.8](https://github.com/alibaba-fusion/next/compare/1.20.7...1.20.8) (2020-06-02)


### Bug Fixes

* **DatePicker:** icon className should be string ([80fc6cb](https://github.com/alibaba-fusion/next/commit/80fc6cb))
* **Overlay:** dom should ready before onOpen, close [#1901](https://github.com/alibaba-fusion/next/issues/1901) ([6ac02c0](https://github.com/alibaba-fusion/next/commit/6ac02c0))
* **Util:** adapt to  rollup, close [#1898](https://github.com/alibaba-fusion/next/issues/1898) ([e22e4a4](https://github.com/alibaba-fusion/next/commit/e22e4a4))




## [1.20.7](https://github.com/alibaba-fusion/next/compare/1.20.6...1.20.7) (2020-05-28)


### Bug Fixes

* **Breadcrumb:** separator icon's vertical align should be middle ([6f947a5](https://github.com/alibaba-fusion/next/commit/6f947a5))
* **Drawer:** title should be react node ([080ac7b](https://github.com/alibaba-fusion/next/commit/080ac7b))
* **Input:** IE10 can't find getDerivedStateFromProps ([8ef2c4c](https://github.com/alibaba-fusion/next/commit/8ef2c4c))
* **Typescript:** add types for Button iconSize ([#1882](https://github.com/alibaba-fusion/next/issues/1882)) ([8df9bac](https://github.com/alibaba-fusion/next/commit/8df9bac))
* **Typescript:** update typescript, close [#1875](https://github.com/alibaba-fusion/next/issues/1875) ([b3a3a26](https://github.com/alibaba-fusion/next/commit/b3a3a26))
* **Upload:** enhance robustness ([53b3cd7](https://github.com/alibaba-fusion/next/commit/53b3cd7))
* **Upload:** support upload a directory, close [#1877](https://github.com/alibaba-fusion/next/issues/1877) ([c3a2b7b](https://github.com/alibaba-fusion/next/commit/c3a2b7b))


### Features

* **Overlay:** support render overlay in shadow dom ([#1869](https://github.com/alibaba-fusion/next/issues/1869)) ([ba100cc](https://github.com/alibaba-fusion/next/commit/ba100cc))
* **Transfer:** add API showCheckAll & add demo ([d55c82d](https://github.com/alibaba-fusion/next/commit/d55c82d))




## [1.20.6](https://github.com/alibaba-fusion/next/compare/1.20.5...1.20.6) (2020-05-21)


### Bug Fixes

* **Box:** resolve justify wont work when wrap&spacing setted, close[#1855](https://github.com/alibaba-fusion/next/issues/1855) ([bbaf45b](https://github.com/alibaba-fusion/next/commit/bbaf45b))
* **DatePicker:** should not resetTime as default,close [#1840](https://github.com/alibaba-fusion/next/issues/1840) ([aa19795](https://github.com/alibaba-fusion/next/commit/aa19795))
* **Overlay:** should base on BaseElement`offset ([21c3608](https://github.com/alibaba-fusion/next/commit/21c3608))
* **Table:** bug of colspan in first render ([97f4b53](https://github.com/alibaba-fusion/next/commit/97f4b53))
* **Upload:** resolve Upload.Card isPreview not work, close[#1847](https://github.com/alibaba-fusion/next/issues/1847) ([54ff5b2](https://github.com/alibaba-fusion/next/commit/54ff5b2))


### Features

* **Transfer:** support virtual list ([9dd37fb](https://github.com/alibaba-fusion/next/commit/9dd37fb))




## [1.20.5](https://github.com/alibaba-fusion/next/compare/1.20.4...1.20.5) (2020-05-15)


### Bug Fixes

* correct Checkbox&Radio's display name ([02d8d1b](https://github.com/alibaba-fusion/next/commit/02d8d1b))




## [1.20.4](https://github.com/alibaba-fusion/next/compare/1.20.3...1.20.4) (2020-05-13)


### Bug Fixes

* **CascaderSelect:** support prop expandedValue,close [#1802](https://github.com/alibaba-fusion/next/issues/1802) ([9613579](https://github.com/alibaba-fusion/next/commit/9613579))
* **Icon:** use data-namespace instread of id ([849ece2](https://github.com/alibaba-fusion/next/commit/849ece2))
* **Table:** lock width colSpan cause endless loop, close [#1837](https://github.com/alibaba-fusion/next/issues/1837) ([e243acf](https://github.com/alibaba-fusion/next/commit/e243acf))
* **Table:** update adjustIfTableNotNeedLock(), close [#1832](https://github.com/alibaba-fusion/next/issues/1832) ([0681a9a](https://github.com/alibaba-fusion/next/commit/0681a9a))
* **Upload:** add type incase of lowversion theme ([3aa2e31](https://github.com/alibaba-fusion/next/commit/3aa2e31))
* **Upload:** Upload.Card prefix ([c7c1f40](https://github.com/alibaba-fusion/next/commit/c7c1f40))


### Features

* **Tree:** support virtual scroll ([#1746](https://github.com/alibaba-fusion/next/issues/1746)) ([787ab40](https://github.com/alibaba-fusion/next/commit/787ab40))




## [1.20.3](https://github.com/alibaba-fusion/next/compare/1.20.2...1.20.3) (2020-05-09)


### Bug Fixes

* **Icon:** add id for custom icon ([e852745](https://github.com/alibaba-fusion/next/commit/e852745))
* **Select:** error when useVirtual with header or footer, close [#1821](https://github.com/alibaba-fusion/next/issues/1821) ([3af6d61](https://github.com/alibaba-fusion/next/commit/3af6d61))
* **Select:** item should stay in valueRender props ([abfb3f6](https://github.com/alibaba-fusion/next/commit/abfb3f6))
* **Typescript:**  add followTrigger for cascader-select([#1822](https://github.com/alibaba-fusion/next/issues/1822)) ([6e1d222](https://github.com/alibaba-fusion/next/commit/6e1d222))




## [1.20.2](https://github.com/alibaba-fusion/next/compare/1.20.1...1.20.2) (2020-04-29)


### Bug Fixes

* **DatePicker:** resolve wrong value onOk with ranges prop,close [#1799](https://github.com/alibaba-fusion/next/issues/1799) ([981599d](https://github.com/alibaba-fusion/next/commit/981599d))
* **Input:** size of textarea close [#1795](https://github.com/alibaba-fusion/next/issues/1795) ([a586d56](https://github.com/alibaba-fusion/next/commit/a586d56))
* **Menu:** show title only when children is string, close [#1804](https://github.com/alibaba-fusion/next/issues/1804) ([6e499af](https://github.com/alibaba-fusion/next/commit/6e499af))
* **Tag:** make tag text selectable ([2fbcb72](https://github.com/alibaba-fusion/next/commit/2fbcb72))




## [1.20.1](https://github.com/alibaba-fusion/next/compare/1.20.0...1.20.1) (2020-04-26)


### Bug Fixes

* **Box:** support to IE10+ ([26e0b46](https://github.com/alibaba-fusion/next/commit/26e0b46))
* **ConfigProvider:** set first locale ([7a39dad](https://github.com/alibaba-fusion/next/commit/7a39dad))
* **ConfigProvider:** should work in SPA, close [#286](https://github.com/alibaba-fusion/next/issues/286) ([b67276e](https://github.com/alibaba-fusion/next/commit/b67276e))
* **Input:** disabled input radius close [#1592](https://github.com/alibaba-fusion/next/issues/1592) ([3d823dd](https://github.com/alibaba-fusion/next/commit/3d823dd))
* **Overflow:** fix disableScroll in safari ([5746a55](https://github.com/alibaba-fusion/next/commit/5746a55))
* **Select:** one can custom title for menu in select ([8fe64e4](https://github.com/alibaba-fusion/next/commit/8fe64e4))
* **Shell:** fixed for Shell.Page ([006a861](https://github.com/alibaba-fusion/next/commit/006a861))
* **Shell:** hotfix for flex auto ([a8ffc36](https://github.com/alibaba-fusion/next/commit/a8ffc36))
* **Step:** fix bug of label-horizontal mode ([52269c8](https://github.com/alibaba-fusion/next/commit/52269c8)), closes [#1769](https://github.com/alibaba-fusion/next/issues/1769)
* **Table:** header icon should on right of content, close [#1785](https://github.com/alibaba-fusion/next/issues/1785) ([3cfc859](https://github.com/alibaba-fusion/next/commit/3cfc859))
* **Typescript:** add event to onFocus&onBlur, close [#1764](https://github.com/alibaba-fusion/next/issues/1764) ([0f5ac95](https://github.com/alibaba-fusion/next/commit/0f5ac95))
* **Typescript:** update Datepicker d.ts ([9d6f206](https://github.com/alibaba-fusion/next/commit/9d6f206))
* **Typescript:** update menubutton d.ts ([eab2d1b](https://github.com/alibaba-fusion/next/commit/eab2d1b))




# [1.20.0](https://github.com/alibaba-fusion/next/compare/1.19.24...1.20.0) (2020-04-10)


### Bug Fixes

* **Form:** react17 lifecycles ([a6e5d69](https://github.com/alibaba-fusion/next/commit/a6e5d69))
* **Menu:** _k2n is null in root, but has value in root.state ([fc9ef09](https://github.com/alibaba-fusion/next/commit/fc9ef09))
* **Nav:** icon should be placeed in center ([#1751](https://github.com/alibaba-fusion/next/issues/1751)) ([3afad78](https://github.com/alibaba-fusion/next/commit/3afad78))
* **Overlay& Nav:** wrong position when pinElement is fixed ([#1617](https://github.com/alibaba-fusion/next/issues/1617)) ([b01f457](https://github.com/alibaba-fusion/next/commit/b01f457)), closes [#1599](https://github.com/alibaba-fusion/next/issues/1599)
* **Select:** react17 lifecycles ([417a46d](https://github.com/alibaba-fusion/next/commit/417a46d))
* **Shell:** update lifecycle ([e09fdd2](https://github.com/alibaba-fusion/next/commit/e09fdd2))
* **Tab:** fix tab style and aria ([#1577](https://github.com/alibaba-fusion/next/issues/1577)) ([338876f](https://github.com/alibaba-fusion/next/commit/338876f))
* **Upload:** react17 lifecycles ([7159719](https://github.com/alibaba-fusion/next/commit/7159719))


### Features

* **Badge:** remove string ref ([bb8e428](https://github.com/alibaba-fusion/next/commit/bb8e428))
* **Breadcrumb:** make sep icon configurable ([37049c7](https://github.com/alibaba-fusion/next/commit/37049c7))
* **Button:** add icons for custom loading icon ([#1624](https://github.com/alibaba-fusion/next/issues/1624)) ([3132443](https://github.com/alibaba-fusion/next/commit/3132443))
* **Calendar:** make icons configurable ([#1634](https://github.com/alibaba-fusion/next/issues/1634)) ([1bb0495](https://github.com/alibaba-fusion/next/commit/1bb0495))
* **Calendar:** update string ref ([e91c3aa](https://github.com/alibaba-fusion/next/commit/e91c3aa))
* **Calendar:** upgrade life circle ([a0148fe](https://github.com/alibaba-fusion/next/commit/a0148fe))
* **Cascader:** update string ref ([b60946e](https://github.com/alibaba-fusion/next/commit/b60946e))
* **Cascader:** upgrade life circle ([af6e701](https://github.com/alibaba-fusion/next/commit/af6e701))
* **CascaderSelect:** upgrade life circle ([8d3b25d](https://github.com/alibaba-fusion/next/commit/8d3b25d))
* **Checkbox:** make checkbox icon configurable ([#1637](https://github.com/alibaba-fusion/next/issues/1637)) ([0939565](https://github.com/alibaba-fusion/next/commit/0939565))
* **Collapse:** make arrow configurable ([bd7d2f0](https://github.com/alibaba-fusion/next/commit/bd7d2f0))
* **DatePicker:** icon config ([#1651](https://github.com/alibaba-fusion/next/issues/1651)) ([0436069](https://github.com/alibaba-fusion/next/commit/0436069))
* **DatePicker:** icon config ([#1652](https://github.com/alibaba-fusion/next/issues/1652)) ([0a9d91e](https://github.com/alibaba-fusion/next/commit/0a9d91e))
* **DatePicker:** upgrade life circle ([6d33f6b](https://github.com/alibaba-fusion/next/commit/6d33f6b))
* **Field:** add api getValueFormatter/setValueFormatter fix [#781](https://github.com/alibaba-fusion/next/issues/781) ([#1646](https://github.com/alibaba-fusion/next/issues/1646)) ([ee7db6c](https://github.com/alibaba-fusion/next/commit/ee7db6c))
* **Form:** api useLabelForErrorMessage for replace name fix [#294](https://github.com/alibaba-fusion/next/issues/294) ([8b483f8](https://github.com/alibaba-fusion/next/commit/8b483f8))
* **Icon:** add icons ([#1574](https://github.com/alibaba-fusion/next/issues/1574)) ([929da88](https://github.com/alibaba-fusion/next/commit/929da88))
* **Input:** hint icon overlap ([#1729](https://github.com/alibaba-fusion/next/issues/1729)) ([43cd5a3](https://github.com/alibaba-fusion/next/commit/43cd5a3))
* **Input/upload:** support icon config for [#1256](https://github.com/alibaba-fusion/next/issues/1256) ([#1625](https://github.com/alibaba-fusion/next/issues/1625)) ([08596b1](https://github.com/alibaba-fusion/next/commit/08596b1))
* **List:** make list configurable ([6a98990](https://github.com/alibaba-fusion/next/commit/6a98990))
* **Locale:** add language zh-hk  ([3101978](https://github.com/alibaba-fusion/next/commit/3101978))
* **Menu:** make icons be cofigurable ([18b7982](https://github.com/alibaba-fusion/next/commit/18b7982))
* **Menu:** update lifecyle ([32a16a4](https://github.com/alibaba-fusion/next/commit/32a16a4))
* **MenuButton:** support theme icons config ([563d2a3](https://github.com/alibaba-fusion/next/commit/563d2a3))
* **MenuButton:** upgrade life circle ([3875624](https://github.com/alibaba-fusion/next/commit/3875624))
* **NumberPicker:** api for show/hide trigger fix [#1448](https://github.com/alibaba-fusion/next/issues/1448),fix [#1464](https://github.com/alibaba-fusion/next/issues/1464) ([7df4720](https://github.com/alibaba-fusion/next/commit/7df4720)), closes [#1403](https://github.com/alibaba-fusion/next/issues/1403)
* **Pagination:** make icons configurable ([846f286](https://github.com/alibaba-fusion/next/commit/846f286))
* **Rating:** make rating icon configurable ([32300d4](https://github.com/alibaba-fusion/next/commit/32300d4))
* **Rating:** update string ref ([dee5056](https://github.com/alibaba-fusion/next/commit/dee5056))
* **Search:** add focus for search/select close #[#1669](https://github.com/alibaba-fusion/next/issues/1669) ([205ff6e](https://github.com/alibaba-fusion/next/commit/205ff6e))
* **Search:** make icons be configurable ([fd1e0ff](https://github.com/alibaba-fusion/next/commit/fd1e0ff))
* **Search:** new api for autoHighlightFirstItem fix [#1688](https://github.com/alibaba-fusion/next/issues/1688),[#1517](https://github.com/alibaba-fusion/next/issues/1517) ([8511283](https://github.com/alibaba-fusion/next/commit/8511283))
* **Select:** make icons configurable ([#1648](https://github.com/alibaba-fusion/next/issues/1648)) ([f930202](https://github.com/alibaba-fusion/next/commit/f930202))
* **Select:** treat selectAll as locale ([687c898](https://github.com/alibaba-fusion/next/commit/687c898))
* **Shell:** support fixedHeader&Navigation fixed mode ([#1738](https://github.com/alibaba-fusion/next/issues/1738)) ([0b674b6](https://github.com/alibaba-fusion/next/commit/0b674b6))
* **Slider:** update lifecycle ([89658ac](https://github.com/alibaba-fusion/next/commit/89658ac))
* **SplitButton:** support fold / unfold icon config ([dd22419](https://github.com/alibaba-fusion/next/commit/dd22419))
* **SplitButton:** upgrade life circle ([c2b224b](https://github.com/alibaba-fusion/next/commit/c2b224b))
* **Step:** adjust while receive props ([#1659](https://github.com/alibaba-fusion/next/issues/1659)) ([027de8e](https://github.com/alibaba-fusion/next/commit/027de8e))
* **Step:** update lifecycle ([9a695e2](https://github.com/alibaba-fusion/next/commit/9a695e2))
* **Tab:** make tab icon configurable in both designer and developer  ([#1631](https://github.com/alibaba-fusion/next/issues/1631)) ([1cd026e](https://github.com/alibaba-fusion/next/commit/1cd026e))
* **Table:** add tableLayout tableWidth ([#1725](https://github.com/alibaba-fusion/next/issues/1725)) ([188a761](https://github.com/alibaba-fusion/next/commit/188a761)), closes [#1730](https://github.com/alibaba-fusion/next/issues/1730) [#1731](https://github.com/alibaba-fusion/next/issues/1731)
* **Table:** update lifecycle ([c4b992b](https://github.com/alibaba-fusion/next/commit/c4b992b))
* **Table:** update string ref ([7bc2e3a](https://github.com/alibaba-fusion/next/commit/7bc2e3a))
* **TimePicker:** make icon configurable in theme ([#1655](https://github.com/alibaba-fusion/next/issues/1655)) ([a525c05](https://github.com/alibaba-fusion/next/commit/a525c05))
* **Transfer:** make transfer simple move icon configurable ([a40abfd](https://github.com/alibaba-fusion/next/commit/a40abfd))
* **Transfer:** update lifecycle ([#1554](https://github.com/alibaba-fusion/next/issues/1554)) ([2b9995b](https://github.com/alibaba-fusion/next/commit/2b9995b))
* **Tree:** make arrow configurable ([975fcac](https://github.com/alibaba-fusion/next/commit/975fcac))
* **Tree:** update string ref ([83d4c0e](https://github.com/alibaba-fusion/next/commit/83d4c0e))
* **Tree:** upgrade life circle ([9cbab09](https://github.com/alibaba-fusion/next/commit/9cbab09))
* **TreeSelect:** upgrade life circle ([a0402d2](https://github.com/alibaba-fusion/next/commit/a0402d2))
* **Upload:** update string ref ([a7c0ab7](https://github.com/alibaba-fusion/next/commit/a7c0ab7))
* **VirtualList:** update lifecycle ([db17b93](https://github.com/alibaba-fusion/next/commit/db17b93))




## [1.19.24](https://github.com/alibaba-fusion/next/compare/1.19.23...1.19.24) (2020-04-08)


### Bug Fixes

* **Button:** pass style underline to button ([#1750](https://github.com/alibaba-fusion/next/issues/1750)) ([d8cc226](https://github.com/alibaba-fusion/next/commit/d8cc226))
* **Nav:** fix sub nav vertical not middle ([#1744](https://github.com/alibaba-fusion/next/issues/1744)) ([aaf6f69](https://github.com/alibaba-fusion/next/commit/aaf6f69))
* **Pagination:** reset input if value is illegal ([#1747](https://github.com/alibaba-fusion/next/issues/1747)) ([9fbadb7](https://github.com/alibaba-fusion/next/commit/9fbadb7))




## [1.19.23](https://github.com/alibaba-fusion/next/compare/1.19.22...1.19.23) (2020-04-03)


### Bug Fixes

* **Cascader:** support to remove title, close [#1665](https://github.com/alibaba-fusion/next/issues/1665) ([#1742](https://github.com/alibaba-fusion/next/issues/1742)) ([ed9df0c](https://github.com/alibaba-fusion/next/commit/ed9df0c))
* **Dialog:** get the wrong computed size of borderbox in IE,close [#1609](https://github.com/alibaba-fusion/next/issues/1609) ([#1732](https://github.com/alibaba-fusion/next/issues/1732)) ([e8b4caf](https://github.com/alibaba-fusion/next/commit/e8b4caf))
* **Nav:** resolve issue [#215](https://github.com/alibaba-fusion/next/issues/215) ([1d90980](https://github.com/alibaba-fusion/next/commit/1d90980))
* **Slider:** correct dotsRender arguments, close [#1730](https://github.com/alibaba-fusion/next/issues/1730) ([#1731](https://github.com/alibaba-fusion/next/issues/1731)) ([10c384a](https://github.com/alibaba-fusion/next/commit/10c384a))




## [1.19.22](https://github.com/alibaba-fusion/next/compare/1.19.21...1.19.22) (2020-03-31)




## [1.19.21](https://github.com/alibaba-fusion/next/compare/1.19.20...1.19.21) (2020-03-27)


### Bug Fixes

* **TreeSelect:** resolve repeated label issue, close [#1633](https://github.com/alibaba-fusion/next/issues/1633) ([3d78fab](https://github.com/alibaba-fusion/next/commit/3d78fab))
* **Util:** enhance robotness ([9a3a3ce](https://github.com/alibaba-fusion/next/commit/9a3a3ce))




## [1.19.20](https://github.com/alibaba-fusion/next/compare/1.19.19...1.19.20) (2020-03-26)


### Bug Fixes

* **CascaderSelect:** resolve resultAutoWidth prop unuseless, close [#1710](https://github.com/alibaba-fusion/next/issues/1710) ([#1713](https://github.com/alibaba-fusion/next/issues/1713)) ([f343444](https://github.com/alibaba-fusion/next/commit/f343444))
* **Form:** Form adapts to React.Fragment, close[#1702](https://github.com/alibaba-fusion/next/issues/1702) ([cc7121a](https://github.com/alibaba-fusion/next/commit/cc7121a))
* **Form:** textarea font size in preview, close [#1711](https://github.com/alibaba-fusion/next/issues/1711) ([dd4a973](https://github.com/alibaba-fusion/next/commit/dd4a973))
* **ResponsiveGrid:** merge style, close [#1707](https://github.com/alibaba-fusion/next/issues/1707) ([70cb3ab](https://github.com/alibaba-fusion/next/commit/70cb3ab))
* **Tab:** wait until animation end, close [#1674](https://github.com/alibaba-fusion/next/issues/1674) ([#1677](https://github.com/alibaba-fusion/next/issues/1677)) ([bd666f7](https://github.com/alibaba-fusion/next/commit/bd666f7))
* **Typescript:** update type of menu onOpen arguments ([#1714](https://github.com/alibaba-fusion/next/issues/1714)) ([418f370](https://github.com/alibaba-fusion/next/commit/418f370))


### Features

* **Box:** add component api ([111d1ea](https://github.com/alibaba-fusion/next/commit/111d1ea))
* **ResponsiveGrid:** add dense ([d0dd1bc](https://github.com/alibaba-fusion/next/commit/d0dd1bc))




## [1.19.19](https://github.com/alibaba-fusion/next/compare/1.19.18...1.19.19) (2020-03-20)


### Bug Fixes

* **Balloon:** add break-word to Tooltip, close [#1680](https://github.com/alibaba-fusion/next/issues/1680) ([#1681](https://github.com/alibaba-fusion/next/issues/1681)) ([f0a5c64](https://github.com/alibaba-fusion/next/commit/f0a5c64))
* **Menu:** 0-1 is not parent of 0-10, close [#1701](https://github.com/alibaba-fusion/next/issues/1701) ([9b2b74a](https://github.com/alibaba-fusion/next/commit/9b2b74a))
* **Tree:** stop dragover event propagation, close [#1662](https://github.com/alibaba-fusion/next/issues/1662) ([22afc6b](https://github.com/alibaba-fusion/next/commit/22afc6b))




## [1.19.18](https://github.com/alibaba-fusion/next/compare/1.19.17...1.19.18) (2020-03-09)


### Bug Fixes

* **DatePicker:** support string placeholder ([4316946](https://github.com/alibaba-fusion/next/commit/4316946))
* **Icon:** add className when use iconfont ([face9a4](https://github.com/alibaba-fusion/next/commit/face9a4))
* **TimePicker:** resolve bugs on blur handler, close [#1533](https://github.com/alibaba-fusion/next/issues/1533) ([ca450ab](https://github.com/alibaba-fusion/next/commit/ca450ab))
* **Typescript:** second params is not required in ts ([#1657](https://github.com/alibaba-fusion/next/issues/1657)) ([5aa47ba](https://github.com/alibaba-fusion/next/commit/5aa47ba))




## [1.19.17](https://github.com/alibaba-fusion/next/compare/1.19.16...1.19.17) (2020-03-06)


### Bug Fixes

* **DatePicker:** support placeholder prop for range-picker fix [#1610](https://github.com/alibaba-fusion/next/issues/1610) ([1f7f8eb](https://github.com/alibaba-fusion/next/commit/1f7f8eb))
* **Overlay:** close [#1604](https://github.com/alibaba-fusion/next/issues/1604) ([dfbbe2a](https://github.com/alibaba-fusion/next/commit/dfbbe2a))
* **Select:** support header&footer for popup menu fix [#1583](https://github.com/alibaba-fusion/next/issues/1583) ([#1598](https://github.com/alibaba-fusion/next/issues/1598)) ([784714a](https://github.com/alibaba-fusion/next/commit/784714a))




## [1.19.16](https://github.com/alibaba-fusion/next/compare/1.19.15...1.19.16) (2020-02-27)


### Bug Fixes

* **Card:** bad time of warning, close [#1612](https://github.com/alibaba-fusion/next/issues/1612) ([02e63e4](https://github.com/alibaba-fusion/next/commit/02e63e4))
* **Checkbox:** pass value and name to input dom ([3e8f2d9](https://github.com/alibaba-fusion/next/commit/3e8f2d9))




## [1.19.15](https://github.com/alibaba-fusion/next/compare/1.19.14...1.19.15) (2020-02-24)


### Bug Fixes

* correct sideEffect path ([9e52828](https://github.com/alibaba-fusion/next/commit/9e52828))




## [1.19.14](https://github.com/alibaba-fusion/next/compare/1.19.13...1.19.14) (2020-02-21)


### Bug Fixes

* **Tree:** bug of selected close [#1578](https://github.com/alibaba-fusion/next/issues/1578) ([4455570](https://github.com/alibaba-fusion/next/commit/4455570))




## [1.19.13](https://github.com/alibaba-fusion/next/compare/1.19.12...1.19.13) (2020-02-14)


### Bug Fixes

* **Collapse:** collapsed panel should be overflow hidden, close [#1569](https://github.com/alibaba-fusion/next/issues/1569) ([c2767ec](https://github.com/alibaba-fusion/next/commit/c2767ec))


### Features

* **Shell:** add align for Shell.Navigaiton ([#1576](https://github.com/alibaba-fusion/next/issues/1576)) ([e6318c3](https://github.com/alibaba-fusion/next/commit/e6318c3))
* **Table:** add htmlTitle for header ([8a89c0a](https://github.com/alibaba-fusion/next/commit/8a89c0a))




## [1.19.12](https://github.com/alibaba-fusion/next/compare/1.19.11...1.19.12) (2020-02-10)


### Bug Fixes

* **Checkbox:** allow pass title to label ([fd36f8c](https://github.com/alibaba-fusion/next/commit/fd36f8c))
* **Tab:** fix tab hover shake ([#1563](https://github.com/alibaba-fusion/next/issues/1563)) ([c921c89](https://github.com/alibaba-fusion/next/commit/c921c89))




## [1.19.11](https://github.com/alibaba-fusion/next/compare/1.19.10...1.19.11) (2020-02-05)


### Bug Fixes

* **NumberPicker:** bug of delete like 0.01 => 0.0 ([7377629](https://github.com/alibaba-fusion/next/commit/7377629))
* **NumberPicker:** can input char while value=null ([be34205](https://github.com/alibaba-fusion/next/commit/be34205))
* **NumberPicker:** remove iconSize ([030cb2c](https://github.com/alibaba-fusion/next/commit/030cb2c))
* **Table:** add title for table header, close [#1550](https://github.com/alibaba-fusion/next/issues/1550) ([1fe345c](https://github.com/alibaba-fusion/next/commit/1fe345c))
* **Upload:** Compatibility in ie/firefox ([23083ee](https://github.com/alibaba-fusion/next/commit/23083ee))




## [1.19.10](https://github.com/alibaba-fusion/next/compare/1.19.9...1.19.10) (2020-01-20)


### Bug Fixes

* **Select:** add one key clear. close [#1422](https://github.com/alibaba-fusion/next/issues/1422) ([7d0a66f](https://github.com/alibaba-fusion/next/commit/7d0a66f))
* **Table:** fix ssr ([cebb6e6](https://github.com/alibaba-fusion/next/commit/cebb6e6))
* **Table:** lock columns disorder when no header, close [#1543](https://github.com/alibaba-fusion/next/issues/1543) ([af405c2](https://github.com/alibaba-fusion/next/commit/af405c2))
* **Table:** primaryKey is 0 ([67ce931](https://github.com/alibaba-fusion/next/commit/67ce931))
* **Upload:** bugs of IE ([7e83236](https://github.com/alibaba-fusion/next/commit/7e83236))


### Features

* **Form:** make preview configurable ([03c8326](https://github.com/alibaba-fusion/next/commit/03c8326))
* **Menu:** add render more ([67cb1a0](https://github.com/alibaba-fusion/next/commit/67cb1a0))




## [1.19.9](https://github.com/alibaba-fusion/next/compare/1.19.8...1.19.9) (2020-01-14)


### Bug Fixes

* **Dialog:** popupContainer of ConfigProvider should work, close [#1508](https://github.com/alibaba-fusion/next/issues/1508) ([67caa94](https://github.com/alibaba-fusion/next/commit/67caa94))
* **Shell:** change default navigation background-color ([7e811ed](https://github.com/alibaba-fusion/next/commit/7e811ed))
* **Table:** lock height sync fail in ie ([d450505](https://github.com/alibaba-fusion/next/commit/d450505))
* **Table:** support lock columns with colspan, close [#1452](https://github.com/alibaba-fusion/next/issues/1452) ([8ae3e21](https://github.com/alibaba-fusion/next/commit/8ae3e21))
* **Upload:** progressbar layout exception in fusion-cool tool ([1f4d97a](https://github.com/alibaba-fusion/next/commit/1f4d97a))




## [1.19.8](https://github.com/alibaba-fusion/next/compare/1.19.7...1.19.8) (2020-01-07)


### Bug Fixes

* **Table:** disorder with mouse ([14dce9d](https://github.com/alibaba-fusion/next/commit/14dce9d))




## [1.19.7](https://github.com/alibaba-fusion/next/compare/1.19.6...1.19.7) (2020-01-07)


### Bug Fixes

* **Core:** close [#1447](https://github.com/alibaba-fusion/next/issues/1447) ([8c82065](https://github.com/alibaba-fusion/next/commit/8c82065))
* **Table:** lock columns disordered with hasBorder false, close [#1471](https://github.com/alibaba-fusion/next/issues/1471) ([03244b8](https://github.com/alibaba-fusion/next/commit/03244b8)) ([361d0a5](https://github.com/alibaba-fusion/next/commit/361d0a5))
* **Table:** make marginLeft of icon be congifurable, close [#1474](https://github.com/alibaba-fusion/next/issues/1474) ([84a0c69](https://github.com/alibaba-fusion/next/commit/84a0c69))
* **Table:** make tree&expand icon configurable ([f765ace](https://github.com/alibaba-fusion/next/commit/f765ace)) ([75a07d3](https://github.com/alibaba-fusion/next/commit/75a07d3))
* **Table:** scroll and empty content issues ([8348b6a](https://github.com/alibaba-fusion/next/commit/8348b6a))

### Features

* **Table:** support crossline ([fbe4b4e](https://github.com/alibaba-fusion/next/commit/fbe4b4e))
* **Overlay:** auto fit container, close [#1350](https://github.com/alibaba-fusion/next/issues/1350) ([010e0c8](https://github.com/alibaba-fusion/next/commit/010e0c8))


## [1.19.6](https://github.com/alibaba-fusion/next/compare/1.19.5...1.19.6) (2020-01-02)


### Bug Fixes

* **Form:** endless loop while setValues ([85b0471](https://github.com/alibaba-fusion/next/commit/85b0471))
* **Select:** use input-disabled-color as select-disabled-color fix [#1285](https://github.com/alibaba-fusion/next/issues/1285) ([408e75c](https://github.com/alibaba-fusion/next/commit/408e75c))




## [1.19.5](https://github.com/alibaba-fusion/next/compare/1.19.4...1.19.5) (2019-12-12)


### Bug Fixes

* **Collapse:** overfollow hidden in collapse close [#1430](https://github.com/alibaba-fusion/next/issues/1430) ([ace2e34](https://github.com/alibaba-fusion/next/commit/ace2e34))
* **Input:** stop bubble. close [#1417](https://github.com/alibaba-fusion/next/issues/1417) ([b74d455](https://github.com/alibaba-fusion/next/commit/b74d455))
* **Menu:** hozInLine should work with header & footer, close [#1439](https://github.com/alibaba-fusion/next/issues/1439) ([9424063](https://github.com/alibaba-fusion/next/commit/9424063))
* **NumberPicker:** disable hasClear fix [#1421](https://github.com/alibaba-fusion/next/issues/1421) ([356c53d](https://github.com/alibaba-fusion/next/commit/356c53d))
* **Select:** Balloon with Select fix [#1427](https://github.com/alibaba-fusion/next/issues/1427) ([f817d8a](https://github.com/alibaba-fusion/next/commit/f817d8a))
* **Table:** arrow of tree should in left, close [#1444](https://github.com/alibaba-fusion/next/issues/1444) ([3285692](https://github.com/alibaba-fusion/next/commit/3285692))
* **Table:** close [#1405](https://github.com/alibaba-fusion/next/issues/1405) ([1f37338](https://github.com/alibaba-fusion/next/commit/1f37338))
* **Table:** style of Table.Column should only work for thead,close [#1423](https://github.com/alibaba-fusion/next/issues/1423) ([2a90c42](https://github.com/alibaba-fusion/next/commit/2a90c42))
* **Typescript:** add scrollToRow, close [#1425](https://github.com/alibaba-fusion/next/issues/1425) ([909330b](https://github.com/alibaba-fusion/next/commit/909330b))


### Features

* **DatePicker:** add disableChangeMode Prop ([cfcda01](https://github.com/alibaba-fusion/next/commit/cfcda01))
* **Pagination:** upgrade life circle ([35552c5](https://github.com/alibaba-fusion/next/commit/35552c5))




## [1.19.4](https://github.com/alibaba-fusion/next/compare/1.19.3...1.19.4) (2019-12-04)


### Bug Fixes

* **Cascader:** compute style error ([42c49c4](https://github.com/alibaba-fusion/next/commit/42c49c4))
* **Upload:** ts for onSelect close [#1319](https://github.com/alibaba-fusion/next/issues/1319) ([16b3d6a](https://github.com/alibaba-fusion/next/commit/16b3d6a))


### Features

* **List:** Add List Component ([c00ea22](https://github.com/alibaba-fusion/next/commit/c00ea22))




## [1.19.3](https://github.com/alibaba-fusion/next/compare/1.19.2...1.19.3) (2019-12-02)


### Bug Fixes

* show avatar & divider in fusion cool ([710c2aa](https://github.com/alibaba-fusion/next/commit/710c2aa))
* **Balloon:** infinite loop ([7c8cbd2](https://github.com/alibaba-fusion/next/commit/7c8cbd2))
* **Box:** missing style ([86f1691](https://github.com/alibaba-fusion/next/commit/86f1691))
* **Dialog:** bodyNode is undefined in windows occasionally, close[#1397](https://github.com/alibaba-fusion/next/issues/1397) ([f9aa669](https://github.com/alibaba-fusion/next/commit/f9aa669))




## [1.19.2](https://github.com/alibaba-fusion/next/compare/1.19.1...1.19.2) (2019-11-27)


### Bug Fixes

* **Radio:** fix radio group preview ([#1391](https://github.com/alibaba-fusion/next/issues/1391)) ([e993cdb](https://github.com/alibaba-fusion/next/commit/e993cdb))
* **Tab:** calculate use wrapper width instead of navbar width ([#1385](https://github.com/alibaba-fusion/next/issues/1385)) ([ed9bf9a](https://github.com/alibaba-fusion/next/commit/ed9bf9a))




## [1.19.1](https://github.com/alibaba-fusion/next/compare/1.19.0...1.19.1) (2019-11-26)




# [1.19.0](https://github.com/alibaba-fusion/next/compare/1.18.16...1.19.0) (2019-11-25)

### Bug Fixes

* **Table:** bug of scrolling on node of cell, close [#1308](https://github.com/alibaba-fusion/next/issues/1308), [#1377](https://github.com/alibaba-fusion/next/issues/1377) ([73c9482](https://github.com/alibaba-fusion/next/commit/73c9482))
* **Upload:** bugs of IE9  ([#1376](https://github.com/alibaba-fusion/next/issues/1376)) ([8e9cbae](https://github.com/alibaba-fusion/next/commit/8e9cbae))
* **Button:** style vertical align middle ([c543b80](https://github.com/alibaba-fusion/next/commit/c543b80))
* **Core:** add a new corner variables ([1645c10](https://github.com/alibaba-fusion/next/commit/1645c10))
* **Drawer:** make it easy to set fixed footer, close [#1228](https://github.com/alibaba-fusion/next/issues/1228) ([8d35064](https://github.com/alibaba-fusion/next/commit/8d35064))
* **Input:** render error in fusion cool ([117e784](https://github.com/alibaba-fusion/next/commit/117e784))
* **Radio:** support config disabled & checked background/color/icon ([dfda93b](https://github.com/alibaba-fusion/next/commit/dfda93b))
* **Timeline:** update lifecycle ([#1276](https://github.com/alibaba-fusion/next/issues/1276)) ([eb4ec42](https://github.com/alibaba-fusion/next/commit/eb4ec42))

### Features
* **Affix:** update lifecycle ([7ea7e4a](https://github.com/alibaba-fusion/next/commit/7ea7e4a))
* **Avatar:** add Avatar ([082fd3c](https://github.com/alibaba-fusion/next/commit/082fd3c))
* **CascaderSelect:** support preview mode ([5344693](https://github.com/alibaba-fusion/next/commit/5344693))
* **Checkbox:** add preview mode ([#1351](https://github.com/alibaba-fusion/next/issues/1351)) ([69b8fa6](https://github.com/alibaba-fusion/next/commit/69b8fa6))
* **ConfigProvider:** update lifecycle ([ca79c7e](https://github.com/alibaba-fusion/next/commit/ca79c7e))
* **DatePicker:** Add WeekPicker ([#1284](https://github.com/alibaba-fusion/next/issues/1284)) ([42de085](https://github.com/alibaba-fusion/next/commit/42de085))
* **DatePicker:** support preview mode ([f96462c](https://github.com/alibaba-fusion/next/commit/f96462c))
* **Divider:** add divider component ([66886b3](https://github.com/alibaba-fusion/next/commit/66886b3))
* **Form:** add preview ([5f497d7](https://github.com/alibaba-fusion/next/commit/5f497d7))
* **Icon:** get svg icon from iconfont, close [#1209](https://github.com/alibaba-fusion/next/issues/1209) ([eb23d0b](https://github.com/alibaba-fusion/next/commit/eb23d0b))
* **Icon:** size can be number ([df2cf0d](https://github.com/alibaba-fusion/next/commit/df2cf0d))
* **Input:** add isPreview & renderPrevier API ([b70ff26](https://github.com/alibaba-fusion/next/commit/b70ff26))
* **Input:** add warning state, close [#1188](https://github.com/alibaba-fusion/next/issues/1188) ([a4a66e8](https://github.com/alibaba-fusion/next/commit/a4a66e8))
* **Message:** toast add style & className prop ([9a58a5e](https://github.com/alibaba-fusion/next/commit/9a58a5e))
* **NumberPicker:** add small size, close [#1147](https://github.com/alibaba-fusion/next/issues/1147) ([1a81522](https://github.com/alibaba-fusion/next/commit/1a81522))
* **Radio:** add preview mode ([#1352](https://github.com/alibaba-fusion/next/issues/1352)) ([83a10d2](https://github.com/alibaba-fusion/next/commit/83a10d2))
* **Range:** add preview mode ([#1355](https://github.com/alibaba-fusion/next/issues/1355)) ([a302183](https://github.com/alibaba-fusion/next/commit/a302183))
* **Rating:** add isPreview & renderPreview API ([0ba15f4](https://github.com/alibaba-fusion/next/commit/0ba15f4))
* **Switch:** add preview mode ([#1354](https://github.com/alibaba-fusion/next/issues/1354)) ([613c778](https://github.com/alibaba-fusion/next/commit/613c778))
* **Table:** add colSpan to merge cell of theader, close [#993](https://github.com/alibaba-fusion/next/issues/993) ([a2a1c11](https://github.com/alibaba-fusion/next/commit/a2a1c11))
* **Tag:** support custom color ([09191b6](https://github.com/alibaba-fusion/next/commit/09191b6))
* **TimePicker:** support preview mode ([3334263](https://github.com/alibaba-fusion/next/commit/3334263))
* **Tree:** add renderChildNodes prop ([#1273](https://github.com/alibaba-fusion/next/issues/1273)) ([aede069](https://github.com/alibaba-fusion/next/commit/aede069))
* **TreeSelect:** support preview mode ([d18b6f0](https://github.com/alibaba-fusion/next/commit/d18b6f0))
* **Upload:** preview state for number-picker/select/upload ([#1374](https://github.com/alibaba-fusion/next/issues/1374)) ([7ee63e3](https://github.com/alibaba-fusion/next/commit/7ee63e3))


## [1.18.16](https://github.com/alibaba-fusion/next/compare/1.18.15...1.18.16) (2019-11-15)


### Bug Fixes

* **Nav:** remove border-width when embeddable ([fb0b1bc](https://github.com/alibaba-fusion/next/commit/fb0b1bc))
* **Slider:** ConfigProvider should work for innerSlider, close [#1358](https://github.com/alibaba-fusion/next/issues/1358) ([58ef17d](https://github.com/alibaba-fusion/next/commit/58ef17d))
* **Typescript** Perfect d.ts for Field/Dialog ([4a901c8](https://github.com/alibaba-fusion/next/pull/1347/commits/4a901c8)) ([31b5c24](https://github.com/alibaba-fusion/next/pull/1361/commits/31b5c24))



## [1.18.15](https://github.com/alibaba-fusion/next/compare/1.18.14...1.18.15) (2019-11-12)


### Bug Fixes

* **Cascader:** disable can`t change checked ([0c63ae6](https://github.com/alibaba-fusion/next/commit/0c63ae6))
* **Checkbox:** fix style display ([2801eb0](https://github.com/alibaba-fusion/next/commit/2801eb0))
* **Table:** item of dataSource may be a string ([73760fb](https://github.com/alibaba-fusion/next/commit/73760fb))
* **TreeSelect:** add max height ([f1d2f06](https://github.com/alibaba-fusion/next/commit/f1d2f06))




## [1.18.14](https://github.com/alibaba-fusion/next/compare/1.18.13...1.18.14) (2019-11-08)


### Bug Fixes

* **Menu:** group and its children should have the same inlineLevel ([228c6ad](https://github.com/alibaba-fusion/next/commit/228c6ad)), closes [#1330](https://github.com/alibaba-fusion/next/issues/1330)
* **Table:** correct rowIndex when useVirtual ([6fc5259](https://github.com/alibaba-fusion/next/commit/6fc5259))
* **TimePicker:** Can`t reset input props ([53354c0](https://github.com/alibaba-fusion/next/commit/53354c0))




## [1.18.13](https://github.com/alibaba-fusion/next/compare/1.18.12...1.18.13) (2019-11-06)




## [1.18.12](https://github.com/alibaba-fusion/next/compare/1.18.11...1.18.12) (2019-11-05)


### Bug Fixes

* **Checkbox:** fix nested checkbox style ([1088fbb](https://github.com/alibaba-fusion/next/commit/1088fbb))
* **Input:** lifecycle for didUpdate close [#1301](https://github.com/alibaba-fusion/next/issues/1301) ([8e21cc8](https://github.com/alibaba-fusion/next/commit/8e21cc8))
* **Menu:** make arrow in hoz configurable, [#1280](https://github.com/alibaba-fusion/next/issues/1280) ([b7c6322](https://github.com/alibaba-fusion/next/commit/b7c6322))
* **Nav:** correct child selected state, close [#1280](https://github.com/alibaba-fusion/next/issues/1280) ([9d68697](https://github.com/alibaba-fusion/next/commit/9d68697))
* **Nav:** icon is blocked 1px in iconOnly mode, close [#1278](https://github.com/alibaba-fusion/next/issues/1278) ([9c3fd0a](https://github.com/alibaba-fusion/next/commit/9c3fd0a))
* **Notification:** title and content are not both required ([49b4b96](https://github.com/alibaba-fusion/next/commit/49b4b96))
* **Switch:** update getDerivedStateFromProps logic ([638e6b1](https://github.com/alibaba-fusion/next/commit/638e6b1)) ([5ac62df](https://github.com/alibaba-fusion/next/commit/5ac62df))
* **Table:** expanded trigger cell's width should be unchanged, close [#1281](https://github.com/alibaba-fusion/next/issues/1281) ([9fca31b](https://github.com/alibaba-fusion/next/commit/9fca31b))
* **TreeSelect:** Can`t remove tag ([7ef73f0](https://github.com/alibaba-fusion/next/commit/7ef73f0))




## [1.18.11](https://github.com/alibaba-fusion/next/compare/1.18.10...1.18.11) (2019-10-31)


### Bug Fixes

* **Range:** add window.pageXOffset when calculate  ([#1289](https://github.com/alibaba-fusion/next/issues/1289)) ([3460f0f](https://github.com/alibaba-fusion/next/commit/3460f0f))




## [1.18.10](https://github.com/alibaba-fusion/next/compare/1.18.9...1.18.10) (2019-10-29)


### Bug Fixes

* **ConfigProvider:** warning when config function component ([6eb71b5](https://github.com/alibaba-fusion/next/commit/6eb71b5))
* **NumberPicker:** under control input 0 => 0. ([60c0d86](https://github.com/alibaba-fusion/next/commit/60c0d86))




## [1.18.9](https://github.com/alibaba-fusion/next/compare/1.18.8...1.18.9) (2019-10-28)


### Bug Fixes

* **Field:** validate bind ([3ad8068](https://github.com/alibaba-fusion/next/commit/3ad8068))




## [1.18.8](https://github.com/alibaba-fusion/next/compare/1.18.7...1.18.8) (2019-10-25)


### Bug Fixes

* **Overlay:** use rgba instead of change-color to get a color with alpha ([e552a66](https://github.com/alibaba-fusion/next/commit/e552a66))
* **Table:** reset style ([db24905](https://github.com/alibaba-fusion/next/commit/db24905))




## [1.18.7](https://github.com/alibaba-fusion/next/compare/1.18.6...1.18.7) (2019-10-25)


### Bug Fixes

* **Cascader:** scroll focus error ([fa92198](https://github.com/alibaba-fusion/next/commit/fa92198))




## [1.18.6](https://github.com/alibaba-fusion/next/compare/1.18.5...1.18.6) (2019-10-24)


### Bug Fixes

* **Affix:** fix recursive call in some situation ([633c3b6](https://github.com/alibaba-fusion/next/commit/633c3b6))
* **Button:** style vertical align middle ([cec2e9a](https://github.com/alibaba-fusion/next/commit/cec2e9a))
* **Shell:** config Shell.Page ([4249e0a](https://github.com/alibaba-fusion/next/commit/4249e0a))
* **Tab:** make dropdown mode tab nav scroll to active ([881ce87](https://github.com/alibaba-fusion/next/commit/881ce87))




## [1.18.5](https://github.com/alibaba-fusion/next/compare/1.18.4...1.18.5) (2019-10-17)


### Bug Fixes

* **Balloon:** Tooltip shoule support alignEdge, close [#1222](https://github.com/alibaba-fusion/next/issues/1222) ([3c6289a](https://github.com/alibaba-fusion/next/commit/3c6289a))
* **Shell:** should support use nothing ([1c76aea](https://github.com/alibaba-fusion/next/commit/1c76aea))




## [1.18.4](https://github.com/alibaba-fusion/next/compare/1.18.3...1.18.4) (2019-10-11)


### Bug Fixes

* **Breadcrumb:**  unused css-prefix ([b05cddf](https://github.com/alibaba-fusion/next/commit/b05cddf))
* **Checkbox:** remove focused style ([2002161](https://github.com/alibaba-fusion/next/commit/2002161))
* **Dialog:** quick-calling support set prefix to dialog ([7d458d4](https://github.com/alibaba-fusion/next/commit/7d458d4))
* **Radio:** remove checked focused style ([e750cd6](https://github.com/alibaba-fusion/next/commit/e750cd6))
* **Select:** add api menuProps for menu. close [#1141](https://github.com/alibaba-fusion/next/issues/1141) ([38fed47](https://github.com/alibaba-fusion/next/commit/38fed47))
* **Select:** can re select in AutoComplete. close [#1199](https://github.com/alibaba-fusion/next/issues/1199) ([2814be4](https://github.com/alibaba-fusion/next/commit/2814be4))
* **Select:** keep search value while unselect with Enter. fix [#1173](https://github.com/alibaba-fusion/next/issues/1173) ([a5f5519](https://github.com/alibaba-fusion/next/commit/a5f5519))
* **Select:** should not del disabled item with backspace. fix [#1196](https://github.com/alibaba-fusion/next/issues/1196) ([81b0e75](https://github.com/alibaba-fusion/next/commit/81b0e75))
* **Select:** should not del item while disabled/readonly .fix [#1022](https://github.com/alibaba-fusion/next/issues/1022) ([7c98e1c](https://github.com/alibaba-fusion/next/commit/7c98e1c))
* **Shell:** header should be able to be removed ([c1ef847](https://github.com/alibaba-fusion/next/commit/c1ef847))
* **Table:** remove warning, close [#644](https://github.com/alibaba-fusion/next/issues/644) ([56faee6](https://github.com/alibaba-fusion/next/commit/56faee6))
* **Upload:** outline error ([2c53354](https://github.com/alibaba-fusion/next/commit/2c53354))




## [1.18.3](https://github.com/alibaba-fusion/next/compare/1.18.2...1.18.3) (2019-09-30)


### Bug Fixes

* **Icon:** correct eye/eye-close's width ([19b7d04](https://github.com/alibaba-fusion/next/commit/19b7d04))
* **NumberPicker:** corner config ([db5929f](https://github.com/alibaba-fusion/next/commit/db5929f))
* **NumberPicker:** fix display valueunder controlled. fix [#1163](https://github.com/alibaba-fusion/next/issues/1163) ([7207532](https://github.com/alibaba-fusion/next/commit/7207532))
* **NumberPicker:** up down key ([6edc9a6](https://github.com/alibaba-fusion/next/commit/6edc9a6))
* **Progress:** backgroundColor is invalid ([#1180](https://github.com/alibaba-fusion/next/issues/1180)) ([b4ee796](https://github.com/alibaba-fusion/next/commit/b4ee796))
* **Typescript:** add field ([01fdcd2](https://github.com/alibaba-fusion/next/commit/01fdcd2))




## [1.18.2](https://github.com/alibaba-fusion/next/compare/1.18.1...1.18.2) (2019-09-26)




## [1.18.2](https://github.com/alibaba-fusion/next/compare/1.18.1...1.18.2) (2019-09-26)




## [1.18.2](https://github.com/alibaba-fusion/next/compare/1.18.1...1.18.2) (2019-09-26)




## [1.18.1](https://github.com/alibaba-fusion/next/compare/1.17.12...1.18.1) (2019-09-26)


### Bug Fixes

* **ConfigProvider:** support component created by React.forwardRef() ([cc6d002](https://github.com/alibaba-fusion/next/commit/cc6d002))
* **Dialog:** fullscreen mask click. fix [#927](https://github.com/alibaba-fusion/next/issues/927) ([#932](https://github.com/alibaba-fusion/next/issues/932)) ([e9b5d28](https://github.com/alibaba-fusion/next/commit/e9b5d28))
* **Dialog:** option.type can only be set as alert or confirm ([be7d644](https://github.com/alibaba-fusion/next/commit/be7d644))
* **Field:** spliceArray can remove a obj in array. close [#1091](https://github.com/alibaba-fusion/next/issues/1091) ([8cc5546](https://github.com/alibaba-fusion/next/commit/8cc5546))
* **NumberPicker:** add variable for button corner. close [#1151](https://github.com/alibaba-fusion/next/issues/1151) ([882fa89](https://github.com/alibaba-fusion/next/commit/882fa89))
* **Overlay:** fullscreen mask click issue with pr [#932](https://github.com/alibaba-fusion/next/issues/932) ([e117487](https://github.com/alibaba-fusion/next/commit/e117487))
* **Tab:** all key should use string ([#1070](https://github.com/alibaba-fusion/next/issues/1070)) ([0d8396f](https://github.com/alibaba-fusion/next/commit/0d8396f))
* **TimePicker:** support format HH ([e5924c2](https://github.com/alibaba-fusion/next/commit/e5924c2))

### Deprecated

* **ConfigProvider(pure):** deprecated API pure ([434e6e0](https://github.com/alibaba-fusion/next/commit/434e6e0))


### Features

* **Field** use field and validate npm packages ([6e70255](https://github.com/alibaba-fusion/next/commit/6e70255))
* **Card:** add  free card ([5ee79c7](https://github.com/alibaba-fusion/next/commit/5ee79c7))
* **ConfigProvider:** add popupContainer ([6631a55](https://github.com/alibaba-fusion/next/commit/6631a55))
* **Field:** add api addArrayValue/deleteArrayValue for spliceArray ([ccc95e9](https://github.com/alibaba-fusion/next/commit/ccc95e9))
* **Form:** add fullWidth prop ([c9e6ded](https://github.com/alibaba-fusion/next/commit/c9e6ded))
* **Form:** api field={false} to disable inner field. fix [#1162](https://github.com/alibaba-fusion/next/issues/1162) ([4ed9cde](https://github.com/alibaba-fusion/next/commit/4ed9cde))
* **Icon:** add new icon, close [#1114](https://github.com/alibaba-fusion/next/issues/1114) ([9651f2f](https://github.com/alibaba-fusion/next/commit/9651f2f))
* **Transfer:** support customer panel ([7bef81e](https://github.com/alibaba-fusion/next/commit/7bef81e)) ([6a57e62](https://github.com/alibaba-fusion/next/commit/6a57e62))
* **Notification:** add Notification Component ([f135a67](https://github.com/alibaba-fusion/next/commit/f135a67))
* **Shell:** add Shell ([#1175](https://github.com/alibaba-fusion/next/issues/1175)) ([dd03a64](https://github.com/alibaba-fusion/next/commit/dd03a64))
* **Typography:**  add Typography, deprecated Paragraph ([ed3afce](https://github.com/alibaba-fusion/next/commit/ed3afce))




## [1.17.12](https://github.com/alibaba-fusion/next/compare/1.17.11...1.17.12) (2019-09-19)


### Bug Fixes

* **Input:** border should collapse in input group, close [#1127](https://github.com/alibaba-fusion/next/issues/1127) ([ac4e604](https://github.com/alibaba-fusion/next/commit/ac4e604))
* **Overlay:** wrong object of reference in safari ([cba0d1e](https://github.com/alibaba-fusion/next/commit/cba0d1e))
* **Rating:** click offset in allowHalf, close [#1123](https://github.com/alibaba-fusion/next/issues/1123) ([b4278c4](https://github.com/alibaba-fusion/next/commit/b4278c4))
* **Select:** popupStyle width should override autoWidth, close [#1075](https://github.com/alibaba-fusion/next/issues/1075) ([0e75a2f](https://github.com/alibaba-fusion/next/commit/0e75a2f))
* **Tab:** fix tab nav border in fusion cool ([43d2013](https://github.com/alibaba-fusion/next/commit/43d2013))
* **Util:** copy react node directly, close [#1132](https://github.com/alibaba-fusion/next/issues/1132) ([04618b0](https://github.com/alibaba-fusion/next/commit/04618b0))




## [1.17.11](https://github.com/alibaba-fusion/next/compare/1.17.10...1.17.11) (2019-09-11)


### Bug Fixes

* **Collapse:** cannot read property 'key' of null ([a31a979](https://github.com/alibaba-fusion/next/commit/a31a979))
* **Select:** cascader-select component  hasclear attr ([c22796e](https://github.com/alibaba-fusion/next/commit/c22796e))
* **Tab:** close [#1105](https://github.com/alibaba-fusion/next/issues/1105) ([2c841b1](https://github.com/alibaba-fusion/next/commit/2c841b1))




## [1.17.10](https://github.com/alibaba-fusion/next/compare/1.17.9...1.17.10) (2019-09-05)


### Bug Fixes

* **CascaderSelect:** search menu always exist after ([ee9739c](https://github.com/alibaba-fusion/next/commit/ee9739c))
* **Pagination:** pagination size select  over width ([8822f05](https://github.com/alibaba-fusion/next/commit/8822f05))
* **Search:** filter attr setting default value. close [#1034](https://github.com/alibaba-fusion/next/issues/1034) ([589c9cb](https://github.com/alibaba-fusion/next/commit/589c9cb))
* **Tab:** isTouchable use slide tabs ([7de99ca](https://github.com/alibaba-fusion/next/commit/7de99ca))
* **Tab:** remove padding&margin&border in hidden ([3abf12f](https://github.com/alibaba-fusion/next/commit/3abf12f))
* **Table:** add filterProps for users to customize filter ([a3db26f](https://github.com/alibaba-fusion/next/commit/a3db26f))




## [1.17.9](https://github.com/alibaba-fusion/next/compare/1.17.8...1.17.9) (2019-09-02)


### Bug Fixes

* **Tabs:** fix tab nav and panel style ([#1083](https://github.com/alibaba-fusion/next/issues/1083)) ([318605e](https://github.com/alibaba-fusion/next/commit/318605e)), closes [#1085](https://github.com/alibaba-fusion/next/issues/1085) [#1076](https://github.com/alibaba-fusion/next/issues/1076)




## [1.17.8](https://github.com/alibaba-fusion/next/compare/1.17.7...1.17.8) (2019-08-29)


### Bug Fixes

* **CascaderSelect:** click selected item can`t close ([b623436](https://github.com/alibaba-fusion/next/commit/b623436))
* **Dialog:** allow disableScroll. fix [#954](https://github.com/alibaba-fusion/next/issues/954) ([04f19b3](https://github.com/alibaba-fusion/next/commit/04f19b3))
* **Field:** shallow copy. Close [#1062](https://github.com/alibaba-fusion/next/issues/1062) ([97ffea6](https://github.com/alibaba-fusion/next/commit/97ffea6))
* **Search:** change the way of using sass method(color calculation) ([84808e1](https://github.com/alibaba-fusion/next/commit/84808e1))
* **Slider:** correct arrow disabled state in some case, close [#1065](https://github.com/alibaba-fusion/next/issues/1065) ([a9b319b](https://github.com/alibaba-fusion/next/commit/a9b319b))
* **Tab:** use visibility instead of display to control tab content show. ([#1058](https://github.com/alibaba-fusion/next/issues/1058)) ([2bb776d](https://github.com/alibaba-fusion/next/commit/2bb776d))
* **Tree:** disabled node can`t set checked ([dcb1686](https://github.com/alibaba-fusion/next/commit/dcb1686))


### Deprecated

* **Collapse:** getDerivedStateFromProps ([01eb9f2](https://github.com/alibaba-fusion/next/commit/01eb9f2))
* **Collapse:** lifecycle polyfill ([17598a6](https://github.com/alibaba-fusion/next/commit/17598a6))


### Features

* **Table:** add small size ([bce73f0](https://github.com/alibaba-fusion/next/commit/bce73f0))




## [1.17.7](https://github.com/alibaba-fusion/next/compare/1.17.6...1.17.7) (2019-08-21)


### Bug Fixes

* **Checkbox:** checkbox will update indeterminate state when in group ([8b9582a](https://github.com/alibaba-fusion/next/commit/8b9582a))
* **Overlay:** remove position absolute. fix [#1016](https://github.com/alibaba-fusion/next/issues/1016) ([7d87e86](https://github.com/alibaba-fusion/next/commit/7d87e86))
* **Select:** readonly ([0d732d6](https://github.com/alibaba-fusion/next/commit/0d732d6))
* **Tree:** undined of parent ([f38f440](https://github.com/alibaba-fusion/next/commit/f38f440))




## [1.17.6](https://github.com/alibaba-fusion/next/compare/1.17.5...1.17.6) (2019-08-15)


### Bug Fixes

* **Menu:** value in selectedKeys doesn't exit in k2n ([fef80cd](https://github.com/alibaba-fusion/next/commit/fef80cd))




## [1.17.5](https://github.com/alibaba-fusion/next/compare/1.17.4...1.17.5) (2019-08-14)


### Bug Fixes

* **Field:** bug of resetToDefault withtou initValue. close [#1001](https://github.com/alibaba-fusion/next/issues/1001) ([a76b05c](https://github.com/alibaba-fusion/next/commit/a76b05c))
* **Input:** support null to reset value ([0ecc5c2](https://github.com/alibaba-fusion/next/commit/0ecc5c2))
* **Pagination:** react warning use setTimout event ([0e92ade](https://github.com/alibaba-fusion/next/commit/0e92ade))


### Features

* **Animate:** add slide animations ([407dc5b](https://github.com/alibaba-fusion/next/commit/407dc5b))
* **Drawer:** make drawer configurable ([fbc4ad2](https://github.com/alibaba-fusion/next/commit/fbc4ad2))
* **Locale:** add Drawer words ([1be3ea8](https://github.com/alibaba-fusion/next/commit/1be3ea8))




## [1.17.4](https://github.com/alibaba-fusion/next/compare/1.17.3...1.17.4) (2019-08-13)


### Bug Fixes

* **Menu:** child-selected should work in popup mode ([bd784e7](https://github.com/alibaba-fusion/next/commit/bd784e7))
* **Tag:** closable can`t set `data-xx` prop ([d1e5507](https://github.com/alibaba-fusion/next/commit/d1e5507))




## [1.17.3](https://github.com/alibaba-fusion/next/compare/1.17.2...1.17.3) (2019-08-09)


### Bug Fixes

* **Select:** width should be in outer dom ([c8f072f](https://github.com/alibaba-fusion/next/commit/c8f072f))




## [1.17.2](https://github.com/alibaba-fusion/next/compare/1.17.1...1.17.2) (2019-08-09)




## [1.17.1](https://github.com/alibaba-fusion/next/compare/1.17.0...1.17.1) (2019-08-08)




# [1.17.0](https://github.com/alibaba-fusion/next/compare/1.16.6...1.17.0) (2019-08-08)


### Bug Fixes

* add name and value ([5beedd8](https://github.com/alibaba-fusion/next/commit/5beedd8))
* **Input:** fix textarea ([ac270ea](https://github.com/alibaba-fusion/next/commit/ac270ea))
* **Input:** fix ts property ([9ceb94a](https://github.com/alibaba-fusion/next/commit/9ceb94a))
* **Menu:** paddingLeft should only be related to inline mode ([1115687](https://github.com/alibaba-fusion/next/commit/1115687))
* **Menu:** string in Group/SubMenu causes error, close [#952](https://github.com/alibaba-fusion/next/issues/952) ([18a7f17](https://github.com/alibaba-fusion/next/commit/18a7f17))
* **Nav:** subNav should be selected if it has selected child, close [#520](https://github.com/alibaba-fusion/next/issues/520) ([3eca52f](https://github.com/alibaba-fusion/next/commit/3eca52f))
* **Range:** prevent arrow keyup event when disabled ([05f5a87](https://github.com/alibaba-fusion/next/commit/05f5a87))
* **Search:** onSearch ts ([35d33dc](https://github.com/alibaba-fusion/next/commit/35d33dc))
* **Select:** popupComponent do not need syncWidth ([71d7943](https://github.com/alibaba-fusion/next/commit/71d7943))
* **Tab:** only focus after first render ([5feb398](https://github.com/alibaba-fusion/next/commit/5feb398))
* **Transfer:** fix that Transfer component cannot be dragged in firefox ([0f72ef6](https://github.com/alibaba-fusion/next/commit/0f72ef6))
* **Transfer:** pass test case ([632dea7](https://github.com/alibaba-fusion/next/commit/632dea7))
* **Tree:** Still can check after disableChecked ([20ac774](https://github.com/alibaba-fusion/next/commit/20ac774))
* **Typescript:** add a tags ts. ([443eecf](https://github.com/alibaba-fusion/next/commit/443eecf))
* **TypeScript:** correct Upload Dragger props, close [#936](https://github.com/alibaba-fusion/next/issues/936) ([2c4ad4c](https://github.com/alibaba-fusion/next/commit/2c4ad4c))


### Features

* Add Next Adaptor ([0c7f49c](https://github.com/alibaba-fusion/next/commit/0c7f49c))
* Add Next Adaptor ([#903](https://github.com/alibaba-fusion/next/issues/903)) ([807e258](https://github.com/alibaba-fusion/next/commit/807e258))
* time-function & duration update ([f4535d3](https://github.com/alibaba-fusion/next/commit/f4535d3))
* **Breadcrumb:** maxNode support `auto` ([9ce0323](https://github.com/alibaba-fusion/next/commit/9ce0323))
* **ConfigProvider:** add device prop ([67161a1](https://github.com/alibaba-fusion/next/commit/67161a1))
* **DatePicker:** support set Array defaultValue ([2f9ea90](https://github.com/alibaba-fusion/next/commit/2f9ea90))
* **Dialog:** add max-width to fit phone ([66f463a](https://github.com/alibaba-fusion/next/commit/66f463a))
* **Drawer:** add new component Drawer ([2ca6f17](https://github.com/alibaba-fusion/next/commit/2ca6f17))
* **Form:** force set labelAlign=top while device=phone ([f07260f](https://github.com/alibaba-fusion/next/commit/f07260f))
* **NumberPicker:** force set type=inline while device=phone ([0666869](https://github.com/alibaba-fusion/next/commit/0666869))
* **Pagination:** support device ([52054e1](https://github.com/alibaba-fusion/next/commit/52054e1))
* **Range:** add touch test case for Range ([6e2c85a](https://github.com/alibaba-fusion/next/commit/6e2c85a))
* **Range:** range component support touch event ([ac03213](https://github.com/alibaba-fusion/next/commit/ac03213))
* **Select:** add api popupComponent to custom Popup ([737f7e4](https://github.com/alibaba-fusion/next/commit/737f7e4))
* **Tab:** support device touchable ([3c356bf](https://github.com/alibaba-fusion/next/commit/3c356bf))
* **TimePicker:** add renderTimeMenuItems prop ([8c368f1](https://github.com/alibaba-fusion/next/commit/8c368f1))




## [1.16.6](https://github.com/alibaba-fusion/next/compare/1.16.5...1.16.6) (2019-08-01)


### Bug Fixes

* **Typescript:** fix menu-button & split-button ([0cfe939](https://github.com/alibaba-fusion/next/commit/0cfe939))




## [1.16.5](https://github.com/alibaba-fusion/next/compare/1.16.4...1.16.5) (2019-08-01)


### Bug Fixes

* **CascaderSelect:** not exist value  be removed ([2b1dee8](https://github.com/alibaba-fusion/next/commit/2b1dee8))
* **Dialog:** pass event to onClose of Dialog.show, close [#947](https://github.com/alibaba-fusion/next/issues/947) ([9921578](https://github.com/alibaba-fusion/next/commit/9921578))
* **Field:** use constructor not initValue fix [#924](https://github.com/alibaba-fusion/next/issues/924) ([3fe5cf7](https://github.com/alibaba-fusion/next/commit/3fe5cf7))
* **Pagination:** button style override pagination ([41e9399](https://github.com/alibaba-fusion/next/commit/41e9399))
* **Typescript:** add button props to menu-button split-button ([61a9c54](https://github.com/alibaba-fusion/next/commit/61a9c54))
* **Upload:** bug by Dragger value under controlled. Close [#923](https://github.com/alibaba-fusion/next/issues/923) ([c2ea8a7](https://github.com/alibaba-fusion/next/commit/c2ea8a7))




## [1.16.4](https://github.com/alibaba-fusion/next/compare/1.16.3...1.16.4) (2019-07-23)


### Bug Fixes

* **Field:** validate no names fix [#913](https://github.com/alibaba-fusion/next/issues/913) ([d131416](https://github.com/alibaba-fusion/next/commit/d131416))




## [1.16.3](https://github.com/alibaba-fusion/next/compare/1.16.2...1.16.3) (2019-07-22)


### Bug Fixes

* **Field:** falsy defaultValue prop: fix [#897](https://github.com/alibaba-fusion/next/issues/897) ([530896d](https://github.com/alibaba-fusion/next/commit/530896d)) ([3d1743d](https://github.com/alibaba-fusion/next/commit/3d1743d))




## [1.16.2](https://github.com/alibaba-fusion/next/compare/1.16.1...1.16.2) (2019-07-19)


### Bug Fixes

* **DatePicker:** RangePicker select year error ([e32cbbe](https://github.com/alibaba-fusion/next/commit/e32cbbe))
* **Dialog:** br br alignment: fixes [#887](https://github.com/alibaba-fusion/next/issues/887) ([0a92c73](https://github.com/alibaba-fusion/next/commit/0a92c73))
* **Nav:** label should show in iconOnly mode, close [#894](https://github.com/alibaba-fusion/next/issues/894) ([5cfd0fa](https://github.com/alibaba-fusion/next/commit/5cfd0fa))
* **Table:** filter Menu blocked, close [#893](https://github.com/alibaba-fusion/next/issues/893) ([a16d566](https://github.com/alibaba-fusion/next/commit/a16d566))
* **Upload:** add errorcode in beforeUpload ([c6a505a](https://github.com/alibaba-fusion/next/commit/c6a505a))




## [1.16.1](https://github.com/alibaba-fusion/next/compare/1.16.0...1.16.1) (2019-07-15)


### Bug Fixes

* **Collapse:** number defaultExpandKeys: fix [#878](https://github.com/alibaba-fusion/next/issues/878) ([991ba8a](https://github.com/alibaba-fusion/next/commit/991ba8a)) ([56b031a](https://github.com/alibaba-fusion/next/commit/56b031a))
* **Field:** fixes [#880](https://github.com/alibaba-fusion/next/issues/880) ([ebe1ea1](https://github.com/alibaba-fusion/next/commit/ebe1ea1))
* **Overlay:** set width: 100% incase of overlay collapse, close [#874](https://github.com/alibaba-fusion/next/issues/874) ([2d8845e](https://github.com/alibaba-fusion/next/commit/2d8845e))




# [1.16.0](https://github.com/alibaba-fusion/next/compare/1.15.12...1.16.0) (2019-07-11)


### Bug Fixes

* **Badge:** change count to -1 error, close [#845](https://github.com/alibaba-fusion/next/issues/845) ([a17e586](https://github.com/alibaba-fusion/next/commit/a17e586))
* **Field:** getValues return initValue, close [#792](https://github.com/alibaba-fusion/next/issues/792)  ([#807](https://github.com/alibaba-fusion/next/issues/807)) ([2459716](https://github.com/alibaba-fusion/next/commit/2459716))
* **NumberPicker:** support innerAfter. Close [#860](https://github.com/alibaba-fusion/next/issues/860) ([4c0e018](https://github.com/alibaba-fusion/next/commit/4c0e018))
* **Overlay:** comment out unnecessary code ([52ddf8d](https://github.com/alibaba-fusion/next/commit/52ddf8d))
* **Overlay:** endless loop in  position calculate ([5553799](https://github.com/alibaba-fusion/next/commit/5553799))
* **Overlay:** wrapper position absolute-close [#812](https://github.com/alibaba-fusion/next/issues/812) ([9fb3708](https://github.com/alibaba-fusion/next/commit/9fb3708))
* **Overlay:** wrong top when 2+ scroll bars, close [#861](https://github.com/alibaba-fusion/next/issues/861) ([d00329f](https://github.com/alibaba-fusion/next/commit/d00329f))
* **Radio:** change demo default state ([e1a08f3](https://github.com/alibaba-fusion/next/commit/e1a08f3))
* **Select:** support innerAfter. Close [#859](https://github.com/alibaba-fusion/next/issues/859) ([b49a35e](https://github.com/alibaba-fusion/next/commit/b49a35e))
* **Tab:** add tests to cover auto scroll feature ([4004f1d](https://github.com/alibaba-fusion/next/commit/4004f1d))


### Features

* **Badge:** add API showZero, close [#848](https://github.com/alibaba-fusion/next/issues/848) ([8f48f50](https://github.com/alibaba-fusion/next/commit/8f48f50))
* **Calendar:** add onModeChange ([514846e](https://github.com/alibaba-fusion/next/commit/514846e))
* **Calendar:** add yearRange prop ([32a6f31](https://github.com/alibaba-fusion/next/commit/32a6f31))
* **Checkbox:** label color configrable ([da4a411](https://github.com/alibaba-fusion/next/commit/da4a411))
* **Menu:** add hozInLine to fold SubMenus if too long ([63f9962](https://github.com/alibaba-fusion/next/commit/63f9962))
* **Radio:** label configurable when used standalone ([3b3e510](https://github.com/alibaba-fusion/next/commit/3b3e510))
* **Tab:** make capsure border hover configurable ([1b1554f](https://github.com/alibaba-fusion/next/commit/1b1554f))
* **Tab:** support auto scroll to active tab ([5bcfa02](https://github.com/alibaba-fusion/next/commit/5bcfa02))
* **Tag:** split primary and primary deletable ([4ace5a6](https://github.com/alibaba-fusion/next/commit/4ace5a6))
* **Theme:** add font weight ([b31e2e8](https://github.com/alibaba-fusion/next/commit/b31e2e8))




## [1.15.12](https://github.com/alibaba-fusion/next/compare/1.15.11...1.15.12) (2019-07-11)


### Bug Fixes

* remove 'next-' in variable.scss of theme package, close [#865](https://github.com/alibaba-fusion/next/issues/865) ([a9d46f5](https://github.com/alibaba-fusion/next/commit/a9d46f5))
* **Pagination:**  override button disabled style ([253239b](https://github.com/alibaba-fusion/next/commit/253239b))




## [1.15.11](https://github.com/alibaba-fusion/next/compare/1.15.10...1.15.11) (2019-07-04)


### Bug Fixes

* 'name' does not exist on type SelectProps ([732de79](https://github.com/alibaba-fusion/next/commit/732de79))
* **CascaderSelect:** overflow-x shaking ([6e83df4](https://github.com/alibaba-fusion/next/commit/6e83df4))
* **Form:** use ref in FormItem. Close [#820](https://github.com/alibaba-fusion/next/issues/820) ([4585c9c](https://github.com/alibaba-fusion/next/commit/4585c9c))
* **Input:** check if navigator exist to support SSR ([f9b9dfd](https://github.com/alibaba-fusion/next/commit/f9b9dfd))
* **Nav:** disabled background should be the same with others ([46f7959](https://github.com/alibaba-fusion/next/commit/46f7959))
* **Overlay:** check if instance of React Component ([c9e6802](https://github.com/alibaba-fusion/next/commit/c9e6802))
* **Overlay:** support function children-#close-810 ([cff7566](https://github.com/alibaba-fusion/next/commit/cff7566)), closes [children-#close-810](https://github.com/children-/issues/close-810)
* **Search:** fix onChange argc. Close [#394](https://github.com/alibaba-fusion/next/issues/394) ([aa9de65](https://github.com/alibaba-fusion/next/commit/aa9de65))
* **Select:** scroll after search by hightlight click item. Close [#801](https://github.com/alibaba-fusion/next/issues/801) ([2e31d0a](https://github.com/alibaba-fusion/next/commit/2e31d0a))
* **Tree:** cancel select on click twice ([61657a1](https://github.com/alibaba-fusion/next/commit/61657a1))




## [1.15.10](https://github.com/alibaba-fusion/next/compare/1.15.9...1.15.10) (2019-06-27)


### Features

* **Table:** dragable table with react-dnd ([95c05c9](https://github.com/alibaba-fusion/next/commit/95c05c9))




## [1.15.9](https://github.com/alibaba-fusion/next/compare/1.15.8...1.15.9) (2019-06-20)


### Bug Fixes

* **Tree:** set checkedStrategy check error ([fa3c164](https://github.com/alibaba-fusion/next/commit/fa3c164))




## [1.15.8](https://github.com/alibaba-fusion/next/compare/1.15.7...1.15.8) (2019-06-20)


### Bug Fixes

* **MenuButton:** error types path ([4293361](https://github.com/alibaba-fusion/next/commit/4293361))
* **Tree:** dataSource will update indeterminateKeys ([9b1c07d](https://github.com/alibaba-fusion/next/commit/9b1c07d))




## [1.15.7](https://github.com/alibaba-fusion/next/compare/1.15.6...1.15.7) (2019-06-19)


### Bug Fixes

* **Checkbox:** add label cursor ([0122707](https://github.com/alibaba-fusion/next/commit/0122707))
* **Checkbox:** change default cursor to pointer ([499f581](https://github.com/alibaba-fusion/next/commit/499f581))
* **Overlay:** stop click propagation. #close 791 ([c0b7ef6](https://github.com/alibaba-fusion/next/commit/c0b7ef6))
* **Pagination:**  popupProps warning ([b534738](https://github.com/alibaba-fusion/next/commit/b534738))
* **Radio:** change default cursor to pointer ([e8e4911](https://github.com/alibaba-fusion/next/commit/e8e4911))
* **Radio:** only add tabIndex to Radio instead of all child of Group ([d2054f1](https://github.com/alibaba-fusion/next/commit/d2054f1))
* **Tree:**  can`t pos of undefined ([9b0ff2c](https://github.com/alibaba-fusion/next/commit/9b0ff2c))


### Features

* **Dialog:** spacing between buttons theme var ([5851fd5](https://github.com/alibaba-fusion/next/commit/5851fd5))
* **Step:** fix [#796](https://github.com/alibaba-fusion/next/issues/796) ([ca6f988](https://github.com/alibaba-fusion/next/commit/ca6f988))
* **Upload:** add theme variables ([a973650](https://github.com/alibaba-fusion/next/commit/a973650))




## [1.15.6](https://github.com/alibaba-fusion/next/compare/1.15.5...1.15.6) (2019-06-13)


### Bug Fixes

* **Balloon:** position shouldn't be chanaged when no space, close [#774](https://github.com/alibaba-fusion/next/issues/774) ([a6d55f8](https://github.com/alibaba-fusion/next/commit/a6d55f8))
* **Dialog:** title radius when bg color #close-783 ([8692936](https://github.com/alibaba-fusion/next/commit/8692936)), closes [#close-783](https://github.com/alibaba-fusion/next/issues/close-783)
* **Field:** setError valiate - #close 747 ([25adbd1](https://github.com/alibaba-fusion/next/commit/25adbd1))
* **NumberPicker:** support null to clear value. relate [#780](https://github.com/alibaba-fusion/next/issues/780) ([15ae286](https://github.com/alibaba-fusion/next/commit/15ae286))
* **Search:** hasIcon with shape=simple. Close [#734](https://github.com/alibaba-fusion/next/issues/734) ([033bfb8](https://github.com/alibaba-fusion/next/commit/033bfb8))
* **Slider:** lazyLoad pre and next pics, close [#706](https://github.com/alibaba-fusion/next/issues/706) ([f841201](https://github.com/alibaba-fusion/next/commit/f841201))




## [1.15.5](https://github.com/alibaba-fusion/next/compare/1.15.4...1.15.5) (2019-06-06)


### Bug Fixes

* **CascaderSelect:** clear search input  change ([bff0134](https://github.com/alibaba-fusion/next/commit/bff0134))
* **Date-picker:** prop 'onOk' typescript declaration File wrong ([3c21dcd](https://github.com/alibaba-fusion/next/commit/3c21dcd))
* **Nav:** disorder when set margin(t, b) of hoz Nav, close [#744](https://github.com/alibaba-fusion/next/issues/744) ([f6f9625](https://github.com/alibaba-fusion/next/commit/f6f9625))
* **RangePicker:** to start month  after selected ([2ea6cf6](https://github.com/alibaba-fusion/next/commit/2ea6cf6))
* **Select:** warning in select base, close [#771](https://github.com/alibaba-fusion/next/issues/771) ([dae7047](https://github.com/alibaba-fusion/next/commit/dae7047))
* **Table:** resizeable won't work if isTree on, close [#384](https://github.com/alibaba-fusion/next/issues/384) ([bf1eb55](https://github.com/alibaba-fusion/next/commit/bf1eb55))


### Features

* **Table:** add API filterMenuProps ([61ab2b0](https://github.com/alibaba-fusion/next/commit/61ab2b0))




## [1.15.4](https://github.com/alibaba-fusion/next/compare/1.15.3...1.15.4) (2019-05-31)


### Bug Fixes

* **Table:** React.Fragment is supported in 16.2.4, use [] instead ([aec5368](https://github.com/alibaba-fusion/next/commit/aec5368))


### Features

* **Select:** add API tagInline to make it won't wrap ([d21f8a1](https://github.com/alibaba-fusion/next/commit/d21f8a1))




## [1.15.3](https://github.com/alibaba-fusion/next/compare/1.15.2...1.15.3) (2019-05-30)


### Bug Fixes

* **Select:** tag should show all content but it ellipsis, close [#751](https://github.com/alibaba-fusion/next/issues/751) ([46122aa](https://github.com/alibaba-fusion/next/commit/46122aa))




## [1.15.2](https://github.com/alibaba-fusion/next/compare/1.15.1...1.15.2) (2019-05-29)


### Bug Fixes

* **Nav:** active line should have disappear animation ([8a1ad70](https://github.com/alibaba-fusion/next/commit/8a1ad70))
* **NumberPicker:** UI for button height not eq input ([c8b78bb](https://github.com/alibaba-fusion/next/commit/c8b78bb))
* **Tag:** checkable selected Tag border should be able to config ([c06f513](https://github.com/alibaba-fusion/next/commit/c06f513))
* **Tag:** resolve overflow issues, close [#727](https://github.com/alibaba-fusion/next/issues/727) ([538e1d4](https://github.com/alibaba-fusion/next/commit/538e1d4))
* **Tag:** text overflow for custom height ([5b52372](https://github.com/alibaba-fusion/next/commit/5b52372))


### Features

* **Upload:** add upload border-radius variable ([fb3f8e4](https://github.com/alibaba-fusion/next/commit/fb3f8e4))




## [1.15.1](https://github.com/alibaba-fusion/next/compare/1.15.0...1.15.1) (2019-05-27)


### Bug Fixes

* **ConfigProvider:** locale should deep merge zh-cn.js, close [#719](https://github.com/alibaba-fusion/next/issues/719) ([c10baa2](https://github.com/alibaba-fusion/next/commit/c10baa2))
* **Tag:** check icon should use variable, close [#720](https://github.com/alibaba-fusion/next/issues/720) ([709d5d4](https://github.com/alibaba-fusion/next/commit/709d5d4))
* **Tag:** clean up scss ([7c643a3](https://github.com/alibaba-fusion/next/commit/7c643a3))


### Deprecated

* **Table:** getRowProps => rowProps, getCellProps => cellProps ([185d70a](https://github.com/alibaba-fusion/next/commit/185d70a)), closes [#724](https://github.com/alibaba-fusion/next/issues/724)


### Features

* add followTrigger for component with overlay ([f98fb15](https://github.com/alibaba-fusion/next/commit/f98fb15))
* **Balloon:** make font-size font-weight configurable ([e6f7137](https://github.com/alibaba-fusion/next/commit/e6f7137))
* **Button:** component support div or span ([66341a0](https://github.com/alibaba-fusion/next/commit/66341a0))
* **Calendar:** support 0.x locale.format ([c2d7db2](https://github.com/alibaba-fusion/next/commit/c2d7db2))
* **Calendar:** support 0.x YearCellRender ([1ee70af](https://github.com/alibaba-fusion/next/commit/1ee70af))
* **Core:** split shadow distance from sdn to sdny ([85101eb](https://github.com/alibaba-fusion/next/commit/85101eb))
* **DatePicker:** support 0.x ranges ([59d0483](https://github.com/alibaba-fusion/next/commit/59d0483))
* **Nav:** add theme configuration about hover ([27ccded](https://github.com/alibaba-fusion/next/commit/27ccded))
* **NumberPicker:** support 0.x onDisabled ([947d3d2](https://github.com/alibaba-fusion/next/commit/947d3d2))
* **Pagintion:** add config variables ([7a27465](https://github.com/alibaba-fusion/next/commit/7a27465))
* **Slider:** support 0.x onBeforeChange ([34603cc](https://github.com/alibaba-fusion/next/commit/34603cc))
* **Table:** add columnProps/titleAddons/titleProps of rowSelection ([965118f](https://github.com/alibaba-fusion/next/commit/965118f))
* **Tag:** change tag var sections ([b71c883](https://github.com/alibaba-fusion/next/commit/b71c883))
* **Tag:** closable normal has custom colors ([da08e11](https://github.com/alibaba-fusion/next/commit/da08e11))
* **Tag:** primary and closable primary use same style ([28d4738](https://github.com/alibaba-fusion/next/commit/28d4738))
* **Tag:** primary theme customization ([b82e7b1](https://github.com/alibaba-fusion/next/commit/b82e7b1))
* **Transfer:** make footer shadow configurable ([9df069d](https://github.com/alibaba-fusion/next/commit/9df069d))




# [1.15.0](https://github.com/alibaba-fusion/next/compare/1.14.6...1.15.0) (2019-05-24)


### Bug Fixes

* fusion cool render issues ([fbdffaa](https://github.com/alibaba-fusion/next/commit/fbdffaa))
* **Calendar:** select month auto change date view ([354f545](https://github.com/alibaba-fusion/next/commit/354f545))
* **Field:** resetDefault when parseValue false ([e2c2b00](https://github.com/alibaba-fusion/next/commit/e2c2b00))
* **Message:** can`t close after click ([53fe94d](https://github.com/alibaba-fusion/next/commit/53fe94d))
* **Select:** init flatten ds ([57667a4](https://github.com/alibaba-fusion/next/commit/57667a4))
* **Select:** value no show fillProps with empty dataSource. Close [#715](https://github.com/alibaba-fusion/next/issues/715) ([70a15ab](https://github.com/alibaba-fusion/next/commit/70a15ab))


### Features

* **Select:** add api to customize show tag content ([4c29109](https://github.com/alibaba-fusion/next/commit/4c29109))
* **Select:** add maxTagPlaceholder ([bfc9b20](https://github.com/alibaba-fusion/next/commit/bfc9b20))




## [1.14.6](https://github.com/alibaba-fusion/next/compare/1.14.5...1.14.6) (2019-05-23)


### Bug Fixes

* **CascaderSelect:** Fixed [#676](https://github.com/alibaba-fusion/next/issues/676) ([b8a0ba2](https://github.com/alibaba-fusion/next/commit/b8a0ba2))
* **Field:** init values with parseName=false ([0c92cfb](https://github.com/alibaba-fusion/next/commit/0c92cfb))




## [1.14.5](https://github.com/alibaba-fusion/next/compare/1.14.4...1.14.5) (2019-05-22)


### Bug Fixes

* **Field:** parseName defaults ([#683](https://github.com/alibaba-fusion/next/issues/683)) ([7fe0130](https://github.com/alibaba-fusion/next/commit/7fe0130))
* **Field:** revert typescript of Field to any ([c35d935](https://github.com/alibaba-fusion/next/commit/c35d935))
* **Input:** maxLength in safari on Mac. Close [#671](https://github.com/alibaba-fusion/next/issues/671) ([f771d67](https://github.com/alibaba-fusion/next/commit/f771d67))
* **Tab:** should not listen to extra keyboard events ([50e1699](https://github.com/alibaba-fusion/next/commit/50e1699))



## [1.14.4](https://github.com/alibaba-fusion/next/compare/1.14.3...1.14.4) (2019-05-16)


### Bug Fixes

* fix DatePicker,Switch,Upload to a11y ([99ef836](https://github.com/alibaba-fusion/next/commit/99ef836))
* **Checkbox:** number 0 should be rendered ([93318d8](https://github.com/alibaba-fusion/next/commit/93318d8))
* **Field:** no react key props for errors ([93127d6](https://github.com/alibaba-fusion/next/commit/93127d6))
* **Menu:** Resolve expanding and selecting in uncontrolled mode ([#667](https://github.com/alibaba-fusion/next/issues/667)) ([0ba7e4a](https://github.com/alibaba-fusion/next/commit/0ba7e4a))
* **Menu:** Resolve items that created by `React.forwardRef` ([807d8de](https://github.com/alibaba-fusion/next/commit/807d8de))
* **Select:** hight first item with remote datasource. Close [#654](https://github.com/alibaba-fusion/next/issues/654) ([d784ee0](https://github.com/alibaba-fusion/next/commit/d784ee0))


### Features

* add file types/ to customize index.d.ts ([c537d81](https://github.com/alibaba-fusion/next/commit/c537d81))
* **Menu:** add API embeddable ([6d21bb1](https://github.com/alibaba-fusion/next/commit/6d21bb1))
* **Nav:** add API embeddable ([1379df3](https://github.com/alibaba-fusion/next/commit/1379df3))
* **Table:** add API sortIcons to customize sort icons ([7abcf7c](https://github.com/alibaba-fusion/next/commit/7abcf7c))




## [1.14.3](https://github.com/alibaba-fusion/next/compare/1.14.2...1.14.3) (2019-05-09)


### Bug Fixes

* **Core:** clip-path in sr-only destroys scrolling performance ([49ff99f](https://github.com/alibaba-fusion/next/commit/49ff99f))
* **Dialog:** fixed height dialog ([c334b2b](https://github.com/alibaba-fusion/next/commit/c334b2b))
* **Menu** empty focus key when blur using undefined ([#634](https://github.com/alibaba-fusion/next/issues/634)) ([8c6a3af](https://github.com/alibaba-fusion/next/commit/8c6a3af))
* **Slider:** dots should be cursor: pointer; ([1754a74](https://github.com/alibaba-fusion/next/commit/1754a74))
* **Table:** using clientHeight instead of maxBodyHeight ([33abd4a](https://github.com/alibaba-fusion/next/commit/33abd4a))
* **Upload:** a11y problem ([97ab17b](https://github.com/alibaba-fusion/next/commit/97ab17b))



## [1.14.2](https://github.com/alibaba-fusion/next/compare/1.14.1...1.14.2) (2019-04-29)


### Bug Fixes

* **Balloon:** autoFocus should be false when triggerType is focus ([af7cce1](https://github.com/alibaba-fusion/next/commit/af7cce1))
* **DatePicker:** delete input, can`t select date ([cf9f9e4](https://github.com/alibaba-fusion/next/commit/cf9f9e4))
* **Loading:** backwards compatible fullscreen ([3ff5972](https://github.com/alibaba-fusion/next/commit/3ff5972))
* **Loading:** fix offset for fullscreen ([481c409](https://github.com/alibaba-fusion/next/commit/481c409))
* **Overlay:** touch events to dismiss overlay ([b35a59c](https://github.com/alibaba-fusion/next/commit/b35a59c))
* **Select:** issue [#550](https://github.com/alibaba-fusion/next/issues/550) add api followTrigger ([9312ea8](https://github.com/alibaba-fusion/next/commit/9312ea8))
* **Step:** step keydown event bubble bug ([4a843f0](https://github.com/alibaba-fusion/next/commit/4a843f0))
* **Table:** add deprecated API to make 0.x 1.x behave the same ([43f17aa](https://github.com/alibaba-fusion/next/commit/43f17aa))
* **Tag:** fix state not matching props ([#614](https://github.com/alibaba-fusion/next/issues/614)) ([52d09dd](https://github.com/alibaba-fusion/next/commit/52d09dd))




## [1.14.1](https://github.com/alibaba-fusion/next/compare/1.14.0...1.14.1) (2019-04-24)


### Bug Fixes

* **Tab:** capsure tab shakes ([a19901f](https://github.com/alibaba-fusion/next/commit/a19901f))
* **Tab:** wrong initial position due to animation ([fbd079e](https://github.com/alibaba-fusion/next/commit/fbd079e))
* **Tag:** pass checked state to onChange ([57cfa20](https://github.com/alibaba-fusion/next/commit/57cfa20))
* **Tree:** error when checkKey not in dataSource ([b925d76](https://github.com/alibaba-fusion/next/commit/b925d76))




# [1.14.0](https://github.com/alibaba-fusion/next/compare/1.13.13...1.14.0) (2019-04-11)


### Bug Fixes

* support function component ([a1b1f41](https://github.com/alibaba-fusion/next/commit/a1b1f41))
* **Radio:** add configurations ([f5dbaa9](https://github.com/alibaba-fusion/next/commit/f5dbaa9))
* **Tab:** add default maxHeight for tab popup ([5358921](https://github.com/alibaba-fusion/next/commit/5358921))
* **Tab:** change variable order ([8451ef8](https://github.com/alibaba-fusion/next/commit/8451ef8))
* **Tab:** issues of closable ([05ec227](https://github.com/alibaba-fusion/next/commit/05ec227))
* **Tab:** remove invalid character in variable name ([8dbd6df](https://github.com/alibaba-fusion/next/commit/8dbd6df))
* **Tab:** slide related issues ([986178a](https://github.com/alibaba-fusion/next/commit/986178a))
* **Table:** merge cell with GroupHeader GroupFooter, close [#547](https://github.com/alibaba-fusion/next/issues/547) ([4a420cb](https://github.com/alibaba-fusion/next/commit/4a420cb))
* **TreeSelect:** supoort a11y, add aria attrs ([d34bdc2](https://github.com/alibaba-fusion/next/commit/d34bdc2))


### Deprecated

* **Balloon:** triggerType=focus is deprecated at Balloon ([32710a3](https://github.com/alibaba-fusion/next/commit/32710a3))
* **Dropdown:** triggerType="focus" is deprecated ([a07bb54](https://github.com/alibaba-fusion/next/commit/a07bb54))


### Features

* add accessibility.scss ([127fbe7](https://github.com/alibaba-fusion/next/commit/127fbe7))
* **Breadcrumb:** add component props ([3e9c3ae](https://github.com/alibaba-fusion/next/commit/3e9c3ae))
* **Collapse:** add title hover theme variables ([19f3501](https://github.com/alibaba-fusion/next/commit/19f3501))
* **DatePicker:** add keyboard control ([025f752](https://github.com/alibaba-fusion/next/commit/025f752))
* **Dialog:** quick  dialog padding ([14a4ded](https://github.com/alibaba-fusion/next/commit/14a4ded))
* **Input:** add api hasBorder for TextArea. Close [#266](https://github.com/alibaba-fusion/next/issues/266) ([d3c8e23](https://github.com/alibaba-fusion/next/commit/d3c8e23))
* **Message:** configable message icon type ([7a80c13](https://github.com/alibaba-fusion/next/commit/7a80c13))
* **Overlay:** custom keycode trigger ([7ebfb99](https://github.com/alibaba-fusion/next/commit/7ebfb99))
* **Select:** support a11y. Close [#327](https://github.com/alibaba-fusion/next/issues/327) ([22a42e7](https://github.com/alibaba-fusion/next/commit/22a42e7))
* **Slider:** split variable for dots height & width ([2f5c247](https://github.com/alibaba-fusion/next/commit/2f5c247))
* **Step:** support keyborad direction and use semantic label ([7225e8b](https://github.com/alibaba-fusion/next/commit/7225e8b))
* **Tab:** adding more configuration of wrapped tab ([e72129e](https://github.com/alibaba-fusion/next/commit/e72129e))
* **Tab:** support more config ([70511e9](https://github.com/alibaba-fusion/next/commit/70511e9))
* **Table:** make header padding configurable ([3b7a23b](https://github.com/alibaba-fusion/next/commit/3b7a23b))
* **Tag:** add content min width theme variable ([8bfef9a](https://github.com/alibaba-fusion/next/commit/8bfef9a))
* **Upload:** allow down load when disabled ([975cbab](https://github.com/alibaba-fusion/next/commit/975cbab))
* **Upload:** card and drag configurable item ([9b485d7](https://github.com/alibaba-fusion/next/commit/9b485d7))




## [1.13.13](https://github.com/alibaba-fusion/next/compare/1.13.12...1.13.13) (2019-04-11)


### Bug Fixes

* **Pagination:** pagination dropdown position ([93482f7](https://github.com/alibaba-fusion/next/commit/93482f7))
* **Table:** mismatch between minWidth and value, close [#554](https://github.com/alibaba-fusion/next/issues/554) ([c589863](https://github.com/alibaba-fusion/next/commit/c589863))




## [1.13.12](https://github.com/alibaba-fusion/next/compare/1.13.11...1.13.12) (2019-04-04)


### Bug Fixes

* **Balloon:** babel exports issue ([74a09a4](https://github.com/alibaba-fusion/next/commit/74a09a4))




## [1.13.11](https://github.com/alibaba-fusion/next/compare/1.13.10...1.13.11) (2019-04-04)


### Bug Fixes

* **Balloon:** popup won\'t goaway when hover out of disabled Button ([c569486](https://github.com/alibaba-fusion/next/commit/c569486)), closes [close#308](https://github.com/close/issues/308)
* **Balloon:** strengthen robustness for align, close[#517](https://github.com/alibaba-fusion/next/issues/517) ([a820b1a](https://github.com/alibaba-fusion/next/commit/a820b1a))
* **Rating:** remove form tag ([fa87aa9](https://github.com/alibaba-fusion/next/commit/fa87aa9))
* **Search:** search config bug ([6919e41](https://github.com/alibaba-fusion/next/commit/6919e41))
* **Select:** AutoComplete can input space with popupContent. Close [#500](https://github.com/alibaba-fusion/next/issues/500) ([07dc088](https://github.com/alibaba-fusion/next/commit/07dc088))
* **Tab:** adding api document ([3ba4f26](https://github.com/alibaba-fusion/next/commit/3ba4f26))




<a name="1.13.10"></a>
## [1.13.10](https://github.com/alibaba-fusion/next/compare/1.13.9...1.13.10) (2019-03-28)


### Bug Fixes

* **Input:** fix lineheight. Close [#214](https://github.com/alibaba-fusion/next/issues/214) ([706adce](https://github.com/alibaba-fusion/next/commit/706adce))
* **Menu:** filter duplicate keys ([e8e6e52](https://github.com/alibaba-fusion/next/commit/e8e6e52))
* **Nav:** remove focus style which equals to hover ([f31320f](https://github.com/alibaba-fusion/next/commit/f31320f))
* **NumberPicker:** remove padding in inline mode ([a5c59a7](https://github.com/alibaba-fusion/next/commit/a5c59a7))
* **Range:** revert unnecessary style change ([7ed0bb9](https://github.com/alibaba-fusion/next/commit/7ed0bb9))
* **Select:** use mouse to select text. Close [#469](https://github.com/alibaba-fusion/next/issues/469) ([d474b7a](https://github.com/alibaba-fusion/next/commit/d474b7a))
* **Select:** value={0} display bug. Close [#449](https://github.com/alibaba-fusion/next/issues/449) ([6e7e642](https://github.com/alibaba-fusion/next/commit/6e7e642))
* **SplitButton:** normal icon color override ([b18c332](https://github.com/alibaba-fusion/next/commit/b18c332))
* **Switch:** disable handle not centered when config border ([f28bf52](https://github.com/alibaba-fusion/next/commit/f28bf52))
* **Tab:** right border missing in capsule shape ([8ff454e](https://github.com/alibaba-fusion/next/commit/8ff454e))
* **Table:** style confusion caused by vertical scrollbar, close [#473](https://github.com/alibaba-fusion/next/issues/473) ([9149879](https://github.com/alibaba-fusion/next/commit/9149879))
* **Transfer:** fix wrong Type of `title` props in `TransferPanel` ([d088da9](https://github.com/alibaba-fusion/next/commit/d088da9))
* **Upload:** Resolve context missing ([8a26eec](https://github.com/alibaba-fusion/next/commit/8a26eec))


### Features

* **Balloon:** make Tooltip's shadow configurable ([9a6a931](https://github.com/alibaba-fusion/next/commit/9a6a931))
* **Menu:** add API to set selectIcon right ([b5dd678](https://github.com/alibaba-fusion/next/commit/b5dd678))
* **Slider:** make slider dots configurable ([027c2a4](https://github.com/alibaba-fusion/next/commit/027c2a4))




<a name="1.13.9"></a>

## [1.13.9](https://github.com/alibaba-fusion/next/compare/1.13.8...1.13.9) (2019-03-19)

### Bug Fixes

-   **CascaderSelect:** support value not in data ([93e4227](https://github.com/alibaba-fusion/next/commit/93e4227))
-   **Overlay:** fix position typo ([71bf7d2](https://github.com/alibaba-fusion/next/commit/71bf7d2))
-   **Select:** hasSelectAll bug under controled ([fd5faf4](https://github.com/alibaba-fusion/next/commit/fd5faf4))
-   **Table:** warning when stickyHeader + lock with enough space ([46a38f6](https://github.com/alibaba-fusion/next/commit/46a38f6))
-   **Util:** Prevent warning on production ([0fcde5a](https://github.com/alibaba-fusion/next/commit/0fcde5a))

<a name="1.13.8"></a>

## [1.13.8](https://github.com/alibaba-fusion/next/compare/1.13.7...1.13.8) (2019-03-14)

### Bug Fixes

-   **ConfigProvider:** config on components should take higher priority ([87917c8](https://github.com/alibaba-fusion/next/commit/87917c8))

<a name="1.13.7"></a>

## [1.13.7](https://github.com/alibaba-fusion/next/compare/1.13.6...1.13.7) (2019-03-13)

### Bug Fixes

-   **Select:** css override fail when using theme ([5f80ead](https://github.com/alibaba-fusion/next/commit/5f80ead))

<a name="1.13.6"></a>

## [1.13.6](https://github.com/alibaba-fusion/next/compare/1.13.5...1.13.6) (2019-03-13)

### Bug Fixes

-   **DatePicker:** disabledDate will auto disable month ([94276d2](https://github.com/alibaba-fusion/next/commit/94276d2))
-   **Step:** labelPlacement value change dbl times ([3c7ae73](https://github.com/alibaba-fusion/next/commit/3c7ae73))
-   **Tag:** close button not showing in select when text too long ([fd341f8](https://github.com/alibaba-fusion/next/commit/fd341f8))
-   **Upload:** className not pass in ([cb33e75](https://github.com/alibaba-fusion/next/commit/cb33e75))
-   **Upload:** drag upload no trigger onDrop ([5f58f29](https://github.com/alibaba-fusion/next/commit/5f58f29))
-   **Upload:** fix setValue fail in onSuccess ([384c379](https://github.com/alibaba-fusion/next/commit/384c379))

### Features

-   **ConfigProvider:** add ErrorBoundary ([ada2b5b](https://github.com/alibaba-fusion/next/commit/ada2b5b))
-   **Range:** RTL feature of Range Component ([2127ee6](https://github.com/alibaba-fusion/next/commit/2127ee6))
-   **Select:** can unselect all ([77077a2](https://github.com/alibaba-fusion/next/commit/77077a2))
-   **Tab:** RTL feature of Tab ([142af04](https://github.com/alibaba-fusion/next/commit/142af04))

<a name="1.13.5"></a>

## [1.13.5](https://github.com/alibaba-fusion/next/compare/1.13.3...1.13.5) (2019-03-07)

### Bug Fixes

-   **Collapse:** fix nested collapse icon ([7a6842a](https://github.com/alibaba-fusion/next/commit/7a6842a))
-   **DatePicker:** date range picker select time error ([59eaa9c](https://github.com/alibaba-fusion/next/commit/59eaa9c))
-   **Step:** step-item param of labelPlacement change update bug ([f0939af](https://github.com/alibaba-fusion/next/commit/f0939af))
-   **Tab:** can't scroll when active item is inside view ([a8f4d18](https://github.com/alibaba-fusion/next/commit/a8f4d18))
-   **Table:** extra lock columns when enough space && dataSource=[], close[#364](https://github.com/alibaba-fusion/next/issues/364) ([b9c2328](https://github.com/alibaba-fusion/next/commit/b9c2328))

### Features

-   **NumberPicker:** consider [。] as [.](<[8369b4a](https://github.com/alibaba-fusion/next/commit/8369b4a)>)
-   **Upload:** add rtl support ([5505d6d](https://github.com/alibaba-fusion/next/commit/5505d6d))

<a name="1.13.4"></a>

## [1.13.4](https://github.com/alibaba-fusion/next/compare/1.13.3...1.13.4) (2019-02-28)

### Features

-   **NumberPicker:** consider [。] as [.](<[8369b4a](https://github.com/alibaba-fusion/next/commit/8369b4a)>)

<a name="1.13.3"></a>

## [1.13.3](https://github.com/alibaba-fusion/next/compare/1.13.2...1.13.3) (2019-02-28)

### Bug Fixes

-   use offset when positioning overlay, do not adjust range tooltip ([ac22b05](https://github.com/alibaba-fusion/next/commit/ac22b05))
-   **Range:** set height for bare-range like input ([b7a6242](https://github.com/alibaba-fusion/next/commit/b7a6242))
-   **Select:** add aria-hidden to dropdown arrow. Close [#322](https://github.com/alibaba-fusion/next/issues/322) ([b546f05](https://github.com/alibaba-fusion/next/commit/b546f05))
-   **Select:** reset role to menu. Close [#326](https://github.com/alibaba-fusion/next/issues/326) ([1ba6d5e](https://github.com/alibaba-fusion/next/commit/1ba6d5e))
-   **Select:** throw error when children contain null ([b703efb](https://github.com/alibaba-fusion/next/commit/b703efb))
-   **Tab:** a11y support closeable tab ([86c4e10](https://github.com/alibaba-fusion/next/commit/86c4e10))
-   **Tab:** css syntax flaw ([0d7518e](https://github.com/alibaba-fusion/next/commit/0d7518e))
-   **Table:** index with expanded table when expandedIndexSimulate is true ([7ce3f7e](https://github.com/alibaba-fusion/next/commit/7ce3f7e))
-   **Tree:** can`t drag external element ([a247a09](https://github.com/alibaba-fusion/next/commit/a247a09))
-   **Tree:** throw error when children contain null or string ([7a2c9cc](https://github.com/alibaba-fusion/next/commit/7a2c9cc))
-   **Search:** mod search role Close [#330](https://github.com/alibaba-fusion/next/issues/330) ([e5aac4d](https://github.com/alibaba-fusion/next/commit/e5aac4d))
-   **Transfer:** add a11y support for transfer ([4856363](https://github.com/alibaba-fusion/next/commit/4856363))

<a name="1.13.2"></a>

## [1.13.2](https://github.com/alibaba-fusion/next/compare/1.13.1...1.13.2) (2019-02-22)

### Bug Fixes

-   **Table:** correct cell(recored, index) when expandedIndexSimulate ([2ba1ba8](https://github.com/alibaba-fusion/next/commit/2ba1ba8))

<a name="1.13.1"></a>

## [1.13.1](https://github.com/alibaba-fusion/next/compare/1.13.0...1.13.1) (2019-02-21)

### Bug Fixes

-   **NumberPicker:** support rtl ([74980bd](https://github.com/alibaba-fusion/next/commit/74980bd))

### Features

-   rtl support for Collapse and Loading ([a80c4c5](https://github.com/alibaba-fusion/next/commit/a80c4c5))
-   **Affix:** receive the change of offset props ([f190bc7](https://github.com/alibaba-fusion/next/commit/f190bc7))
-   **Badge:** support rtl ([0deedb7](https://github.com/alibaba-fusion/next/commit/0deedb7))
-   **Breadcrumb:** support rtl ([ba2a287](https://github.com/alibaba-fusion/next/commit/ba2a287))
-   **Card:** move rtl.scss ([ab95d34](https://github.com/alibaba-fusion/next/commit/ab95d34))
-   **Card:** support rtl ([6dd0673](https://github.com/alibaba-fusion/next/commit/6dd0673))
-   **Cascader:** support rtl ([1ed6e25](https://github.com/alibaba-fusion/next/commit/1ed6e25))
-   **Checkbox:** RTL feature ([313f1ac](https://github.com/alibaba-fusion/next/commit/313f1ac))
-   **Dropdown:** support rtl ([a9beb00](https://github.com/alibaba-fusion/next/commit/a9beb00))
-   **Field:** add api autoValidate=false to close onChange validate ([b9b0129](https://github.com/alibaba-fusion/next/commit/b9b0129))
-   **Field:** api spliceArray to splice Array like name.{index} ([484841b](https://github.com/alibaba-fusion/next/commit/484841b))
-   **Form:** support autoValidate=false to close auto validate ([4bec5db](https://github.com/alibaba-fusion/next/commit/4bec5db))
-   **Form:** support rtl ([9fd345e](https://github.com/alibaba-fusion/next/commit/9fd345e))
-   **Grid:** support rtl ([f4ba7b4](https://github.com/alibaba-fusion/next/commit/f4ba7b4))
-   **Paragraph:** add rtl prop ([d6b3ea5](https://github.com/alibaba-fusion/next/commit/d6b3ea5))
-   **Rating:** support custom display of rating grade ([df55fcf](https://github.com/alibaba-fusion/next/commit/df55fcf))
-   **Rating:** support rtl ([d793959](https://github.com/alibaba-fusion/next/commit/d793959))
-   **Switch:** RTL feature along with some eslint fixes ([1642c0c](https://github.com/alibaba-fusion/next/commit/1642c0c))
-   **Table:** API expandedIndexSimulate added ([a227aa2](https://github.com/alibaba-fusion/next/commit/a227aa2))
-   **Table:** support rtl ([c36d2c0](https://github.com/alibaba-fusion/next/commit/c36d2c0))
-   **Transfer:** support rtl prop ([1575d2f](https://github.com/alibaba-fusion/next/commit/1575d2f))
-   **Tree:** support rtl ([37fa931](https://github.com/alibaba-fusion/next/commit/37fa931))

<a name="1.13.0"></a>

# [1.13.0](https://github.com/alibaba-fusion/next/compare/1.12.8...1.13.0) (2019-02-21)

<a name="1.12.8"></a>

## [1.12.8](https://github.com/alibaba-fusion/next/compare/1.12.7...1.12.8) (2019-02-21)

<a name="1.12.7"></a>

## [1.12.7](https://github.com/alibaba-fusion/next/compare/1.12.6...1.12.7) (2019-02-21)

### Bug Fixes

-   **Radio:** child can contain null ([c703b60](https://github.com/alibaba-fusion/next/commit/c703b60))

<a name="1.12.6"></a>

## [1.12.6](https://github.com/alibaba-fusion/next/compare/1.12.5...1.12.6) (2019-02-21)

### Bug Fixes

-   **Cascader:** set listStyle height style error ([61ea4f7](https://github.com/alibaba-fusion/next/commit/61ea4f7))
-   **Input:** add name to input dom ([51d151f](https://github.com/alibaba-fusion/next/commit/51d151f))

<a name="1.12.5"></a>

## [1.12.5](https://github.com/alibaba-fusion/next/compare/1.12.4...1.12.5) (2019-02-20)

### Bug Fixes

-   style for rtl in Menu & Slider ([573694a](https://github.com/alibaba-fusion/next/commit/573694a))
-   **Message:** can`t config content font-size ([2c18b4d](https://github.com/alibaba-fusion/next/commit/2c18b4d))
-   **Radio:** a11y ([f26cb24](https://github.com/alibaba-fusion/next/commit/f26cb24))
-   **Table:** can't set className via getRowProps in tree mode, close [#343](https://github.com/alibaba-fusion/next/issues/343) ([44c20cb](https://github.com/alibaba-fusion/next/commit/44c20cb))

### Features

-   **Tag:** wrap in ConfigProvider ([95233cc](https://github.com/alibaba-fusion/next/commit/95233cc))

<a name="1.12.4"></a>

## [1.12.4](https://github.com/alibaba-fusion/next/compare/1.12.3...1.12.4) (2019-02-14)

### Bug Fixes

-   **Checkbox:** group didn't honor children's indeternimated state ([f90a747](https://github.com/alibaba-fusion/next/commit/f90a747))
-   **Input:** textarea placeholder in ie11 ([069c73b](https://github.com/alibaba-fusion/next/commit/069c73b))
-   **Select:** could add tag while popup not visible ([662a959](https://github.com/alibaba-fusion/next/commit/662a959))
-   **Table:** can't scroll horizontally when body scrollTop !== 0 ([5935b52](https://github.com/alibaba-fusion/next/commit/5935b52))
-   **Table:** head selection emptied wrongly ([adb3b59](https://github.com/alibaba-fusion/next/commit/adb3b59))

### Features

-   **Icon:** suport size of inherit ([48e7f1d](https://github.com/alibaba-fusion/next/commit/48e7f1d))
-   **Progress:** remove tabindex ([602b267](https://github.com/alibaba-fusion/next/commit/602b267))
-   **Step:** uniform parameter of step ([e1d2ab5](https://github.com/alibaba-fusion/next/commit/e1d2ab5))

<a name="1.12.3"></a>

## [1.12.3](https://github.com/alibaba-fusion/next/compare/1.12.2...1.12.3) (2019-01-28)

### Bug Fixes

-   **Pagination:** locale text error ([406c198](https://github.com/alibaba-fusion/next/commit/406c198))
-   **Tab:** extra is covered by other elements ([c3d913f](https://github.com/alibaba-fusion/next/commit/c3d913f))
-   **Tab:** inproperly focus when using with field ([0d3bd2c](https://github.com/alibaba-fusion/next/commit/0d3bd2c))

<a name="1.12.2"></a>

## [1.12.2](https://github.com/alibaba-fusion/next/compare/1.12.1...1.12.2) (2019-01-28)

### Bug Fixes

-   **Util:** DO NOT process any non-string type value ([2a3280f](https://github.com/alibaba-fusion/next/commit/2a3280f))

<a name="1.12.1"></a>

## [1.12.1](https://github.com/alibaba-fusion/next/compare/1.12.0...1.12.1) (2019-01-27)

### Bug Fixes

-   **Upload:** import method from wrong path ([7c1a6b6](https://github.com/alibaba-fusion/next/commit/7c1a6b6))

<a name="1.12.0"></a>

# [1.12.0](https://github.com/alibaba-fusion/next/compare/1.11.11...1.12.0) (2019-01-25)

### Bug Fixes

-   **Card:** not compute card footer in height ([45da06d](https://github.com/alibaba-fusion/next/commit/45da06d))
-   **Cascader:** array will reverse ([24e2a0d](https://github.com/alibaba-fusion/next/commit/24e2a0d))
-   **Dialog:** add aria-label for close icon ([4a1d8ea](https://github.com/alibaba-fusion/next/commit/4a1d8ea))
-   **Form:** add role=grid to form ([b2f3cad](https://github.com/alibaba-fusion/next/commit/b2f3cad))
-   **Menu:** keycode.space trigger click ([531492e](https://github.com/alibaba-fusion/next/commit/531492e))
-   **NumberPicker:** no onBlur while click btn ([6e70f1e](https://github.com/alibaba-fusion/next/commit/6e70f1e))
-   **Pagination:** pageSizeSelector is overlay ([9b7464a](https://github.com/alibaba-fusion/next/commit/9b7464a))
-   **Search:** disable not work ([1bedb19](https://github.com/alibaba-fusion/next/commit/1bedb19))
-   **Select:** Option value can be array ([fe350f2](https://github.com/alibaba-fusion/next/commit/fe350f2))
-   **Select:** display text should not change while under controlled ([b962954](https://github.com/alibaba-fusion/next/commit/b962954))
-   **Select:** text should updated with dataSource changed ([16588fe](https://github.com/alibaba-fusion/next/commit/16588fe))
-   **Switch:** add focus state, close [#177](https://github.com/alibaba-fusion/next/issues/177) ([479206d](https://github.com/alibaba-fusion/next/commit/479206d))
-   **Tab:** also update doc ([d7d0ab5](https://github.com/alibaba-fusion/next/commit/d7d0ab5))
-   **Tab:** pure/text/capsule extra align center ([3f3282b](https://github.com/alibaba-fusion/next/commit/3f3282b))
-   **Tab:** TabItem no 'disabled' prop in API document ([28ed342](https://github.com/alibaba-fusion/next/commit/28ed342))
-   **Tree:** expandKeys will reset on async load data ([b1818d1](https://github.com/alibaba-fusion/next/commit/b1818d1))
-   **TreeSelect:** support defaultValue/value is null string ([ab04292](https://github.com/alibaba-fusion/next/commit/ab04292))
-   **Upload:** expose error to OnError in beforeUpload, Close [#128](https://github.com/alibaba-fusion/next/issues/128) ([1981db5](https://github.com/alibaba-fusion/next/commit/1981db5))

### Features

-   **Badge:** support aria ([d890f47](https://github.com/alibaba-fusion/next/commit/d890f47))
-   **Breadcrumb:** support a11y ([bd93737](https://github.com/alibaba-fusion/next/commit/bd93737))
-   **CascaderSelect:** support a11y ([4a40b2a](https://github.com/alibaba-fusion/next/commit/4a40b2a))
-   **CascaderSelect:** support itemRender ([9afffaa](https://github.com/alibaba-fusion/next/commit/9afffaa))
-   **Collapse:** accessibility support ([48bee98](https://github.com/alibaba-fusion/next/commit/48bee98))
-   **ConfigProvider:** support set rtl when setting locale ([72f3b0f](https://github.com/alibaba-fusion/next/commit/72f3b0f))
-   **DatePicker:** add dateCellRender monthCellRender prop ([ca549f9](https://github.com/alibaba-fusion/next/commit/ca549f9))
-   **DatePicker:** add inputProps prop ([3d92b8a](https://github.com/alibaba-fusion/next/commit/3d92b8a))
-   **Dialog:** throw Error when occur in onOk ([35e1a9a](https://github.com/alibaba-fusion/next/commit/35e1a9a))
-   **Dropdown:** support aria ([df2a05d](https://github.com/alibaba-fusion/next/commit/df2a05d))
-   **Nav:** support aria ([bf4de51](https://github.com/alibaba-fusion/next/commit/bf4de51))
-   **NumberPicker:** a11y support ([8eacabf](https://github.com/alibaba-fusion/next/commit/8eacabf))
-   **Pagination:** add a11y support ([b922a06](https://github.com/alibaba-fusion/next/commit/b922a06))
-   **Progress:** progress accessibility support ([524e97f](https://github.com/alibaba-fusion/next/commit/524e97f))
-   **Radio:** support name props for Radio & customer tagName for Group ([3e4e971](https://github.com/alibaba-fusion/next/commit/3e4e971))
-   **Range:** a11y ([4d2b69c](https://github.com/alibaba-fusion/next/commit/4d2b69c))
-   **Rating:** accessibility support ([f68a23c](https://github.com/alibaba-fusion/next/commit/f68a23c))
-   **Slider:** support aria ([c9bf1d2](https://github.com/alibaba-fusion/next/commit/c9bf1d2))
-   **SplitButton:** add leftButtonProps ([4d854e0](https://github.com/alibaba-fusion/next/commit/4d854e0))
-   **Step:** support aria ([3b55daa](https://github.com/alibaba-fusion/next/commit/3b55daa))
-   **Switch:** switch a11y ([2c2645c](https://github.com/alibaba-fusion/next/commit/2c2645c))
-   **Tab:** tab a11y ([7a47360](https://github.com/alibaba-fusion/next/commit/7a47360))
-   **Table:** add alignHeader & remove locale ([7f99ed0](https://github.com/alibaba-fusion/next/commit/7f99ed0))
-   **TimePicker:** support a11y ([590dae6](https://github.com/alibaba-fusion/next/commit/590dae6))
-   **Tree:** support a11y ([e7ec789](https://github.com/alibaba-fusion/next/commit/e7ec789))
-   **Upload:** add error text for text list ([32149af](https://github.com/alibaba-fusion/next/commit/32149af))
-   **Upload:** add progress props ([f2d460c](https://github.com/alibaba-fusion/next/commit/f2d460c))
-   **Upload:** disallow remove when disabled, Close [#132](https://github.com/alibaba-fusion/next/issues/132) ([e535cde](https://github.com/alibaba-fusion/next/commit/e535cde))
-   **Upload:** image list error text display ([69bbc64](https://github.com/alibaba-fusion/next/commit/69bbc64))
-   **Upload:** mod upload config ability ([432ef76](https://github.com/alibaba-fusion/next/commit/432ef76))
-   **Upload:** support custom request method ([1a9a7b6](https://github.com/alibaba-fusion/next/commit/1a9a7b6))
-   **Upload:** trigger error when exceed limit ([cf71c2a](https://github.com/alibaba-fusion/next/commit/cf71c2a))

<a name="1.11.11"></a>

## [1.11.11](https://github.com/alibaba-fusion/next/compare/1.11.10...1.11.11) (2019-01-22)

### Bug Fixes

-   **Form:** no need form-element-large-size in form ([08420c6](https://github.com/alibaba-fusion/next/commit/08420c6))
-   **NumberPicker:** value set to min while next value < min by click + ([6863b9f](https://github.com/alibaba-fusion/next/commit/6863b9f))
-   **Select:** double trigger onVisibleChange while click arrow ([20f2e1c](https://github.com/alibaba-fusion/next/commit/20f2e1c))

<a name="1.11.10"></a>

## [1.11.10](https://github.com/alibaba-fusion/next/compare/1.11.9...1.11.10) (2019-01-17)

### Bug Fixes

-   **Loading:** block style ([7e9ea48](https://github.com/alibaba-fusion/next/commit/7e9ea48))
-   **Loading:** tests for inline class ([da1c10a](https://github.com/alibaba-fusion/next/commit/da1c10a))
-   **Tab:** add float right ([11f6d99](https://github.com/alibaba-fusion/next/commit/11f6d99))
-   **Tab:** rtl support ([2151ee8](https://github.com/alibaba-fusion/next/commit/2151ee8))

<a name="1.11.9"></a>

## [1.11.9](https://github.com/alibaba-fusion/next/compare/1.11.8...1.11.9) (2019-01-16)

### Bug Fixes

-   **Loading:** fix fullscreen in demo ([6378cc0](https://github.com/alibaba-fusion/next/commit/6378cc0))
-   **Nav:** overflow when icon-only without icon ([6b28cee](https://github.com/alibaba-fusion/next/commit/6b28cee))
-   **Slider:** can swipe vertical & width 100% invertical ([3998ec2](https://github.com/alibaba-fusion/next/commit/3998ec2))
-   **Tab:** extra align middle by default ([3f38491](https://github.com/alibaba-fusion/next/commit/3f38491))

<a name="1.11.8"></a>

## [1.11.8](https://github.com/alibaba-fusion/next/compare/1.11.7...1.11.8) (2019-01-09)

### Bug Fixes

-   **CascaderSelect:** value type not equal dataSource value ([3cc1785](https://github.com/alibaba-fusion/next/commit/3cc1785))
-   **ConfigProvider:** check locales before set ([a0da7bf](https://github.com/alibaba-fusion/next/commit/a0da7bf))
-   **Form:** remove warning while message write in jsx ([87d6085](https://github.com/alibaba-fusion/next/commit/87d6085))
-   **Form:** switch aligin while size=large ([db989ee](https://github.com/alibaba-fusion/next/commit/db989ee))
-   **Nav:** can't config nav group label font size/height ([5f439a5](https://github.com/alibaba-fusion/next/commit/5f439a5))
-   **Nav:** icon-only overflow bug fix ([1bc40fe](https://github.com/alibaba-fusion/next/commit/1bc40fe))
-   **Radio:** button shape hover border covers checked border ([33be122](https://github.com/alibaba-fusion/next/commit/33be122))
-   **Select:** fix Select with useVirtual when empty dataSource ([#164](https://github.com/alibaba-fusion/next/issues/164)) ([54da63f](https://github.com/alibaba-fusion/next/commit/54da63f))
-   **Tab:** max-call-exceeded ([d8de050](https://github.com/alibaba-fusion/next/commit/d8de050))
-   **Timeline:** timline-item warning has function type prop ([18c48f4](https://github.com/alibaba-fusion/next/commit/18c48f4))
-   **Validate:** value can be false ([0e871d8](https://github.com/alibaba-fusion/next/commit/0e871d8))

<a name="1.11.7"></a>

## [1.11.7](https://github.com/alibaba-fusion/next/compare/1.11.6...1.11.7) (2019-01-02)

### Bug Fixes

-   **Menu:** to much data overflow when popupAlign is outside ([726da77](https://github.com/alibaba-fusion/next/commit/726da77))
-   **Switch:** tweak switch off-state right padding ([7882d35](https://github.com/alibaba-fusion/next/commit/7882d35))
-   **Table:** wrong value of offsetTop when set scrollToRow, close [#117](https://github.com/alibaba-fusion/next/issues/117) ([ac086c4](https://github.com/alibaba-fusion/next/commit/ac086c4))

### Features

-   **CascaderSelect:** support itemRender ([7f9b0f5](https://github.com/alibaba-fusion/next/commit/7f9b0f5))

<a name="1.11.6"></a>

## [1.11.6](https://github.com/alibaba-fusion/next/compare/1.11.5...1.11.6) (2018-12-26)

### Bug Fixes

-   **Cascader:** keyboard not blur ([3e43e6a](https://github.com/alibaba-fusion/next/commit/3e43e6a))
-   **Pagination:** select dropdown menu position error on scrolling ([70375c1](https://github.com/alibaba-fusion/next/commit/70375c1))
-   **Tab:** can not render when child have null item ([fb20367](https://github.com/alibaba-fusion/next/commit/fb20367))
-   **Tab, Grid:** inconsistency between doc and code ([5145fe7](https://github.com/alibaba-fusion/next/commit/5145fe7)) ([b07f5ac](https://github.com/alibaba-fusion/next/commit/b07f5ac)) ([43a4fd1](https://github.com/alibaba-fusion/next/commit/43a4fd1))
-   **Table:** style conflict with align ([aa32515](https://github.com/alibaba-fusion/next/commit/aa32515))
-   **Upload:** allow remove file when disabled ([2590a70](https://github.com/alibaba-fusion/next/commit/2590a70))

<a name="1.11.5"></a>

## [1.11.5](https://github.com/alibaba-fusion/next/compare/1.11.4...1.11.5) (2018-12-19)

### Bug Fixes

-   **NumberPicker:** float bug by chrome. Close [#79](https://github.com/alibaba-fusion/next/issues/79) ([4ac7f41](https://github.com/alibaba-fusion/next/commit/4ac7f41))
-   **Select:** defaultValue with async dataSource ([6fd23ba](https://github.com/alibaba-fusion/next/commit/6fd23ba))
-   **Table:** can't find unmounted component ([f004b52](https://github.com/alibaba-fusion/next/commit/f004b52))
-   **Typescripts:** perfect typescripts ([4459f14](https://github.com/alibaba-fusion/next/commit/4459f14))

<a name="1.11.4"></a>

## [1.11.4](https://github.com/alibaba-fusion/next/compare/1.11.3...1.11.4) (2018-12-18)

### Bug Fixes

-   **Cascader:** scrollbar style error ([04695d9](https://github.com/alibaba-fusion/next/commit/04695d9))
-   **Table:** rowHeight changed when resizing useVirtual ([aeaf513](https://github.com/alibaba-fusion/next/commit/aeaf513))

<a name="1.11.3"></a>

## [1.11.3](https://github.com/alibaba-fusion/next/compare/1.11.2...1.11.3) (2018-12-13)

### Bug Fixes

-   **Balloon:** ltr when set rtl on it own ([8cc4a8a](https://github.com/alibaba-fusion/next/commit/8cc4a8a))
-   **ConfigProvider:** remove warning when not using rtl ([f59dd15](https://github.com/alibaba-fusion/next/commit/f59dd15))
-   **Form:** css hack only in ie9 ([f5e77bc](https://github.com/alibaba-fusion/next/commit/f5e77bc))
-   **Input:** loading and hint not cannot occur at the same time ([cf97c99](https://github.com/alibaba-fusion/next/commit/cf97c99))
-   **Input:** padding reversed when select arrow translate 180 ([d5e9573](https://github.com/alibaba-fusion/next/commit/d5e9573))
-   **Menu:** keyboard not blur ([dda5a16](https://github.com/alibaba-fusion/next/commit/dda5a16))
-   **Slider:** dots' trigger area changed from <button> to parent <li> ([346f684](https://github.com/alibaba-fusion/next/commit/346f684))
-   **Step:** rtl style bugfix ([cadfec8](https://github.com/alibaba-fusion/next/commit/cadfec8))
-   **Table:** Avoid display error when browser scale ([b07b680](https://github.com/alibaba-fusion/next/commit/b07b680))
-   **Table:** lock columns cant align with whole table when affixed ([f1531c3](https://github.com/alibaba-fusion/next/commit/f1531c3))
-   **Timeline:** timeline-item cannot set className ([23754a3](https://github.com/alibaba-fusion/next/commit/23754a3))
-   **Upload:** forbid deleting file when upload is disabled ([e0936e5](https://github.com/alibaba-fusion/next/commit/e0936e5))
-   **Upload:** no space between upload and file list ([181517c](https://github.com/alibaba-fusion/next/commit/181517c))

<a name="1.11.2"></a>

## [1.11.2](https://github.com/alibaba-fusion/next/compare/1.11.1...1.11.2) (2018-12-06)

### Bug Fixes

-   **Overlay:** fix postion caculate error ([d38a78f](https://github.com/alibaba-fusion/next/commit/d38a78f))

<a name="1.11.1"></a>

## [1.11.1](https://github.com/alibaba-fusion/next/compare/1.11.0...1.11.1) (2018-12-06)

### Bug Fixes

-   scss ([ac04e9d](https://github.com/alibaba-fusion/next/commit/ac04e9d))

<a name="1.11.0"></a>

# [1.11.0](https://github.com/alibaba-fusion/next/compare/1.10.3...1.11.0) (2018-12-05)

### Features

-   **Select/Input/Message:** rtl supported in Select/Input/Message ([3bb15c8](https://github.com/alibaba-fusion/next/commit/3bb15c8))
-   **Affix:** implement affix by {position: absolute} ([da3e3ec](https://github.com/alibaba-fusion/next/commit/da3e3ec))
-   **Balloon:** support rtl ([64522d1](https://github.com/alibaba-fusion/next/commit/64522d1))
-   **Button:** support rtl ([d863787](https://github.com/alibaba-fusion/next/commit/d863787))
-   **Calendar:** support rtl ([d1c1e44](https://github.com/alibaba-fusion/next/commit/d1c1e44))
-   **ConfigProvider:** config-provider support rtl ([e91591a](https://github.com/alibaba-fusion/next/commit/e91591a))
-   **ConfigProvider:** support set global rtl ([622dda4](https://github.com/alibaba-fusion/next/commit/622dda4))
-   **DatePicker:** support rtl ([2d140fb](https://github.com/alibaba-fusion/next/commit/2d140fb))
-   **Dialog:** add rtl support ([bd3a66e](https://github.com/alibaba-fusion/next/commit/bd3a66e))
-   **Icon:** support rtl ([027fa40](https://github.com/alibaba-fusion/next/commit/027fa40)) ([fc5c02b](https://github.com/alibaba-fusion/next/commit/fc5c02b))
-   **Menu:** support rtl ([5241d7b](https://github.com/alibaba-fusion/next/commit/5241d7b))
-   **Nav:** support rtl ([923593a](https://github.com/alibaba-fusion/next/commit/923593a))
-   **Overlay:** add rtl prop for overlay ([6d77142](https://github.com/alibaba-fusion/next/commit/6d77142)) ([e5630de](https://github.com/alibaba-fusion/next/commit/e5630de))
-   **Pagination:** support rtl ([d34959c](https://github.com/alibaba-fusion/next/commit/d34959c))
-   **Progress:** add color & backgroundColor props ([1e9cd94](https://github.com/alibaba-fusion/next/commit/1e9cd94))
-   **Progress:** add rtl support ([cbe6747](https://github.com/alibaba-fusion/next/commit/cbe6747))
-   **Radio:** support rtl ([6a906a9](https://github.com/alibaba-fusion/next/commit/6a906a9))
-   **Search:** add rtl to search ([931729a](https://github.com/alibaba-fusion/next/commit/931729a))
-   **Slider:** support rtl ([c7416ab](https://github.com/alibaba-fusion/next/commit/c7416ab))
-   **Step:** support rtl ([a0645a0](https://github.com/alibaba-fusion/next/commit/a0645a0))
-   **Timeline:** support rtl ([0f3860b](https://github.com/alibaba-fusion/next/commit/0f3860b))
-   **TimePicker:** support rtl ([310155a](https://github.com/alibaba-fusion/next/commit/310155a))

<a name="1.10.3"></a>

## [1.10.3](https://github.com/alibaba-fusion/next/compare/1.10.2...1.10.3) (2018-12-05)

<a name="1.10.2"></a>

## [1.10.2](https://github.com/alibaba-fusion/next/compare/1.10.1...1.10.2) (2018-12-04)

### Bug Fixes

-   **CascaderSelect:** split of null bug ([1afac48](https://github.com/alibaba-fusion/next/commit/1afac48))
-   **Table:** maxBodyHeight both accept Number and String ([552f747](https://github.com/alibaba-fusion/next/commit/552f747))
-   **Table:** pass affixProps to affix ([0540cba](https://github.com/alibaba-fusion/next/commit/0540cba))
-   **Tree:** selectable=false cursor:default ([66bc721](https://github.com/alibaba-fusion/next/commit/66bc721))

<a name="1.10.1"></a>

## [1.10.1](https://github.com/alibaba-fusion/next/compare/1.10.0...1.10.1) (2018-11-29)

<a name="1.10.0"></a>

# [1.10.0](https://github.com/alibaba-fusion/next/compare/1.9.21...1.10.0) (2018-11-28)

### Bug Fixes

-   **Search:** medium search will overflow box when height = s-7 ([14dfbb0](https://github.com/alibaba-fusion/next/commit/14dfbb0))
-   **Search:** pass visible into Autocomplete ([9fae8fe](https://github.com/alibaba-fusion/next/commit/9fae8fe))

### Features

-   **Cascader:** add useVirtual prop, open virtual scroller ([769e156](https://github.com/alibaba-fusion/next/commit/769e156))
-   **CascaderSelect:** add useVirtual prop ([a2b724d](https://github.com/alibaba-fusion/next/commit/a2b724d))
-   **Form:** Item support function children ([c3ced42](https://github.com/alibaba-fusion/next/commit/c3ced42))
-   **Search:** divide \$search-normal-corner into medium & large variable ([3903b5e](https://github.com/alibaba-fusion/next/commit/3903b5e))
-   **Select:** add item from dataSource to onChange(v,e, item) ([ff0405f](https://github.com/alibaba-fusion/next/commit/ff0405f))
-   **Select:** support virtuallist in simple case ([b982efe](https://github.com/alibaba-fusion/next/commit/b982efe))
-   **Tag:** add selectable tag theme demos ([dfdd536](https://github.com/alibaba-fusion/next/commit/dfdd536))
-   **Transfer:** Support for disabling panel operations ([40f6743](https://github.com/alibaba-fusion/next/commit/40f6743))
-   **VirtualList:** add API jumpIndex ([2d137e2](https://github.com/alibaba-fusion/next/commit/2d137e2))
-   **VirtualList:** add new component ([29b78f5](https://github.com/alibaba-fusion/next/commit/29b78f5))
-   **VirtualList:** consider as items of the same height by default ([c9576ec](https://github.com/alibaba-fusion/next/commit/c9576ec))

<a name="1.9.21"></a>

## [1.9.21](https://github.com/alibaba-fusion/next/compare/1.9.20...1.9.21) (2018-11-27)

### Bug Fixes

-   **Input:** bug of value=0 with htmlType=number ([0805a38](https://github.com/alibaba-fusion/next/commit/0805a38))
-   **Message:** When there are multiple Message, the first can't close ([d3004f4](https://github.com/alibaba-fusion/next/commit/d3004f4))
-   **Search:** left border-raduis not 0 ([8713611](https://github.com/alibaba-fusion/next/commit/8713611))
-   **Select:** bug of autoWidth ([829f53b](https://github.com/alibaba-fusion/next/commit/829f53b))
-   **Select:** bug of autoWidth ([b80e4bb](https://github.com/alibaba-fusion/next/commit/b80e4bb))
-   **Select:** bug of onEnter ([17e13cd](https://github.com/alibaba-fusion/next/commit/17e13cd))
-   **Select:** double onKeyDown ([4b2e1b3](https://github.com/alibaba-fusion/next/commit/4b2e1b3))

<a name="1.9.20"></a>

## [1.9.20](https://github.com/alibaba-fusion/next/compare/1.9.19...1.9.20) (2018-11-21)

### Bug Fixes

-   **ConfigProvider:** Isolate multiple context data ([ca4bbd4](https://github.com/alibaba-fusion/next/commit/ca4bbd4)), closes [#43](https://github.com/alibaba-fusion/next/issues/43)
-   **ConfigProvider:** Update cache in expection ([a6c6151](https://github.com/alibaba-fusion/next/commit/a6c6151))
-   **Rating:** Enhance robustness ([6e40724](https://github.com/alibaba-fusion/next/commit/6e40724))

<a name="1.9.19"></a>

## [1.9.19](https://github.com/alibaba-fusion/next/compare/1.9.18...1.9.19) (2018-11-16)

### Bug Fixes

-   **Affix:** update postion in didmount ([1438cdf](https://github.com/alibaba-fusion/next/commit/1438cdf))
-   **Checkbox:** Change label type from string to any reanderable ([858083e](https://github.com/alibaba-fusion/next/commit/858083e))
-   **DatePicker:** add onChange params type ([5c753f1](https://github.com/alibaba-fusion/next/commit/5c753f1))
-   **DatePicker:** disabledHours no use in time end panel ([31e1256](https://github.com/alibaba-fusion/next/commit/31e1256))
-   **Range:** Scale tips become hollow on browser zoom ([1ed7f49](https://github.com/alibaba-fusion/next/commit/1ed7f49))
-   **Tab:** maxCall exceeded when parent using flex display ([c916d21](https://github.com/alibaba-fusion/next/commit/c916d21))
-   **Table:** style chaos when head sticky ([e952632](https://github.com/alibaba-fusion/next/commit/e952632))
-   **TreeSelect:** 'key' undefined error without treeCheckable prop ([ca4afe5](https://github.com/alibaba-fusion/next/commit/ca4afe5))

### Features

-   **Cascader:** loadData add argument source data ([2ca6a99](https://github.com/alibaba-fusion/next/commit/2ca6a99))

<a name="1.9.18"></a>

## [1.9.18](https://github.com/alibaba-fusion/next/compare/1.9.17...1.9.18) (2018-11-14)

<a name="1.9.17"></a>

## [1.9.17](https://github.com/alibaba-fusion/next/compare/1.9.16...1.9.17) (2018-11-13)

### Bug Fixes

-   **Breadcrumb:** fix use Link Tag no style ([503c945](https://github.com/alibaba-fusion/next/commit/503c945))
-   **Calendar:** week words error ([674de83](https://github.com/alibaba-fusion/next/commit/674de83))
-   **Range:** Prevent right-button dragging ([24b6769](https://github.com/alibaba-fusion/next/commit/24b6769))
-   **Tab:** Make bg-color configurable ([c353b1c](https://github.com/alibaba-fusion/next/commit/c353b1c))
-   **Upload:** Upload Card no i18n ([27e76b4](https://github.com/alibaba-fusion/next/commit/27e76b4))
-   **Calendar:** add api to format cell's label ([7a87917](https://github.com/alibaba-fusion/next/commit/7a87917))

<a name="1.9.16"></a>

## [1.9.16](https://github.com/alibaba-fusion/next/compare/1.9.15...1.9.16) (2018-11-09)

<a name="1.9.15"></a>

## [1.9.15](https://github.com/alibaba-fusion/next/compare/1.9.14...1.9.15) (2018-11-02)

### Bug Fixes

-   **Select:** bug of cacheValue=false ([6fce5d8](https://github.com/alibaba-fusion/next/commit/6fce5d8))
-   **Select:** bug of cacheValue=false ([bb2acdf](https://github.com/alibaba-fusion/next/commit/bb2acdf))
-   **Tab:** content panel collapsed in vertical mode ([9974a22](https://github.com/alibaba-fusion/next/commit/9974a22))
-   **Table:** error when lock without header ([9081865](https://github.com/alibaba-fusion/next/commit/9081865))
-   **Tree:** error when set expendedKeys/selectedKeys not in dataSource ([cd35aa0](https://github.com/alibaba-fusion/next/commit/cd35aa0))
-   **TreeSelect:** error when set value with keys aren't in dataSource ([dc8d9e8](https://github.com/alibaba-fusion/next/commit/dc8d9e8))
-   **TreeSelect:** show all tree while searchValue clear ([c04b3d3](https://github.com/alibaba-fusion/next/commit/c04b3d3))

<a name="1.9.14"></a>

## [1.9.14](https://github.com/alibaba-fusion/next/compare/1.9.13...1.9.14) (2018-10-29)

### Bug Fixes

-   **Locale:** use OK instead of Ok ([9782c6d](https://github.com/alibaba-fusion/next/commit/9782c6d))
-   **Search:** add type for search-simple-dark-bg-opacity ([57891de](https://github.com/alibaba-fusion/next/commit/57891de))
-   **Select:** minWidth of popupContent ([f6a4883](https://github.com/alibaba-fusion/next/commit/f6a4883))
-   **Upload:** error fileList not show ([87195d2](https://github.com/alibaba-fusion/next/commit/87195d2))
-   **Search:** add hover color variables ([385ab2d](https://github.com/alibaba-fusion/next/commit/385ab2d))
-   **Search:** remove search button box-shadow ([3713040](https://github.com/alibaba-fusion/next/commit/3713040))
-   **Search:** use hover-color in main scss ([14aea57](https://github.com/alibaba-fusion/next/commit/14aea57))

<a name="1.9.13"></a>

## [1.9.13](https://github.com/alibaba-fusion/next/compare/1.9.12...1.9.13) (2018-10-28)

### Bug Fixes

-   **TimePicker:** cann't config bg of input ([e5cae7b](https://github.com/alibaba-fusion/next/commit/e5cae7b))

<a name="1.9.12"></a>

## [1.9.12](https://github.com/alibaba-fusion/next/compare/1.9.11...1.9.12) (2018-10-24)

### Bug Fixes

-   **Balloon:** in theme platform & range ([dd78f6d](https://github.com/alibaba-fusion/next/commit/dd78f6d))
-   **scripts:** unify eslint config ([39ced54](https://github.com/alibaba-fusion/next/commit/39ced54))
-   **Upload:** add style to reset <a> ([b2b78f5](https://github.com/alibaba-fusion/next/commit/b2b78f5))

<a name="1.9.11"></a>

## [1.9.11](https://github.com/alibaba-fusion/next/compare/1.9.10...1.9.11) (2018-10-19)

<a name="1.9.10"></a>

## [1.9.10](https://github.com/alibaba-fusion/next/compare/1.9.9...1.9.10) (2018-10-19)

<a name="1.9.9"></a>

## [1.9.9](https://github.com/alibaba-fusion/next/compare/1.9.8...1.9.9) (2018-10-18)

### Bug Fixes

-   **Input:** input border-radius with one addonText ([b5051cf](https://github.com/alibaba-fusion/next/commit/b5051cf))
-   **MenuButton:** remove box-shadow ([6a976ca](https://github.com/alibaba-fusion/next/commit/6a976ca))
-   **NumverPicker:** remove box-shadow ([2c3e29f](https://github.com/alibaba-fusion/next/commit/2c3e29f))

<a name="1.9.8"></a>

## [1.9.8](https://github.com/alibaba-fusion/next/compare/1.9.7...1.9.8) (2018-10-18)

<a name="1.9.7"></a>

## [1.9.7](https://github.com/alibaba-fusion/next/compare/1.9.5...1.9.7) (2018-10-17)

### Bug Fixes

-   **Nav:** primary/secondary active border ([4c2c211](https://github.com/alibaba-fusion/next/commit/4c2c211))
-   **Menu:** Group.Item cant pass custom className ([eaf25707](https://github.com/alibaba-fusion/next/commit/eaf25707))

<a name="1.9.5"></a>

## [1.9.5](https://github.com/alibaba-fusion/next/compare/1.9.4...1.9.5) (2018-10-16)

### Bug Fixes

-   **Util:** Resolve env.isProduction in correct ([190ae61](https://github.com/alibaba-fusion/next/commit/190ae61))
-   **Util:** Undefined return statement ([2dcf9d3](https://github.com/alibaba-fusion/next/commit/2dcf9d3))

<a name="1.9.4"></a>

## [1.9.4](https://github.com/alibaba-fusion/next/compare/1.9.3...1.9.4) (2018-10-16)

<a name="1.9.3"></a>

## [1.9.3](https://github.com/alibaba-fusion/next/compare/1.9.2...1.9.3) (2018-10-16)

<a name="1.9.2"></a>

## [1.9.2](https://github.com/alibaba-fusion/next/compare/1.9.1...1.9.2) (2018-10-15)

### Bug Fixes

-   **Core:** wrong path ([a94b7d0](https://github.com/alibaba-fusion/next/commit/a94b7d0))

<a name="1.9.1"></a>

## [1.9.1](https://github.com/alibaba-fusion/next/compare/1.9.0...1.9.1) (2018-10-15)

### Bug Fixes

-   **Progress:** progress number bug ([8fc476d](https://github.com/alibaba-fusion/next/commit/8fc476d))

### Features

-   **Next:** add dingtalk qrcode to readme ([da35dfe](https://github.com/alibaba-fusion/next/commit/da35dfe))

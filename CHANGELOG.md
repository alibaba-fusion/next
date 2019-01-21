# Change Log

<a name="1.11.8"></a>
## [1.11.8](https://github.com/alibaba-fusion/next/compare/1.11.7...1.11.8) (2019-01-09)


### Bug Fixes

* **CascaderSelect:** value type not equal dataSource value ([3cc1785](https://github.com/alibaba-fusion/next/commit/3cc1785))
* **ConfigProvider:** check locales before set ([a0da7bf](https://github.com/alibaba-fusion/next/commit/a0da7bf))
* **Form:** remove warning while message write in jsx ([87d6085](https://github.com/alibaba-fusion/next/commit/87d6085))
* **Form:** switch aligin while size=large ([db989ee](https://github.com/alibaba-fusion/next/commit/db989ee))
* **Nav:** can't config nav group label font size/height ([5f439a5](https://github.com/alibaba-fusion/next/commit/5f439a5))
* **Nav:** icon-only overflow bug fix ([1bc40fe](https://github.com/alibaba-fusion/next/commit/1bc40fe))
* **Radio:** button shape hover border covers checked border ([33be122](https://github.com/alibaba-fusion/next/commit/33be122))
* **Select:** fix Select with useVirtual when empty dataSource ([#164](https://github.com/alibaba-fusion/next/issues/164)) ([54da63f](https://github.com/alibaba-fusion/next/commit/54da63f))
* **Tab:** max-call-exceeded ([d8de050](https://github.com/alibaba-fusion/next/commit/d8de050))
* **Timeline:** timline-item warning  has function type prop ([18c48f4](https://github.com/alibaba-fusion/next/commit/18c48f4))
* **Validate:** value can be false ([0e871d8](https://github.com/alibaba-fusion/next/commit/0e871d8))




<a name="1.11.7"></a>
## [1.11.7](https://github.com/alibaba-fusion/next/compare/1.11.6...1.11.7) (2019-01-02)


### Bug Fixes

* **Menu:** to much data overflow when popupAlign is outside ([726da77](https://github.com/alibaba-fusion/next/commit/726da77))
* **Switch:** tweak switch off-state right padding ([7882d35](https://github.com/alibaba-fusion/next/commit/7882d35))
* **Table:** wrong value of offsetTop when set scrollToRow, close [#117](https://github.com/alibaba-fusion/next/issues/117) ([ac086c4](https://github.com/alibaba-fusion/next/commit/ac086c4))


### Features

* **CascaderSelect:** support itemRender ([7f9b0f5](https://github.com/alibaba-fusion/next/commit/7f9b0f5))




<a name="1.11.6"></a>
## [1.11.6](https://github.com/alibaba-fusion/next/compare/1.11.5...1.11.6) (2018-12-26)


### Bug Fixes

* **Cascader:** keyboard not blur ([3e43e6a](https://github.com/alibaba-fusion/next/commit/3e43e6a))
* **Pagination:** select dropdown menu position error on scrolling ([70375c1](https://github.com/alibaba-fusion/next/commit/70375c1))
* **Tab:** can not render when child have null item ([fb20367](https://github.com/alibaba-fusion/next/commit/fb20367))
* **Tab, Grid:** inconsistency between doc and code ([5145fe7](https://github.com/alibaba-fusion/next/commit/5145fe7)) ([b07f5ac](https://github.com/alibaba-fusion/next/commit/b07f5ac)) ([43a4fd1](https://github.com/alibaba-fusion/next/commit/43a4fd1))
* **Table:** style conflict with align ([aa32515](https://github.com/alibaba-fusion/next/commit/aa32515))
* **Upload:** allow remove file when disabled ([2590a70](https://github.com/alibaba-fusion/next/commit/2590a70))



<a name="1.11.5"></a>
## [1.11.5](https://github.com/alibaba-fusion/next/compare/1.11.4...1.11.5) (2018-12-19)


### Bug Fixes

* **NumberPicker:** float bug by chrome. Close [#79](https://github.com/alibaba-fusion/next/issues/79) ([4ac7f41](https://github.com/alibaba-fusion/next/commit/4ac7f41))
* **Select:** defaultValue with async dataSource ([6fd23ba](https://github.com/alibaba-fusion/next/commit/6fd23ba))
* **Table:** can't find unmounted component ([f004b52](https://github.com/alibaba-fusion/next/commit/f004b52))
* **Typescripts:** perfect typescripts ([4459f14](https://github.com/alibaba-fusion/next/commit/4459f14))




<a name="1.11.4"></a>
## [1.11.4](https://github.com/alibaba-fusion/next/compare/1.11.3...1.11.4) (2018-12-18)


### Bug Fixes

* **Cascader:** scrollbar style error ([04695d9](https://github.com/alibaba-fusion/next/commit/04695d9))
* **Table:** rowHeight changed when resizing useVirtual ([aeaf513](https://github.com/alibaba-fusion/next/commit/aeaf513))




<a name="1.11.3"></a>
## [1.11.3](https://github.com/alibaba-fusion/next/compare/1.11.2...1.11.3) (2018-12-13)


### Bug Fixes

* **Balloon:** ltr when set rtl on it own ([8cc4a8a](https://github.com/alibaba-fusion/next/commit/8cc4a8a))
* **ConfigProvider:** remove warning when not using rtl ([f59dd15](https://github.com/alibaba-fusion/next/commit/f59dd15))
* **Form:** css hack only in ie9 ([f5e77bc](https://github.com/alibaba-fusion/next/commit/f5e77bc))
* **Input:** loading and hint not cannot occur at the same time ([cf97c99](https://github.com/alibaba-fusion/next/commit/cf97c99))
* **Input:** padding reversed when select arrow translate 180 ([d5e9573](https://github.com/alibaba-fusion/next/commit/d5e9573))
* **Menu:** keyboard not blur ([dda5a16](https://github.com/alibaba-fusion/next/commit/dda5a16))
* **Slider:** dots' trigger area changed from <button> to parent <li> ([346f684](https://github.com/alibaba-fusion/next/commit/346f684))
* **Step:** rtl style bugfix ([cadfec8](https://github.com/alibaba-fusion/next/commit/cadfec8))
* **Table:** Avoid display error when browser scale ([b07b680](https://github.com/alibaba-fusion/next/commit/b07b680))
* **Table:** lock columns cant align with whole table when affixed ([f1531c3](https://github.com/alibaba-fusion/next/commit/f1531c3))
* **Timeline:** timeline-item cannot set className ([23754a3](https://github.com/alibaba-fusion/next/commit/23754a3))
* **Upload:** forbid deleting file when upload is disabled ([e0936e5](https://github.com/alibaba-fusion/next/commit/e0936e5))
* **Upload:** no space between upload and file list ([181517c](https://github.com/alibaba-fusion/next/commit/181517c))




<a name="1.11.2"></a>
## [1.11.2](https://github.com/alibaba-fusion/next/compare/1.11.1...1.11.2) (2018-12-06)


### Bug Fixes

* **Overlay:** fix postion caculate error ([d38a78f](https://github.com/alibaba-fusion/next/commit/d38a78f))




<a name="1.11.1"></a>
## [1.11.1](https://github.com/alibaba-fusion/next/compare/1.11.0...1.11.1) (2018-12-06)


### Bug Fixes

* scss ([ac04e9d](https://github.com/alibaba-fusion/next/commit/ac04e9d))




<a name="1.11.0"></a>
# [1.11.0](https://github.com/alibaba-fusion/next/compare/1.10.3...1.11.0) (2018-12-05)


### Features

* **Select/Input/Message:** rtl supported in Select/Input/Message ([3bb15c8](https://github.com/alibaba-fusion/next/commit/3bb15c8))
* **Affix:** implement affix by {position: absolute} ([da3e3ec](https://github.com/alibaba-fusion/next/commit/da3e3ec))
* **Balloon:** support rtl ([64522d1](https://github.com/alibaba-fusion/next/commit/64522d1))
* **Button:** support rtl ([d863787](https://github.com/alibaba-fusion/next/commit/d863787))
* **Calendar:** support rtl ([d1c1e44](https://github.com/alibaba-fusion/next/commit/d1c1e44))
* **ConfigProvider:** config-provider support rtl ([e91591a](https://github.com/alibaba-fusion/next/commit/e91591a))
* **ConfigProvider:** support set global rtl ([622dda4](https://github.com/alibaba-fusion/next/commit/622dda4))
* **DatePicker:** support rtl ([2d140fb](https://github.com/alibaba-fusion/next/commit/2d140fb))
* **Dialog:** add rtl support ([bd3a66e](https://github.com/alibaba-fusion/next/commit/bd3a66e))
* **Icon:** support rtl ([027fa40](https://github.com/alibaba-fusion/next/commit/027fa40)) ([fc5c02b](https://github.com/alibaba-fusion/next/commit/fc5c02b))
* **Menu:** support rtl ([5241d7b](https://github.com/alibaba-fusion/next/commit/5241d7b))
* **Nav:** support rtl ([923593a](https://github.com/alibaba-fusion/next/commit/923593a))
* **Overlay:** add rtl prop for overlay ([6d77142](https://github.com/alibaba-fusion/next/commit/6d77142)) ([e5630de](https://github.com/alibaba-fusion/next/commit/e5630de))
* **Pagination:** support rtl ([d34959c](https://github.com/alibaba-fusion/next/commit/d34959c))
* **Progress:** add color & backgroundColor props ([1e9cd94](https://github.com/alibaba-fusion/next/commit/1e9cd94))
* **Progress:** add rtl support ([cbe6747](https://github.com/alibaba-fusion/next/commit/cbe6747))
* **Radio:** support rtl ([6a906a9](https://github.com/alibaba-fusion/next/commit/6a906a9))
* **Search:** add rtl to search ([931729a](https://github.com/alibaba-fusion/next/commit/931729a))
* **Slider:** support rtl ([c7416ab](https://github.com/alibaba-fusion/next/commit/c7416ab))
* **Step:** support rtl ([a0645a0](https://github.com/alibaba-fusion/next/commit/a0645a0))
* **Timeline:** support rtl ([0f3860b](https://github.com/alibaba-fusion/next/commit/0f3860b))
* **TimePicker:** support rtl ([310155a](https://github.com/alibaba-fusion/next/commit/310155a))


<a name="1.10.3"></a>
## [1.10.3](https://github.com/alibaba-fusion/next/compare/1.10.2...1.10.3) (2018-12-05)




<a name="1.10.2"></a>
## [1.10.2](https://github.com/alibaba-fusion/next/compare/1.10.1...1.10.2) (2018-12-04)


### Bug Fixes

* **CascaderSelect:** split of null bug ([1afac48](https://github.com/alibaba-fusion/next/commit/1afac48))
* **Table:** maxBodyHeight both accept Number and String ([552f747](https://github.com/alibaba-fusion/next/commit/552f747))
* **Table:** pass affixProps to affix ([0540cba](https://github.com/alibaba-fusion/next/commit/0540cba))
* **Tree:** selectable=false cursor:default ([66bc721](https://github.com/alibaba-fusion/next/commit/66bc721))




<a name="1.10.1"></a>
## [1.10.1](https://github.com/alibaba-fusion/next/compare/1.10.0...1.10.1) (2018-11-29)




<a name="1.10.0"></a>
# [1.10.0](https://github.com/alibaba-fusion/next/compare/1.9.21...1.10.0) (2018-11-28)


### Bug Fixes

* **Search:** medium search will overflow box when height = s-7 ([14dfbb0](https://github.com/alibaba-fusion/next/commit/14dfbb0))
* **Search:** pass visible into Autocomplete ([9fae8fe](https://github.com/alibaba-fusion/next/commit/9fae8fe))


### Features

* **Cascader:** add useVirtual prop, open virtual scroller ([769e156](https://github.com/alibaba-fusion/next/commit/769e156))
* **CascaderSelect:**  add useVirtual prop ([a2b724d](https://github.com/alibaba-fusion/next/commit/a2b724d))
* **Form:** Item support function children ([c3ced42](https://github.com/alibaba-fusion/next/commit/c3ced42))
* **Search:** divide $search-normal-corner into medium & large variable ([3903b5e](https://github.com/alibaba-fusion/next/commit/3903b5e))
* **Select:** add item from dataSource to onChange(v,e, item) ([ff0405f](https://github.com/alibaba-fusion/next/commit/ff0405f))
* **Select:** support virtuallist in simple case ([b982efe](https://github.com/alibaba-fusion/next/commit/b982efe))
* **Tag:** add selectable tag theme demos ([dfdd536](https://github.com/alibaba-fusion/next/commit/dfdd536))
* **Transfer:** Support for disabling panel operations ([40f6743](https://github.com/alibaba-fusion/next/commit/40f6743))
* **VirtualList:** add API jumpIndex ([2d137e2](https://github.com/alibaba-fusion/next/commit/2d137e2))
* **VirtualList:** add new component ([29b78f5](https://github.com/alibaba-fusion/next/commit/29b78f5))
* **VirtualList:** consider as items of the same height by default ([c9576ec](https://github.com/alibaba-fusion/next/commit/c9576ec))




<a name="1.9.21"></a>
## [1.9.21](https://github.com/alibaba-fusion/next/compare/1.9.20...1.9.21) (2018-11-27)


### Bug Fixes

* **Input:** bug of value=0 with htmlType=number ([0805a38](https://github.com/alibaba-fusion/next/commit/0805a38))
* **Message:** When there are multiple Message, the first can't close ([d3004f4](https://github.com/alibaba-fusion/next/commit/d3004f4))
* **Search:** left border-raduis not 0 ([8713611](https://github.com/alibaba-fusion/next/commit/8713611))
* **Select:** bug of autoWidth ([829f53b](https://github.com/alibaba-fusion/next/commit/829f53b))
* **Select:** bug of autoWidth ([b80e4bb](https://github.com/alibaba-fusion/next/commit/b80e4bb))
* **Select:** bug of onEnter ([17e13cd](https://github.com/alibaba-fusion/next/commit/17e13cd))
* **Select:** double onKeyDown ([4b2e1b3](https://github.com/alibaba-fusion/next/commit/4b2e1b3))




<a name="1.9.20"></a>
## [1.9.20](https://github.com/alibaba-fusion/next/compare/1.9.19...1.9.20) (2018-11-21)


### Bug Fixes

* **ConfigProvider:** Isolate multiple context data ([ca4bbd4](https://github.com/alibaba-fusion/next/commit/ca4bbd4)), closes [#43](https://github.com/alibaba-fusion/next/issues/43)
* **ConfigProvider:** Update cache in expection ([a6c6151](https://github.com/alibaba-fusion/next/commit/a6c6151))
* **Rating:** Enhance robustness ([6e40724](https://github.com/alibaba-fusion/next/commit/6e40724))




<a name="1.9.19"></a>
## [1.9.19](https://github.com/alibaba-fusion/next/compare/1.9.18...1.9.19) (2018-11-16)


### Bug Fixes

* **Affix:** update postion in didmount ([1438cdf](https://github.com/alibaba-fusion/next/commit/1438cdf))
* **Checkbox:** Change label type from string to any reanderable ([858083e](https://github.com/alibaba-fusion/next/commit/858083e))
* **DatePicker:** add onChange params type ([5c753f1](https://github.com/alibaba-fusion/next/commit/5c753f1))
* **DatePicker:** disabledHours no use in time end panel ([31e1256](https://github.com/alibaba-fusion/next/commit/31e1256))
* **Range:** Scale tips become hollow on browser zoom ([1ed7f49](https://github.com/alibaba-fusion/next/commit/1ed7f49))
* **Tab:** maxCall exceeded when parent using flex display ([c916d21](https://github.com/alibaba-fusion/next/commit/c916d21))
* **Table:** style chaos when head sticky ([e952632](https://github.com/alibaba-fusion/next/commit/e952632))
* **TreeSelect:**  'key' undefined error without treeCheckable prop ([ca4afe5](https://github.com/alibaba-fusion/next/commit/ca4afe5))


### Features

* **Cascader:** loadData add argument source data ([2ca6a99](https://github.com/alibaba-fusion/next/commit/2ca6a99))




<a name="1.9.18"></a>
## [1.9.18](https://github.com/alibaba-fusion/next/compare/1.9.17...1.9.18) (2018-11-14)




<a name="1.9.17"></a>
## [1.9.17](https://github.com/alibaba-fusion/next/compare/1.9.16...1.9.17) (2018-11-13)


### Bug Fixes

* **Breadcrumb:** fix use Link Tag no style ([503c945](https://github.com/alibaba-fusion/next/commit/503c945))
* **Calendar:** week words error ([674de83](https://github.com/alibaba-fusion/next/commit/674de83))
* **Range:** Prevent right-button dragging ([24b6769](https://github.com/alibaba-fusion/next/commit/24b6769))
* **Tab:** Make bg-color configurable ([c353b1c](https://github.com/alibaba-fusion/next/commit/c353b1c))
* **Upload:** Upload Card no i18n ([27e76b4](https://github.com/alibaba-fusion/next/commit/27e76b4))
* **Calendar:** add api to format cell's label ([7a87917](https://github.com/alibaba-fusion/next/commit/7a87917))

<a name="1.9.16"></a>
## [1.9.16](https://github.com/alibaba-fusion/next/compare/1.9.15...1.9.16) (2018-11-09)




<a name="1.9.15"></a>
## [1.9.15](https://github.com/alibaba-fusion/next/compare/1.9.14...1.9.15) (2018-11-02)


### Bug Fixes

* **Select:** bug of cacheValue=false ([6fce5d8](https://github.com/alibaba-fusion/next/commit/6fce5d8))
* **Select:** bug of cacheValue=false ([bb2acdf](https://github.com/alibaba-fusion/next/commit/bb2acdf))
* **Tab:** content panel collapsed in vertical mode ([9974a22](https://github.com/alibaba-fusion/next/commit/9974a22))
* **Table:** error when lock without header ([9081865](https://github.com/alibaba-fusion/next/commit/9081865))
* **Tree:** error when set expendedKeys/selectedKeys not in dataSource ([cd35aa0](https://github.com/alibaba-fusion/next/commit/cd35aa0))
* **TreeSelect:** error when set value with keys aren't in dataSource ([dc8d9e8](https://github.com/alibaba-fusion/next/commit/dc8d9e8))
* **TreeSelect:** show all tree while searchValue clear ([c04b3d3](https://github.com/alibaba-fusion/next/commit/c04b3d3))




<a name="1.9.14"></a>
## [1.9.14](https://github.com/alibaba-fusion/next/compare/1.9.13...1.9.14) (2018-10-29)


### Bug Fixes

* **Locale:** use OK instead of Ok ([9782c6d](https://github.com/alibaba-fusion/next/commit/9782c6d))
* **Search:** add type for search-simple-dark-bg-opacity ([57891de](https://github.com/alibaba-fusion/next/commit/57891de))
* **Select:** minWidth of popupContent ([f6a4883](https://github.com/alibaba-fusion/next/commit/f6a4883))
* **Upload:** error fileList not show ([87195d2](https://github.com/alibaba-fusion/next/commit/87195d2))
* **Search:** add hover color variables ([385ab2d](https://github.com/alibaba-fusion/next/commit/385ab2d))
* **Search:** remove search button box-shadow ([3713040](https://github.com/alibaba-fusion/next/commit/3713040))
* **Search:** use hover-color in main scss ([14aea57](https://github.com/alibaba-fusion/next/commit/14aea57))


<a name="1.9.13"></a>
## [1.9.13](https://github.com/alibaba-fusion/next/compare/1.9.12...1.9.13) (2018-10-28)


### Bug Fixes

* **TimePicker:** cann't config bg of input ([e5cae7b](https://github.com/alibaba-fusion/next/commit/e5cae7b))




<a name="1.9.12"></a>
## [1.9.12](https://github.com/alibaba-fusion/next/compare/1.9.11...1.9.12) (2018-10-24)


### Bug Fixes

* **Balloon:** in theme platform & range ([dd78f6d](https://github.com/alibaba-fusion/next/commit/dd78f6d))
* **scripts:** unify eslint config ([39ced54](https://github.com/alibaba-fusion/next/commit/39ced54))
* **Upload:** add style to reset <a> ([b2b78f5](https://github.com/alibaba-fusion/next/commit/b2b78f5))


<a name="1.9.11"></a>
## [1.9.11](https://github.com/alibaba-fusion/next/compare/1.9.10...1.9.11) (2018-10-19)

<a name="1.9.10"></a>
## [1.9.10](https://github.com/alibaba-fusion/next/compare/1.9.9...1.9.10) (2018-10-19)

<a name="1.9.9"></a>
## [1.9.9](https://github.com/alibaba-fusion/next/compare/1.9.8...1.9.9) (2018-10-18)

### Bug Fixes

* **Input:** input border-radius with one addonText ([b5051cf](https://github.com/alibaba-fusion/next/commit/b5051cf))
* **MenuButton:** remove box-shadow ([6a976ca](https://github.com/alibaba-fusion/next/commit/6a976ca))
* **NumverPicker:** remove box-shadow ([2c3e29f](https://github.com/alibaba-fusion/next/commit/2c3e29f))

<a name="1.9.8"></a>
## [1.9.8](https://github.com/alibaba-fusion/next/compare/1.9.7...1.9.8) (2018-10-18)


<a name="1.9.7"></a>
## [1.9.7](https://github.com/alibaba-fusion/next/compare/1.9.5...1.9.7) (2018-10-17)

### Bug Fixes
* **Nav:** primary/secondary active border ([4c2c211](https://github.com/alibaba-fusion/next/commit/4c2c211))
* **Menu:** Group.Item cant pass custom className ([eaf25707](https://github.com/alibaba-fusion/next/commit/eaf25707))

<a name="1.9.5"></a>
## [1.9.5](https://github.com/alibaba-fusion/next/compare/1.9.4...1.9.5) (2018-10-16)

### Bug Fixes

* **Util:** Resolve env.isProduction in correct ([190ae61](https://github.com/alibaba-fusion/next/commit/190ae61))
* **Util:** Undefined return statement ([2dcf9d3](https://github.com/alibaba-fusion/next/commit/2dcf9d3))


<a name="1.9.4"></a>
## [1.9.4](https://github.com/alibaba-fusion/next/compare/1.9.3...1.9.4) (2018-10-16)

<a name="1.9.3"></a>
## [1.9.3](https://github.com/alibaba-fusion/next/compare/1.9.2...1.9.3) (2018-10-16)


<a name="1.9.2"></a>
## [1.9.2](https://github.com/alibaba-fusion/next/compare/1.9.1...1.9.2) (2018-10-15)

### Bug Fixes
* **Core:** wrong path ([a94b7d0](https://github.com/alibaba-fusion/next/commit/a94b7d0))

<a name="1.9.1"></a>
## [1.9.1](https://github.com/alibaba-fusion/next/compare/1.9.0...1.9.1) (2018-10-15)

### Bug Fixes
* **Progress:** progress number bug ([8fc476d](https://github.com/alibaba-fusion/next/commit/8fc476d))
### Features
* **Next:** add dingtalk qrcode to readme ([da35dfe](https://github.com/alibaba-fusion/next/commit/da35dfe))

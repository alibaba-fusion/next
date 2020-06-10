# Change Log 

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

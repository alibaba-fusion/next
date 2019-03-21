<button>[回到首页](../index.md)</button>

# 检验及测试

-   [自动化检查](#自动化检查)
    -   [内容检查工具](#内容检查工具)
    -   [视觉测试工具](#视觉测试工具)
    -   [Benchmark](#benchmark)
-   [借助辅助技术进行自测](#借助辅助技术进行自测)
    -   [屏幕阅读器](#屏幕阅读器)
    -   [Checklist](#checklist)
-   [邀请真实用户进行测试](#邀请真实用户进行测试)

按照测试的准确程度层层递进，可分为以下三个层次，业务可根据实际场景进行选择：

-   自动化检查
-   借助辅助技术进行自测
-   邀请真实用户进行测试

## 自动化检查

自动化检查可以检查出一些可访问性遵从性问题，如标题的结构和顺序、alt 文本是否存在、页面标题和语言设置是否存在、颜色对比度是否合理、一定程度上的 HTML 结构是否语义化等。

大多数用于测试活动网页可访问性的工具都是以浏览器扩展的形式提供的，推荐安装如下工具：

### 内容检查工具

[Axe Chrome Plugin](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd)（推荐）

Axe 可访问性检查器是一个快速、轻量级的可访问性测试工具，它基于业内最流行的开源无障碍测试库[axe-core](https://github.com/dequelabs/axe-core)，安装成功后可在 Chrome Dev Tools 面板找到。可以静态分析当前已存在于 document 中的内容。

[eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules)
eslint-plugin-jsx-a11y 是对静态扫描，无需侵入代码，能扫到事件缺失，定义 30 多条比较常见规则，请参考。

### 视觉测试工具

[I want to see like the colour blind - Chrome Plugin](https://chrome.google.com/webstore/detail/i-want-to-see-like-the-co/jebeedfnielkcjlcokhiobodkjjpbjia)
Chrome 插件，开启可模拟红、绿、蓝、全色盲、色弱等用户眼中的站点，直接发现站点中存在的可辨别性问题。

### Benchmark

[Lighthouse](https://developers.google.com/web/tools/lighthouse/)
lighthouse 是 Google 开发的网站性能评测工具，主要用于改进网络应用的质量，已开源。内置在 Chrome Dev Tools 中，也有插件版本。

无障碍的检测是该工具评测的一个子项，可以借助这个插件生成站点的无障碍评分报告。

## 借助辅助技术进行自测

手动测试将有助于识别准确性问题，例如标题结构是否与页面真实内容顺序相符、alt 文本是否准确地传递了相关图像的信息、弹出的窗口、对话框或其他通知是否与展示一致并且明显等。

残疾人借助辅助技术（Assistive Technology）来操作软件产品，常用辅助技术有：
屏幕阅读器 - 用于读出屏幕上显示的文本
屏幕放大软件 - 用于放大显示器，使视力受损的用户轻松阅读。

### 屏幕阅读器

屏幕阅读器是无障碍测试的主要工具，[据统计](https://webaim.org/projects/screenreadersurvey7/)，截止到 2017 年 10 月，约有 12%的用户使用 VoiceOver，46%的用户使用 JAWS，32%用户使用 NVDA。市面上常用的读屏软件推荐如下：

-   MAC: [VoiceOver](https://help.apple.com/voiceover/mac)

-   Windows:

    -   [NVDA](https://www.nvaccess.org/) NVDA 是一个免费开源的读屏软件
    -   [JAWS](https://www.freedomscientific.com/products/software/jaws/) Freedom Scientific 发布的一款屏幕阅读器(收费)

-   Chrome 插件: [ChromeVox](https://chrome.google.com/webstore/detail/chromevox/kgejglhpjiefppelpmljglcjbhoiplfn) 仅与浏览器相关

### Checklist

-   [ ] 仅使用键盘，是否能使用站点的主要功能。
        使用 Tab 在页面的可聚焦元素上切换，使用 shift+Tab 切回上一聚焦元素。

-   [ ] 能否跳过导航栏
        跳过导航栏对有运动障碍的人很有意义。

-   [ ] 是否支持内容缩放
        缩放后是否能正常展示，这对于部分有视觉障碍的人（比如老人）很有意义。

-   [ ] 能否通过屏幕阅读器，获取页面所传达信息
        针对完全失明用户

-   [ ] 开启色盲色弱模拟插件，能否使用站点的主要功能

## 邀请真实用户进行测试

真实的有访问障碍的用户是无障碍的实际使用者，他们有不同的习惯和期望。有条件的话，可以邀请真实的存在访问障碍用户定期检查站点，以确保主要内容和功能对他们可用。

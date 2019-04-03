# 2. 整体测试

在开发完成以后，我们需要整体对项目进行无障碍测试，通过工具和人工检测，发现其中的问题，进行修复。这里按照测试的准确程度层层递进，可分为以下三个层次，业务可根据实际场景进行选择：

* 自动化检查
* 借助辅助技术进行自测
* 邀请真实用户进行测试

## 1. 自动化检查

自动化检查可以检查出一些可访问性问题，如标题的结构和顺序、alt文本是否存在、页面标题和语言设置是否存在、颜色对比度是否合理、一定程度上的HTML结构是否语义化等。由于开发阶段和自动化检测工具的相似性，这里推荐按照工具的以下使用顺序进行检查，先对代码进行静态检测，然后通过axe进行测试，其次对于视觉测试，需要开发者根据不同类型的视觉用户进行测试：

* [eslint-plugin-jsx-a11y](develop.md)
* [Axe Chrome Plugin](develop.md)
* [I want to see like the colour blind](develop.md)

### 1.1 Benchmark

在我们通过工具和人工测试后，怎么衡量我们测试是否达到一定的要求，这个时候我们需要寻找一些工具对我们的测试进行评估或生成生产测试报告，来对我们的测试给出有效的评估。[Lighthouse](https://developers.google.com/web/tools/lighthouse/)是Google开发的网站性能评测工具，主要用于改进网络应用的质量，已开源。内置在Chrome Dev Tools 中，也有插件版本。

无障碍的检测是该工具评测的一个子项，可以借助这个插件生成站点的无障碍评分报告。

## 2. 借助辅助技术进行自测

手动测试将有助于识别准确性问题，例如标题结构是否与页面真实内容顺序相符、alt文本是否准确地传递了相关图像的信息、弹出的窗口、对话框或其他通知是否与展示一致并且明显等。

残疾人借助辅助技术（Assistive Technology）来操作软件产品，常用辅助技术有： 屏幕阅读器 - 用于读出屏幕上显示的文本 屏幕放大软件 - 用于放大显示器，使视力受损的用户轻松阅读。

### 2.1 屏幕阅读器

对于屏幕阅读器介绍，请[参考](../yi-bei-jing-jie-shao/basics.md)，这里主要介绍通过屏幕阅读器如何测试，我们依据有障碍人群，浏览器和操作系统的不同使用，需要进行不同的测试，进行如下分类：

* 人群类型
  * 对于失明用户，我们在测试过程中需要开启屏幕阅读器和通过键盘去测试，对于视力障碍，我们推荐使用[I want to see like the colour blind](develop.md)测试
* 浏览器
  * 在火狐和Chrome中我们使用[axe](develop.md)插件进行测试\(推荐\)，在IE中使用[Web Accessibility Toolbar](https://developer.paciellogroup.com/resources/wat/)测试，Safari使用[Web Development Tools](https://developer.apple.com/safari/tools/)测试
* 操作系统
  * 推荐在widnow系统中我们可以在火狐或Chrome中使用[axe](develop.md)插件进行测试，Apple系统下使用VoiceOver + Chrome中[axe](develop.md)插件测试

### 2.2 测试checklist

对于网站的可访问性，我们参考如下的条目，若基本符合，网站基本支持网站的可访问性，如下：

* [ ] 仅使用键盘，是否能使用站点的主要功能

  使用Tab在页面的可聚焦元素上切换，使用 shift+Tab 切回上一聚焦元素。

* [ ] 能否跳过导航栏，详情点击[这里](../er-wu-zhang-ai-gai-zao/content-creation/page1.md)

  跳过导航栏对有运动障碍的人很有意义

* [ ] 是否支持内容缩放，详情点击[这里](https://aerolab.co/blog/web-accessibility/)

  缩放后是否正常显示，这对于有视觉障碍的人\(比如老人\)很有意义

* [ ] 是否通过屏幕阅读器，准确获取页面所传达的信息

  针对完全失明用户

* [ ] 开启色盲弱模拟或对比度插件，能否使用站点的主要功能

## 3. 邀请真实用户进行测试

真实的有访问障碍的用户是无障碍的实际使用者，他们有不同的习惯和期望。有条件的话，可以邀请真实的存在访问障碍用户定期检查站点，以确保主要内容和功能对他们可用。

## 4. 参考文献

* [Screen Reader User Survey](https://webaim.org/projects/screenreadersurvey7/)
* [25 Browser Extensions to Perform Accessibility Testing Effectively](https://www.digitala11y.com/accessibility-plug-ins-ie-chrome-firefox-browsers/)
* [Static code Analysis plugin](https://github.com/evcohen/eslint-plugin-jsx-a11y)
* [Visual plugin](https://websitecreationworkshop.com/blog/design-tips/see-like-color-blind/)


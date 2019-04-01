# 1. 开发辅助工具

## 1. 开发辅助工具

开发测试由软件开发人员或工程师在软件开发生命周期的构建阶段执行。我们从代码静态分析、浏览器和视觉测试，对可访问性进行测试，降低软件的缺陷，因此从不同的角度进行测试：

### 1.1 静态分析工具

静态分析是指在不运行程序的条件下，对程序分析的方法，这里为开发者提供[eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)，在不运行程序条件下，运行此工具对程序进行静态分析，介绍如下：

* 对JSX代码进行无障碍标准测试。
* eslint-plugin-jsx-a11y是静态扫描，无需侵入代码，能扫到事件缺失，其中定义30多条比较常见规则，请[参考](https://github.com/evcohen/eslint-plugin-jsx-a11y)。
* 可以在开发和集成测试中使用。

### 1.2 浏览器检测工具

开发者在开发的过程中，可以通过浏览器插件对已经编写的代码进行可访问性测试，检测是否符合无障碍标准，这里为开发者提供[Axe Chrome Plugin](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd)，介绍如下：

* 在浏览器中测试代码是否符合无障碍标准。
* 与eslint-plugin-jsx-a11y工具相比，此插件的无障碍检测规则更多，请[参考](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md)
* Axe可访问性检查器是一个快速、轻量级的可访问性测试工具，它基于业内最流行的开源无障碍测试库axe-core，安装成功后可在Chrome Dev Tools面板找到。也可以使用`axe-core`进行单元测试，请[参考](https://github.com/dequelabs/axe-core)。
* 在控制台选择axe，就可以对网站进行测试，并列出不符合无障碍问题并给出解决方案。

### 1.3 视觉测试工具

在全球范围内，存在很多视觉障碍的用户，比如红绿色盲，在设计和开发的过程中需要考虑到他们的使用体验，因此这里为开发者提供[I want to see like the colour blind](https://chrome.google.com/webstore/detail/i-want-to-see-like-the-co/jebeedfnielkcjlcokhiobodkjjpbjia)，介绍如下：

* 在浏览器运行，对视觉进行测试。
* 与前面两个工具相比，此工具只能在视觉方面进行测试。需要开发者根据选择不同类型的视觉用户进行测试。
* Chrome插件，开启可模拟红、绿、蓝、全色盲、色弱等用户眼中的站点，直接发现站点中存在的可辨别性问题。

## 2. 参考文献

* [Development Testing](https://en.wikipedia.org/wiki/Development_testing)
* [无障碍访问工具](https://www.w3cschool.cn/front_end_handbook_2017/front_end_handbook_2017-jtqp26ec.html)
* [Static code Analysis plugin](https://github.com/evcohen/eslint-plugin-jsx-a11y)
* [Visual plugin](https://websitecreationworkshop.com/blog/design-tips/see-like-color-blind/)


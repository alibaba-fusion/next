# 贡献代码

这篇指南会指导你如何为 `@alifd/next` 贡献代码，请你在提 issue 或者 pull request 前花几分钟来阅读下。

## 透明的开发

所有的开发工作都发生在 Github 上，不论是核心团队成员还是外部的贡献者，pull request 后都会走相同的 review 流程。

## 分支管理

* 日常 bug 修复，向 master 提交 pull request
* 每月新开一个如 feature/1.10.0 分支，新增功能向该分支提交 pull request

## 创建 Issue

我们使用 [GitHub Issues](https://github.com/alibaba-fusion/next/issues) 来做 bug 和 feature 的追踪。在提交 Issue 时请选择 Bug report 或 Feature request [对应的模版](https://fusion.design/feedback)，填入必要信息，以帮助我们快速定位以及解决问题。

另外，在你报告一个 bug 或提交一个 feature 之前，请先确保已经搜索过已有的 issue。

## Pull Request

我们会关注所有的 pull request，review 以及合并你的代码，也有可能要求你做一些修改或者告诉你我们为什么不能接受这样的修改。

在你发送 Pull Request 之前，请确认你是按照下面的步骤来做的：

1. 基于上文所述**正确的分支**做修改

2. 在项目根目录执行 `npm install`，安装所有开发依赖

3. 如果你想修改 Button 组件的代码，在项目根目录执行 `npm run dev button`，会自动为你启动浏览器并打开 demo 页面

4. 如果你修复了一个 bug 或者新增了一个功能，请确保写了相应的测试，可以通过在根目录执行 `npm run test` 来启动所有组件的测试，在开发过程中可以用 `npm run test -- button` 来运行指定组件的测试。

5. 请确保你修改的代码通过了 eslint 和 stylelint 检查，我们会在 precommit 阶段中对你加入到 git 缓存区的代码文件自动执行 lint。

6. 请确保你的 git 提交信息格式符合我们的以下要求：格式为 `<type>(<scope>): <subject>`，`type` 必填，可选值包括: build|
chore|ci|docs|feat|fix|perf|refactor|revert|style|test|temp；`scope` 必填，填写具体修改的组件名，如 `feat(Menu)`，如进行批量修改或其他改动，可写为 `*`，如 `chore(*)`；`subject` 必填，使用英文，小写开头，如若关闭 issue，可写为，如 `fix(Menu): resolve xxx issue, close #12`，我们会在 commit message 阶段对提交信息进行检查

7. 如果一次 pull request 涉及到多次提交，请对提交记录进行 rebase 操作，缩减为一条提交记录

## 开发流程
在你 clone 了 `@alifd/next` 的代码仓库并且使用 `npm install` 安装完依赖后，你还可以运行下面几个常用的命令：

* `npm run dev component` 启动指定组件的调试页面

* `npm run test component` 启动指定组件的测试

* `npm run api component` 根据代码和注释，自动更新指定组件的中文 API 文档

* `npm run test` 启动所有组件的测试

* `npm run build` 编译 es2015+ 代码生成 lib 和 es 目录

* `npm run pack` 打包文件，生成 dist 目录


## 发布周期

遵循 [Semantic Versioning 2.0.0](https://semver.org/) 语义化版本管理策略：

z 位：每周三会进行日常 bug 修复版本的更新，紧急问题不受此限制，可以随时发布

y 位：每月发布一个带有新特性的向下兼容的版本

x 位：包含有 break change 变更的大版本，一般周期一到两年

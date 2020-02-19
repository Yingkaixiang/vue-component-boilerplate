# vue-component-boilerpalte-v2

![Build Status](https://travis-ci.com/Yingkaixiang/vue-component-boilerplate.svg?branch=master) [![Greenkeeper badge](https://badges.greenkeeper.io/Yingkaixiang/vue-component-boilerplate.svg)](https://greenkeeper.io/)

一个用于快速创建 vue 组件（库）的脚手架。

在线示例：

* [GitHub Pages](https://yingkaixiang.github.io/vue-component-boilerplate/)
* [七牛云](http://qncdn.yingkx.top/vue-component-boilerplate/index.html?id=202002062132)

## 特性

- [x] 支持 创建单个组件或组件库。
- [x] 支持 组件库全量加载或按需加载。
- [x] 支持 TypeScript。
- [x] 支持 Sass。
- [x] 支持 storybook。
- [x] 支持 storybook 一键发布在线示例。
  - [x] GitHub Pages
  - [x] 七牛云
- [x] 支持 图片自动转换成 base64（默认小于 1kb）。
- [x] 支持 使用 Jest 进行单元测试。
- [x] 支持 快捷功能脚本（如：一键创建组件目录及相关默认文件）。
- [x] 支持 CI/CD。
  - [x] travis CI
- [x] 支持 git commit 工作流
  - [x] 代码风格检测
  - [x] 单元测试
  - [x] commit message 提交规范
- [x] 支持打包文件大小分析

## 规范

- [x] 使用 ESLint 作为编码规范。
- [x] 使用 CSS bem 规范。
- [x] 使用 Angular Commit 规范。

## 项目目录

- .storybook - `storybook` 相关配置
- .vscode - `VSCode` 相关配置
- bin - 辅助构建用的脚本
- build - 构建脚本
- components - 组件
- cjs - 全量加载输出目录
- lib - 按需加载输出目录
- jest - `jest` 相关配置
- src - 全量导入入口
  
## 如何使用

```bash
# 克隆项目至本地
git clone git@github.com:Yingkaixiang/vue-component-boilerplate.git

# 进入项目
cd vue-component-boilerplate

# 安装依赖
# 因为本项目依赖 node-sass，所以建议使用淘宝镜像
npm i

# 快速创建一个组件
npm run generate [component-name]

# 启动本地调试
npm run storybook

# 构建按需加载
npm run build-component

# 构建全量加载
npm run build

# 使用 npm link 调试时请查看以下的问题
# https://cli.vuejs.org/guide/troubleshooting.html#symbolic-links-in-node-modules
```

## 依赖方如何安装组件库？

### 全量导入

```js
// components 为你的组件库名称
// style 为你的 CSS 文件名
import components from 'components';
import 'components/cjs/style.css';
```

### 按需加载

首先在依赖方的项目中安装以下依赖。

```bash
npm i babel-plugin-component -D
```

然后在 babel 配置文件中加入以下代码，`components` 为你的组件库名称。

```json
{
  "plugins": [["component", { "libraryName": "components" }]]
}
```

然后在你的文件中这样导入即可。

```js
// components 为你的组件库名称
import { Button } from 'components';
```

## 关于 ESLint 规范

本项目使用 [eslint-config-team-spec](https://github.com/Yingkaixiang/eslint-config-team-spec) 作为 `ESLint` 规范。此规范是笔者基于 [eslint-config-alloy](https://github.com/AlloyTeam/eslint-config-alloy) 的规范整理出的自己团队的编码规范。如果你不想使用我的规则，可以自行替换为你的规则。

## 关于 node-sass

将当前依赖的镜像源设置成淘宝即可。

```bash
npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/
```

## 如何使用七牛上传脚本

将 `build` 文件中的 `qiniu.example.js` 修改为 `qiniu.js`，并将代码里的 `<Access Key>` `<Secret Key>` `<bucket>` 替换成你的即可。

## 如何添加 Polyfill？

原则上组件库默认不添加 Polyfill，原因是防止组件库的使用者在项目中已经主动添加了 Polyfill，总而使得我们提供的组件库代码将其覆盖或重复打包相同功能的代码。如果你想要添加的话，可以使用以下方法：

```bash
# 组件库使用运行时的加载方法
# 避免污染全局属性
npm i @babel/plugin-transform-runtime --save-dev
npm i @babel/runtime --save
npm i @babel/runtime-corejs3 --save
```

```js
module.exports = {
  // ... 省略其他配置
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      { corejs: 3 }
    ]
  ]
}
```

## 为什么不在 .vue 文件中写 css？

组件库本身有一套自己的 CSS 命名规则，保证唯一的命名空间以及可以方便的进行修改。所以 scoped 和 CSS Module 对于组件库来说是没有意义的。但是在 .vue 文件中使用 `<style></style>` 标签的话 `vue-loader` 一定会把相关的 CSS 处理逻辑（如模拟 scoped 特性）打包进最终的文件里。所以采用分离的方式编写 CSS，也能做到组件库样式的统一管理。

> 如果你有什么建议或者想法可以给我发邮件 rubykaikai@gmail.com 来一起探讨哦！~

## TODO

* webpack 插件自动上传图片
* 修改使用文档，加入 CI/CD greenkeeper 的配置方法
# vue-component-boilerpalte-v2

一个用于创建 vue 组件的脚手架。

## 特性

- [ ] 支持创建单个组件或一个完整的组件库，如果是组件库则支持全量加载以及按需加载。
- [ ] 支持 TypeScript。
- [ ] 支持 Less。
- [ ] 支持 Sass。
- [ ] 支持 Stylus。
- [ ] 支持服务端渲染。
- [ ] 支持主动启动 polyfill
- [ ] 支持主动启用 typescript

## 项目目录

- build 构建脚本
- packages 组件仓库
  
## 如何使用

```bash
git clone 
```

修改 `package.json` 的 `name` 属性为库的名称。

## polyfill

```bash
npm i @babel/plugin-transform-runtime --save-dev
npm i @babel/runtime --save
npm i @babel/runtime-corejs3 --save
```

```js
module.exports = {
  // ... 其他配置
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      { corejs: 3 }
    ]
  ]
}
```
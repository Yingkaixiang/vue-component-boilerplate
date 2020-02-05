import Vue from 'vue';

import entry from '../index';
import packageJSON from '../../package.json';

describe('全量导入', () => {
  test('组件导出版本等于 package.json 版本', () => {
    expect(entry.version).toEqual(packageJSON.version);
  });

  test('成功导入组件', () => {
    expect(entry.total).toBeGreaterThan(0);
  });

  test('成功注册 Vue 全局组件', () => {
    Vue.use(entry.install);
    let total = 0;
    Object.keys(Vue.options.components).forEach((name) => {
      if (name.indexOf('demo') !== -1) total++;
    });
    expect(total).toEqual(entry.total);
  });
});

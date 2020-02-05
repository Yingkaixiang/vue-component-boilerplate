import { mount } from '@vue/test-utils';
import Component from '../src/button.vue';

describe('按钮', () => {
  test('是一个正确的 Vue 实例', () => {
    const wrapper = mount(Component);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});

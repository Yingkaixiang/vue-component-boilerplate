import { mount } from '@vue/test-utils';
import Component from '../src/text.vue';

describe('文字', () => {
  test('是一个正确的 Vue 实例', () => {
    const wrapper = mount(Component);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});

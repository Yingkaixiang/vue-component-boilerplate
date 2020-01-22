import Button from '../src/button.vue';

import '../src/style.scss';

export const Text = () => ({
  components: { Button },
  template: '<Button />',
});

Text.story = { name: '默认' };

export default {
  title: 'Test | 按钮 Button',
  component: Button,
};

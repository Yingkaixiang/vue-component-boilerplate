import Button from '../src/button.vue';

import '../src/style.scss';

export const Default = () => ({
  components: { Button },
  template: '<Button>默认</Button>',
});

Default.story = { name: '默认' };

export const Disabled = () => ({
  components: { Button },
  template: `
    <Button
      disabled
    >
      默认
    </Button>
  `,
});

Disabled.story = { name: '不可用状态' };

export default {
  title: '基础组件 | Button 按钮',
  component: Button,
};

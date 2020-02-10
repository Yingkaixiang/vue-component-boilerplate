import MyText from '../src/text.vue';

export const Default = () => ({
  components: { MyText },
  template: '<MyText />',
});

Default.story = { name: '默认' };

export default {
  title: '基础组件 | MyText 文字',
  component: MyText,
};

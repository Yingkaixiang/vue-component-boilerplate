import Text from './src/text.vue';

Text.install = function(Vue) {
  Vue.component(Text.name, Text);
};

export default Text;

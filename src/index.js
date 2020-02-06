import Button from '../components/button/';

// 组件库导入
const components = [Button];

const install = function(Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default {
  version: '1.0.0',
  total: components.length,
  install,
  Button,
};

// 单个组件可以直接这样导出
// export default Button;

import Button from './src/button';
import './src/style.scss';

Button.install = function(Vue) {
  Vue.component(Button.name, Button);
};

export default Button;

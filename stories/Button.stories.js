import Button from '../components/button';

import '../src/style.scss';

export const Text = () => ({
  components: { Button },
  template: '<Button />',
});

export default {
  title: 'Button',
  component: Button,
};

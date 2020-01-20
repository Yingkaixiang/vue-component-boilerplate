<template>
  <div class="foo">
    {{ msg }}
    <img src="~urix/index.js">
  </div>
</template>

<script>
import Test1 from '@/Test1';

export default {
  data () {
    return {
      msg: 'Hello world!'
    }
  },
  
  methods: {
    test() {
      const a = 1;
    }
  }
}
</script>
<template>
  <div :class="$a.foo">
    {{ msg }}
    <img src="./pokeball.png">
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

<style lang="scss" module="a">
.foo { color: $color }
.bar { display: flex }
</style>
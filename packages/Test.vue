<template>
  <div class="example">{{ msg }}</div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello world!'
    }
  },
  
  methods: {
    test() {
      const a = 1;
      // new Promise((resolve) => {
      //   resolve();
      // });
    }
  }
}
</script>
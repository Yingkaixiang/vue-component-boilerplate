<template>
  <div class="text">{{ count }}</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'demoText',
  data() {
    return {
      count: 1,
    };
  },
});
</script>

<template>
  <button
    :disabled="disabled"
    class="demo__button_primary"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'demo-button',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
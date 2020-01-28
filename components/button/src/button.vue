<template>
  <button
    :disabled="disabled"
    class="button"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    }
  }
}
</script>
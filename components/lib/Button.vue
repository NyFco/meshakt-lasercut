<template>
  <button :class="`${type} btn`">
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "default", // primary
  },
});
</script>

<style scoped lang="scss">
.btn {
  transition: all ease 0.2s;
  border-radius: 4px;
  padding: 8px 24px;

  &.default {
    border: $primary 1px solid;

    &:hover {
      background-color: $btn-hover;
      color: #ffffff;
    }
  }

  &.primary {
    background-color: $btn-hover;
    background-color: $primary;
    color: #ffffff;

    &:hover {
      background-color: $btn-hover;
    }
  }
}
</style>

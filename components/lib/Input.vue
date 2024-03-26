<template>
  <input
    class="outline-none border-b focus:ring-1 focus:rounded-md ring-gray-400 text-right p-2"
    @input="$emit('update:modelValue', $event.target.value)"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
    v-bind="$attrs"
  />
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Number, Array],
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);
</script>

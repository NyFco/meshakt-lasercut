<template>
  <section class="my-9" :id="id">
    <div
      :class="`mx-auto md:flex ${
        image_position === 'left' ? '' : 'flex-row-reverse'
      } max-w-7xl p-6 lg:px-8 gap-7`"
    >
      <div class="flex-1">
        <img
          class="rounded-lg shadow-[0_0_15px_0_rgba(0,0,0,0.3)]"
          :src="image"
          :alt="title"
        />
      </div>
      <div class="flex-1">
        <h1
          class="text-3xl mt-8 md:mt-0 sm:text-4xl lg:text-5xl text-right font-bold section_title"
        >
          {{ title }}
        </h1>
        <p class="text-right mt-3">{{ text }}</p>
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  image: {
    required: true,
    type: String,
  },
  title: {
    required: true,
    type: String,
  },
  text: {
    required: true,
    type: String,
  },
  id: {
    required: true,
    type: String,
  },
  image_position: {
    type: String,
    required: false,
    default: "left",
  },
});
</script>

<style scoped lang="scss">
section {
  .section_title {
    color: $primary;
  }
}
</style>

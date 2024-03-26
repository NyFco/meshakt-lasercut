<template>
  <section class="flex justify-center items-center pb-12 px-6">
    <div class="p-6 lg:px-60 rounded-md shadow-[0_0_5px_0_rgba(0,0,0,0.3)]">
      <h1
        id="counseling-section-title"
        class="text-center text-4xl sm:text-5xl font-bold"
      >
        {{ t("sections.counseling.title") }}
      </h1>
      <p class="text-center mt-5">{{ t("sections.counseling.text") }}</p>
      <div
        class="flex flex-col-reverse lg:flex-row gap-10 justify-center items-center p-5 mb-10 mt-7"
      >
        <LibInput
          class="w-full"
          v-model="phone"
          :placeholder="t('sections.counseling.phone_number')"
        />
        <LibInput
          class="w-full"
          v-model="name"
          :placeholder="t('sections.counseling.name')"
        />
      </div>
      <div class="flex justify-center items-center">
        <LibButton type="primary">{{
          t("sections.counseling.join")
        }}</LibButton>
      </div>
    </div>
  </section>
</template>

<script setup>
// Services
import { t } from "~/services/Language.service";

const name = ref("");
const phone = ref("");
</script>

<style scoped lang="scss">
#counseling-section-title {
  color: $primary;
}
</style>

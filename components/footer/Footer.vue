<template>
  <footer id="footer">
    <div
      class="mx-auto flex flex-col max-w-7xl justify-between p-6 lg:px-8 text-white text-right sm:flex-row-reverse gap-5"
    >
      <div class="divide-y divide-white w-full sm:max-w-96">
        <h4 class="mb-1">{{ t("sections.footer.about_us.title") }}</h4>
        <p class="pt-5 pl-2">{{ t("sections.footer.about_us.value") }}</p>
      </div>
      <div class="divide-y divide-white w-full sm:max-w-96">
        <h4 class="mb-1">{{ t("sections.footer.connect_us.title") }}</h4>
        <div class="pt-5">
          <p
            v-for="option in connectionOptions"
            class="mb-3 flex flex-row-reverse justify-between gap-10"
          >
            <span>{{ option.title }}</span>
            <a :href="option.linkTo" class="text-white">{{ option.value }}</a>
          </p>
        </div>
      </div>
    </div>
    <div
      class="mx-auto flex flex-col py-5 gap-2 max-w-7xl justify-center lg:px-8 text-white text-center"
    >
      <p>
        {{ t("sections.footer.copyright.text") }}
      </p>
      <p>
        {{ t("sections.footer.copyright.creators") }}
      </p>
    </div>
  </footer>
</template>

<script setup>
// Services
import { t } from "~/services/Language.service.js";

const connectionOptions = [
  {
    title: t("sections.footer.connect_us.options.phone.title"),
    value:
      t("sections.footer.connect_us.options.phone.code") +
      " - " +
      t("sections.footer.connect_us.options.phone.no"),
    linkTo: `tel:${
      t("sections.footer.connect_us.options.phone.code") +
      t("sections.footer.connect_us.options.phone.no")
    }`,
  },
  {
    title: t("sections.footer.connect_us.options.email.title"),
    value: t("sections.footer.connect_us.options.email.email"),
    linkTo: `mailto:${t("sections.footer.connect_us.options.email.email")}`,
  },
  {
    title: t("sections.footer.connect_us.options.instagram.title"),
    value: t("sections.footer.connect_us.options.instagram.id"),
    linkTo: `https://www.instagram.com/${t(
      "sections.footer.connect_us.options.instagram.id"
    )}`,
  },
  {
    title: t("sections.footer.connect_us.options.address.title"),
    value: t("sections.footer.connect_us.options.address.address"),
    linkTo: null,
  },
];
</script>

<style scoped lang="scss">
#footer {
  background-color: $primary;
}
</style>

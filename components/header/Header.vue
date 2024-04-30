<template>
  <header id="header">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <a 
          :href="`tel:${t('sections.footer.connect_us.options.phone.code') + t('sections.footer.connect_us.options.phone.no')}`"
          class="text-white text-md flex items-center align-middle gap-2">
          <PhoneIcon class="h-5 w-5 mb-1" /> 
          <span>{{ t('sections.footer.connect_us.options.phone.code') + " - " + t('sections.footer.connect_us.options.phone.no') }}</span>
        </a>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex flex-row-reverse lg:flex-1 lg:gap-8">
        <a 
          v-for="item in headerMenuItems" 
          :href="item.linkTo" 
          class="text-sm font-semibold leading-6 text-white"
          >{{ item.title }}</a
        >
      </div>
    </nav>
    <Dialog
      as="div"
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-end">
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 text-right">
            <div class="space-y-2 py-6">
              <a
                v-for="item in headerMenuItems"
                :href="item.linkTo"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >{{ item.title }}</a
              >
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
// Vue
import { ref } from "vue";

// Tailwind
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon, PhoneIcon } from "@heroicons/vue/24/outline";

// Services
import { t } from "~/services/Language.service";

const headerMenuItems = [
  {
    title: t('menu.about_us'),
    linkTo: "#about_us",
  },
  {
    title: t('menu.services'),
    linkTo: "#services",
  },
  {
    title: t('menu.abilities'),
    linkTo: "#abilities",
  },
  {
    title: t('menu.counseling'),
    linkTo: "#counseling",
  },
];

const mobileMenuOpen = ref(false);
</script>

<style scoped lang="scss">
#header {
  background-color: $primary;
}
</style>
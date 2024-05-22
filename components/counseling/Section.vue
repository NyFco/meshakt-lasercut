<template>
  <section class="flex justify-center items-center pb-12 px-6" id="counseling">
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
        <LibButton type="primary" @click="submit" :disabled="loading">
          {{ t("sections.counseling.join") }}
        </LibButton>
      </div>
    </div>
  </section>
</template>

<script setup>
// Axios
import axios from "axios";
// Services
import { t } from "~/services/Language.service";
// Toastify
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
// BaseURL
const base_url = import.meta.env.VITE_API_BASE_URL;

const toastifyConfig = {
  autoClose: 3000,
  rtl: true,
  position: "bottom-right",
};

const PERSIAN_NUM_TO_ENGLISH = {
  "۰": 0,
  "۱": 1,
  "۲": 2,
  "۳": 3,
  "۴": 4,
  "۵": 5,
  "۶": 6,
  "۷": 7,
  "۸": 8,
  "۹": 9,
};

function convertPersianToEnglish(number) {
  return number
    .split("")
    .map((char) => PERSIAN_NUM_TO_ENGLISH[char] || char)
    .join("");
}

function validatePhone(phone) {
  return /^09\d{9}$/.test(phone);
}

const name = ref("");
const phone = ref("");
const loading = ref(false);

async function submit() {
  if (!phone.value) {
    toast.error(t("sections.counseling.phone_number_error"), toastifyConfig);
    return;
  }

  const convertedPhone = convertPersianToEnglish(phone.value);

  if (!validatePhone(convertedPhone)) {
    toast.error(t("sections.counseling.invalid_phone_number"), toastifyConfig);
    return;
  }

  loading.value = true;

  try {
    const { data } = await axios.post(base_url, {
      name: name.value,
      phone: convertedPhone,
    });

    if (data.code === 200) {
      toast.success(data.message, toastifyConfig);
      name.value = "";
      phone.value = "";
    } else {
      toast.error(data.message, toastifyConfig);
    }
  } catch (error) {
    toast.error(t("sections.counseling.submit_error"), toastifyConfig);
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped lang="scss">
#counseling-section-title {
  color: $primary;
}
</style>

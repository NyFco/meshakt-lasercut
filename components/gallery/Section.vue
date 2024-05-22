<template>
  <section class="gallery-section my-9 py-9" id="gallery">
    <h1
      class="text-center text-3xl sm:text-4xl font-bold"
      style="color: #ffffff"
    >
      {{ t("sections.gallery.title") }}
    </h1>
    <div class="mx-auto max-w-7xl p-6 lg:px-8">
      <swiper
        :grabCursor="true"
        :centeredSlides="true"
        :slidesPerView="'auto'"
        :pagination="true"
        :navigation="true"
        :modules="modules"
      >
        <swiper-slide v-for="image in images">
          <div class="flex justify-center items-center">
            <img :src="image" />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup>
// SwiperJS
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

const modules = [Pagination, Navigation];

// Services
import { t } from "~/services/Language.service";

// Assets
import section1Img from "~/assets/images/section1.png";
import section2Img from "~/assets/images/section2.png";
import section3Img from "~/assets/images/section3.png";

const images = [section1Img, section2Img, section3Img];
</script>

<style scoped lang="scss">
.gallery-section {
  background-color: $primary;
  background-image: url("~/assets/images/GalleryLines.svg");
  background-position: center center;
  background-repeat: no-repeat;
}
</style>

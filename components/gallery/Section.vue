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
            <img :src="image" style="height: 300px;" />
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
import "swiper/css/navigation";

const modules = [Pagination, Navigation];

// Services
import { t } from "~/services/Language.service";

// Assets
import img1 from "~/assets/images/gallery/1.jpg";
import img2 from "~/assets/images/gallery/2.jpg";
import img3 from "~/assets/images/gallery/3.jpg";
import img4 from "~/assets/images/gallery/4.jpg";
import img5 from "~/assets/images/gallery/5.jpg";
import img6 from "~/assets/images/gallery/6.jpg";
import img7 from "~/assets/images/gallery/7.jpg";
import img8 from "~/assets/images/gallery/8.jpg";
import img9 from "~/assets/images/gallery/9.jpg";
import img10 from "~/assets/images/gallery/10.jpg";
import img11 from "~/assets/images/gallery/11.jpg";
import img12 from "~/assets/images/gallery/12.jpg";
import img13 from "~/assets/images/gallery/13.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
];
</script>

<style scoped lang="scss">
.gallery-section {
  background-color: $primary;
  background-image: url("~/assets/images/GalleryLines.svg");
  background-position: center center;
  background-repeat: no-repeat;
}
</style>

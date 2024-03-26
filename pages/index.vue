<template>
  <LibSection
    :image="section1Img"
    :title="t('sections.about_us.title')"
    :text="t('sections.about_us.text')"
    id="about_us"
  />
  <LibSection
    :image="section2Img"
    :title="t('sections.services.title')"
    :text="t('sections.services.text')"
    image_position="right"
    id="services"
  />
  <LibSection
    :image="section3Img"
    :title="t('sections.abilities.title')"
    :text="t('sections.abilities.text')"
    id="abilities"
  />
  <CounselingSection />
</template>

<script setup>
// Services
import { t } from "~/services/Language.service";

// Assets
import section1Img from "~/assets/images/section1.png";
import section2Img from "~/assets/images/section2.png";
import section3Img from "~/assets/images/section3.png";
</script>
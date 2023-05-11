<template>
  <Swiper :modules="modules" :slides-per-view="1"
    :navigation="{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }" :autoplay="{ delay: 3000 }"
    :pagination="{ clickable: true }" :scrollbar="{ draggable: true }" :loop="true" @swiper="onSwiper"
    @slideChange="onSlideChange" class="relative swiper2">
    <SwiperSlide v-for="e in 4" :key="e">
      <a href="#" @click.prevent>
        <img v-if="viewportWidth > 640" :src="require(`@/assets/images/visual/img_visual0${e}.jpg`)"
          class="h-[530px] object-cover" alt="메인사진" title="새창열기">
        <img v-else :src="require(`@/assets/images/visual/img_Mvisual0${e}.jpg`)" class="h-[420px] w-full object-cover"
          alt="메인사진" title="새창열기">
      </a>
    </SwiperSlide>
    <div v-if="viewportWidth > 640" class="swiper-pagination"></div>
    <div v-if="viewportWidth > 640" class="swiper-button-prev text-white font-black after:content-['prev'] after:text-6xl ml-10"></div>
    <div v-if="viewportWidth > 640" class="swiper-button-next text-white font-black after:content-['next'] after:text-6xl mr-10"></div>
  </Swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/bundle'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Navigation, Pagination, Autoplay } from 'swiper'

export default {
  name: "VisualPage",
  data() {
    return {
      Modules: [Navigation, Pagination, Autoplay],
      viewportWidth: 0
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  created() {
    this.updateViewportWidth()
    window.addEventListener('resize', this.updateViewportWidth)
  },

  methods: {
    updateViewportWidth() {
      this.viewportWidth = window.innerWidth
    }
  },
}
</script>

<style>
.swiper2 .swiper-pagination {
  position: absolute;
  left: 3% !important;
  bottom: 8% !important;
  width: 200px !important;
}
@media (max-width: 640px) {
  .swiper2 .swiper-pagination {
    left: 0% !important;
    bottom: 10% !important;
    width: 100% !important;
  }
}
.swiper-pagination-bullet {
  background-color: #fff;
  opacity: 100;
  width: 10px;
  height: 10px;
}

.swiper-pagination-bullet-active {
  background-image: url(../assets/images/btn/don.gif);
  background-position: center;
}
</style>
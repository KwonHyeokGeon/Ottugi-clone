<template>
  <div class="mt-20 pt-14 h-[600px]"
    :style="{ 'background-image': 'url(' + require('@/assets/images/common/bg.jpg') + ')' }">
    <h3
      class="text-center font-semibold text-4xl text-white mb-10 relative after:absolute after:w-10 after:h-[1px] after:-bottom-5 after:left-1/2 after:-translate-x-1/2 after:bg-white">
      오뚜기 인기상품</h3>
    <p class="text-center font-semibold text-white mb-10">오뚜기의 인기상품들을 소개 합니다.</p>
    <Swiper :modules="Module" class="max-w-6xl relative "
      :navigation="{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }"
      :allowTouchMove="false" :breakpoints="{
          300:{
            centeredSlides: true,
            slidesPerView: 2,
            spaceBetween: 10,
            },
          425: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 5,
            centeredSlides: true
          },
          660: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 10,
            centeredSlides: false
          },
          900: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 15,
            centeredSlides: false
          },
          1200: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            spaceBetween: 15,
            centeredSlides: false
          }
        }">
      <SwiperSlide v-for="(e, index) in Num" :key="e">
        <div class="w-56 flex flex-col bg-white">
          <a href="#" @click.prevent
            class="view  relative after:absolute after:bg-[#dc2c34b3] after:h-0 after:w-full after:bottom-0 after:left-0 after:opacity-[85%] hover:after:h-full after:transition-all">
            <div class=" border-b">
              <img :src="require(`@/assets/images/main/hit-${e}.jpg`)" alt="인기상품" class="mx-auto h-48 ">
            </div>
            <ul class="p-5">
              <li class="text-lg text-center h-14 mb-2">{{ cardName[index] }}</li>
              <li class="text-sm text-start">{{ cateName[index] }}</li>
            </ul>
          </a>
        </div>
      </SwiperSlide>
      <div class="swiper-button-prev text-black font-black after:content-['prev'] after:text-6xl"></div>
      <div class="swiper-button-next text-black font-black after:content-['next'] after:text-6xl"></div>
    </Swiper>
  </div>
  <div class="pt-16 bg-[#fffde4] pb-20">
    <h3
      class="text-center font-semibold text-4xl mb-10 relative after:absolute after:w-10 after:h-[1px] after:-bottom-5 after:left-1/2 after:-translate-x-1/2 after:bg-[#d32a2f]">
      O'Kitchen</h3>
    <p class="text-center font-semibold mb-10">오뚜기가 제안하는 맛있고 건강한 요리</p>
    <div class="max-w-[1200px] mx-auto">
      <a href="#" @click.prevent>
        <iframe src="https://ottogi.okitchen.co.kr/main/iframe.asp" class="w-full h-80"></iframe>
      </a>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper'
import Ottugi from '../Data.json'

import 'swiper/css/navigation'



export default {
  name: "kitchenPage",
  data() {
    return {
      modules: [Navigation],
      cardName: Ottugi.hitItem.name,
      cateName: Ottugi.hitItem.category,
      Num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  mounted() {
  },
} 
</script>

<style>
.view::after {
  background-image: url('@/assets/images/common/btn_view.png');
  background-position: center;
  background-repeat: no-repeat;
}
.swiper-slide .swiper-slide-active{
  margin-left: 20px;
}
</style>
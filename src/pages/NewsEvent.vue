<template>
  <div class="max-w-[1200px] mx-auto px-4">
    <div class="sm:flex sm:gap-x-4 sm:gap-y-0 mt-5 gap-3 grid-cols-2 grid">
      <div v-for="(e, index) in navlist.nav" :key="e" class="relative flex flex-col max-w-[288px]">
        <a href="#" class="w-full">
          <img :src="require(`@/assets/images/news/bgM${index + 1}.jpg`)" class="" alt="뉴스">
          <p v-for="el in e" :key="el"
            class="text-[28px] w-full text-center text-white font-bold absolute first-of-type:top-[20%] last-of-type:top-1/2 last-of-type:font-normal last-of-type:text-xl ">
            {{ el }}</p>
          <span class="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-full text-white">
            more&gt;</span>
        </a>
      </div>
    </div>
    <div class="mt-10 gap-x-2 sm:flex">
      <h3 class="basis-1/4 font-bold text-3xl relative">
        오뚜기 뉴스
        <a href="#" @click.prevent
          class="font-light text-base text-[#d32a2f] sm:absolute bottom-1/2 -translate-y-full right-1/2 -translate-x-1/2">more&gt;</a>
      </h3>
      <div v-for="e in newslist" :key="e" class="basis-1/4">
        <ul v-for="el in e" :key="el"
          class="font-medium text-sm first:font-semibold first:text-lg first:mb-4 first:leading-5 first:pt-4">
          <li>{{ el }}</li>
        </ul>
      </div>
    </div>
    <!-- 상단 뉴스 -->
    <!-- 하단 이벤트 및 신제품 소개 -->
    <div class="flex mt-16 sm:flex-wrap flex-col sm:flex-row">
      <div class="sm:w-1/2">
        <h3 class="font-semibold text-3xl mb-3">이벤트</h3>
        <Swiper class="relative swiper3 text-white" :slides-per-view="1" :autoplay="{ delay: 3000 }" :loop="true"
          :pagination="{ clickable: true, type: 'fraction' }">
          <SwiperSlide v-for="e in 2" :key="e">
            <a href="#" @click.prevent>
              <img :src="require(`@/assets/images/slide/event_0${e}.jpg`)" alt="이벤트" class="w-full ">
            </a>
          </SwiperSlide>
          <div class="swiper-pagination"></div>
        </Swiper>
      </div>
      <div class="sm:w-1/2 mt-5 sm:mt-0">
        <h3 class="font-semibold text-3xl mb-3">신제품 소개</h3>
        <div class="flex">
          <Swiper class="basis-1/2 swiper3 relative" :modules="Modules" :slides-per-view="1" :autoplay="{ delay: 3000 }"
            :loop="true" :pagination="{ clickable: true }">
            <SwiperSlide v-for="e in 3" :key="e" class="relative">
              <a href="#" @click.prevent>
                <img :src="require(`@/assets/images/slide/goods_0${e}.jpg`)" alt="상품">
                <img :src="require(`@/assets/images/common/flag_new.png`)" alt="new" class="w-10 absolute top-2 right-2">
              </a>
            </SwiperSlide>
            <div class="swiper-pagination"></div>
          </Swiper>
          <div class="basis-1/2 border relative overflow-hidden">
            <a href="#" @click.prevent>
              <img :src="require(`@/assets/images/main/main_pizza.jpg`)" alt="UNO피자" class="mx-auto w-7/12">
              <img :src="require(`@/assets/images/common/flag_new.png`)" alt="new" class="w-10 absolute top-2 right-2">
              <p class="font-semibold text-base sm:text-lg text-center">페퍼로니 피자 UNO</p>
              <p class="text-sm text-center">냉장/냉동식품 > 냉동피자</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/bundle'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper'

import Ottugi from '../Data.json'
export default {
  name:"NewsEventPage",
  data() {
    return {
      navlist: Ottugi.news,
      newslist: Ottugi.otgnews,
      Modules: [Pagination, Autoplay]
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

<style>
.swiper3 .swiper-pagination {
  background-color: #757575;
  width: max-content;
  padding: 0 10px;
  border-radius: 20px;
  position: absolute;
  left: 50%;
  transform: translatex(-50%);
  opacity: 80%;
}</style>
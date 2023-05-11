<template>
  <div class="max-w-6xl mx-auto mt-10 sm:mb-36">
    <h3
      class="text-center font-semibold text-4xl mb-10 relative after:absolute after:w-10 after:h-[1px] after:-bottom-5 after:left-1/2 after:-translate-x-1/2 after:bg-[#d32a2f]">
      오뚜기 SNS</h3>
    <p class="text-center font-semibold mb-5">소셜미디어를 통해 보는 오뚜기 스토리를 소개합니다.</p>
    <div class="mb-14 px-2">
      <ul class="w-full grid grid-cols-2 sm:flex mb-12">
        <li v-for="(el, index) in tabs" :key="index"
          class="sm:basis-1/4 bg-[#ebeff2] leading-[56px] md:leading-[58px] text-sm md:text-base text-center font-semibold relative group h-14 transition-all duration-150 cursor-pointer hover:bg-[#263a6b] hover:text-white"
          @click="isclick(el, index)" :class="{ 'text-white bg-btn': el === activeTab }">
          {{ el }}
          <span
            class="inline-block bg-[#e2e2e2] w-[1px] h-3 absolute right-0 top-1/2 -translate-y-1/2 group-last-of-type:hidden"></span>
        </li>
      </ul>
      <ul class="sm:flex gap-x-3 grid grid-cols-2">
        <li v-for="e in 4" :key="e" class="w-full">
          <a href="#" @click.prevent>
            <img :src="require(`@/assets/images/sns/${activeNum}/img (${e}).jpg`)" alt="SNS">
            <p class="text-sm text-[#666666] font-semibold line-clamp-2 my-4">{{ snsTitle[activeTab][e - 1] }}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Otuggi from '../Data.json'
export default {
  name:"SnsPage",
  data() {
    return {
      tabs: ["오뚜기 데일리", "오늘,맛으로 행복한세상", "오뚜기 플레이트", "옐로우즈 투게더"],
      activeTab: "오뚜기 데일리",
      activeNum: 1,
      snsTitle: Otuggi.sns,
    }
  },
  methods: {
    isclick(el, index) {
      this.activeTab = el
      this.activeNum = index + 1
    },
  },
}
</script>

<style></style>
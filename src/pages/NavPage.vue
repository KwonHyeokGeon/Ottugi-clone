<template>
  <div class="sm:max-h-48 min-h-[94px] bg-[#fef133] relative">
    <div class="max-w-7xl mx-auto h-[94px] sm:h-full px-2">
      <h1 class="flex justify-center relative h-full">
        <a href="#" class="inline-block">
          <img :src="require(`@/assets/images/common/logo.png`)" class="pt-4 h-20 sm:h-full" alt="로고" />
        </a>
        <!-- 로고 -->
        <div class="flex absolute right-0 top-1/2 -translate-y-1/2">
          <a href="#" @click.prevent>
            <img :src="require(`@/assets/images/common/icon_lang.png`)" class="pr-4" alt="언어" />
          </a>
          <a href="#" @click.prevent>
            <img :src="require(`@/assets/images/common/top_chat.png`)" class="" alt="챗봇" />
          </a>
        </div>
        <!-- 언어 / 챗봇아이콘 -->
        <!-- 모바일 메뉴 햄버거 버튼 -->
        <div class="absolute left-0 top-1/2 -translate-y-1/2 sm:hidden cursor-pointer" @click="btnToggle()">
          <img :src="require(`@/assets/images/btn/menu_ico.gif`)" alt="열기버튼" class="w-6" :class="{ hidden: btnOpen }" />
          <img :src="require(`@/assets/images/btn/cls_btn.gif`)" alt="닫기버튼" class="w-6 scale-150"
            :class="{ hidden: !btnOpen }" />
        </div>
      </h1>
      <!-- pc 메뉴 -->
      <ul class="sm:flex hidden cursor-pointer">
        <li v-for="e in NavList" :key="e"
          class="basis-[16.666%] font-extrabold text-center py-6 trasition-all relative after:absolute after:transition-all after:w-full after:h-0 duration-500 after:bg-main after:left-0 after:bottom-0 hover:after:h-1 hover:text-main group">
          <a href="#" class="">{{ e }}</a>
          <span
            class="inline-block bg-slate-500 w-[2px] h-3 absolute right-0 top-1/2 -translate-y-1/2 group-last-of-type:hidden"></span>
        </li>
      </ul>
    </div>
    <!-- 모바일 메뉴 -->
    <div class="absolute top-100 z-10 h-0 overflow-hidden w-full transition-all duration-500 sm:hidden"
      :class="btnOpen && 'h-auto'">
      <ul>
        <li v-for="(e, array, index) in SubMenu" :key="index"
          class="bg-[#dc2c34] leading-[56px] text-xl text-white border-b menu-item">
          <div class="flex justify-between items-center px-4">
            <a href="#">{{ array }}</a>
            <div @click="subBtnToggle(index)" class="cursor-pointer" v-if="(index !==2) && (index !==3)">
              <!-- subBtnToggle(array) > 내가 클릭한 번호 값 넘기기  -->
              <!-- 조건문에 의해 클릭한 값이면 - / 그게 아닌 값이라면 + 버튼 출력 -->
              <img class="w-6 h-6" v-if="subBtnIndex !== index || !subBtnOpen"
                :src="require(`@/assets/images/btn/nav_on.png`)" alt="상세메뉴버튼" />
              <img class="w-6 h-6" v-if="subBtnIndex === index && subBtnOpen"
                :src="require(`@/assets/images/btn/nav_off.png`)" alt="상세메뉴버튼" />
            </div>
            <div v-else>
              <router-link to="/Detail">→</router-link>
            </div>
          </div>
          <div v-if="subBtnIndex === index && index != 2 && index != 3 && subBtnOpen"
            class="flex flex-col bg-[#9a1f24] pt-1 last:pb-4">
            <template v-for="(el, i) in Object.entries(e)" :key="i">
              <p class="ml-10 text-base font-semibold py-3">{{ el[0] }}</p>
              <p class="ml-10 text-sm py-1 pl-1" v-for="value in el[1]" :key="value"><span>&#8211;</span> {{ value }}</p>
            </template>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Ottugi from "@/Data.json";
export default {
  name: "NavPage",
  data() {
    return {
      NavList: Ottugi.nav,
      SubMenu: Ottugi.subMenu,
      btnOpen: false,
      subBtnOpen: false,
      subBtnIndex: null,
      // 처음에 첫 메뉴도 활성화 안시키기 위해 값 안주기
    };
  },
  methods: {
    btnToggle() {
      this.btnOpen = !this.btnOpen;
    },
    subBtnToggle(e) {
      if (this.subBtnIndex === e && this.subBtnOpen) {
        this.subBtnOpen = false;
      } else {
        this.subBtnOpen = true;
      }
      this.subBtnIndex = e;
    },
  },
};
</script>

<style></style>

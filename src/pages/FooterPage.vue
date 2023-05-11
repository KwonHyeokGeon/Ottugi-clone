<template>
    <div class="relative">
        <div class="bg-[#f7f7f7] sm:border-y-2 px-2">
            <ul class="max-w-6xl mx-auto">
                <a href="#" @click.prevent class="sm:flex sm:w-3/4 sm:flex-wrap grid grid-cols-2">
                    <li v-for="e in footTitle" :key="e"
                        class="first:font-bold text-center sm:border-0 border font-medium px-4 m-[0.1px] sm:m-0 py-3 sm:py-5">
                        {{ e }}</li>
                </a>
            </ul>
        </div>
        <ul class="sm:basis-3/12 w-fit mx-auto mt-6 sm:mt-0 sm:absolute sm:right-5 sm:top-1/2 sm:-translate-y-1/2 md:right-8 lg: xl:right-[8%]">
            <a href="#" @click.prevent class="flex items-center">
                <li v-for="e in footIcon" :key="e" class="ml-[10px]">
                    <img class="w-[35px] h-[35px]" :src="require(`@/assets/images/btn/${e}_icon.png`)" alt="아이콘" />
                </li>
            </a>
        </ul>
    </div>
    <div>
        <div class="max-w-6xl mx-auto flex flex-nowrap flex-col md:flex-row justify-between mt-5">
            <img :src="require(`@/assets/images/common/f_logo.jpg`)" alt="로고" class="sm:h-full max-w-[150px] mx-auto sm:w-fit" />
            <div class="flex-grow mt-3">
                <ul class="flex flex-wrap  ul-common justify-center lg:justify-start mb-2">
                    <li class="li-common">(주)오뚜기</li>
                    <li class="li-common">사업자등록번호:138-81-03238</li>
                    <li class="li-common">대표이사 황성만</li>
                </ul>
                <ul class="flex flex-wrap ul-common justify-center lg:justify-start text-center mb-2">
                    <li class="li-common">주소 (14060) 경기도 안양시 동안구 흥안대로 405 (평촌동 160)</li>
                    <li class="li-common">오뚜기 고객상담실 : 080-024-2311</li>
                </ul>
                <ul class="flex flex-wrap ul-common justify-center lg:justify-start text-center">
                    <li class="text-[13px] px-3">오뚜기라면 고객상담실 : 080-088-1212 (월~금 08:30~17:00)</li>
                </ul>
                <p class="text-xs px-3 mt-3 text-center md:text-start">Copyright ⓒ OTTOGI CORPORATION.Ltd All Rights Reserved.</p>
            </div>
            <img :src="require(`@/assets/images/common/2014_WA_mark2.gif`)" alt="가족친화 우수기업" class="sm:h-fit max-w-fit mx-auto">
        </div>
    </div>
</template>

<script>
export default {
    name: "FooterPage",
    data() {
        return {
            footTitle: ["개인정보처리방침", "고객상담", "찾아오시는 길", "오뚜기몰", "고객상담 챗봇"],
            footIcon: ["insta", "blog", "facebook", "youtube"],
        };
    },

};
</script>

<style></style>

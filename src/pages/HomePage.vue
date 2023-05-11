<template>
  <NavPage></NavPage>
  <VisualPage></VisualPage>
  <NewsEvent></NewsEvent>
  <KitchenPage></KitchenPage>
  <SnsPage></SnsPage>
  <FooterPage></FooterPage>

  <img @click="scrollTop" class="fixed bottom-0 right-0 cursor-pointer" :src="require(`@/assets/images/btn/btn_Top.png`)"
    alt="위로">
</template>

<script>
import NavPage from './NavPage.vue'
import VisualPage from './VisualPage.vue';
import NewsEvent from './NewsEvent.vue';
import KitchenPage from './KitchenPage.vue';
import SnsPage from './SnsPage.vue';
import FooterPage from './FooterPage.vue'

export default {
  name:"HomePage",
  components: {
    NavPage,
    VisualPage,
    NewsEvent,
    KitchenPage,
    SnsPage,
    FooterPage
  },
  methods: {
    scrollTop() {
      window.scrollTo({ top: 0 })
    }
  },
}
</script>

<style></style>
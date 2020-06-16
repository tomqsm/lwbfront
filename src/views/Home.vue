<template>
  <div class="home">
    <!-- <HelloWorld msg=""></HelloWorld> -->
    <HomeCards/>
    <!-- <Carousel/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import LayoutDefault from "./../layouts/LayoutDefault.vue";
// import HelloWorld from "@/components/HelloWorld.vue";
// import Carousel from "@/components/Carousel.vue";
import HomeCards from "@/components/HomeCards.vue";
// import Radio from "@/components/Radio.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld, 
    // Carousel,
    HomeCards
    // Radio
  },
  created() {
    this.$emit("update:layout", {
      layout: LayoutDefault,
      title: this.$t("homePage.title")
    });
  }
};
</script>
<i18n>
{
  "en": {
    "badgeImageLabel": "LinkedIn badge image.",
    "intro": "<b>letsweb.biz - Tomasz Kuśmierczyk</b> self-employment and freelanced consulting"
  },
  "pl": {
    "badgeImageLabel": "Obraz wizytówki LinkedIn.",
    "intro": "<b>letsweb.biz - Tomasz Kuśmierczyk</b> indywidualna działalność gospodarcza"
  }
}
</i18n>
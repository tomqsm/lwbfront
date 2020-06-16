<template>
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      background="#ababab"
      img-width="1024"
      img-height="400"
    >
      <b-carousel-slide
        v-bind:caption="$t('carousel.slide1.caption')"
        img-blank
        :img-alt="$t('carousel.slide1.caption')"
        background="DODGERBLUE"
        :text="this.$t('carousel.slide1.text1')" img-top
      />
      <b-carousel-slide
        v-bind:caption="$t('carousel.slide2.caption')"
        img-blank
        :img-alt="$t('carousel.slide2.caption')"
        background="darkorange"
        :text="this.$t('carousel.slide2.text1')"
      />
    </b-carousel>
</template>

<script>
export default {};
</script>

<style scoped>
.slidetext {
  font-size: large;
}
</style>
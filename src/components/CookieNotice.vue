<template>
  <div>
    <b-alert
      v-model="showBottom"
      class="position-fixed fixed-bottom m-0 rounded-0"
      style="z-index: 2000;"
      variant="info"
      dismissible
    >We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.</b-alert>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showBottom: true
    };
  },
  watch: {
    showBottom: val => {
      if (!val) {
        console.log("closed");
        localStorage.setItem('cookieNoticeClosed', true)
      }
    }
  }
};
</script>

<style>
</style>
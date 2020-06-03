<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import LayoutDefault from '../layouts/LayoutDefault.vue';
export default {
  name: 'About',
  created() {
    this.$emit(`update:layout`, LayoutDefault);
  },
};
</script>
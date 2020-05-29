<template>
  <div class="home">
    <HelloWorld v-for="(value, index) in 4" :key="index" msg="Welcome to Your Vue.js App" />
    <Radio></Radio>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Radio from "@/components/Radio.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Radio
  }
};
</script>

<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App">
      
    </HelloWorld>
    <Radio></Radio>
  </div>
</template>

<script>
// @ is an alias to /src
import LayoutDefault from "./../layouts/LayoutDefault.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Radio from "@/components/Radio.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Radio
  },
  created() {
    this.$emit("update:layout", {layout: LayoutDefault, title: 'Home'});
  }
  // beforeRouteEnter(to, from,next){
  //   console.log('beforeroute home' + to, from)
  //   // next(() => store.dispatch("fetchUsers"));
  // }
};
</script>

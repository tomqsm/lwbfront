<template>
  <component :is="data.layout">
    <template v-slot:navbar>
      <NavBar />
    </template>
    <template v-slot:logobar>
      <h1>{{data.title}}</h1>
    </template>

    <router-view :layout.sync="data" />
  </component>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  name: "App",
  components: {
    NavBar
  },
  data() {
    return {
      data: {
        layout: `div`,
        title: "default"
      }
    };
  },
  created() {
    this.$store.dispatch("tryAutoLogin");
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html {
  line-height: 1.6;
  color: #333;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
}
p {
  &:not(:first-child) {
    margin-top: 1.25em;
  }
}
</style>
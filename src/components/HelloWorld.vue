<template>
  <div v-b-hover="hoverHandler" :class="{hover: hover}">
    <h1>Under construction</h1>
    <p>Hi, being a back-end developer, I am leraning a new skills to become a full-stack developer.</p>
    <p>
      This site you are seeing at present is an initial outline of a Single Page Application undertaken on Vuejs
      and firebase from Google
    </p>
    <p>Best wishes. Tomasz</p>
    <p>Props passed: {{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      hover: false
    };
  },
  methods: {
    hoverHandler(isHovered) {
      if (isHovered) {
        this.hover = true;
      } else {
        this.hover = false;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$itemcolor: whitesmoke;
.hover {
  background-color: $itemcolor;
}
div {
  p {
    &:hover {
      background-color: whitesmoke;
    }
  }
}
</style>

<template>
  <div v-b-hover="hoverHandler" :class="{hover: hover}">
    <p>{{ msg }}</p>
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

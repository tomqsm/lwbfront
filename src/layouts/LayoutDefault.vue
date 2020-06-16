<template>
  <div class="LayoutDefault">
    <header>
      <slot name="navbar"></slot>
    </header>
    <b-container id="logobar">
      <slot name="logobar"></slot>
    </b-container>
    <b-container fluid="sm">
      <main class="layoutDefaultMain">
        <slot />
      </main>
      <footer class="LayoutDefaultFooter">
        <br />
        <hr />
        <slot name="footer">&copy; letsweb.biz {{currentYear}}</slot>
      </footer>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "LayoutDefault",
  components: {},
  data() {
    return {
      user: null
    };
  },
  computed: {
    currentYear: () => {
      return new Date().getFullYear();
    }
  },
  created() {}
};
</script>

<style scoped>
#logobar {
  margin-top: 15px;
}
.layoutDefaultMain {
  padding-top: 15px;
}
</style>

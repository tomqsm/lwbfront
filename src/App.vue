<template>
  <div id="app">
    <NavBar></NavBar>
    <Toggled></Toggled>
    <router-view />
    <b-container class="bv-example-row">
      <b-row>
        <b-col>1 of 3</b-col>
        <b-col>2 of 3</b-col>
        <b-col>3 of 3</b-col>
      </b-row>
    </b-container>
    <CookieNotice></CookieNotice>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar";
import Toggled from "@/components/Toggled";
import CookieNotice from "@/components/CookieNotice";
export default {
  components: {
    NavBar,
    Toggled,
    CookieNotice
  }
};
</script>
<style>
</style>

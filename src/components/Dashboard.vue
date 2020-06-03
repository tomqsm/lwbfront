<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <p>{{email}}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["email"])
  }
};
</script>

<style>
</style>
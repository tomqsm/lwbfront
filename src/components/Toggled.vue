<template>
  <div id="userInfo">
    <b-button variant="outline-primary" @click="toggle">{{ show ? 'Hide' : 'Show' }}</b-button>
    <p v-if="show">User info shown</p>
  </div>
</template>

<script>
// import { reactive } from '@vue/composition-api'
import { useToggle } from "@/functions/toggle";
export default {
  setup() {
    const { show, toggle } = useToggle();

    return {
      show,
      toggle
    };
  }
};
</script>

<style>
</style>
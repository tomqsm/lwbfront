<template>
  <div>
    <h3>Users:</h3>
    <UsersAsyncContent :toEdit="route"></UsersAsyncContent>
  </div>
</template>
<script>
import UsersAsyncContent from "./UsersAsyncContent.vue";
export default {
  name: "Users",
  components: {
    UsersAsyncContent
  },
  computed: {
    route() { return this.$route.params.id }
  },
  beforeRouteEnter(to, from, next) {
    console.log("beforeroute users" + to, from);
    next();
  }
};
</script>
<template>
  <div>
    <UsersAsyncContent :toEdit="route"></UsersAsyncContent>
  </div>
</template>
<script>
import UsersAsyncContent from "../components/UsersAsyncContent";
import LayoutDefault from '../layouts/LayoutDefault.vue';

export default {
  name: "Users",
  components: {
    UsersAsyncContent
  },
  computed: {
    route() {
      return this.$route.params.id;
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log("beforeroute users" + to, from);
    next();
  },
  created() {
    this.$emit(`update:layout`, {layout: LayoutDefault, title: 'Profile'});
  }
};
</script>
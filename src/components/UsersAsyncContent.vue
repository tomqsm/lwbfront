<template>
  <div>
    <div v-for="(item, index) in users" :key="index">
      <UsersAsyncContentItem v-if="item instanceof Object" :item="item" :toEdit="toEdit"></UsersAsyncContentItem>
    </div>
  </div>
</template>

<script>
// import axios from "axios";

import { mapState, mapGetters } from 'vuex';
import UsersAsyncContentItem from '@/components/UsersAsyncContentItem.vue';

export default {
  name: "UsersAsyncContent",
  components: { UsersAsyncContentItem },
  props: {
    toEdit: String
  },
  data() {
    return {
      ...mapGetters(["getusers"])
    };
  },
  computed: {
    ...mapState(["users"])
  },
  created() {
    console.log(`${this.$options.name} component is created.`);
  },
  mounted() {
    console.log(`${this.$options.name} mounted fetching users`);
    this.$store.dispatch("fetchUsers");
    // this.$store.dispatch("removeUser");
  },
  updated() {
    console.log(`${this.$options.name} updated`);
  }
  // watch: {
  //   'users1' : (newValue, oldValue) => {
  //     console.log(`Updating from ${oldValue} to ${newValue}`);
  //   }
  // }
};
</script>
<style scoped>
article {
  text-align: left;
}
</style>
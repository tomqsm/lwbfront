<template>
  <div class="usersAsyncContentItem">
    <article>
      <p :id="item.id">{{item.email}}</p>
      <router-link :to="userEdit">Edit user</router-link>
      <div v-if="isToEdit">
        <p>should be edited</p>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "UsersAsyncContentItem",
  props: {
    item: Object,
    toEdit: String
  },
  computed: {
    isToEdit() {
      return this.item.id === this.toEdit;
    }
  },
  data() {
    return {
      userEdit: {
        name: "UserEditLink",
        params: {
          id: this.item.id
        },
        query: {},
        hash: "#" + this.item.id
      }
    };
  },
  methods: {
    emitToParent(/*event*/) {
      this.$emit("childToParent", this.childMessage);
    }
  }
};
</script>

<style>
</style>
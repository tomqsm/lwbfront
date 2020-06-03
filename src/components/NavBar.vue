<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand to="/" class type="light">letsweb.biz</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link
            tag="b-nav-item"
            :to="{name: 'Home'}"
            active-class="active"
            exact
          >Home</router-link>
          <router-link tag="b-nav-item" :to="{name: 'About'}" active-class="active">About</router-link>
          <router-link tag="b-nav-item" :to="{name: 'Users'}" active-class="active">Users</router-link>
          <router-link
            tag="b-nav-item"
            :to="{name: 'Dashboard'}"
            v-if="isAuthenticated"
            active-class="active"
          >Dashboard</router-link>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right v-if="!isAuthenticated">
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>

            <router-link tag="b-dropdown-item" :to="{name: 'SignUp'}" v-if="!isAuthenticated">SignUp</router-link>
            <router-link tag="b-dropdown-item" :to="{name: 'SignIn'}" v-if="!isAuthenticated">SignIn</router-link>
          </b-nav-item-dropdown>
          <span id="authenticatedUserAvatar">
            <b-avatar v-if="isAuthenticated"></b-avatar>
          </span>
          <b-tooltip target="authenticatedUserAvatar">{{ authUser }}</b-tooltip>
          <b-nav-item @click="logout" v-if="isAuthenticated">Logout</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
    authUser() {
      return this.$store.getters.authUser;
    }
  },
  methods: {
    logout() {
      console.log("trying to logout");
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style scoped>
.active {
  background-color: orange;
}
/* RESPONSIVE ARROWS */
[class^="arr-"] {
  border: solid currentColor;
  border-width: 0 0.3em 0.3em 0;
  display: inline-block;
  padding: 0.1em;
}
.arr-right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}
.arr-left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}
.arr-up {
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
}
.arr-down {
  transform: rotate(30deg);
  -webkit-transform: rotate(30deg);
}
</style>
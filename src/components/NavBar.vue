<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand to="/" class type="light">
        <img src="/img/logo.svg" style="width: 30px; margin-right: 5px;" alt="logo" />letsweb.biz
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link
            tag="b-nav-item"
            :to="{name: 'Home'}"
            active-class="active"
            exact
          >{{this.$t("homePage.title")}}</router-link>
          <router-link
            tag="b-nav-item"
            :to="{name: 'About'}"
            active-class="active"
          >{{this.$t("aboutPage.title")}}</router-link>
          <!-- <router-link tag="b-nav-item" :to="{name: 'Users'}" active-class="active">Users</router-link> -->
          <router-link
            tag="b-nav-item"
            :to="{name: 'Dashboard'}"
            v-if="isAuthenticated"
            active-class="active"
          >Dashboard</router-link>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right v-if="false && !isAuthenticated">
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>

            <router-link tag="b-dropdown-item" :to="{name: 'SignUp'}" v-if="!isAuthenticated">SignUp</router-link>
          </b-nav-item-dropdown>
          <router-link
            tag="b-dropdown-item"
            :to="{name: 'signin'}"
            v-if="!isAuthenticated"
            active-class="active"
          >{{this.$t('signin.title')}}</router-link>
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
  text-decoration: overline;
  font-weight: bolder;
}
</style>
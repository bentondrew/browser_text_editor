<template>
  <div id="nav">
    <div id="home_link">
      <router-link to="/" tag="img" src="/mini_logo.png"></router-link>
    </div>
    <div id="session_links">
      <router-link to="/login" v-show="!sessionAlive">Login</router-link>
      <router-link to="/account" v-show="sessionAlive">Account</router-link>
      <button @click="logout" v-show="sessionAlive">Logout</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations({ "stopSession" }),
    logout: () => {
      stopSession()
      this.$route.router.push("home")
    }
  },
  computed: {
    ...mapGetters(["sessionAlive"])
  }
};
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

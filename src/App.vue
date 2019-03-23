<template>
  <div id="app">
    <div id="nav">
      <div id="home_link">
        <router-link to="/" tag="img" src="/mini_logo.png"></router-link>
      </div>
      <div id="session_links">
        <router-link to="/login" v-show="!sessionAlive()">Login</router-link>
        <router-link to="/account" v-show="sessionAlive()">Account</router-link>
        <button @click="logout" v-show="sessionAlive()">Logout</button>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    logout: () => {
      this.$store.mutations.session.commit({ type: "stopSession" });
    }
  },
  computed: () => {
    sessionAlive: {
      return this.$store.getters.session.sessionAlive;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
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

<template>
  <div id="nav">
    <div id="home_link">
      <router-link to="/" tag="img" src="/mini_logo.png"></router-link>
    </div>
    <div id="session_links">
      <router-link to="/login" v-show="!sessionAlive">Login</router-link>
      <router-link to="/account" v-show="sessionAlive">
        {{ getFullName }}
      </router-link>
      <button @click.self.stop="logout" v-show="sessionAlive">Logout</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations("session", ["stopSession"]),
    logout() {
      this.stopSession();
      this.$router.push({ name: "home" });
    }
  },
  computed: {
    ...mapGetters("session", ["sessionAlive", "getFullName"])
  }
};
</script>

<style scoped>
#nav {
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  align-content: space-around;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding-right: 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#home_link {
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  align-content: flex-start;
}

#session_links {
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  align-content: flex-end;
}
</style>

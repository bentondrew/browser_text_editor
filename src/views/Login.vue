<template>
  <div class="login">
    <h1>This is the login page</h1>
    <button @click="login">Login</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations({ "startSession" }),
    login: () => {
      startSession()
      this.$route.router.push("home")
    }
  }
};
</script>

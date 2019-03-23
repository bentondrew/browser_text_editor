<template>
  <div class="login">
    <h1>This is the login page</h1>
    <button @click="login">Login</button>
  </div>
</template>

<script>
export default {
  methods: {
    login: () => {
        this.$store.mutations.session.commit({ type: "startSession" });
    }
  }
};
</script>

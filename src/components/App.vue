<template>
  <div id="app">
    <NavBar />
    <FlashBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import FlashBar from "./FlashBar.vue";
export default {
  components: { NavBar, FlashBar }
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
</style>

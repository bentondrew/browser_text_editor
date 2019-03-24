<template>
  <div class="welcome">
    <img alt="Text Editor logo" src="../assets/logo.png" />
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  props: {
    msg: String
  }
};
</script>

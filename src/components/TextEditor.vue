<template>
  <div class="text_editor">
    <h1>This is the text editor page!</h1>
  </div>
</template>

<script>
export default {
  name: "TextEditor",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>

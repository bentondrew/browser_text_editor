<template>
  <div class="text_editor">
    <form class="editor">
      <p>
        <label for="fileName">File Name:</label>
        <input id="fileName" v-model="fileName" placeholder="example.txt">
      </p>
      <p>
        <label for="fileContent">File Content:</label>
        <textarea id="fileContent" v-model="fileContent"></textarea>
      </p>
      <p>
        <input type="submit" value="Save">
      </p>
    </form>
    <hr>
    <div>
      <h1>{{ fileName }}</h1>
      <h2>{{ fileContent }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextEditor",
  data: {
    fileName: null,
    fileContent: null,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

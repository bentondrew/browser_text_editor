<template>
  <div class="text_editor">
    <form class="editor" @submit.self.stop.prevent="onSave">
      <p>
        <label for="fileName">File Name:</label>
        <input id="fileName" v-model="file.name" placeholder="example.txt" />
      </p>
      <p>
        <label for="fileContent">File Content:</label>
        <textarea
          id="fileContent"
          v-model="file.content"
          placeholder="Enter file contents."
        ></textarea>
      </p>
      <p>
        <input type="submit" value="Save" />
      </p>
    </form>
    <div id="localFile">
      <hr />
      <h1>{{ file.name }}</h1>
      <h2>{{ file.content }}</h2>
    </div>
    <div id="savedFile" v-show="showSaved">
      <hr />
      <h1>{{ savedFile(file.name).name }}</h1>
      <h2>{{ savedFile(file.name).content }}</h2>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "TextEditor",
  data() {
    return {
      file: {
        name: null,
        content: null
      }
    };
  },
  methods: {
    ...mapMutations("files", ["addFile", "updateFileContent"]),
    onSave() {
      if (this.fileExist(this.file.name)) {
        this.updateFileContent(this.file);
      } else {
        this.addFile(this.file);
      }
      this.flash("File saved!", "success", { timeout: 3000 });
    },
    showSaved() {
      if (this.fileExist(this.file.name)) {
        return true;
      } else {
        return false;
      }
    },
    savedFile() {
      var file = this.getFile(this.file.name);
      if (file) {
        return file;
      } else {
        return { name: "", content: "" };
      }
    }
  },
  computed: {
    ...mapGetters("files", ["fileExist", "getFile"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

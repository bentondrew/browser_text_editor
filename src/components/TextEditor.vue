<template>
  <div class="text_editor">
    <form class="editor" @submit.self.stop.prevent="onSave">
      <p>
        <label for="fileName">File Name:</label>
        <input id="fileName" v-model="fileName" placeholder="example.txt" />
      </p>
      <p>
        <label for="fileContent">File Content:</label>
        <textarea id="fileContent" v-model="fileContent"></textarea>
      </p>
      <p>
        <input type="submit" value="Save" />
      </p>
    </form>
    <div id="savedFile" v-show="showSaved">
      <hr />
      <h1>{{ savedFile(fileName).name }}</h1>
      <h2>{{ savedFile(fileName).content }}</h2>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "TextEditor",
  data() {
    return {
      fileName: null,
      fileContent: null
    };
  },
  methods: {
    ...mapMutations("files", ["addFile", "updateFileContent"]),
    onSave() {
      if (this.fileExist(this.fileName)) {
        this.updateFileContent(this.fileName, this.fileContent);
      } else {
        this.addFile(this.fileName, this.fileContent);
      }
      this.flash("File saved!", "success", { timeout: 3000 });
    },
    showSaved() {
      if (this.fileExist(this.fileName)) {
        return true;
      } else {
        return false;
      }
    },
    savedFile() {
      var file = this.getFile(this.fileName);
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

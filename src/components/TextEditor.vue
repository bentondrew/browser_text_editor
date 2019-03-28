<template>
  <div id="textEditor">
    <div id="fileLoader">
      <div id="loaderTitle">Saved Files</div>
      <hr />
      <ul id="fileList">
        <li id="fileRef" v-for="fileName in getFileNames" :key="fileName">
          <div id="fileId">{{ fileName }}</div>
          <button id="fileLoad" @click.self.stop.prevent="loadFile(fileName)">
            Load
          </button>
        </li>
      </ul>
    </div>
    <div id="fileEditing">
      <form id="editor" @submit.self.stop.prevent="onSave">
        <div id="fileActions">
          <input type="submit" value="Save" />
          <button @click.self.stop.prevent="clearFile">Clear</button>
        </div>
        <div id="fileNameSection">
          <label for="fileName">File Name:</label>
          <input id="fileName" v-model="file.name" placeholder="example.txt" />
        </div>
        <div id="fileContentSection">
          <label for="fileContent">File Content:</label>
          <textarea
            id="fileContent"
            v-model="file.content"
            placeholder="Enter file contents."
          ></textarea>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TextEditor",
  data() {
    return {
      file: {
        name: null,
        content: null
      },
      responseNeeded: false
    };
  },
  methods: {
    ...mapActions("files", ["addFile", "updateFileContent"]),
    onSave() {
      var payload = { "userName": this.getUsername, "inFile": this.file };
      if (this.fileExist(this.file.name)) {
        this.updateFileContent(payload);
      } else {
        this.addFile(payload);
      }
    },
    showSaved() {
      if (this.fileExist(this.file.name)) {
        return true;
      } else {
        return false;
      }
    },
    savedFile() {
      var sFile = this.getFile(this.file.name);
      if (sFile) {
        return sFile;
      } else {
        return { name: "", content: "" };
      }
    },
    clearFile() {
      this.file.name = null;
      this.file.content = null;
    },
    loadFile(fileName) {
      var lFile = this.getFile(fileName);
      if (lFile) {
        this.file.name = lFile.name;
        this.file.content = lFile.content;
      } else {
        this.flash(
          "Unable to load file " + fileName + " as it was not found.",
          "error",
          { timeout: 3000 }
        );
      }
    }
  },
  computed: {
    ...mapGetters("files", ["fileExist", "getFile", "getFileNames"]),
    ...mapGetters("session", ["getUsername"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#textEditor {
  position: relative;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

#fileLoader {
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid black;
}

#fileList {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
}

#fileRef {
  display: flex;
}

#fileId {
  padding: 5px;
}

#fileEditing {
  padding: 5px;
  margin: 1px;
}
</style>

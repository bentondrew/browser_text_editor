const state = {
  files: []
};

const getters = {
  getFileNames: state => {
    if (state.files) {
      return state.files.map(file => file.name);
    } else {
      return state.files;
    }
  },
  getFile: state => fileName => {
    var file = state.files.find(file => file.name === fileName);
    if (file) {
      console.log("File store retrieve file " + file.name);
      console.log("Content: " + file.content);
    } else {
      console.log("File store unable to retrieve file.");
    }
    return file;
  },
  fileExist: state => fileName => {
    if (state.files.find(file => file.name === fileName)) {
      return true;
    } else {
      return false;
    }
  }
};

const actions = {};

const mutations = {
  addFile: (state, inFile) => {
    console.log("File store add file " + inFile.name);
    console.log("Content: " + inFile.content);
    state.files.push({ name: inFile.name, content: inFile.content });
  },
  updateFileContent: (state, inFile) => {
    var fileIndex = state.files.findIndex(file => file.name === inFile.name);
    if (fileIndex !== -1) {
      console.log("File store update file " + inFile.name);
      console.log("Content: " + inFile.content);
      state.files[fileIndex].content = inFile.content;
    } else {
      console.log("File store unable to find file to update.");
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

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
      console.log("File store retrieve file " + fileName);
      console.log("Content: " + fileContent);
    } else {
      console.log("File store unable to retrieve file.");
    }
    return state.files.find(file => file.name === fileName);
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
  addFile: (state, fileName, fileContent) => {
    console.log("File store add file " + fileName);
    console.log("Content: " + fileContent);
    state.files.push({ name: fileName, content: fileContent });
  },
  updateFileContent: (state, fileName, fileContent) => {
    var fileIndex = state.files.findIndex(file => file.fileName === fileName);
    if (fileIndex) {
      console.log("File store update file " + fileName);
      console.log("Content: " + fileContent);
      state.files[fileIndex].content = fileContent;
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

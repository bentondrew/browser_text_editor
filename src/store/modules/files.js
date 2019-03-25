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
    state.files.push({ name: fileName, content: fileContent });
  },
  updateFileContent: (state, fileName, fileContent) => {
    var fileIndex = state.files.findIndex(file => file.fileName === fileName);
    if (fileIndex) {
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

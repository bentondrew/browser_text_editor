const state = {
  files = []
};

const getters = {
  getFileNames: state => {
    if (files) {
      return state.files.map( file => file.name );
    } else {
      return files;
    }
  },
  getFile: (state) => (fileName) => {
    return state.files.find( file => file.name === fileName );
  },
  fileExist: (state) => (fileName) => {
    file = state.files.find( file => file.name === fileName );
    if (file) { return true; } else { return false; }
  }
};

const actions = {};

const mutations = {
  addFile: (state, fileName, fileContent) => {
    state.files.push({ name: fileName, content: fileContent });
  },
  updateFileContent: (state, fileName, fileContent) => {
    fileIndex = state.files.findIndex( file => file.fileName === fileName );
    if (fileIndex) { state.files[fileIndex].content = fileContent }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

import api from "../../api";

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

const actions = {
  addFile({ commit }, payload) {
    api.addUserFile(payload.userName, payload.inFile).then(resp => {
      commit({
        type: "addFile",
        inFile: resp.body
      });
    });
  },
  updateFileContent({ commit }, payload) {
    api.updateUserFile(payload.userName, payload.inFile).then(resp => {
      commit({
        type: "updateFileContent",
        inFile: resp.body
      });
    });
  }
};

const mutations = {
  addFile: (state, inFile) => {
    state.files.push({ name: inFile.name, content: inFile.content });
  },
  updateFileContent: (state, inFile) => {
    var fileIndex = state.files.findIndex(file => file.name === inFile.name);
    if (fileIndex !== -1) {
      state.files[fileIndex].content = inFile.content;
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

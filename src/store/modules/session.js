const state = {
  alive: false,
  userInfo: {
    username: "",
    firstName: "",
    lastName: ""
  }
};

const getters = {
  sessionAlive: state => {
    return state.alive;
  }
  getUserInfo: state => {
    return state.userInfo;
  },
  getUsername: state => {
    return state.userInfo.username;
  },
  getFullName: state => {
    return state.userInfo.firstName + " " + state.userInfo.lastName;
  }
};

const actions = {};

const mutations = {
  startSession: state => {
    state.alive = true;
    state.userInfo.username = "bdrew";
    state.userInfo.firstName = "Benton";
    state.userInfo.lastName = "Drew";
  },
  stopSession: state => {
    state.alive = false;
    state.userInfo.username = "";
    state.userInfo.firstName = "";
    state.userInfo.lastName = "";
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

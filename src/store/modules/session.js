const state = {
  alive: false
};

const getters = {
  sessionAlive: state => {
    return state.alive;
  }
};

const actions = {};

const mutations = {
  startSession: state => {
    state.alive = true;
  },
  stopSession: state => {
    state.alive = false;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

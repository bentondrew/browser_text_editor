import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const sessionModule = {
    state: { alive: false},
    getters: {
      sessionAlive: state => {
        return state.alive
      }
    },
    mutations: {
        startSession: state => {
            state.alive = true
        },
        stopSession: state => {
            state.alive = false
        }
    },
    actions: {}
}

export default new Vuex.Store({
  modules: {
    session: sessionModule
  }
});

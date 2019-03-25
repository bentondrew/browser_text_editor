import Vue from "vue";
import Vuex from "vuex";
import session from "./modules/session";
import files from "./modules/files";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    session,
    files
  }
});

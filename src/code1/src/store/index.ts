import ui from "./modules/ui";
import Vue from "vue";
import Vuex from "vuex";
import propertyModule from "./property/index";
Vue.use(Vuex);

export class State {}

export default new Vuex.Store({
  modules: {
    ui,
  },
  state: {
    ...propertyModule.state,
  },
  mutations: {
    ...propertyModule.mutations,
  },
  actions: {
    ...propertyModule.actions,
  },
});

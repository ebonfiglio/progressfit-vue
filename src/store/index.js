import Vue from "vue";
import Vuex from "vuex";
import appUserService from "../services/AppUserService";
import { GET_USER } from "../store/mutation-types";
Vue.use(Vuex);

const state = () => ({
  user: {},
  userSettings: {},
  Tos: String
});

const mutations = {
  [GET_USER](state, user) {
    state.user = user;
  },
};
const actions = {
  async addUserAction({ commit }, user) {
    const addedUser = await appUserService.create(user);
    commit(GET_USER, addedUser);
  },
  async updateUserAction({ commit }, user) {
    const updatedUser = await appUserService.update(user);
    commit(GET_USER, updatedUser);
  },
};
export default new Vuex.Store({
  state,
  mutations,
  actions,
});

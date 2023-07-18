import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const authModule = {
  namespaced: true,
  state() {
    return {
      isAuth: false,
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
};

export default authModule;

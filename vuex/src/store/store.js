import { createStore } from 'vuex';
import authModule from './auth';
import counterModule from './counter';

const store = createStore({
  modules: {
    counter: counterModule,
    auth: authModule,
  },
});

export default store;

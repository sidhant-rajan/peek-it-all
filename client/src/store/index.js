import Vue from "vue";
import Vuex from "vuex";
import user from './modules/user';
import createLogger from "vuex/dist/logger";

// Using vuex for state management
Vue.use(Vuex);

// To differentiate between production and development stage
const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    user
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});

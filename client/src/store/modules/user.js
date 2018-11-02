import UserService from "../../services/User";

const state = {
  username: "",
  email_id: "",
  password: ""
};

const getters = {};

const actions = {
  registerUser(credentials) {
    UserService.registerUser(credentials).then(
      function(resp) {
        console.log(resp);
        //this.$router.push({})
      },
      function(resp) {
        console.log(resp);
      }
    );
  }
};

const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

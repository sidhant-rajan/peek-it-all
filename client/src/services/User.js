import Api from "./Api";

export default {
  registerUser(credentials) {
    return Api().post("user/register", credentials);
  }
};

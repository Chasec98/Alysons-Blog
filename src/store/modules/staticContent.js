import firebase from "../../plugins/firebase";
const db = firebase.firestore();

const state = () => ({
  homepage: {}
});

const getters = {};

const actions = {
  getHomepage({ commit }) {
    db.collection("static")
      .doc("master")
      .get()
      .then(res => {
        commit("setHomepage", res);
      });
  }
};

const mutations = {
  setHomepage(state, data) {
    state.homepage = data;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

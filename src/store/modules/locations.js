import firebase from "../../plugins/firebase";
const db = firebase.firestore();

const state = () => ({
  all: []
});

const actions = {
  getLocations({ commit }) {
    db.collection("locations")
      .where("visible", "==", true)
      .get()
      .then(res => {
        commit(
          "setLocations",
          res.docs.map(doc => doc.data())
        );
      });
  }
};

const getters = {};

const mutations = {
  setLocations(state, locations) {
    state.all = locations;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

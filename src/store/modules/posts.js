import firebase from "../../plugins/firebase";
const db = firebase.firestore();

const state = () => ({
  all: [],
  page: 1,
  count: 10,
  total: 0,
  locations: []
});

const actions = {
  getPosts({ commit }) {
    db.collection("posts")
      .where("visible", "==", true)
      .orderBy("datetime", "desc")
      .limit(10)
      .get()
      .then(res => {
        commit(
          "setPosts",
          res.docs.map(doc => {
            let ret = doc.data()
            ret.id = doc.id
            return ret
          })
        );
      });
    db.collection("posts")
      .get()
      .then(res => {
        commit("setPostCount", res.size);
      });
  },
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
  setPosts(state, posts) {
    state.all = posts
  },
  setPostCount(state, postCount) {
    state.total = postCount;
  },
  setLocations(state, locations) {
    state.locations = locations;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

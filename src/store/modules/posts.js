import firebase from "../../plugins/firebase";
const db = firebase.firestore();

const state = () => ({
  all: [],
  page: 1,
  count: 10,
  total: 0
});

const actions = {
  getPosts({ commit, state }) {
    db.collection("posts")
      .where("visible", "==", true)
      .orderBy("datetime", "desc")
      .limit(state.count).startAt((state.count*state.page - state.count).toString())
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
  }
};

const getters = {};

const mutations = {
  setPosts(state, posts) {
    state.all = posts
  },
  setPostCount(state, postCount) {
    state.total = postCount;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

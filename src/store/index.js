import Vue from "vue";
import Vuex from "vuex";
import staticContent from "./modules/staticContent";
import posts from "./modules/posts";
import locations from "./modules/locations"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    staticContent,
    posts,
    locations
  }
});

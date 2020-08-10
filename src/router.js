import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import Posts from "./views/Posts.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
import Destination from "./views/Destination.vue";

Vue.use(Router);

const r =  new Router({
  routes: [
    {
      path: "/",
      name: "index",
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/posts",
      name: "posts",
      components: { default: Posts, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/destinations",
      name: "destinations",
      components: {
        default: Destination,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

//Google Analytics Page tracking
r.afterEach((to) => {
  gtag('config', 'G-SP9Y5Z5NNG', {
    page_path: to.fullPath,
    send_page_view: true,
  });
});

export default r;
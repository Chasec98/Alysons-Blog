import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index";
import Posts from "./views/Posts";
import Post from "./views/Post";
import MainNavbar from "./layout/MainNavbar";
import MainFooter from "./layout/MainFooter";
import Destination from "./views/Destination";

Vue.use(Router);

const r = new Router({
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
      path: "/post/:id",
      name: "post",
      components: { default: Post, header: MainNavbar, footer: MainFooter },
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
r.afterEach(to => {
  gtag("config", "G-SP9Y5Z5NNG", {
    page_path: to.fullPath,
    send_page_view: true
  });
});

export default r;

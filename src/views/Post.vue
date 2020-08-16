<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <div class="brand">
              <h1>{{post.title}}</h1>
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised posts">
      <div class="section section-basic">
          <post :post="post" />
      </div>
    </div>
  </div>
</template>
<script>
import post from "@/components/post.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "index",
  bodyClass: "index-page",
  components: {
    post
  },
  props: {
    image: {
      type: String,
      default: require("@/assets/img/top-post.jpg")
    }
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    },
    post() {
        return this.$store.state.posts.all.filter(e => e.id == this.$route.params.id)[0]
    }
  }
};
</script>
<style>
.posts {
  padding-top: 50px;
}
</style>
<!--
post() {
        return this.$store.state.posts.all.filter(e => e.id == this.$route.params.id)[0]
    }
-->
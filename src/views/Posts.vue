<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <div class="brand">
              <h1>Posts</h1>
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised posts">
      <div class="section section-basic">
        <div v-for="data in posts.all" :key="data.id">
          <snippit :post="data" />
        </div>
        <v-pagination
          color="#3c7de6"
          :value="$store.state.posts.page"
          :length="numPages"
          circle
        ></v-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import snippit from "@/components/snippit.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "index",
  bodyClass: "index-page",
  components: {
    snippit
  },
  props: {
    image: {
      type: String,
      default: "https://firebasestorage.googleapis.com/v0/b/alysons-blog.appspot.com/o/static_content%2Ftop-post.jpg?alt=media&token=de45a2df-4436-4c64-8558-86fce0fd7a7b"
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
    numPages() {
      return Math.ceil(this.$store.state.posts.total / 10);
    },
    ...mapState(["posts"])
  },
  created() {
    this.$store.dispatch("posts/getPosts");
  }
};
</script>
<style>
.posts {
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>
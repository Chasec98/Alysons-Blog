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
    <div class="main main-raised">
      <div class="section section-basic">
        <div v-for="data in posts.all" :key="data.id">
        <post :post="data" />
        </div>
        <v-pagination></v-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import post from "@/components/post.vue";
import {mapState, mapActions, mapGetters} from 'vuex'
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
    return {
    };
  },
  methods: {
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    },
    ...mapState(['posts'])
  },
  created(){
    this.$store.dispatch('posts/getPosts')
  }
};
</script>

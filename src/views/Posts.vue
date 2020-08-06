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
        <div v-for="data in posts" :key="data.id">
        <post :post="data" />
        </div>
        <v-pagination></v-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import post from "@/components/post.vue";
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
      posts: [
        {
          id: 1,
          title: "test title",
          body: "test body",
          tags: [
            "travel"
          ]
        },
        {
          id: 2,
          title: "test title",
          body: "test body",
          tags: [
            "vegan",
            "travel"
          ]
        }
      ]
    };
  },
  methods: {},
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    }
  }
};
</script>

<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <div class="brand">
              <h1>{{ staticContent.homepage.title }}</h1>
              <h3>
                {{ staticContent.homepage.subtitle }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section section-basic">
        <div
          class="container text-center"
          v-for="data in staticContent.homepage.body"
          :key="data.title"
        >
          <div class="title">
            <h1>{{ data.title }}</h1>
          </div>
          <p>
            {{ data.body }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "index",
  bodyClass: "index-page",
  props: {
    image: {
      type: String,
      default: "https://firebasestorage.googleapis.com/v0/b/alysons-blog.appspot.com/o/static_content%2Ftop.jpg?alt=media&token=89a26053-f278-4c8a-ac0e-557d6cb46343"
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
    ...mapState(["staticContent"])
  },
  created() {
    this.$store.dispatch("staticContent/getHomepage");
  }
};
</script>

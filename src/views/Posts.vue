<template>
  <div class="wrapper">
    <div class="page-header header-filter">
    </div>
    <div class="main main-raised">
        <div class="section section-basic">

        </div>
  </div>
  </div>
</template>
<script>

export default {
  name: "index",
  bodyClass: "index-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/top.jpg")
    }
  },
  data() {
    return {
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


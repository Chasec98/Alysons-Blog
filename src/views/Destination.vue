<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <div class="brand">
              <h1>Destinations</h1>
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <GmapMap
        id="map"
        class="section section-basic"
        :center="{ lat: 35, lng: -85 }"
        :zoom="5"
        :options="{
          mapTypeControl: false,
          streetViewControl: false
        }"
        map-type-id="terrain"
      >
        <GmapMarker
          :key="data.id"
          v-for="data in posts.all"
          :position="convertLocation(data.location)"
          :clickable="true"
          :draggable="false"
        />
      </GmapMap>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  //maps api key: AIzaSyDv2iOcgUp2L1yKsqJdcQjBnEs2idJkGzA
  //restrict access to this key in prod
  name: "index",
  bodyClass: "index-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/top-destination.jpg")
    }
  },
  data() {
    return {
      map: null
    };
  },
  methods: {
    convertLocation(location) {
      return {
        lat: location["ff"],
        lng: location["df"]
      };
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    },
    ...mapState(["posts"])
  },
  created() {
    this.$store.dispatch("posts/getPosts");
  }
};
</script>
<style>
#map {
  height: 800px;
}
</style>

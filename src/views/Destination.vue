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
          v-for="data in locations.all"
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
  name: "index",
  bodyClass: "index-page",
  props: {
    image: {
      type: String,
      default: "https://firebasestorage.googleapis.com/v0/b/alysons-blog.appspot.com/o/static_content%2Ftop-destination.jpg?alt=media&token=befb4501-2fa1-4817-9fba-8a0c0e93a200"
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
    ...mapState(["locations"])
  },
  created() {
    this.$store.dispatch("locations/getLocations");
  }
};
</script>
<style>
#map {
  height: 800px;
}
</style>

<template>
  <v-container class="container">
    <div class="badge-bar">
      <span v-if="hasTag('vegan')" class="badge badge-success">Vegan</span>
      <span v-if="hasTag('travel')" class="badge badge-warning">Travel</span>
      <span v-if="hasTag('gv')" class="badge badge-info">Grand Valley</span>
    </div>
    <v-carousel v-if="post.pictures" continuous cycle hide-delimiter-background :show-arrows="false">
      <v-carousel-item v-for="picture in post.pictures" :key="picture" :src="picture">
      </v-carousel-item>
    </v-carousel>
    <div class="fullBody">
    <p
        v-for="paragraph in post.body"
        :key="paragraph"
        class="bodyText"
      >
        {{ paragraph }}
      </p>
    </div>
  </v-container>
</template>

<script>
export default {
  props: {
    post: {
      type: Object
    }
  },
  data() {
    return {};
  },
  methods: {
    hasTag(tagName) {
      return this.post.tags.includes(tagName);
    },
    convertDate(datetime) {
      const dateT = new Date(datetime.toDate());
      return (
        dateT.toLocaleString("default", { month: "long" }) +
        " " +
        dateT.getDate() +
        ", " +
        dateT.getFullYear()
      );
    },
    showMoreButton(body) {
      return body.length > 2;
    },
    showMore(post) {
      post.showMore = true;
    }
  }
};
</script>
<style>
.bodyText {
  text-indent: 5%;
}
.fullBody {
  padding-top: 5%;
  padding-bottom: 5%;
}
</style>

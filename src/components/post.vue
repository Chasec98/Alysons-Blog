<template>
  <v-container class="container">
    <h2>{{ post.title }}</h2>
    <h4>{{ convertDate(post.datetime) }}</h4>
    <div class="badge-bar">
      <span v-if="hasTag('vegan')" class="badge badge-success">Vegan</span>
      <span v-if="hasTag('travel')" class="badge badge-warning">Travel</span>
      <span v-if="hasTag('gv')" class="badge badge-info">Grand Valley</span>
    </div>
    <p
      v-for="paragraph in post.body.slice(0, 2)"
      :key="paragraph"
      class="bodyText"
    >
      {{ paragraph }}
    </p>
    <md-button
      v-show="!post.showMore"
      v-if="showMoreButton(post.body)"
      class="md-simple"
      @click="showMore(post)"
      >Show more</md-button
    >
    <div v-if="post.showMore == true">
      <p
        v-for="paragraph in post.body.slice(2)"
        :key="paragraph"
        class="bodyText"
      >
        {{ paragraph }}
      </p>
    </div>
    <hr />
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
</style>

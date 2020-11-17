<template>
    <v-container class="container">
    <h2>{{ post.title }}</h2>
    <h4>{{ convertDate(post.datetime) }}</h4>
    <div class="badge-bar">
      <span v-if="hasTag('vegan')" class="badge badge-success">Vegan</span>
      <span v-if="hasTag('travel')" class="badge badge-warning">Travel</span>
      <span v-if="hasTag('gv')" class="badge badge-info">Grand Valley</span>
    </div>
    <p class="bodyText">
        {{getSnippit(post.body)}}
      </p>
    <md-button
      v-if="showMoreButton(post.body)"
      class="md-simple"
      :to="'/post/'+post.id"
      @click="showMore(post)"
      >Continue Reading</md-button
    >
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
        getSnippit(body) {
            if (body[0].split(" ").length > 250){
                return body[0].split(" ").splice(0,250).join(" ")
            }
            else {
                return body[0]
            }
        },
        showMoreButton(body) {
            return body.length > 1 || body[0].split(" ").length > 250;
        },
    }
}
</script>
<style>
.bodyText {
  text-indent: 5%;
}
</style>
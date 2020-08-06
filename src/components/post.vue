<template>
  <v-container class="container">
    <h2>{{ post.title }}</h2>
    <h4>January 1, 2020</h4>
    <div class="badge-bar">
      <span v-if="hasTag('vegan')" class="badge badge-success">Vegan</span>
      <span v-if="hasTag('travel')" class="badge badge-warning">Travel</span>
    </div>
    <h4>
      {{ post.body }}
    </h4>
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
          return this.post.tags.includes(tagName)
      }
  }
};
</script>

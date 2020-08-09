<template>
  <v-container class="container">
    <h2>{{ post.title }}</h2>
    <h4>{{convertDate(post.datetime)}}</h4>
    <div class="badge-bar">
      <span v-if="hasTag('vegan')" class="badge badge-success">Vegan</span>
      <span v-if="hasTag('travel')" class="badge badge-warning">Travel</span>
      <span v-if="hasTag('gv')" class="badge badge-info">Grand Valley</span>
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
      },
      convertDate(datetime) {
        const dateT = new Date(datetime.toDate())
        return dateT.toLocaleString('default', { month: 'long' }) + " " + dateT.getDate() + ", " +  dateT.getFullYear()
      }
  }
};
</script>

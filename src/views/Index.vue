<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <div class="brand">
              <h1>Explore, Dream, Discover</h1>
              <h3>
                Find the inspiration to create the life you have always dreamed
                of right here, with your guide to all adventure activities,
                outdoor recreation, and plant-based eating for wherever you
                yearn to wander next!
              </h3>
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section section-basic">
        <div class="container text-center">
          <div class="title">
            <h1>This is real, this is me</h1>
            </div>
            <p>
              Hi, Y’all! Aly here, a complete goofball from Toledo, Ohio, who
              moved away and fell in love with the gorgeous state of Michigan. I
              attend school in Grand Rapids and live a life full of crazy
              adventures, delicious plant-based food, and seizing every moment.
              I study the science of politics (aka, Political Science) and
              Women, Gender, and Sexuality Studies at Grand Valley State
              University. With all my extra time, I also find myself minoring in
              the snooze fest that is the Stock Market - I mean Economics
              (actually, I find such pretty interesting). Daily, you will see me
              enjoying my position on the Executive Council of my sorority,
              being a passionate pre-law student, and probably spending way too
              much time at the gym. Most importantly, after 18 years of wishing
              I was always somewhere I was not, and two years creating my world
              to be the one I had always dreamed of, I happily report I am
              finally at a point in my life where I want to help others live
              this rewarding and unbelievable lifestyle. I am a traveler, proud
              owner of a gorgeous set of skis, a white water kayaker, an
              adrenaline fanatic, and possess a fabulous eye for finding vegan
              food wherever I go (I am looking at you, Tennessee). To see all of
              my adventure, travel, and yummy plant-based eating advice, look no
              further than this blog. Also, follow me on instagram to be updated
              every time I upload a new blog post! This is real, this is me: a
              woman who was sick of waiting for life to happen, and decided to
              go out there and make my dreams my reality.
            </p>
        </div>
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
    return {};
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

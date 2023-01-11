<template>
  <div id="app">
    <div v-if="loading">Loading content</div>
    <div id="title">
      <img src="logo.png" />
      <h1>Vue.js Project 2</h1>
    </div>
    <!-- Content here-->
    <router-view
      v-bind:genres="genres"
      v-bind:movies="movies"
      v-bind:day="day"
      v-bind:times="times"
      v-on:check-filter="checkFilter"
      v-on:day-selected="selectedDay"
      v-slot="{ Component }"
    >
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import axios from "axios";
import dayjs from "dayjs";

export default {
  name: "App",
  // components: {
  //   HelloWorld
  // },
  data: () => ({
    genres: [],
    times: [],
    movies: [],
    day: dayjs(),
    loading: false
  }),
  methods: {
    checkFilter(checked, title, group) {
      if (checked) {
        this[group].push(title);
      } else {
        this[group] = this[group].filter(item => item !== title);
      }
    },
    selectedDay(day) {
      this.day = day;
    }
  },
  async created() {
    const { data } = await axios.get("/api");
    this.movies = data;
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

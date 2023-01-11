<template>
  <div id="overview">
    <div id="main" class="main">
      <movie-list
        v-bind:genres="genres"
        v-bind:movies="movies"
        v-bind:day="day"
        v-bind:times="times"
      ></movie-list>
    </div>
  </div>
</template>

<script>
import MovieList from "@/components/MovieList.vue";
import axios from "axios";

export default {
  name: "Movies-page",
  props: {
    genres: Array,
    movies: Array,
    day: Object,
    times: Array
  },
  async beforeRouteEnter(to, from, next) {
    const { data } = await axios.get("/api");
    const movie = data.find(movie => movie.id === to.params.id);
    if (movie) {
      next(vm => {
        console.log("ok", vm);
        vm.movie = movie;
        return true;
      });
    } else {
      next({ name: "home" });
    }
  },
  components: {
    MovieList
  }
};
</script>

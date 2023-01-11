<template>
  <div id="details" v-if="movie">
    <movie-item v-bind:movie="movie" v-bind:day="day" v-bind:times="times">
      <p class="movie-genre">{{ movie.movie.Genre }}</p>
      <p class="movie-plot">{{ movie.movie.Plot }}</p>
      <table>
        <tr>
          <td>Released date:</td>
          <td>{{ movie.movie.Released }}</td>
        </tr>
        <tr>
          <td>Running time:</td>
          <td>{{ movie.movie.Runtime }}</td>
        </tr>
        <tr>
          <td>Director:</td>
          <td>{{ movie.movie.Director }}</td>
        </tr>
        <td>Cast:</td>
        <td>{{ movie.movie.Actors }}</td>
      </table>
    </movie-item>
  </div>
</template>

<script>
import MovieItem from "../components/MovieItem.vue";
import axios from "axios";
export default {
  data: () => ({
    movie: null
  }),
  props: {
    day: Object,
    times: Array
  },
  components: {
    MovieItem
  },
  async created() {
    const { data } = await axios.get("/api");
    this.movie = data.find(movie => movie.id === this.$route.params.id);
  }
};
</script>

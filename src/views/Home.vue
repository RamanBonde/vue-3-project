<template>
  <div id="overview">
    <day-select v:bind="day" v-on:day-selected="selectedDay"></day-select>
    <div id="main" class="main">
      <movie-list
        v-bind:genres="genres"
        v-bind:movies="movies"
        v-bind:day="day"
        v-bind:times="times"
      ></movie-list>
      <movie-filter v-on:check-filter="checkFilter"></movie-filter>
    </div>
  </div>
</template>

<script>
import MovieList from "@/components/MovieList.vue";
import MovieFilter from "@/components/MovieFilter.vue";
import DaySelect from "@/components/DaySelect.vue";

export default {
  name: "Home-page",
  props: {
    genres: Array,
    movies: Array,
    day: Object,
    times: Array
  },
  emits: ["check-filter", "day-selected"],
  methods: {
    checkFilter(checked, title, group) {
      this.$emit("check-filter", checked, title, group);
    },
    selectedDay(day) {
      this.$emit("day-selected", day);
    }
  },
  components: {
    MovieList,
    MovieFilter,
    DaySelect
  }
};
</script>

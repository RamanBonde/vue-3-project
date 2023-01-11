import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/Home.vue";
import MoviesPage from "@/views/Movies.vue";
import MovieDetails from "@/views/MovieDetails";

export default createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage
    },
    {
      path: "/movies",
      name: "movies",
      component: MoviesPage
    },
    {
      path: "/moviedetails/:id",
      name: "movieDetails",
      component: MovieDetails
    }
  ]
});

import { defineStore } from "pinia";

export const useFavoritesStore = defineStore("favorites", {
  state: () => ({
    movies: [] as {
      id: number;
      poster_path: string;
    }[],
  }),
  actions: {
    init() {
      const movies = localStorage.getItem("favorites movies");
      if (movies) {
        this.movies = JSON.parse(movies);
      }
    },
    add(id: number, poster_path: string) {
      this.movies.push({ id, poster_path });
      localStorage.setItem("favorites movies", JSON.stringify(this.movies));
    },
    remove(id: number) {
      this.movies = this.movies.filter((movie) => movie.id !== id);
      localStorage.setItem("favorites movies", JSON.stringify(this.movies));
    },
  },
});

import { defineStore } from "pinia";

export const useFavoritesStore = defineStore("favorites", {
  state: () => ({
    movies: [] as {
      id: number;
      poster_path: string;
    }[],
  }),
  actions: {
    add(id: number, poster_path: string) {
      this.movies.push({ id, poster_path });
    },
    remove(id: number) {
      this.movies = this.movies.filter((movie) => movie.id !== id);
    },
  },
});

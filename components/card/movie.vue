<script setup lang="ts">
import { useFavoritesStore } from "@/stores/favorites";

const favorites = useFavoritesStore();

const addFavorite = (id: number, poster: string) => {
  favorites.add(id, poster);
};

const deleteFavorite = (id: number) => {
  favorites.remove(id);
};

const isFavorite = (id: number) => {
  return favorites.movies.some((movie) => movie.id === id);
};

defineProps({
  id: {
    type: Number,
    required: true,
  },
  imgMovies: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="relative pb-[150%]">
    <button
      v-if="!isFavorite(id)"
      @click="addFavorite(id, imgMovies)"
      class="absolute top-0 right-0 p-2 z-10 bg-blue-700"
    >
      <IconsAdd />
    </button>
    <button
      v-if="isFavorite(id)"
      @click="deleteFavorite(id)"
      class="absolute top-0 right-0 p-2 z-10 bg-blue-700"
    >
      <IconsDelete />
    </button>
    <img
      :src="`https://image.tmdb.org/t/p/w500${imgMovies}`"
      class="w-full h-full object-cover absolute top-0 left-0"
      alt="image"
    />
  </div>
</template>

<script setup lang="ts">
import { useFavoritesStore } from "@/stores/favorites";
const favorites = useFavoritesStore();
</script>

<template>
  <div class="pt-24 container mx-auto px-4 py-8">
    <h2 class="text-2xl text-white font-bold mb-8">Films favoris</h2>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
      <CardMovie
        v-for="movie in favorites.movies"
        :key="movie.id"
        :id="movie.id"
        :img-movies="movie.poster_path"
      />
    </div>
  </div>
</template>

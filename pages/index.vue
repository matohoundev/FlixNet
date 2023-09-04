<script setup lang="ts">
import MovieService from "@/services/movie";
const movies = ref<any[]>([]);

onMounted(() => {
  getPopularMovies();
});

const getPopularMovies = () => {
  new MovieService().getPopularMovies().then((res) => {
    movies.value = res;
  });
};
</script>

<template>
  <div>
    <BannerMovie />
    <section class="container mx-auto px-4 py-8">
      <h2 class="text-2xl text-white font-bold mb-8">Films populaires</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <CardMovie
          v-for="movie in movies"
          :key="movie.id"
          :imgMovies="movie.poster_path"
        />
      </div>
    </section>
  </div>
</template>

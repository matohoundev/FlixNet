<script setup lang="ts">
import MovieService from "@/services/movie";
const type = [
  { id: 28, name: "Action" },
  { id: 16, name: "Animation" },
  { id: 12, name: "Aventure" },
  { id: 35, name: "Comédie" },
  { id: 99, name: "Documentaire" },
];

const categorySelected = type[0].id;
const movies = ref<any[]>([]);

onMounted(() => {
  getMovieByCategory(categorySelected);
});

const getMovieByCategory = (id: number) => {
  new MovieService().getMovieByType(id).then((res) => {
    movies.value = res;
  });
};

const typeSelected = (id: number) => {
  getMovieByCategory(id);
};
</script>
<template>
  <div class="pt-16 container mx-auto px-4 py-8">
    <TabsCategories :category="type" @typeSelected="typeSelected" />
    <h2 class="text-2xl text-white font-bold mb-8">Films</h2>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
      <CardMovie
        v-for="movie in movies"
        :key="movie.id"
        :img-movies="movie.poster_path"
      />
    </div>
  </div>
</template>

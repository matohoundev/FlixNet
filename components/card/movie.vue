<script setup lang="ts">
defineProps({
  imgMovies: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="relative pb-[150%]">
    <button class="absolute top-0 right-0 p-2 z-10 bg-blue-700">
      <IconsAdd />
    </button>
    <!-- <button class="absolute top-0 right-0 p-2 z-10 bg-blue-700">
      <IconsDelete />
    </button> -->
    <img
      :src="`https://image.tmdb.org/t/p/w500${imgMovies}`"
      class="w-full h-full object-cover absolute top-0 left-0"
      alt="image"
    />
  </div>
</template>

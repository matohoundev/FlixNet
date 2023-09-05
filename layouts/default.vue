<script setup lang="ts">
import { useFavoritesStore } from "@/stores/favorites";
const favorites = useFavoritesStore();

onMounted(() => {
  favorites.init();
});
</script>

<template>
  <div class="bg-rose-900">
    <StarterHeader />
    <div class="flex flex-col justify-between min-h-screen">
      <slot />
      <StarterFooter />
    </div>
  </div>
</template>

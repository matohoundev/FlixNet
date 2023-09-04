<script setup lang="ts">
defineEmits(["typeSelected"]);
defineProps({
  category: {
    type: Array,
    required: true,
    id: {
      type: Number,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
  },
});
</script>

<template>
  <div class="tabs py-8">
    <ul class="flex overflow-x-auto">
      <li class="flex-1" v-for="item in category" :key="item.id">
        <button
          @click="$emit('typeSelected', item.id)"
          class="w-full block py-2 px-4 bg-gray-800 text-white font-semibold hover:bg-gray-700"
        >
          {{ item.name }}
        </button>
      </li>
    </ul>
  </div>
</template>

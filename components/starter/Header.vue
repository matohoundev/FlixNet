<template>
  <header class="fixed w-full z-20 text-white p-4 space-x-20 flex items-center">
    <div>
      <nuxt-link
        to="/"
        class="text-xl font-bold hover:text-gray-300 transition duration-300"
      >
        Flixnet
      </nuxt-link>
    </div>
    <nav class="space-x-12">
      <nuxt-link
        to="/"
        class="hover:text-gray-300 font-bold transition duration-300"
        >Accueil</nuxt-link
      >
      <nuxt-link
        to="/movies"
        class="hover:text-gray-300 font-bold transition duration-300"
        >Films</nuxt-link
      >
      <nuxt-link
        to="/favorites"
        class="hover:text-gray-300 font-bold transition duration-300"
        >Favoris</nuxt-link
      >
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: hsla(0, 0%, 0%, 0.8);
  backdrop-filter: blur(10px);
}
</style>

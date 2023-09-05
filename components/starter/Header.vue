<template>
  <header
    class="fixed w-full z-20 flex items-center text-white p-4 sm:space-x-20"
  >
    <div>
      <nuxt-link
        to="/"
        class="text-xl font-bold hover:text-rose-900 transition duration-300"
      >
        Flixnet
      </nuxt-link>
    </div>
    <nav
      class="w-full flex sm:flex-none justify-end sm:justify-normal space-x-12"
    >
      <nuxt-link
        to="/"
        class="hover:text-rose-700 font-bold transition duration-300 text-sm sm:text-base"
        >Accueil</nuxt-link
      >
      <nuxt-link
        to="/movies"
        class="hover:text-rose-700 font-bold transition duration-300 text-sms m:text-base"
        >Films</nuxt-link
      >
      <nuxt-link
        to="/favorites"
        class="hover:text-rose-700 font-bold transition duration-300 text-sm sm:text-base"
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

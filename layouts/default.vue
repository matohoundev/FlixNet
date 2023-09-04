<template>
  <div class="bg-rose-900">
    <StarterHeader />
    <div class="flex flex-col justify-between min-h-screen">
      <slot />
      <StarterFooter />
    </div>
  </div>
</template>

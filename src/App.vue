<script setup lang="ts">
import { Toaster } from 'vue-sonner';
// import Products from './components/Products.vue';
// import { useCounterStore } from './stores/counter';
// const store = useCounterStore();
</script>

<template>
  <Toaster position="top-center"/>
  <nav>
    <RouterLink to="/">Go to Products</RouterLink> |
    <RouterLink to="/about">Go to Carts</RouterLink> |
    <RouterLink to="/fave">Go to Favourites</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
</style>

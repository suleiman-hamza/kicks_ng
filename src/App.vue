<script setup lang="ts">
import { Toaster } from 'vue-sonner';
import Footer from '@/components/Footer.vue'
// import Products from './components/Products.vue';
// import { useCounterStore } from './stores/counter';
// const store = useCounterStore();
</script>

<template>
  <Toaster position="top-center"/>
  <RouterView />
  <Footer />
</template>

<style scoped>
</style>

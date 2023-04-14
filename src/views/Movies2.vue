<script setup>
import MoviesCards2 from '@/components/Movies/MoviesCards2.vue'
import Hero from '@/components/Movies/Hero.vue'
import { ref } from 'vue'
const isSuspense = ref(false)
</script>
<template>
  <Hero :isSuspense="isSuspense" />
  <MoviesCards2 />
</template>

<style scoped lang="scss">
.movies__title {
  margin: 30px 0 10px 0;
  text-align: center;
  font-size: 60px;
  font-weight: bold;
  text-transform: uppercase;
}

.movies__subtitle {
  font-size: 20px;
  text-align: center;
  margin-bottom: 30px;
}
</style>

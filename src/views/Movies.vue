<script setup>
import MoviesCards from '@/components/Movies/MoviesCards.vue'
import Hero from '@/components/Movies/Hero.vue'
import { ref } from 'vue'

const isSuspense = ref(true)
</script>
<template>
  <Hero :isSuspense="isSuspense" />
  <Suspense>
    <template #default>
      <MoviesCards />
    </template>
    <template #fallback>
      <h1>Loading ...</h1>
    </template>
  </Suspense>
</template>

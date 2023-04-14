<script setup>
import { useRoute, RouterLink, RouterView, useRouter } from 'vue-router'
import cars from '@/data/cars.json'

const route = useRoute()
const router = useRouter()
const webID = parseInt(route.params.id)
const car = cars.find((c) => c.id === webID)
if (car) {
  const { name, price, year, contact } = car
}
</script>

<template>
  <RouterLink to="/cars">All Cars</RouterLink>
  <div class="car" v-if="car">
    <h1>Car view</h1>
    <h1>Name: {{ name }}</h1>
    <h2>Price: {{ price }}$</h2>
    <h2>Year: {{ year }}</h2>
    <button @click="router.push(`/cars/${webID}/contact`)">Contact</button>
    <!-- <RouterLink :to="`/counter/${id}/contact`">contact</RouterLink> -->
    <!-- <RouterView :contact="contact" /> -->
  </div>
  <h1 v-else>Car not found</h1>
</template>

<template>
  <div class="splash-container">
    <div class="splash">
      <h1>Splendid Food</h1>
    </div>
  </div>

  <main class="wrapper">
    <h2>Recommended</h2>
    <div class="recommended">
      <Cart v-for="(product, i) in inventory.slice(0, 3)" :key="i" :product="product" :addToCart="addToCart" :i="i"/>
    </div>
  </main>
</template>

<script>
import Cart from '@/components/Cart.vue'
export default {
  name: 'home',
  props: ['inventory', 'addToCart'],
  components: {
    Cart
  }
}
</script>

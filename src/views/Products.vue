<template>
  <main class="wrapper">
    <h1>Products</h1>
    <div class="card-container">
      <Cart
        v-for="(product, i) in inventory"
        :key="i"
        :product="product"
        :addToCart="addToCart"
      :i="i"
      />
    </div>
  </main>
</template>

<script>
import Cart from '@/components/Cart.vue'

export default {
  name: 'products',
  props: ['inventory', 'addToCart'],
  components: {
    Cart
  }
}
</script>

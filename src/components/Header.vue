<template>
  <header class="top-bar spread">
    <nav class="top-bar-nav">
      <router-link active-class="active" to="/" class="top-bar-link">
        <i class="icofont-spoon-and-fork"></i>
        <span>Home</span>
      </router-link>
      <router-link active-class="active" to="/products" class="top-bar-link">
        <span>Products</span>
      </router-link>
      <router-link active-class="active" to="/past-orders" class="top-bar-link">
        <span>Past Orders</span>
      </router-link>
      <router-link active-class="active" to="/counter" class="top-bar-link">
        <span>Counter</span>
      </router-link>
      <router-link active-class="active" to="/notes" class="top-bar-link">
        <span>Notes</span>
      </router-link>
      <router-link active-class="active" to="/quizes" class="top-bar-link">
        <span>Quizes</span>
      </router-link>
      <router-link active-class="active" to="/cars" class="top-bar-link">
        <span>Cars</span>
      </router-link>
      <router-link active-class="active" to="/animation" class="top-bar-link">
        <span>Animation</span>
      </router-link>
      <router-link active-class="active" to="/movies" class="top-bar-link">
        <span>Movies(Suspense)</span>
      </router-link>

      <router-link active-class="active" to="/movies2" class="top-bar-link">
        <span>Movies(Life Cycle)</span>
      </router-link>
      <router-link active-class="active" to="/state" class="top-bar-link">
        <span>State</span>
      </router-link>
      <router-link active-class="active" to="/party" class="top-bar-link">
        <span>Party (TS)</span>
      </router-link>
      <router-link active-class="active" to="/about" class="top-bar-link">
        <span>About</span>
      </router-link>
    </nav>

    <div to="#" class="top-bar-cart-link" @click="toggleSidebar">
      <i class="icofont-cart-alt icofont-1x"></i>
      <span>Cart ({{ totalQuantity }})</span>
    </div>
  </header>
</template>

<script>
export default {
  // import {RouterLink} from 'vue-router'
  props: ["toggleSidebar", "totalQuantity"],
};
</script>

<style scoped lang="scss">
.active {
  font-weight: bold;
  background-color: #333;
  span {
    color: #fff;
  }
}
</style>

<script>
import { RouterView } from "vue-router";
import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";
import food from "@/data/food.json";

export default {
  components: {
    Sidebar,
    Header,
  },
  data() {
    return {
      showSidebar: false,
      inventory: food,
      cart: {},
      historyOrders: [],
    };
  },
  computed: {
    totalQuantity() {
      return Object.values(this.cart).reduce((acc, cur) => {
        return acc + cur;
      }, 0);
    },
  },
  methods: {
    addToCart(name, index) {
      if (!this.cart[name]) this.cart[name] = 0;
      this.cart[name] += this.inventory[index].quantity;

      const order = {
        name,
        quantity: this.inventory[index].quantity,
        total: (
          this.inventory[index].quantity * this.inventory[index].price.USD
        ).toFixed(2),
      };

      console.log("order", order);

      this.historyOrders.push(order);

      this.inventory[index].quantity = 0;
      console.log(this.cart);
    },
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
    removeItem(name) {
      delete this.cart[name];
    },
  },
};
</script>

<template>
  <Header :totalQuantity="totalQuantity" :toggleSidebar="toggleSidebar" />
  <Transition name="webTransition">
    <RouterView
      :inventory="inventory"
      :addToCart="addToCart"
      :historyOrders="historyOrders"
    />
  </Transition>

  <footer></footer>

  <Sidebar
    v-if="showSidebar"
    :toggle="toggleSidebar"
    :cart="cart"
    :inventory="inventory"
    :remove="removeItem"
  />
</template>

<style scoped lang="scss">
.webTransition-enter-from,
.webTransition-leave-to {
  opacity: 0;
  transform: translateX(100px);
}

.webTransition-enter-to,
.webTransition-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.webTransition-enter-active,
.webTransition-leave-active {
  transition: all 0.3s ease-out;
}
</style>

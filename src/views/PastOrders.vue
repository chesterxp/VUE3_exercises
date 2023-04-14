<template>
  <main class="wrapper">
    <table class="product-table">
      <thead>
        <tr>
          <td><span class="sr-only">Product Image</span></td>
          <td>Product</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>Total</td>
          <td><span class="sr-only">Actions</span></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><i class="icofont-carrot icofont-4x" /></td>
          <td>Carrot</td>
          <td>$1.00</td>
          <td>1</td>
          <td>$1.00</td>
          <td><button class="btn btn-dark">Add</button></td>
        </tr>
      </tbody>
    </table>

    <div class="history">
      <h1 class="past__title">Past Orders</h1>
      <div class="element">
          <div class="element__name">Product</div>
          <div class="element__quantity">Quantity</div>
          <div class="element__total">Total Price</div>
        </div>
      <div class="element" v-for="(el, i) in listOrder">
        <div class="element__name">{{ el.name }}</div>
        <div class="element__quantity">{{ el.quantity }}</div>
        <div class="element__total">${{ el.total }}</div>
      </div>
    </div>

  </main>
</template>

<style scoped lang="scss">
.past__title {
  font-size: 40px;
  text-align: center;
  width: 100%;
  margin-bottom: 20px;
}

.element {
  display: flex;
  align-items: center;
  color: #333;
  padding: 10px;

  &__name,
  &__quantity,
  &__total {
    font-size: 30px;
    margin-right: 20px;
    text-align: center;
    width: 160px;
  }

  &__name {
    font-weight: bold;
  }
  &__quantity{
  }
}
</style>

<script>
export default {
  props: ['historyOrders'],
  data () {
    return {
      listOrder: this.historyOrders
    }
  }
}
</script>

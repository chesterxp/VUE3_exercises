<script setup>
import { ref, reactive } from 'vue'

// declaration a few variables
const red = ref(0)
const blue = ref(0)
const green = ref(0)

// declaration one object
// const color = ref({
//   red: 0,
//   blue: 0,
//   green: 0,
// });

// reactive
const color = reactive({
  red: 0,
  blue: 0,
  green: 0
})

const selectRandomColor = () => {
  // color.value.red = 14;
  // color.value.blue = 142;
  // color.value.green = 214;

  // reactive
  color.red = 17
  color.green = 123
  color.blue = 231
}
</script>

<template>
  <div
    class="state__overlay"
    :style="{
      backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})`,
    }"
  >
    <div class="state__box">
      <input
        type="number"
        v-model="color.blue"
        class="inputColor"
        placeholder="Red"
      />
      <input
        type="number"
        v-model="color.red"
        class="inputColor"
        placeholder="Green"
      />
      <input
        type="number"
        v-model="color.green"
        class="inputColor"
        placeholder="Blue"
      />
      <button @click="selectRandomColor">Select Random Color</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.state {
  &__overlay {
    // background-color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  &__box {
    display: flex;
    flex-direction: column;
  }
}

.inputColor {
  margin: 10px 0;
  padding: 20px;
  font-size: 30px;
  outline: none;
  background-color: #beedb2;
  border: none;
  color: #333;
  border-radius: 5px;
}
</style>

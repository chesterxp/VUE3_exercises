<script setup>
import { ref, provide } from "vue";
import Child from "./Child.vue";

// const numbers = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// const addNumber = (num) => {
//   numbers.value.push(num);
// };
// provide("parent_numbers", numbers);
// provide("addNumber", addNumber);

// /composables
// import useNumbers from "@/composables/useNumbers";
// const { numbers } = useNumbers();

// pinia - global store
import { useNumbersStore } from "@/stores/numbers";
const { numbers, addNumber } = useNumbersStore();
</script>

<template>
  <div class="">
    <strong> {{ numbers }}</strong>
    <hr />
    <h1>Parent</h1>
    <div class="line"></div>
    <Child />
  </div>
</template>

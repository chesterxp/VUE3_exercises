<script setup>
// import { defineProps } from "vue";
// const { numbers } = defineProps(["numbers"]);

// import { inject } from "vue";
// const numbers = inject("parent_numbers");
// const add = inject("addNumber");

// pinia - global store
import { useNumbersStore } from "@/stores/numbers";
const { numbers, doubleNumber, doubleNumber2, clean, filterNumber } =
  useNumbersStore();
const dNumber = doubleNumber2();
</script>

<template>
  <div class="">
    <h1>GreatGrandChild {{ doubleNumber }}</h1>
    <h1>GreatGrandChild {{ dNumber }}</h1>
    <h1>GreatGrandChild {{ filterNumber(100) }}</h1>
    <!-- <button @click="doubleNumber">clean</button> -->
    <div class="line"></div>
  </div>
</template>

<script setup>
import GrandChild from './GrandChild.vue'

// Prop drilling
// import { defineProps } from "vue";
// const { numbers } = defineProps(["numbers"]);

// use inject
// import { inject } from "vue";
// const numbers = inject("parent_numbers");

// use composable
// import useNumbers from "@/composables/useNumbers";
// const { numbers, addNumber } = useNumbers();

// pinia - global store
import { useNumbersStore } from '@/stores/numbers'
const { numbers, addNumber } = useNumbersStore()
</script>

<template>
  <div class="">
    <button @click="addNumber(3)">Add</button>
    <h1>Child {{ numbers }}</h1>
    <div class="line"></div>
    <GrandChild />
  </div>
</template>

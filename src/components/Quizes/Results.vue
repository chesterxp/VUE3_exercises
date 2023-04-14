<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'
const { numberOFCorrectAnswers, all } = defineProps([
  'numberOFCorrectAnswers',
  'all'
])
</script>
<template>
  <div class="results">
    <p>Your Results ...</p>
    <h1>{{ numberOFCorrectAnswers }}/{{ all }}</h1>
  </div>
  <RouterLink class="btn" to="/quizes">Back to Quizes</RouterLink>
</template>

<style scoped lang="scss">
.results {
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
  font-size: 50px;
  background-color: #33333392;
  color: #fff;
  border-radius: 5px;
  box-shadow: 2px 2px 10px 2px rgba(51, 51, 51, 0.205);
  transition: all 0.3s ease-out;
}

.btn {
  background-color: var(--topNavBackground);
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  width: 200px;
  margin: 30px auto;
  text-align: center;
  text-transform: uppercase;
  transition: all 0.3s ease-out;
  box-shadow: 2px 2px 8px 0px rgba(51, 51, 51, 0.2);
  &:hover {
    opacity: 0.9;
    box-shadow: 2px 2px 8px 0px rgba(51, 51, 51, 0.6);
  }
}
</style>

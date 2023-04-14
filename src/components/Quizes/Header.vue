<script setup>
import { defineProps } from "vue";
const { questionStatus, progressBarValue } = defineProps([
  "questionStatus",
  "progressBarValue",
]);

console.log("questionStatus", questionStatus);
console.log("progressBarValue", progressBarValue);
</script>

<template>
  <h4 class="quiz__numberOfQuestions">Question {{ questionStatus }}</h4>
  <div class="quiz__progress">
    <div class="quiz__value" :style="{ width: progressBarValue }"></div>
  </div>
</template>

<style lang="scss" scoped>
.quiz {
  &__numberOfQuestions {
    font-size: 30px;
    margin-top: 40px;
    margin-bottom: 10px;
  }

  &__progress {
    height: 20px;
    border: 2px solid var(--green);
    margin-bottom: 20px;
    width: 200px;
  }

  &__value {
    width: 0;
    height: 100%;
    background-color: var(--green);
    transition: all 0.3s ease-out;
  }
}
</style>

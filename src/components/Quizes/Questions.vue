<script setup>
import { defineProps, defineEmits } from "vue";
const { question } = defineProps(["question"]);
const emit = defineEmits(["selectOption"]);
const emitSelectedOption = (isCorrect) => {
  console.log("click", isCorrect);
  emit("selectOption", isCorrect);
};
</script>

<template>
  <div class="quiz">
    <div class="quiz__question">{{ question.text }}</div>
    <div class="quiz__answers">
      <div
        class="quiz__answer"
        v-for="(q, i) in question.options"
        :key="q.id"
        @click="emitSelectedOption(q.isCorrect)"
      >
        <div class="quiz__point">{{ q.label }}</div>
        <div class="quiz__content">{{ q.text }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$green: var(--topNavBackground);

.quiz {
  &__question {
    font-size: 40px;
    margin-bottom: 20px;
  }

  &__answers {
    display: flex;
    flex-direction: column;
  }

  &__answer {
    display: flex;
    margin-bottom: 10px;
  }

  &__point {
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    background: var(--green);
    padding: 10px;
  }

  &__content {
    font-size: 20px;
    background-color: #ddd;
    padding: 10px;
    width: 100%;
  }
}
</style>

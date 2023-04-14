<script setup>
import Questions from "@/components/Quizes/Questions.vue";
import QuestionHeader from "@/components/Quizes/Header.vue";
import Results from "@/components/Quizes/Results.vue";
import { useRoute } from "vue-router";
import { ref, watch, computed } from "vue";
import quizes from "@/data/quizes.json";

const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizes.find((q) => q.id === quizId);
const currentQuestionIndex = ref(0);
const numberOFCorrectAnswers = ref(0);
const showResults = ref(false);
const questionStatus = computed(() => {
  console.log("computed!!!!");
  return `${currentQuestionIndex.value}/${quiz.questions.length}`;
});
const progressBarValue = computed(() => {
  return `${(
    (currentQuestionIndex.value / quiz.questions.length) *
    100
  ).toFixed()}%`;
});

console.log("progressBarValue", progressBarValue);

// const questionStatus = ref(`${[currentQuestionIndex.value]}/${quiz.questions.length}`);

// watch(()=> currentQuestionIndex.value, () => {
//     questionStatus.value = `${[currentQuestionIndex.value]}/${quiz.questions.length}`;
// })

const onOptionSelected = (isCorrect) => {
  if (isCorrect) {
    numberOFCorrectAnswers.value++;
  }
  currentQuestionIndex.value++;
  if (currentQuestionIndex.value == quiz.questions.length) {
    showResults.value = true;
  }
};
</script>

<template>
  <div class="quiz">
    <QuestionHeader
      :questionStatus="questionStatus"
      :progressBarValue="progressBarValue"
    />
    <Questions
      :question="quiz.questions[currentQuestionIndex]"
      @selectOption="onOptionSelected"
      v-if="!showResults"
    />
    <Results
      v-else
      :numberOFCorrectAnswers="numberOFCorrectAnswers"
      :all="quiz.questions.length"
    />
  </div>
</template>

<style lang="scss" scoped>
.quiz {
  width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

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

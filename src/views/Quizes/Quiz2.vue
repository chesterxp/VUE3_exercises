<script>
import Questions from "@/components/Quizes/Questions.vue";
import QuestionHeader from "@/components/Quizes/Header.vue";
import Results from "@/components/Quizes/Results.vue";
import { useRoute } from "vue-router";
import { ref, watch, computed } from "vue";
import data from "@/data/quizes.json";
import { def } from "@vue/shared";

export default {
  name: "quiz",
  components: {
    // Questions,
    // QuestionHeader,
    // Results,
  },
  data() {
    return {
      name: "luki",
      class: "danger danger--small",
      quizId: this.getId(),
      quiz: {},
      quizes: data,
      currentQuestionIndex: 0,
      numberOFCorrectAnswers: 0,
      showResults: false,
      hack: `<a href="#" onClick="alert('You are hack')"> Win a prize!</a>`,

      // route: useRoute(),
      // quizId: parseInt(route.params.id),
    };
  },
  methods: {
    getId() {
      const route = useRoute();
      const quizId = parseInt(route.params.id);

      return quizId;
    },
    findCurrentQuiz() {
      this.quiz = this.quizes.find((q) => q.id === 1);
      // console.log("quizes111", this.quizes);
      // console.log("quizId111", this.quizId);

      // const add = this.quizId * 100;

      // return q;
      // console.log("q", q);
      // return q;
    },
  },
  computed: {
    // findCurrentQuiz() {
    //   const q = this.quizes.find((q) => q.id === 1);
    //   console.log("q", q);
    //   return q;
    // },
    questionStatus: () => {
      // console.log("computed!!!!", currentQuestionIndex);
      // console.log("computed!!!!", currentQuestionIndex);
      // return `${this.currentQuestionIndex}/${this.quiz.questions.length}`;
    },
    progressBarValue() {
      return `${(
        (this.currentQuestionIndex / this.quiz.questions.length) *
        100
      ).toFixed()}%`;
    },
  },
  init() {
    this.findCurrentQuiz();
  },
};

// init();

// const questionStatus = ref(`${[currentQuestionIndex.value]}/${quiz.questions.length}`);

// watch(()=> currentQuestionIndex.value, () => {
//     questionStatus.value = `${[currentQuestionIndex.value]}/${quiz.questions.length}`;
// })

// const onOptionSelected = (isCorrect) => {
//   if (isCorrect) {
//     numberOFCorrectAnswers.value++;
//   }
//   currentQuestionIndex.value++;
//   if (currentQuestionIndex.value == quiz.questions.length) {
//     showResults.value = true;
//   }
// };
</script>

<template>
  <div class="quiz">
    <h1 :id="name" :class="class">Quiz2 - {{ quizId }}</h1>
    <h1 :id="name" :class="class">Quiz2 - {{ quiz }}</h1>
    <a href="#" onClick="alert('You are hack')"> Win a prize!</a>
    <div class="" v-html="hack"></div>
    <!-- <h1>Quiz2 - {{ questionStatus() }}</h1> -->
    <!-- <QuestionHeader
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
    /> -->
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

.danger {
  color: red;
  &--small {
    font-size: 40px;
  }
}
</style>

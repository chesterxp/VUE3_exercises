<script setup>
import { RouterLink } from "vue-router";
import { defineProps } from "vue";
const props = defineProps(["quiz"]);
const { img, name, questions, id } = props.quiz;
</script>
<template>
  <RouterLink :to="`/quizes/${id}`" class="quiz__card">
    <img :src="img" :alt="name" />
    <div class="quiz__cardText">{{ name }}</div>
    <div class="quiz__cardAmountOfQuestions">
      {{ questions.length }} questions
    </div>
  </RouterLink>
</template>

<style scoped lang="scss">
.quiz {
  &__card {
    width: 310px;
    background-color: #fff;
    overflow: hidden;
    border-radius: 2px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    margin: 0px 20px 20px 0;
    cursor: pointer;

    img {
      width: 100%;
      height: 190px;
      margin: 0;
    }

    &Text {
      padding: 10px;
      font-weight: bold;
    }

    &AmountOfQuestions {
      padding: 10px;
    }
  }
}
</style>

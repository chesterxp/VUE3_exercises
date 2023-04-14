<script setup>
import Card from "@/components/Quizes/Card.vue";
import q from "@/data/quizes.json";
import { ref, watch } from "vue";
import gsap from "gsap";

const quizes = ref(q);
const search = ref("");
const showCard = ref(false);

watch(search, () => {
  quizes.value = q.filter((quiz) =>
    quiz.name.toLowerCase().includes(search.value.toLowerCase())
  );
});

const beforeEnter = (el) => {
  // card-enter-from
  el.style.opacity = 0;
  el.style.transform = "translateY(-100px)";
  console.log("beforeEnter");
};
const enter = (el) => {
  // card-enter-to
  // el.style.opacity = 1;
  // el.style.transform = "translate(0px)";
  gsap.to(el, {
    y: 0,
    opacity: 1,
    duration: el.dataset.index * 0.5,
  });

  console.log("enter");
};
const afterEnter = () => {
  // card-leave-to
  console.log("afterEnter");
};
</script>
<template>
  <div class="quizes">
    <div class="quizes__header">
      <h1 class="quizes__title">Quizes</h1>
      <input
        type="text"
        v-model.trim="search"
        class="quizes__input"
        placeholder="Search ..."
      />
    </div>
    <!-- <button @click="showCard = !showCard.value">Show Cards</button> -->
    <div class="quizes__container">
      <!-- name="cardMove" -->
      <TransitionGroup
        appear
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
      >
        <Card
          v-for="(quiz, index) in quizes"
          :key="quiz.id"
          :quiz="quiz"
          :data-index="index"
          if="showCard"
        />
      </TransitionGroup>
    </div>
  </div>
</template>

<style scoped lang="scss">
.quizes {
  width: 1000px;
  margin: 30px auto;
  &__header {
    display: flex;
    align-items: center;
  }
  &__title {
    font-size: 30px;
    margin-right: 20px;
  }
  &__input {
    height: 100%;
    outline: none;
    border: none;
    background-color: #a9a9a920;
    padding: 10px;
    border: 5px;
  }
  &__container {
    padding: 40px 0;
    display: flex;
    flex-wrap: wrap;
  }
}

.cardMove-enter-from {
  opacity: 0;
  transform: translateY(-100px);
}

.cardMove-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.cardMove-enter-active {
  transition: all 0.3s ease-out;
}
</style>

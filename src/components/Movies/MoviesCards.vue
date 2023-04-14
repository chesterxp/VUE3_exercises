<script setup>
import Card from "./Card.vue";
import { ref, watch } from "vue";
import mockAPIData from "./mockData";

const start = ref(0);
const end = ref(9);
const movies = ref([]);
const showPrevBtn = ref(true);
const showNextBtn = ref(true);
const slideArray = () => {
  return mockAPIData.slice(start.value, end.value);
};
const next = () => {
  start.value = start.value + 9;
  end.value = end.value + 9;
};
const prev = () => {
  if (start.value > 0) {
    start.value = start.value - 9;
  }
  if (end.value > 9) {
    end.value = end.value - 9;
  }

  console.log("next", start.value, end.value);
};

watch(
  () => start.value,
  () => {
    movies.value = slideArray();
    if (start.value == 0) {
      showPrevBtn.value = false;
    } else {
      showPrevBtn.value = true;
    }
    if (start.value > 17) {
      showNextBtn.value = false;
    } else {
      showNextBtn.value = true;
    }
  }
);

movies.value = slideArray();
</script>

<template>
  <div class="movies__box">
    <div class="movies__buttons">
      <div class="prev btn" v-if="showPrevBtn" @click="prev">Prev</div>
      <div class="next btn" v-if="showNextBtn" @click="next">Next</div>
    </div>
    <div class="movies__cards">
      <Card v-for="(m, i) in movies" :key="m.id" :data="m" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.movies {
  &__box {
    width: 1200px;
    margin: 0 auto;
    min-height: 100vh;
  }
  &__cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  &__buttons {
    display: flex;
    justify-content: center;
    width: 100%;
  }
}

.btn {
  background-color: var(--green);
  color: #fff;
  padding: 10px 20px;
  margin: 20px 10px;
  box-shadow: 2px 2px 6px rgba(51, 51, 51, 0.3);
  transition: all 0.3s ease-out;
  cursor: pointer;
  &:hover {
    box-shadow: 2px 2px 20px rgba(51, 51, 51, 0.3);
    filter: brightness(1.1);
  }
}
</style>

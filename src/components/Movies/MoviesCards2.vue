<script setup>
import Card from "./Card.vue";
import axios from "axios";
import { ref, watch, onMounted, onUpdated } from "vue";
import mockData from "./mockData";

const moviesData = ref([]);
const moviesToShow = ref([]);
const currentPage = ref(0);
const showPrevBtn = ref(true);
const showNextBtn = ref(true);

const getNewMovies = () => {
  moviesToShow.value = moviesData.value.slice(
    currentPage.value * 9,
    (currentPage.value + 1) * 9
  );
};

onMounted(async () => {
  console.log("onMounted");
  // const res = await axios.get(
  //   "https://api.themoviedb.org/3/movie/popular?api_key=656d3af6415c350924bbf12f27ed98bf&language=en-US&page=1"
  // );
  // moviesData.value = res.data.results;
  moviesData.value = mockData;
  getNewMovies();
});

onUpdated(() => {
  console.log("onUpdated");
});

const changePage = (type) => {
  if (type === "next") {
    currentPage.value = currentPage.value + 1;
  } else {
    currentPage.value = currentPage.value - 1;
  }
};

const hideButtons = () => {
  const allPages = Math.ceil(moviesData.value.length / 9);

  if (currentPage.value === 0) {
    showPrevBtn.value = false;
  } else {
    showPrevBtn.value = true;
  }

  if (currentPage.value === allPages - 1) {
    showNextBtn.value = false;
  } else {
    showNextBtn.value = true;
  }
};

watch(
  () => currentPage.value,
  () => {
    getNewMovies();
    hideButtons();
  }
);
</script>

<template>
  <div class="movies__box">
    <div class="movies__buttons">
      <div class="prev btn" v-if="showPrevBtn" @click="changePage('prev')">
        Prev
      </div>
      <div class="next btn" v-if="showNextBtn" @click="changePage('next')">
        Next
      </div>
    </div>

    <div class="movies__cards" v-if="moviesData">
      <Card v-for="(m, i) in moviesToShow" :key="m.id" :data="m" />
    </div>

    <div class="spinner" v-if="!moviesData">
      <div class="spinner__element"></div>
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
    height: 765px;
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

.spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1000px;
  height: 1000px;
  margin: 0 auto;

  // &__element {
  //   width: 100px;
  //   height: 100px;
  //   border-radius: 50%;
  //   border-right: 5px solid var(--green);
  //   border-left: 5px solid var(--green);
  //   animation: spinner 1s infinite;
  // }

  &__element {
    display: inline-block;
    width: 80px;
    height: 80px;
    &::after {
      content: " ";
      display: block;
      width: 64px;
      height: 64px;
      margin: 8px;
      border-radius: 50%;
      border: 6px solid var(--green);
      border-color: var(--green) transparent var(--green) transparent;
      animation: spinner 1.2s linear infinite;
    }
  }
}

@keyframes spinner {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

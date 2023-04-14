<script setup>
const { data } = defineProps(['data'])
const title = data.original_title
const img = `http://image.tmdb.org/t/p/w500/${data.backdrop_path}`
</script>

<template>
  <div class="card">
    <div class="card__image">
      <img :src="img" :alt="title" />
      <div class="card__title">{{ title }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 300px;
  height: 258px;
  overflow: hidden;
  box-shadow: 2px 2px 6px rgba(51, 51, 51, 0.3);
  border-radius: 5px;
  transition: all 0.3s ease-out;
  cursor: pointer;
  margin: 10px;

  &:hover {
    box-shadow: 2px 2px 20px rgba(51, 51, 51, 0.3);
    filter: brightness(1.1);
  }

  &__image img {
    width: 100%;
    height: 169px;
  }

  &__title {
    text-align: center;
    padding: 20px;
  }
}
</style>

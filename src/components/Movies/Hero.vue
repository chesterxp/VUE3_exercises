<script setup>
const { isSuspense } = defineProps(["isSuspense"]);
</script>
<template>
  <div class="hero__box">
    <div class="hero__title">
      Most popular movies
      {{ isSuspense ? `(Suspense)` : `(Life Cycle Hooks)` }}
    </div>
    <div class="hero__subtitle">
      Most popular movies
      {{ !isSuspense ? `(Suspense)` : `(Life Cycle Hooks)` }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero__title {
  margin: 30px 0 10px 0;
  text-align: center;
  font-size: 60px;
  font-weight: bold;
  text-transform: uppercase;
}
.hero__subtitle {
  font-size: 20px;
  text-align: center;
  margin-bottom: 30px;
}
</style>

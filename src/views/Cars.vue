<script setup>
import { ref } from 'vue'
import cars from '@/data/cars.json'
import { RouterLink } from 'vue-router'
</script>

<template>
     <div class="links">
            <RouterLink :to="`/cars/${link.id}`" v-for="link in cars" :key="link.id" class="link">Link {{ link.name }}</RouterLink>
        </div>
</template>

<style scoped lang="scss">
    .link{
        display: block;
        margin: 10px;
        text-decoration: none;
        font-size: 22px;
        text-transform: uppercase;
        color: #333;
        font-weight: bold;
        &:hover{
            opacity: 0.8;
        }
    }
</style>

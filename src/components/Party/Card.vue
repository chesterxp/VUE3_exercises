<script setup lang="ts">
import { GENDER, IPeople } from "@/types/base";

defineProps<{
  data: IPeople;
}>();
</script>

<template>
  <div
    class="party__invitee"
    :style="{ backgroundColor: data.gender === GENDER.MALE ? 'blue' : 'green' }"
  >
    {{ data.name }}
  </div>
</template>

<style scoped lang="scss">
.party {
  &__invitee {
    background-color: var(--green);
    padding: 10px;
    margin: 10px 0;
    text-align: center;
    border-radius: 5px;
    width: 100%;
    color: #fff;
    font-weight: bold;
  }
}
</style>

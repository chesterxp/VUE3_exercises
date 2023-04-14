<script setup lang="ts">
import { ref, computed } from "vue";
import Card from "@/components/Party/Card.vue";
import { GENDER, IPeople } from "@/types/base";

const inputValue = ref("");
const gender = ref(GENDER.MALE);
const people = ref<IPeople[]>([]);

const addPerson = (): void => {
  if (inputValue.value.length > 0) {
    people.value.unshift({
      id: new Date().getTime(),
      name: inputValue.value,
      gender: gender.value,
    });
  }
  inputValue.value = "";
  gender.value = GENDER.MALE;
};

const howMany = (gender: GENDER) => {
  console.log("gender", gender);
  let total = 0;
  people.value.forEach((el) => {
    if (el.gender === gender) {
      total++;
    }
  });

  return total;
};
const howMany2 = computed(() => {
  console.log("gender", gender);
  let totalF = 0;
  let totalM = 0;
  people.value.forEach((el) => {
    if (el.gender === GENDER.FEMALE) {
      totalF++;
    } else {
      totalM++;
    }
  });

  return {
    female: totalF,
    male: totalM,
  };
});

// const questionStatus = computed(() => {
//   return `${[currentQuestionIndex.value]}/${quiz.questions.length}`;
// });

// const count = computed<{
//   female: number,
//   male: number
// }>(() => {

//   return {
//     female: 3,
//     male: 3
//   }
// })
</script>

<template>
  <div class="party__box">
    <div class="party__title">People Invited to My Party</div>
    <input
      type="text"
      class="party__input"
      v-model="inputValue"
      @keypress.enter="addPerson"
    />
    <select
      name=""
      id=""
      class="party__input"
      v-model="gender"
      @keypress.enter="addPerson"
    >
      <option :value="GENDER.MALE">Male</option>
      <option :value="GENDER.FEMALE">Female</option>
    </select>
    <div class="party__list">
      <Card v-for="p in people" :key="p.id" :data="p" />
    </div>

    <div class="p">Female: {{ howMany2.female }}</div>
    <div class="p">Male: {{ howMany2.male }}</div>
    <!-- <div class="p">Female: {{ howMany(GENDER.FEMALE) }}</div>
    <div class="p">Male: {{ howMany(GENDER.MALE) }}</div> -->
  </div>
</template>

<style scoped lang="scss">
.party {
  &__box {
    width: 500px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
  }
  &__title {
    font-size: 30px;
  }

  &__input {
    padding: 10px;
    border: none;
    outline: none;
    margin: 5px 0;
    border-radius: 5px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

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

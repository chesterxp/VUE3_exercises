<script setup>
import { ref } from 'vue'

const isOpenModal = ref(false)
const newNote = ref('')
const notes = ref([])
const errorMessage = ref('')

const getRandomColor = () => {
  return `hsl(${(Math.random() * 360).toFixed()}deg 100% 75%)`
}

const addNote = () => {
  const text = newNote.value.trim().length
  if (text < 10) {
    errorMessage.value = 'Minimalna ilosc znaków to 10'
  } else {
    const date = new Date()
    // const formatDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    const formatDate = date.toLocaleDateString('pl-PL')
    notes.value.push({
      id: date.getTime(),
      text: newNote.value,
      date: formatDate,
      backgroundColor: getRandomColor()
    })
    newNote.value = ''
    isOpenModal.value = false
    errorMessage.value = ''
  }
}

function toggleOpenModal () {
  isOpenModal.value = !isOpenModal.value
}
</script>
<template>
  <div class="overlay" v-if="isOpenModal">
    <div class="modal">
      <textarea
        v-model="newNote"
        class="modal__textarea"
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
      <button class="modal__btn" @click="addNote">Add Note</button>
      <button class="modal__btn modal__btn-close" @click="toggleOpenModal">
        Close
      </button>
    </div>
  </div>
  <div class="notes">
    <div class="notes__top">
      <div class="notes__topTitle">Notes</div>
      <div class="notes__topAdd" @click="toggleOpenModal">+</div>
    </div>

    <div class="notes__box">
      <div
        class="note"
        v-for="note in notes"
        :key="note.id"
        :style="{ backgroundColor: note.backgroundColor }"
      >
        <div class="note__content">{{ note.text }}</div>
        <div class="note__data">{{ note.date }}</div>
      </div>
      <div class="note">
        <div class="note__content">Some example Notes</div>
        <div class="note__data">9/07/2022</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.5);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  width: 750px;
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;

  &__btn {
    width: 200px;
    padding: 10px 20px;
    // height: 50px;
    margin: 30px auto 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #333;
    border: none;
    border-radius: 55px;
    font-weight: bold;
    font-size: 18px;
    // line-height: 50px;
    cursor: pointer;
    transition: all 0.3s ease-out;
    &:hover {
      background-color: var(--topNavBackground);
    }

    &-close {
      margin-top: 7px;
      background-color: rgb(250, 82, 82);
      &:hover {
        background-color: rgb(255, 0, 0);
      }
    }
  }
}

.notes {
  display: flex;
  flex-direction: column;
  width: 1000px;
  margin: 0 auto;
  // background-color: #33333328;
  &__top {
    display: flex;
    justify-content: space-between;
    padding: 30px 0;
    &Title {
      font-size: 40px;
      color: #333;
      font-weight: bold;
    }
    &Add {
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      background-color: #333;
      border-radius: 50%;
      font-weight: bold;
      font-size: 25px;
      line-height: 50px;
      cursor: pointer;
      transition: all 0.3s ease-out;
      &:hover {
        background-color: var(--topNavBackground);
      }
    }
  }
  &__box {
    display: flex;
    flex-wrap: wrap;
  }
}

.note {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // background: pink;
  border-radius: 5px;
  box-shadow: 2px 2px 10px 2px rgba(51, 51, 51, 0.216);
  min-height: 200px;
  width: 200px;
  padding: 20px;
  margin: 10px;
  &__content {
    font-weight: bold;
  }
}

.error {
  color: red;
}
</style>

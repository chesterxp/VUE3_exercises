<script setup>
import { ref } from 'vue'

// show
const show = ref(true)
const toggleShow = () => {
  show.value = !show.value
}

// guestList
const guestList = ref(['Johny Snow'])
const inputName = ref('')
const addPerson = () => {
  guestList.value.unshift(inputName.value)
  inputName.value = ''
}

const deleteElement = (name) => {
  guestList.value = guestList.value.filter((n) => n !== name)
}
</script>
<template>
  <div class="box">
    <input
      v-model="inputName"
      type="text"
      name=""
      id=""
      placeholder="Add person to invite ..."
      @keypress.enter="addPerson"
    />
    <TransitionGroup name="invite">
      <li v-for="(g, i) in guestList" :key="g">
        <div class="name">{{ g }}</div>
        <div class="delete" @click="deleteElement(g)">X</div>
      </li>
    </TransitionGroup>
  </div>

  <!-- <div class="container"> -->
  <!-- <button @click="toggleShow" class="btn">Toggle</button>
    <Transition name="fade">
      <h1 v-if="show" class="title">
        Hello World
        <br />
        <hr />
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias vero
          tenetur itaque atque!
        </p>
      </h1>
    </Transition> -->
  <!-- </div> -->
</template>

<style scoped lang="scss">
.box {
  max-width: 500px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    width: 300px;
    border-radius: 5px;
    border: 1px solid rgb(51, 51, 51, 0.2);
    padding: 10px;
    margin: 20px auto;
    box-shadow: 1px 1px 10px 0px rgba(51, 51, 51, 0.187);
  }

  ul {
    display: inline;
    list-style: none;
    margin: 0px;
    padding: 0;
  }

  li {
    list-style: none;
    width: 300px;
    border-radius: 5px;
    padding: 5px 10px;
    margin-top: 10px;
    box-shadow: 1px 1px 10px 0px rgba(51, 51, 51, 0.187);
    cursor: pointer;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    .delete {
      position: absolute;
      right: 0;
      background-color: #33333347;
      color: #fff;
      padding: 10px;
      top: 0;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0 5px 5px 0;
      box-shadow: 1px 1px 10px 0px rgba(51, 51, 51, 0.187);
      cursor: pointer;
      &:hover {
        background-color: #333;
      }
    }
  }
}

.invite-enter-from,
.invite-leave-to {
  opacity: 0;
  transform: scale(0.5);
}

.invite-enter-to,
.invite-leave-from {
  opacity: 1;
  transform: scale(1);
}

.invite-enter-active,
.invite-leave-active {
  transition: all 0.3s ease-out;
  position: absolute;
}

.invite-move {
  transition: all 0.3s ease-out;
}

.container {
  height: calc(100vh - 222px);
}
.title {
  background-color: var(--topNavBackground);
  color: #fff;
  padding: 20px 40px;
  text-align: center;
  width: 300px;
  margin: 20px auto;
  // transition: all 0.6s ease-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease-out;
}

.btn {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  margin: 20px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease-out;
  box-shadow: 2px 2px 8px 2px rgba(51, 51, 51, 0.3);
  &:hover {
    background-color: rgba(51, 51, 51, 0.655);
    box-shadow: 2px 2px 10px 0px rgba(51, 51, 51, 0.6);
  }
}
</style>

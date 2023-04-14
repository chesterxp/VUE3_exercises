<script>
// Composition API
// const counter = ref(0);

// function calculate(type) {
//   if (type === "add") {
//     counter.value = counter.value + 1;
//   } else if (type === "subtract" && this.counter > 0) {
//     counter.value = counter.value - 1;
//   }
// }

// Options API
import { ref } from "vue";
import cars from "@/data/cars.json";
import { RouterLink } from "vue-router";
import MultiSlots from "@/components/Examples/MultiSlots.vue";
import Parent from "@/components/Nested/Parent.vue";

export default {
  components: {
    Parent,
  },
  data() {
    return {
      counter: 1,
      extraClass: "pink",
      name: "Luki King",
      isPromoted: true,
      isNew: true,
      color: "blue",
      h1Styles: {
        "background-color": "#333",
        color: "#fff",
        padding: "20px 30px",
        "font-size": "60px",
      },
      showComponent: true,
      arr: ["luki", "anet"],
      obj: {
        name: "luki",
        age: 25,
        car: true,
      },
      formValue: {
        inputName: "",
        profileSummary: "",
        country: "",
        jobLocation: [],
        remoteWork: "no",
        skillSet: [],
        yearsOfExperience: "",
        age: null,
        onceValue: "luki",
      },
    };
  },
  methods: {
    calculate(type) {
      if (type === "add") {
        console.log("add");
        this.counter = this.counter + 1;
      } else if (type === "subtract" && this.counter > 0) {
        console.log("subtract");
        this.counter = this.counter - 1;
      }
    },
    changeLuki(name, event) {
      console.log("name, name", event);
      this.name = `${name} King`;
    },
    increment() {
      console.log("increment");
      this.counter = this.counter + 1;
    },
    submitForm(event) {
      // event.preventDefault();
      console.log("event", event);
      console.log("form", this.formValue);
    },
  },
};
</script>

<template>
  <form class="counter__form" @submit.prevent="submitForm" action="/notes">
    <h1>Result</h1>
    <h2 v-once>
      {{ formValue.onceValue }}
    </h2>
    <h2 v-pre>{{ formValue.onceValue }}</h2>
    <button @click="formValue.onceValue = 'ziomek'">Change</button>
    <br />
    <pre>
      {{ JSON.stringify(formValue, null, 2) }}
    </pre>
    <label for="name">Name:</label>
    <input
      type="text"
      v-model.lazy.trim="formValue.inputName"
      class="counter__input"
      id="name"
    />
    <label for="profile">Profile Summary</label>
    <textarea
      name=""
      id="profile"
      cols="30"
      rows="10"
      v-model="formValue.profileSummary"
      class="counter__input"
    ></textarea>

    <div class="">
      <label for="country">Country</label>
      <br />
      <select
        name=""
        id="country"
        class="counter__input"
        v-model="formValue.country"
      >
        <option value="">Select a country</option>
        <option value="india">India</option>
        <option value="vietnam">Vietnam</option>
        <option value="singapore">Singapore</option>
      </select>
    </div>

    <div class="">
      <label for="job-location">Job Location</label>
      <br />
      <select
        name=""
        id="job-location"
        class="counter__input"
        v-model="formValue.jobLocation"
        multiple
      >
        <option value="india">India</option>
        <option value="vietnam">Vietnam</option>
        <option value="singapore">Singapore</option>
      </select>
    </div>

    <div class="">
      <input
        type="checkbox"
        id="remoteWork"
        v-model="formValue.remoteWork"
        true-value="yes"
        false-value="no"
      />
      <label for="remoteWork">Open to remote work ?</label>
    </div>
    <div class="">
      <label for="">Skill set</label>
      <br />
      <input
        type="checkbox"
        name=""
        id="html"
        value="html"
        v-model="formValue.skillSet"
      />
      <label for="html">HTML</label>
      <br />
      <input
        type="checkbox"
        name=""
        id="css"
        value="css"
        v-model="formValue.skillSet"
      />
      <label for="css">CSS</label>
      <br />
      <input
        type="checkbox"
        name=""
        id="javascript"
        value="javascript"
        v-model="formValue.skillSet"
      />
      <label for="javascript">Javascript</label>
    </div>

    <div class="">
      <label for="">Year of Experience</label>
      <br />
      <input
        type="radio"
        name=""
        id="0-2"
        value="0-2"
        v-model="formValue.yearsOfExperience"
      />
      <label for="0-2">0-2</label>
      <br />
      <input
        type="radio"
        name=""
        id="3-5"
        value="3-5"
        v-model="formValue.yearsOfExperience"
      />
      <label for="3-5">3-5</label>
      <br />
      <input
        type="radio"
        name=""
        id="6-10"
        value="6-10"
        v-model="formValue.yearsOfExperience"
      />
      <label for="6-10">6-10</label>
    </div>

    <label for="age">Age</label>
    <input type="number" name="" id="age" v-model.number="formValue.age" />

    <button>Submit</button>
  </form>

  <h1 class="counter__title" :class="extraClass">Counter1</h1>
  <h1 class="counter__title" :class="isPromoted ? 'counter__promo' : ''">
    Counter2
  </h1>
  <h1 class="counter__title" :class="['class1', 'class2', 'class3']">
    Counter3
  </h1>
  <h1
    class="counter__title"
    :class="{
      promo: isPromoted,
      new: isNew,
      old: !isNew,
    }"
    :style="{ color: color, 'font-size': '20px' }"
  >
    Counter4
  </h1>
  <div class="text1" :style="h1Styles">text 1</div>

  <template v-if="showComponent">
    <div class="t1">t1</div>
    <div class="t2">t2</div>
    <div class="t3">t3</div>
  </template>

  <h3 v-for="a in arr" :key="a">{{ a }}</h3>
  <h3 v-for="(a, key, index) in obj" :key="a">{{ index }} {{ key }} {{ a }}</h3>

  <h2>King {{ counter }}</h2>

  <button @click="increment(), changeLuki('John')" class="counter__btn">
    Click Event
  </button>
  <h1>{{ name }}</h1>

  <div class="box">
    <div class="counter">{{ counter }}</div>
    <div class="buttons">
      <div class="add btn" @click="calculate('add')">+</div>
      <div class="subtract btn" @click="calculate('subtract')">-</div>
    </div>
  </div>

  <div class="box2">
    <Parent />
  </div>
  <!--
  <MultiSlots>
    <template #p2>
      <h1>Extra slots 2</h1>
    </template>
    <template #p3>
      <h1>Extra slots 3</h1>
    </template>
    <template #p1>
      <h1>Extra slots 1</h1>
    </template>
  </MultiSlots> -->
</template>

<style scoped lang="scss">
.counter {
  &__form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 30px;
  }
  &__title {
    font-size: 100px;
  }
  &__promo {
    background-color: #333;
    color: #fff;
  }
  &__btn {
    padding: 10px 20px;
    margin: 20px;
    background-color: #333;
    color: #fff;
    display: inline-block;
    text-align: center;
    border-radius: 5px;
    box-shadow: 2px 2px 10px rgba(51, 51, 51, 0.2);
    cursor: pointer;
    transition: all 0.3s ease-out;
    border: none;

    &:hover {
      background-color: rgba(51, 51, 51, 0.9);
      box-shadow: 2px 2px 14px 0px rgba(51, 51, 51, 0.6);
    }
  }

  &__input {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    outline: none;
    margin: 20px 0;
    box-shadow: 2px 2px 10px rgba(51, 51, 51, 0.2);
  }
}
.pink {
  color: pink;
}

h1 {
  font-size: 50px;
  color: red;
}

// .btn {
//   padding: 10px 20px;
//   margin: 20px;
//   background-color: #333;
//   font-size: #fff;
//   width: 200px;
//   text-align: center;
// }

.btn {
  padding: 10px 20px;
  margin: 20px;
  background-color: #333;
  color: #fff;
  display: inline-block;
  text-align: center;
  border-radius: 5px;
  box-shadow: 2px 2px 10px rgba(51, 51, 51, 0.2);
  cursor: pointer;
  transition: all 0.3s ease-out;
  border: none;

  &:hover {
    background-color: rgba(51, 51, 51, 0.9);
    box-shadow: 2px 2px 14px 0px rgba(51, 51, 51, 0.6);
  }
}

.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.counter {
  font-size: 50px;
}

.buttons {
  display: flex;
}

// .btn {
//   display: inline;
//   margin: 5px;
//   border-radius: 5px;
//   color: #fff;
//   background-color: #333;
//   height: 60px;
//   width: 60px;
//   font-size: 30px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
// }
</style>

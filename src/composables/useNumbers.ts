import { ref } from 'vue'

export default function () {
  const numbers = ref([12, 123, 33, 54, 6615, 162, 2347, 58, 19, 110, 3411])
  const addNumber = (num:number) => {
    numbers.value.push(num)
  }

  return { numbers, addNumber }
}

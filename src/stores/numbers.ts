import { defineStore } from 'pinia'

export const useNumbersStore = defineStore('numbers', {
  state: () => {
    return {
      numbers: [
        12, 22, 33, 4, 5, 6, 6, 7, 8, 9, 0, 111, 1, 2, 134, 1234, 52345
      ]
    }
  },
  actions: {
    addNumber (num:number) {
      this.numbers.push(num)
    },
    doubleNumber2 () {
      return this.numbers.map((num) => num * 2)
    },
    clean () {
      this.numbers = [1, 2, 3]
    }
  },
  getters: {
    doubleNumber (state) {
      return state.numbers.map((num) => num * 2)
    },
    filterNumber: (state) => {
      return (minNumber:number) => state.numbers.filter((num) => num >= minNumber)
    }
  }
})

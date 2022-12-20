import { createStore } from 'vuex'

export default createStore({
  state: {
    // data
    allUsers: [
      { userId: 'timo', name: 'Tim', city: 'Seoul', password: 123 },
      { userId: 'jake112', name: 'Jake', city: 'Seoul', password: 456 },
      { userId: 'freedobi', name: 'Harry', city: 'Daegu', password: 789 }
    ]
  },
  getters: {
    allUsersCount: (state) => {
      return state.allUsers.length
    },
    countOfSeoul: (state) => {
      let count = 0
      state.allUsers.forEach((user) => {
        if (user.city === 'Seoul') count++
      })
      return count
    },
    percentOfSeoul: (state, getters) => {
      return ((getters.countOfSeoul / getters.allUsersCount) * 100).toFixed(1)
    }
  },
  mutations: {},
  actions: {},
  modules: {}
})

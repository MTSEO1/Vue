<template>
  <div class="container">
    <div class="input-form">
      <input type="text" v-model="userId" placeholder="아이디" />
      <input type="password" v-model="password" placeholder="비밀번호" />
      <input type="text" v-model="name" placeholder="이름" />
      <input type="text" v-model="city" placeholder="도시" />
      <input type="button" @click="signUp" value="가입하기" />
    </div>
  </div>
</template>
<script>
// import { mapMutations } from 'vuex'
export default {
  name: 'SignUp',
  components: {},
  data() {
    return {
      userId: null,
      password: null,
      name: null,
      city: null
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    // ...mapMutations(['addUsers']),
    signUp() {
      const userObj = {
        userId: this.userId,
        password: this.password,
        name: this.name,
        city: this.city
      }
      this.$store.commit('addUsers', userObj)
      // this.addUsers(userObj)
      this.clearForm()
    },
    clearForm() {
      this.userId = null
      this.password = null
      this.name = null
      this.city = null
    }
  }
}
</script>
<style scoped>
.input-form {
  display: flex;
  flex-direction: column;
}
input {
  margin: 12px;
}
</style>

<template>
  <div class="container">
    <div class="input-form">
      <input type="text" placeholder="아이디" />
      <input type="password" placeholder="비밀번호" />
      <input type="text" placeholder="이름" />
      <input type="text" placeholder="도시" />
      <input type="button" value="가입하기" />
    </div>
  </div>
</template>
<script>
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
    // signUp() {
    //   let userObj = {
    //     userId: this.userId,
    //     password: this.password,
    //     name: this.name,
    //     city: this.city
    //   }
    //   this.clearForm()
    // },
    // clearForm() {
    //   ;(this.userId = null),
    //     (this.password = null),
    //     (this.name = null),
    //     (this.city = null)
    // }
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

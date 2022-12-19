<template>
  <div>
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
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
<style scope>
.input-form {
  display: flex;
  flex-direction: column;
}
input {
  margin: 12px;
}
</style>

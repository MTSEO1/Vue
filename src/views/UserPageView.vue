<template>
  <div class="container">
    <div id="all-user">
      <h1>All Users</h1>
      <AllUsers />
    </div>
    <div id="sign-up">
      <h1>Sign Up</h1>
      <SignUp />
    </div>
  </div>
</template>
<script>
import AllUsers from '@/components/user/AllUsers.vue'
import SignUp from '@/components/user/SignUp.vue'
export default {
  components: {
    AllUsers,
    SignUp
  },
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
<style scoped>
.container {
  display: flex;
  justify-content: center;
}
#all-user {
  width: 300px;
  border: 1px solid black;
  margin: 12px;
  padding: 30px;
}
#sign-up {
  width: 300px;
  border: 1px solid black;
  margin: 12px;
  padding: 30px;
}
</style>

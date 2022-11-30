<template>
  <div>
    <h1>Hello, {{ userName }}</h1>
    <p>{{ message }}</p>
  </div>
  <div>
    <router-link to="/study">Back</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: 'John Doe',
      message: 'Welcome Study Vue page',
      arr: [],
      obj: {}
    }
  }
}
</script>
<style scoped></style>

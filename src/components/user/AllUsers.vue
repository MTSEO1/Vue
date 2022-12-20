<template>
  <div>
    <div
      class="container"
      v-for="(user, index) in $store.state.allUsers"
      :key="index"
    >
      <h4>{{ user.name }}</h4>
      <p>id: {{ index }} / {{ user.city }} 거주</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AllUsers',
  components: {},
  data() {
    return {}
  },
  setup() {},
  created() {},
  mounted() {
    // EventBus.$on('signUp', users) => {
    //   this.$store.state.allUsers.push(users)
    // }
  },
  unmounted() {},
  methods: {}
}
</script>
<style scoped>
h4,
p {
  margin: 0;
}
</style>

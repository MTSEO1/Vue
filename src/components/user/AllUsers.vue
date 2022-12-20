<template>
  <div>
    <div class="container" v-for="user in users" :key="user">
      <h4>{{ user.name }}</h4>
      <p>id: {{ user.id + 1 }} / {{ user.city }} 거주</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AllUsers',
  components: {},
  data() {
    return {
      users: [
        { id: 0, name: 'Tim', city: 'Seoul', password: 123 },
        { id: 1, name: 'Jake', city: 'Seoul', password: 456 },
        { id: 2, name: 'Harry', city: 'Daegu', password: 789 }
      ]
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
h4,
p {
  margin: 0;
}
</style>

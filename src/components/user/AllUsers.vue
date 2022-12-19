<template>
  <div>
    <div class="user-tap" v-for="user in users" :key="user">
      <div>
        <h4>{{ user.name }}</h4>
      </div>
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
        { id: 0, name: 'Tim', city: 'Seoul' },
        { id: 1, name: 'Jake', city: 'Seoul' },
        { id: 2, name: 'Harry', city: 'Daegu' }
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
<style scope></style>

<template>
  <div>
    <h1>Full Name : {{ fullName }}</h1>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      firstName: 'Mintaek',
      LastName: 'Seo'
    }
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.LastName
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>

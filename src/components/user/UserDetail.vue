<template>
  <div>
    <h5>User Detail</h5>
    <p>{{ dateFormat }}</p>
  </div>
</template>
<script>
import dateFormat from '../../mixins/dateFormat'

export default {
  name: 'UserDetail',
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
  methods: {},
  mixins: [dateFormat]
}
</script>
<style scope>
div {
  border: 1px solid black;
}
</style>

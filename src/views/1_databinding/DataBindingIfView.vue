<!-- template에도 v-if 적용 가능 / v-show는 불가 -->
<template>
  <div v-if="type == 'A'">A</div>
  <div v-else-if="type == 'B'">B</div>
  <div v-else>C</div>
  <div>
    <router-link to="/study">Back</router-link>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      type: 'B'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>

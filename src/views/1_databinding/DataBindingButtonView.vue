<template>
  <div>
    <input type="text" v-model="textValue" />
    <button type="button" v-bind:disabled="textValue == ''">확인</button>
  </div>
  <div>
    <router-link to="/study">Back</router-link>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      textValue: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>

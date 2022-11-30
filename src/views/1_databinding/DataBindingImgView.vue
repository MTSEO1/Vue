<template>
  <div>
    <img v-bind:src="imgSrc" />
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
      imgSrc:
        'https://cdn.statically.io/img/austingil.com/wp-content/uploads/Vue-Blog-Cover.svg'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>

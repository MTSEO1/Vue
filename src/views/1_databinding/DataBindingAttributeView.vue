<template>
  <div>
    <input type="text" v-bind:value="userId" readonly />
    <input type="text" :value="userId" readonly />
    <br />
    <img :src="imgSrc" alt="" style="width: 100px; height: auto" />
    <br />
    <input type="search" name="" id="" v-model="txt1" />
    <button :disabled="txt1 === ''">조회</button>
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
      userId: 'Mike',
      imgSrc:
        'https://w7.pngwing.com/pngs/854/555/png-transparent-vue-js-hd-logo-thumbnail.png',
      txt1: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>

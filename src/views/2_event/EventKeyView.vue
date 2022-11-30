<template>
  <div>
    <div>
      <input
        type="search"
        name=""
        id=""
        v-model="searchTxt"
        @keyup.enter="doSearch"
      />
      <button @click="doSearch">조회</button>
    </div>
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
      searchTxt: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doSearch() {
      console.log(this.searchTxt)
    }
  }
}
</script>

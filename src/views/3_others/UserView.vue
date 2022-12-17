<template>
  <div>
    <h1>User</h1>
  </div>
  <div>
    <h4>Date & Time : {{ getDateAndTime(createdAt) }}</h4>
  </div>
</template>
<script>
import { dateFormat } from '../../mixins/dateFormat'

export default {
  components: {},
  data() {
    return {
      createdAt: null
    }
  },
  setup() {},
  created() {
    this.createdAt = new Date()
  },
  mounted() {},
  unmounted() {},
  methods: {
    // getDateAndTime(date) {
    //   const hours = date.getHours()
    //   const minutes = date.getMinutes()
    //   const fullDate = `${date.getFullYear()}년 ${
    //     date.getMonth() + 1
    //   }월 ${date.getDate()}일`
    //   return `${fullDate} ${hours}시 ${minutes}분`
    // }
  },
  mixins: [dateFormat]
}
</script>

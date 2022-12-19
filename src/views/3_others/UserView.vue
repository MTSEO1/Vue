<template>
  <div>
    <h1>User</h1>
  </div>
  <div>
    <h4>Date & Time : {{ getDateAndTime(createdAt) }}</h4>
    <p>{{ greeting }}</p>
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
    /**
     * '본 컴포넌트 메서드의 함수'와 '믹스인 메서드의 함수' 둘의 같은 함수가 실행 됐을 때
     * 본 컴포넌트 메서드의 함수가 우선적으로 실행된다.
     */
    // getDateAndTime(date) {
    //   const hours = date.getHours()
    //   const minutes = date.getMinutes()
    //   const fullDate = `${date.getFullYear()}년 ${
    //     date.getMonth() + 1
    //   }월 ${date.getDate()}일`
    //   return `${fullDate} ${hours}시 ${minutes}분`
    // }
  },
  computed: {
    greeting() {
      return `반가워요! ${this.sayMixin}`
    }
  },
  mixins: [dateFormat]
}
</script>

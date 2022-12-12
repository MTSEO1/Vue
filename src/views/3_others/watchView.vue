<template>
  <div>
    <!-- watch는 초기에 할당된 값에 변경이 일어나야 watch에 정의한 함수를 실행한다. -->
    <h1>Full Name : {{ fullName }}</h1>

    <!-- 버튼 실행 후 firstName이 변경되고 난 뒤 h1태그의 fullName이 나타난다. -->
    <button @click="changeName">Change</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstName: 'Cheonjae',
      lastName: 'Seo',
      fullName: 'Cheonjae Seo'
    }
  },
  watch: {
    firstName() {
      this.fullName = this.firstName + ' ' + this.lastName
    },
    lastName() {
      this.fullName = this.firstName + ' ' + this.lastName
    }
  },
  methods: {
    changeName() {
      this.firstName = 'Babo'
    }
  }
}
</script>

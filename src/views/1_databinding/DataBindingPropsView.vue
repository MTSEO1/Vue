<template>
  <div>
    <h4>유저 이름</h4>
    <p>{{ name }}</p>
    <button @click="changeName">변경하기</button>
  </div>
  <div>
    <ChildProps :nameOfChild="name" />
  </div>
</template>
<script>
import ChildProps from '@/components/PropsChild'

export default {
  components: {
    ChildProps
  },
  data() {
    return {
      name: '홍길동'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    changeName() {
      this.name = '김아무개'
    }
  }
}
</script>

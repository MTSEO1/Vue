<template>
  <div>
    <h3>유저 이름 확인하기</h3>
    <p>{{ nameOfChild }}</p>
  </div>
</template>
<script>
export default {
  name: 'ChildProps',
  props: {
    /**
    Props를 자식 컴포넌트에서 변경하지 말 것.
    부모 컴포넌트에서 리랜더링 될 때 값이 다시 덮어씌어질 수 있음
    */
    nameOfChild: {
      type: String
      // require: false,
      // default: '김철수'
    }
  },
  components: {},
  data() {
    return {}
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>

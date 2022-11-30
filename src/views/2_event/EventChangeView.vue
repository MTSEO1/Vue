<template>
  <div>
    <select name="" id="" @change="changeCity" v-model="selectedCity">
      <option value="">==도시선택==</option>
      <option
        :value="city.cityCode"
        :key="city.cityCode"
        v-for="city in cityList"
      >
        {{ city.title }}
      </option>
    </select>
    <select name="" id="">
      <option
        value="dong.dongCode"
        :key="dong.dongCode"
        v-for="dong in selectedDongList"
      >
        {{ dong.dongTitle }}
      </option>
    </select>
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
      selectedCity: '',
      cityList: [
        { cityCode: '02', title: '서울' },
        { cityCode: '053', title: '대구' },
        { cityCode: '051', title: '부산' }
      ],
      dongList: [
        { cityCode: '02', dongCode: '1', dongTitle: '서울 1동' },
        { cityCode: '02', dongCode: '2', dongTitle: '서울 2동' },
        { cityCode: '02', dongCode: '3', dongTitle: '서울 3동' },
        { cityCode: '02', dongCode: '4', dongTitle: '서울 4동' },
        { cityCode: '053', dongCode: '1', dongTitle: '대구 1동' },
        { cityCode: '053', dongCode: '2', dongTitle: '대구 2동' },
        { cityCode: '053', dongCode: '3', dongTitle: '대구 3동' },
        { cityCode: '053', dongCode: '4', dongTitle: '대구 4동' },
        { cityCode: '051', dongCode: '1', dongTitle: '부산 1동' },
        { cityCode: '051', dongCode: '2', dongTitle: '부산 2동' },
        { cityCode: '051', dongCode: '3', dongTitle: '부산 3동' },
        { cityCode: '051', dongCode: '4', dongTitle: '부산 4동' }
      ],
      selectedDongList: []
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    changeCity() {
      this.selectedDongList = this.dongList.filter(
        (dong) => dong.cityCode === this.selectedCity
      )
    }
  }
}
</script>

<template>
  <div>
    <div>
      <select name="" id="">
        <option value="city.code" :key="city.code" v-for="city in cities">
          {{ city.title }}
        </option>
      </select>
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>DrinkName</th>
            <th>Price</th>
            <th>Qty</th>
            <th>T.Price</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="drink.drinkId" v-for="drink in drinkList">
            <td>{{ drink.drinkId }}</td>
            <td>{{ drink.drinkName }}</td>
            <td>{{ drink.price }}</td>
            <td><input type="number" name="" id="" v-model="drink.qty" /></td>
            <td>{{ drink.price * drink.qty }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      cities: [
        { title: '서울', code: '02' },
        { title: '부산', code: '051' },
        { title: '대구', code: '053' }
      ],
      drinkList: [
        {
          drinkId: '1',
          drinkName: 'Coca Cola',
          price: 800,
          qty: 1
        },
        {
          drinkId: '2',
          drinkName: 'Pepsi',
          price: 700,
          qty: 1
        },
        {
          drinkId: '3',
          drinkName: 'Fanta',
          price: 700,
          qty: 1
        },
        {
          drinkId: '4',
          drinkName: 'Sprite',
          price: 750,
          qty: 1
        },
        {
          drinkId: '5',
          drinkName: 'Pocari Sweater',
          price: 650,
          qty: 1
        },
        {
          drinkId: '6',
          drinkName: 'Getoray',
          price: 700,
          qty: 1
        },
        {
          drinkId: '7',
          drinkName: 'Can Coffee',
          price: 500,
          qty: 1
        }
      ]
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>

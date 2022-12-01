<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송료</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(product, i) in productList">
          <td>{{ product.product_name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.delivery_price }}</td>
        </tr>
      </tbody>
    </table>
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
      productList: [
        {
          product_name: '기계식 키보드',
          price: 250000,
          category: '노트북/태블릿',
          delivery_price: 3000
        },
        {
          product_name: '무선마우스 3s',
          price: 119000,
          category: '노트북/태블릿',
          delivery_price: 3000
        },
        {
          product_name: '태블릿 pro 11',
          price: 899000,
          category: '노트북/태블릿',
          delivery_price: 3000
        },
        {
          product_name: '태블릿 거치대',
          price: 39000,
          category: '노트북/태블릿',
          delivery_price: 5000
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
<style>
td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="poster-board">
      <div>
        <PosterBoard />
      </div>
      <div>
        <PosterBoard />
      </div>
      <div>
        <PosterBoard />
      </div>
      <div>
        <PosterBoard />
      </div>
      <div>
        <PosterBoard />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import PosterBoard from '@/components/PosterBorad.vue'

export default {
  name: 'HomeView',
  components: {
    PosterBoard
  }
}
</script>
<style>
.poster-board {
  width: 100%;
  background-color: bisque;
  display: flex;
  flex-flow: wrap;
}
</style>

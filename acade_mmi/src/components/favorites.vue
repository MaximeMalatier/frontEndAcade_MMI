<template>
  <div>
    <h1>{{msg}}</h1>
  </div>
</template>

<script>

export default {
  name: "Favorites",
  data(){
    return{
      msg: 'Zipette'
    }
  }
}
</script>

<style scoped>
h1, h2{
  font-weight: normal;
  color: red;
}
</style>

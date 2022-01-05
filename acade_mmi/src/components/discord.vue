<template>


  <main>
    <div class="title-app">
      <router-link to="/">
        <h1>Acade'MMI </h1>
      </router-link>
      <h3 class="subtitle">A place to learn the basics</h3>
    </div>


    <div class="discord-article">

      <h2>Rejoignez notre communauté sur notre discord</h2>
      <p></p>
    <div class="discord">
    <iframe src="https://discord.com/widget?id=911517098424016946&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
    </div>

    </div>
  </main>
</template>

<script>

export default {
  name: "Discord",
  data(){
    return{

    }
  }
}
</script>

<style scoped>

h1{
  color: #CD99AF;
  font-family: Raleway,sans-serif;
  font-weight: 900;
  font-size: 85px;
  grid-column: 2/5;
  display: block;
  width: fit-content;
  margin-bottom: 0;
  margin-top: 5px;
}

.subtitle{
  color: #3373E5;
  font-weight: 600;
  font-style: italic;
  font-size: 31px;
  grid-column: 4/6;
  width: fit-content;
  margin-top: 0;
  margin-left: 23%;
}
h2{
  font-size: 45px;
  font-weight: 800;
  text-align: left;
  padding: 15px;
  color: #F1EDDD;

}

.subtitle{
  color: #3373E5;
  font-weight: 600;
  font-style: italic;
  font-size: 31px;
  grid-column: 4/6;
  width: fit-content;
  margin-top: 0;
  margin-left: 23%;
}


.discord-article{
  background-color: #211F1F;
  border-radius: 20px;
  margin-bottom: 100px;
}
@media only screen and (max-width: 780px) {
  h2 {
    font-size: 25px;
  }
  #app > div > main > div.discord-article > div > iframe{
    width: 100%;
  }
}

</style>

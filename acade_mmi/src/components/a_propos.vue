<template>
 <main>
   <div class="title-app">
     <router-link to="/">
       <h1>Acade'MMI </h1>
     </router-link>
     <h3 class="subtitle">A place to learn the basics</h3>
   </div>



   <div class="a_propos">

     <h2>A Propos</h2>

     <p>Si vous êtes arrivés jusqu’ici, c’est que vous voulez en découvrir un peu plus sur les raisons de la création de ce site ! </p>

     <p>Acade’MMI est un projet universitaire réalisé par Martin Liger, Benjamin Lugan et Maxime Malatier au DUT MMI Montbéliard et dirigé par Pascal Chatonay, notre professeur-chercheur et commanditaire de ce projet. Ce dernier consiste à concevoir un site internet en suivant un processus professionnel passant par une charte graphique, une maquette de site, une étude préalable, des travaux techniques puis l’intégration web du site.</p>

     <p>Ce site vise à créer une communauté d’aide et de découverte autour des matières étudiées au BUT MMI Montbéliard mais est aussi utile pour tous les MMI de France et les personnes souhaitant s’intéresser à plusieurs thèmes traités à travers ce BUT.</p>

   </div>
 </main>
</template>

<script>
export default {
  name: "apropos"
}
</script>

<style scoped>

main{
  color: #F1EDDD;
}
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
  font-size: 65px;
  font-weight: 800;
  text-align: right;
  margin: 0;
  flex: 0 1 100%;
  margin-right: 2%;
  padding: 15px;
}

p{
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 30px;
  padding: 10px;
}

.a_propos{
  background-color: #211F1F;
  border-radius: 20px;
  margin-bottom: 100px;
}

@media only screen and (max-width: 780px) {

  p{
    font-size: 16px;
  }

  h2{
    font-size: 35px;
  }
}
</style>

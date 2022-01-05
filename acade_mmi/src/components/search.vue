<template xmlns="http://www.w3.org/1999/html">

    <main>

      <div class="title-app">
        <router-link to="/">
          <h1>Acade'MMI </h1>
        </router-link>
        <h3 class="subtitle">A place to learn the basics</h3>
      </div>


      <div class="searchbar">
        <h2>Que recherchez-vous ?</h2>
        <form action="GET">
          <input type="text" id="search" v-model="q" name="search" placeholder="Recherchez ce que vous voulez...">
          <div v-if="this. q && getFilteredTuto.length >0">
            {{getFilteredTuto.length}} tuto<span v-if="getFilteredTuto.length >1">s</span> correspondant à votre recherche.
          </div>
        </form>
      </div>


      <div class="proposition">

        <div class="last-trends">
          <h2>Chercher les tutos que vous voulez !</h2>

            <div class="video_right">

                <router-link v-for="tuto in getFilteredTuto" :key="tuto.id" :to="'tuto/' + tuto.id">
                  <iframe :src="tuto.acf.url_video_tuto" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <figcaption>voir la page du tuto</figcaption>
                </router-link>

            </div>
          </div>
        </div>



    </main>

</template>

<script>
import param from "../param/param";

export default {
  name: 'listeSchoolSubject',
  tuto: 'tuto',
  data(){
    return{
      liste:[],
      listeTuto:[],
      firstTuto:[],
      searchedTuto:[],
      q: '',

    }
  },

  created() {
    axios.get(param.host+"school_subject")
      .then(response=>{
        console.log("Response", response);

        this.liste = response.data;
      })

      .catch(error=>console.log(error))

    axios.get(param.host+"tuto")
      .then(response=>{
        this.listeTuto = response.data;
        console.log("Liste", this.listeTuto);
      })
      .catch(error=>console.log(error))

  },



  computed:{
    getFilteredTuto()
    {
      return this.listeTuto.filter(tuto=>{
        return tuto.acf.title_tuto.toLowerCase().includes(this.q.toLowerCase())
      })

    }
  },


};




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
  color: #F1EDDD;
  font-family: Raleway,sans-serif;
  font-weight: 200;
  font-size: 53px;
  margin-top: 0;
  margin-bottom: 0;
}

input{
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  height: 40px;
  font-family: Raleway,sans-serif;
  font-weight: 300;
  font-size: 25px;
}

form{
  padding-bottom: 20px;
  padding-top: 30px;
}


ul{
  list-style: none;
}

h2{
  font-size: 45px;
  font-weight: 800;
  text-align: left;
  margin: 0;
  flex: 0 1 100%;
  padding: 15px;
  color: #F1EDDD;
  margin-left: 5%;

}



.proposition{
  background-color: #211F1F;
  border-radius: 20px;
  margin-bottom: 100px;

}

.proposition, figcaption{
  color: #F1EDDD;
}

.searchbar{
  background-color: #211F1F;
  margin-bottom: 50px;
  padding: 50px;
}

.container_video{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: auto;
  width: auto;



}


.video_right figure iframe {
  width: 400px;
  height: 200px;
}

.video_right{
  overflow-y: auto;
  max-height: 500px;
  width: 30%;
  margin-left: auto;
  margin-right: auto;
}

.container_video .left-video{
  display: none;
}
#app > div > main > div.proposition > div.last-trends > div > figure:nth-child(1){
  display: block;

}

#app > div > main > div.proposition > div.populars > div > figure:nth-child(1){
  display: block;

}

#app > div > main > div.proposition > div.dev > div > figure:nth-child(1){
  display: block;
}

#app > div > main > div.proposition > div.last-trends > div > div > figure:nth-child(1){
  display: none;
}

#app > div > main > div.proposition > div.populars > div > div > figure:nth-child(1){
  display: none;
}

#app > div > main > div.proposition > div.dev > div > div > figure:nth-child(1){
  display: none;
}

@media only screen and (min-width: 800px) {

  .title-app{
    display: none;
  }

}

@media only screen and (max-width: 780px) {
  h2 {
    font-size: 25px;
    padding: 0;
  }

  #search{
    width: 100%;
    height: 20px;
    font-size: 14px;
  }

  .video_right{
    width: 100%;
  }

  #app > div > main > div.proposition > div > h2{
    margin-bottom: 10px;
  }
}


</style>

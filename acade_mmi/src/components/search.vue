<template xmlns="http://www.w3.org/1999/html">

    <main>

      <div class="searchbar">
        <h1>Que recherchez-vous ?</h1>
        <form action="GET">
          <input type="text" id="search" name="search" placeholder="Recherchez ce que vous voulez...">
        </form>
      </div>

      <div class="proposition">

        <div class="last-trends">
          <h2>Dernières tendances</h2>

          <div class="container_video">

            <figure class="left-video" v-for="tuto in listeTuto" :key="tuto.id">
              <iframe class="left-video-iframe" :src="tuto.acf.url_video_tuto" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <figcaption>par {{tuto.acf.publisher_tuto.nickname}} {{tuto.acf.post_date_tuto}}"</figcaption>
            </figure>

            <div class="video_right">

                <figure v-for="tuto in listeTuto" :key="tuto.id">
                  <iframe :src="tuto.acf.url_video_tuto" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <figcaption>par {{tuto.acf.publisher_tuto.nickname}} {{tuto.acf.post_date_tuto}}</figcaption>
                </figure>

            </div>
          </div>
        </div>


          <div class="populars">
            <h2>Populaires</h2>

            <div class="container_video">

              <figure class="left-video" v-for="tuto in listeTuto" :key="tuto.id">
                <iframe class="left-video-iframe" :src="tuto.acf.url_video_tuto" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <figcaption>par {{tuto.acf.publisher_tuto.nickname}} {{tuto.acf.post_date_tuto}}"</figcaption>
              </figure>


              <div class="video_right">
                <figure v-for="tuto in listeTuto" :key="tuto.id">
                  <iframe :src="tuto.acf.url_video_tuto" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <figcaption>par {{tuto.acf.publisher_tuto.nickname}} {{tuto.acf.post_date_tuto}}</figcaption>
                </figure>


              </div>
            </div>
          </div>

          <div class="dev">
            <h2>Développement</h2>

            <div class="container_video">

              <figure class="left-video" v-for="tuto in listeTuto" :key="tuto.id">
                <iframe class="left-video-iframe" :src="tuto.acf.url_video_tuto" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <figcaption>par {{tuto.acf.publisher_tuto.nickname}} {{tuto.acf.post_date_tuto}}"</figcaption>
              </figure>


              <div class="video_right">
                <figure v-for="tuto in listeTuto" :key="tuto.id">
                  <iframe :src="tuto.acf.url_video_tuto" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <figcaption>par {{tuto.acf.publisher_tuto.nickname}} {{tuto.acf.post_date_tuto}}</figcaption>
                </figure>

              </div>
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
      firstTuto:[]
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

};




</script>
<style scoped>
h1{
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

.left-video{
  width: calc(100% - 300px);
  height: auto;
}

.left-video-iframe{
  width: 100%;
  height: 400px;
}

.video_right figure iframe {
  width: 400px;
  height: 200px;
}

.video_right{
  overflow-y: auto;
  max-height: 500px;
  width: 60%;
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
</style>

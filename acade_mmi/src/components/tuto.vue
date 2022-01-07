<template>

  <main>


    <div class="title-app">
      <router-link to="/">
        <h1>Acade'MMI </h1>
      </router-link>
      <h3 class="subtitle">A place to learn the basics</h3>
    </div>

    <div class="tuto">
    <div class="first-vid">
    <div class="main-vid">
      <figure>
        <iframe class="left-video-iframe" :src="tuto.acf.url_video_tuto" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <figcaption>par {{tuto.acf.publisher_tuto.nickname}} {{tuto.acf.post_date_tuto}}</figcaption>
      </figure>
    </div>

      <div class="description-fvid">
        <h3>{{tuto.acf.title_tuto}}</h3>
        <p>
          {{tuto.acf.description_tuto}}
        </p>

      </div>


    </div>



    </div>
  </main>
</template>

<script>
import param from "../param/param";

export default {
  tuto: 'tuto',
  name: 'tuto',
  data() {
    return {
      tuto: [],
      idTuto: [],
      listeTuto: [],

    }
  },

  created() {
    axios.get(param.host + "tuto/" + this.$route.params.id)
      .then(response => {
        console.log("Response", response);

        this.tuto = response.data;
        this.idTuto= this.tuto.id;
      })

      .catch(error => console.log(error))


    axios.get(param.host + "tuto")
      .then(response => {
        this.listeTuto = response.data;
        console.log("Liste", this.listeTuto);
      })
      .catch(error => console.log(error))


  },

}
</script>

<style scoped>

.tuto{
  background-color: #211F1F;
  border-radius: 20px;
  margin-bottom: 100px;
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

h3{
  font-size: 40px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 50px;
  color: #F1EDDD;
  margin-top: 25px;
}
.first-vid{
  min-height: 400px;
  max-height: 700px;
  margin-top: 115px;
  margin-bottom: 240px;
}

#app > div > main > div.tuto > div > div.description-fvid > p{
  font-size: 17px;
  font-weight: 700;
  margin: 0;
  color: #F1EDDD;
}

#app > div > main > div.tuto > div > div.main-vid > figure > figcaption{
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

.container .school_text h2{
  font-family: Raleway, sans-serif;
  font-weight: 700;
  font-size: 54px;
  text-align: left;
}

.container .school_text p{
  font-size: 24px;
  font-weight: 700;
  font-style: italic;
  width: 30%;
  text-align: left;

}

.first-vid{
  display: flex;
  flex-direction: row;
}

.main-vid{
  width: fit-content;
  height: fit-content;
  max-height: 350px;
  min-width: 50%;
}
.main-vid  iframe{
  width: 100%;
  height: 300px;
  border-radius: 10px;
  margin-top: 25px;
}
.description-fvid{
  width: 100%;
}


@media only screen and (max-width: 780px){
  .first-vid{
    flex-direction: column-reverse;
  }

  #app > div > main > div.tuto > div > div.main-vid{
    padding-bottom: 50px;
  }
}
</style>



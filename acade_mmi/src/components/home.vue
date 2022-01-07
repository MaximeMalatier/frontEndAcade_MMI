<template>
  <main>

    <div class="title-app">
      <router-link to="/">
        <h1>Acade'MMI </h1>
      </router-link>
    <h3 class="subtitle">A place to learn the basics</h3>
    </div>


      <div class="trends">
        <h2>Dernière tendances</h2>



      <div class="first-vid" v-for="tuto in firstTuto" :key="tuto">



        <div class="main-vid" >
          <figure>

            <iframe  :src="tuto.acf.url_video_tuto" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


            <figcaption>par {{tuto.acf.publisher_tuto.nickname}} {{tuto.acf.post_date_tuto}}</figcaption>

          </figure>
        </div>

        <div class="description-fvid">
          <h3>{{tuto.acf.title_tuto}}</h3>
          <p>
            {{tuto.acf.description_tuto}}
          </p>

          <router-link :to="'tuto/'+ tuto.id"><figcaption>En découvrir plus </figcaption></router-link>

        </div>

      </div>

        <ul class="h-feed">


          <div v-for="tuto in listeTuto" :key="tuto.id">
            <figure>

              <iframe :src="tuto.acf.url_video_tuto" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


              <router-link :to="'tuto/'+ tuto.id"><figcaption>voir la page du tuto </figcaption></router-link>

<!--              {{tuto.acf.publisher_tuto.nickname}} {{tuto.acf.post_date_tuto}}-->
            </figure>
          </div>



        </ul>

      </div>

      <div class="triade">


        <h2>Pôles de compétences</h2>

          <div class="tri-content">

          <div class="tri-text">
            <div class="partial-border">
              <h3>La Triade</h3>

              <p>
                Voici les 3 principales matières enseignées durant le BUT MMI. Elles permettent d'avoir un très bon bagage de compétences en créations sur le web
              </p>
            </div>
          </div>

        <div class="tri-img">
          <img src="../assets/images/home/icons.png" alt="Icones des thème de tuto">
        </div>

            <div class="tri-img-mobile">
              <ul>
                <li><img src="../assets/images/home/icon1.png" alt="icon 1"></li>
                <li><img src="../assets/images/home/icon2.png" alt="icon 2"></li>
                <li><img src="../assets/images/home/icon3.png" alt="icon 3"></li>
              </ul>
            </div>
      </div>


      </div>

    <div class="tables">
      <h2>Table des matières</h2>

      <div class="school_subject">


          <router-link class="schoolsub" v-for="school_subject in listeOrderByName" :key="school_subject.id"  :to="'school_subject/' +school_subject.id">

            <h3>{{school_subject.acf.name_school_subject}}</h3>

            <p>
              {{school_subject.acf.description_school_subject}}
            </p>

          </router-link>


      </div>
    </div>

  </main>
</template>

<script>
import param from "../param/param";

export default {
  name: 'home',
  tuto: 'tuto',
  data(){
    return{
      liste:[],
      listeTuto:[],
      firstTuto:[],
    }
  },

  created() {
    axios.get(param.host+"school_subject?per_page=100")
    .then(response=>{
      console.log("Response", response);

      this.liste = response.data;
    })

    .catch(error=>console.log(error))

    axios.get(param.host+"tuto?per_page=6")
      .then(response=>{
        this.listeTuto = response.data;
        console.log("Liste", this.listeTuto);
      })
      .catch(error=>console.log(error))

    axios.get(param.host+"tuto?per_page=1")
      .then(response=>{
        this.firstTuto = response.data;
      })
      .catch(error=>console.log(error))
  },



  computed: {
    listeOrderByName: function (){
      function compare(a, b){
        if (a.acf.name_school_subject < b.acf.name_school_subject) return -1;
        if (a.acf.name_school_subject > b.acf.name_school_subject) return 1;
        return 0;
      }
      return this.liste.sort(compare)
    }
  }
}


</script>

<style scoped>
  h2, h3, p{
    font-weight: normal;
    color: #f1eddd;
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

  ul{
    list-style: none;
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

  h3{
    font-size: 49px;
    font-weight: 600;
    margin: 0;
    margin-bottom: 50px;
  }

  p{
    font-size: 17px;
    font-weight: 700;
    margin: 0;
  }

  a{
    color: #f1eddd;
  }
  .trends, .triade, .tables{
    background-color: #211F1F;
    border-radius: 20px;
    margin-bottom: 100px;
  }
  #app > div > main > div.trends > ul{
    padding: 0;
  }

  .trends figure{
    display: flex;

    flex-direction: column;
  }

  #app > div > main > div.trends > div:nth-child(2) > div.main-vid > figure{
    height: 350px;
  }
  #app > div > main > div.trends > div.first-vid > div.main-vid > figure > iframe{
    width: 100%;
    height: 100%;
    border-radius: 10px;

  }

  #app > div > main > div.trends > div.first-vid> div.main-vid > figure > figcaption{
    color: #f1eddd;
  }

  .trends ul li figure iframe{
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .trends ul li figure figcaption{
    color: #f1eddd;
  }

  .first-vid, .tri-content{
    display: flex;
    flex-direction: row;
  }

  .main-vid{
    width: fit-content;
    height: fit-content;
    min-width: 50%;
    min-height: 350px;
  }

  .h-feed{
    display: flex;
    flex-direction: row;
  }

  .tri-content{
    padding: 50px;
  }
  .tri-img, .tri-text{
    width: 50%;

  }
  #app > div > main > div.triade > div > div.tri-img > img{
    width: 100%;
  }


  .tri-text {
    text-align: left;
  }

  #app > div > main > div.triade > div > div.tri-text > p{
    width: 40%;
  }

  #app > div > main > div.triade > div > div.tri-text > div> h3{
    margin-bottom: 25px;
    margin-left: 25%;
    width: fit-content;
  }

  #app > div > main > div.triade > div > div.tri-text > div > p{
    margin-left: 25%;
    width: 49%;
  }

  .school_subject{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 50px;
    align-items: center;
    justify-content: center;

  }

  #app > div > main > div.tables > .school_subject> .schoolsub{
    width: 30%;
    max-height: auto;
    min-height: 350px;

  }
  .school_subject .schoolsub h3{
    margin-bottom: 20px;
  }

  .schoolsub{
    text-align: left;
    background-color: #685ddf;
    padding: 20px 0 20px 0px;
    margin: 3px;
    text-decoration: none;

  }

  .schoolsub h3{
    margin-left: 10%;
  }
  .schoolsub p{
    width: 60%;
    margin-left: 10%;
  }

  .first-vid{
    display: none;
  }

  #app > div > main > div.trends > div:nth-child(2){
    display: flex;
    margin-top: 50px;
  }

  #app > div > main > div.trends > ul > div:nth-child(1){
    display: none;
  }

  .h-feed figure figcaption{
    color: #F1EDDD;
  }

  #app > div > main > div.trends > ul{
    max-width: 100%;
    overflow-x: auto;
  }

.schoolsub h3{
  font-size: 35px;

}

  #app > div > main > div.trends > div:nth-child(2) > div.description-fvid{
    width: 100%;
  }

  a{
    text-decoration: none;
  }

  /*MEDIA QUERIES*/
  @media only screen and (min-width: 800px) {

    .tri-img-mobile{
      display: none;
    }

  }

  @media only screen and (max-width: 780px) {

    h2{
      font-size: 22px;
    }

    #app > div > main > div.trends > div:nth-child(2){
      display: none;
    }

    #app > div > main > div.trends > ul > div:nth-child(1){
      display: block;
    }

    .h-feed{
      flex-direction: column;
      max-height: 500px;
    }
    .schoolsub p{
      display: none;
    }

    .tri-img{
      display: none;
    }

    .tri-img-mobile ul{
      margin: 0;
      padding: 0;
    }
    .schoolsub h3{
      font-size: 15px;
      text-align: center;
      vertical-align: center;
      margin-left: 0;
      margin-bottom: 0;


    }

    #app > div > main > div.triade > div > div.tri-text > div > p{
      width: 100%;
    }

    #app > div > main > div.triade > div > div.tri-text > div> h3{
      margin: 0;
      font-size: 25px;
    }
    .first-vid, .tri-content{
      flex-direction: column;
    }


    #app > div > main > div.tables > .school_subject> .schoolsub{
      min-height: 50px;
      width: 130px;
      height: 90px;
    }

    .school_subject{
      padding: 0;
      max-height: 500px;
      overflow-y: auto;
    }

    .tri-content{
      padding: 10px;
    }
    #app > div > main > div.triade > div > div.tri-text > div > h3{
      font-size: 20px;
      margin-bottom: 10px;
      margin-left: 30px;
    }
    .tri-text{
      width: 100%;
    }

    #app > div > main > div.triade > div > div.tri-text > div > p{
      margin-left: auto;
      font-size: 14px;
      width: 80%;
      margin-right: auto;
    }

    .partial-border{
      margin-bottom: 40px;
    }

  }
</style>

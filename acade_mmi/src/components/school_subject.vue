<template>

  <main>
    <div class="title-app">
      <router-link to="/">
        <h1>Acade'MMI </h1>
      </router-link>
      <h3 class="subtitle">A place to learn the basics</h3>
    </div>



    <div class="the-schoolsub">

        <div class="school_text">
          <h2>{{school_subject.acf.name_school_subject}}</h2>
          <p>
           {{school_subject.acf.description_school_subject}}
          </p>
        </div>


      <div class="h-feed">
        <li v-for="tuto in tutoFilter" :key="tuto.id">
          <iframe class="left-video-iframe" :src="tuto.acf.url_video_tuto" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <router-link :to="'/tuto/'+ tuto.id"><figcaption>voir la page du tuto</figcaption></router-link>
        </li>


      </div>


    </div>
  </main>
</template>

<script>
import param from "../param/param";

export default {
  tuto: 'tuto',
  name: 'school_subject',
  data() {
    return {
      school_subject: [],
      idSchoolSub: [],
      listeTuto: [],

    }
  },

  created() {
    axios.get(param.host + "school_subject/" + this.$route.params.id)
      .then(response => {
        console.log("Response", response);

        this.school_subject = response.data;
        this.idSchoolSub = this.school_subject.id;
      })

      .catch(error => console.log(error))


    axios.get(param.host + "tuto")
      .then(response => {
        this.listeTuto = response.data;
        console.log("Liste", this.listeTuto);
      })
      .catch(error => console.log(error))


  },
  computed: {
    tutoFilter: function () {
      return this.listeTuto.filter(function (tuto) {
        // On ne recupere que les ID des type_video de la vidéo avec map()
        let typeTuto = tuto.acf.school_subject_tuto.map(function (type) {
          return type.ID
        });
        // On ne renvoie que les vidéos correspondantes au type concerné
//                return (typeVideo.indexOf(param.typeFilm) >= 0 ? param.typeFilm : '');
        return (typeTuto.indexOf(this.idSchoolSub) >= 0 ? this.idSchoolSub : '');
      }.bind(this))
    }

  },
  // methods:{
  //   bySchoolSubject: function (schoolsub){
  //     return this.listeTuto.filter(function (tuto){
  //       return tuto.acf.school_subject_tuto.id === schoolsub
  //     })
  //   }
  // }
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

.container .school_text h2{
  font-family: Raleway, sans-serif;
  font-weight: 700;
  font-size: 44px;
  text-align: left;
}

.container .school_text p{
  font-size: 24px;
  font-weight: 700;
  font-style: italic;
  width: 80%;
  text-align: left;

}

.container .school_text{
  color: #F1EDDD;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 50px;
}



.the-schoolsub{
  background-color: #211F1F;
  border-radius: 20px;
  margin-bottom: 175px;
}

.h-feed{
  display: flex;
  flex-direction: row;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  overflow-x: auto;
  margin-top: 70px;
}

.h-feed li{
  list-style: none;
  margin-left: 30px;

}

.h-feed figcaption{
  color: #F1EDDD;
}

a{
  text-decoration: none;
}
.h-feed figure figcaption{
  color: #F1EDDD;
}


@media only screen and (max-width: 780px){
  .h-feed{
    flex-direction: column;
    max-height: 500px;
    overflow-x: hidden;
    width: 100%;
    padding-bottom: 10px;
  }

  .h-feed li{
    margin-left: 0;
  }

  #app > div > main > div.the-schoolsub > div.school_text > h2{
    font-size: 25px;
  }
  .container .school_text p{
    font-size: 15px;
    width: 100%;
  }

  .container .school_text{
    padding-top: 25px;
  }

}

</style>

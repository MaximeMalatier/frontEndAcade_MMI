<template>

  <main>
    <h1>Acade'MMI </h1>
    <h3 class="subtitle">A place to learn the basics</h3>
    <div class="school_div">



        <svg xmlns="http://www.w3.org/2000/svg" width="119" height="125" viewBox="0 0 119 125">
          <g id="Design_Paragraphe_CN" data-name="Design Paragraphe CN" transform="translate(4 125) rotate(-90)">
            <path id="Tracé_8" data-name="Tracé 8" d="M0,0H125" transform="translate(0 2)" fill="none" stroke="#685ddf" stroke-width="12"/>
            <line id="Ligne_14" data-name="Ligne 14" y2="115" transform="translate(119)" fill="none" stroke="#685ddf" stroke-width="12"/>
          </g>
        </svg>


        <div class="school_text">
          <h2>{{school_subject.acf.name_school_subject}}</h2>
          <p>
           {{school_subject.acf.description_school_subject}}
          </p>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" width="119" height="125" viewBox="0 0 119 125">
          <g id="Design_Paragraphe_CN" data-name="Design Paragraphe CN" transform="translate(115) rotate(90)">
            <path id="Tracé_8" data-name="Tracé 8" d="M0,0H125" transform="translate(0 2)" fill="none" stroke="#5146c6" stroke-width="12"/>
            <line id="Ligne_14" data-name="Ligne 14" y2="115" transform="translate(119)" fill="none" stroke="#5146c6" stroke-width="12"/>
          </g>
        </svg>

      <div class="container">
        <li v-for="tuto in tutoFilter" :key="tuto.id">
          <iframe class="left-video-iframe" :src="tuto.acf.url_video_tuto" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <figcaption>par {{tuto.acf.publisher_tuto.nickname}} {{tuto.acf.post_date_tuto}}</figcaption>
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

.container .school_text{
  color: #F1EDDD;
  width: 100%;
}

.school_div{
  background-color: #211F1F;
}
.school_text:before {
  display: block;
  content: ' ';
  background-image: url('');
  background-size: 28px 28px;
  height: 28px;
  width: 28px;
}
</style>

<template>

    <main>

      <div class="title-app">
        <router-link to="/">
          <h1>Acade'MMI </h1>
        </router-link>
        <h3 class="subtitle">A place to learn the basics</h3>
      </div>

      <div class="profile-info">
        <img src="src/assets/images/profile/default-user-image.png" alt="">
        <h2>{{titre}}</h2>

        <div class="action">

          <div class="publish">
            <a href="https://acade-mmi.maximemalatier.fr/login">Publier un tuto sur le site</a>
          </div>

          <div class="publish2">
            <a href="">Comment publier un tuto sur le site ?</a>
          </div>
        </div>
      </div>

      <div class="my-videos">

        <div class="posted">
          <h3>Vos Publications</h3>

          <div class="container_video">
            <figure class="left-video" v-for="">
              <iframe class="left-video-iframe" src="http://www.youtube.com/embed/watch?v=xv-XKENVnlk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <figcaption>par Xavier Senente 05/09/2019</figcaption>
            </figure>
            <div class="video_right">
              <figure>
                <iframe src="http://www.youtube.com/embed/watch?v=xv-XKENVnlk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <figcaption>par Xavier Senente 05/09/2019</figcaption>
              </figure>
              <figure>
                <iframe src="http://www.youtube.com/embed/watch?v=xv-XKENVnlk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <figcaption>par Xavier Senente 05/09/2019</figcaption>
              </figure>
            </div>
          </div>

        </div>



      </div>
    </main>

</template>

<script>


import param from "../param/param";
import appService from "../services/appService";

export default {
  tuto: 'tuto',
  name: 'profile',
  data() {
    return {
      listeTuto: [],
      utilisateur:[],
      userID:[],

    }
  },

  created() {

    axios.get(param.host + "tuto")
      .then(response => {
        this.listeTuto = response.data;
        console.log("Liste", this.listeTuto);
      })
      .catch(error => console.log(error))


      this.titre = param.titre;

      let utilisateurLocal = appService.getLocal();
      if (utilisateurLocal != null){
        this.utilisateur = utilisateurLocal;
        this.userID = this.utilisateur.id
        this.titre = this.utilisateur.nom
      }


  },

  computed: {
    tutoFilter: function () {
      return this.listeTuto.filter(function (tuto) {
        // On ne recupere que les ID des type_video de la vidéo avec map()
        let typeTuto = tuto.acf.publisher_tuto.map(function (type) {
          return type.ID
        });
        // On ne renvoie que les vidéos correspondantes au type concerné
//                return (typeVideo.indexOf(param.typeFilm) >= 0 ? param.typeFilm : '');

        return (typeTuto.indexOf(this.userID) >= 0 ? this.userID : '');

      }.bind(this))


    },

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
  font-weight: normal;
  color: #F1EDDD;
  font-size: 50px;

}

ul{
  list-style: none;
}

h3{
  font-size: 45px;
  font-weight: 800;
  text-align: left;
  margin: 0;
  flex: 0 1 100%;
  padding: 15px;
  color: #F1EDDD;
  margin-left: 5%;

}

.profile-info{
  background-color: #211F1F;
  margin-bottom: 50px;
}

.my-videos{
  background-color: #211F1F;
  border-radius: 20px;
  margin-bottom: 100px;

}

.profile-info, figcaption{
  color: #F1EDDD;
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

.video_right figure{

}

.video_right figure iframe {
  width: 400px;
  height: 200px;
}

.publish{
  background-color: #CD99AF;
  border-radius: 10px;
  width: fit-content;
  padding: 10px;
  font-weight: 500;
  font-style: italic;
  margin-bottom: 10px;
  margin-top: 10px
}

.publish2{
  background-color: #685ddf;
  border-radius: 10px;
  width: fit-content;
  padding: 10px;
  font-weight: 500;
  font-style: italic;
  margin-bottom: 10px;

}

.publish a, .publish2 a{
  text-decoration: none;
  color: #F1EDDD;
  font-family: Raleway, sans-serif;
  font-style: normal;
}



.profile-info{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

#app > div > main > div.my-videos > div{
  min-height: 650px;
}

.action{
  margin-right: 10px;
}
@media only screen and (min-width: 800px) {

  .title-app{
    display: none;
  }

}

@media only screen and (max-width: 780px) {
  h3{
    font-size: 25px;
  }

  .left-video{
    display: none;
  }

  .video_right{
    width: 100%;
  }

  .video_right figure iframe{
    width: 100%;
    height: auto;
  }
  .profile-info{
    flex-direction: column;
  }

  .publish{
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
  }

  .action{
    margin-right: 0;
  }
}
</style>


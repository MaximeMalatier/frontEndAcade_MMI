<template>

    <main>

      <div class="profile-info">
        <img src="src/assets/images/profile/default-user-image.png" alt="">
        <h1>Default User</h1>

        <div class="action">
          <div class="edit_profile">
            <p>Editer le profil</p>
          </div>
          <div class="publish">
            Publier
          </div>
        </div>
      </div>

      <div class="my-videos">

        <div class="posted">
          <h2>Vos Publications</h2>

          <div class="container_video">
            <figure class="left-video">
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


        <div class="liked">
          <h2>Mentions "J'aime"</h2>

          <div class="container_video">
              <figure class="left-video">
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


<style scoped>
h1{
  font-weight: normal;
  color: #F1EDDD;

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

}

.edit_profile{
  background-color: #685ddf;
  border-radius: 10px;
  width: fit-content;
  padding: 2px 15px 2px 15px;
  font-weight: 500;
  font-style: italic;
}

.profile-info{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
</style>


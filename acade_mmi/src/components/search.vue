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


          <div class="populars">
            <h2>Populaires</h2>

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

          <div class="populars">
            <h2>Développement</h2>

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

.video_right figure{

}

.video_right figure iframe {
  width: 400px;
  height: 200px;
}

</style>

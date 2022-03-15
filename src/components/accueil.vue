<template>
  <div>
    <div class="accueil">
      <div class="text">
        <h1>Damien Dubosque</h1>
        <h2><span class="typeWriter" data-text='["Web Development", "Web Design", "3D", "Ux/Ui"]'></span></h2>
        <p>J'ai 19 ans, actuellement en 2ème année d'un DUT MMI. Je suis intéressé notamment par le
          développement
          Front-End, le webdesign ou encore la 3D.</p>

      </div>
      <img src="../../src/assets/img/Photo_Damien.jpg" alt="Damien Dubosque">
    </div>
    <div id="projet">
      <h3>Mes projets</h3>
      <div class="carousel">
        <button class="carousel__button carousel__button--left"> <!-- __ means child-->
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Chevron_left.svg/768px-Chevron_left.svg.png">
        </button>
        <div class="carousel__track-container">
          <ul class="carousel__track">
            <li class="carousel__slide current-slide">
              <router-link to="/alpha">
                <img src="../assets/img/Alpha.png" alt="Maquette Alpha Wann">
              </router-link>
            </li>
            <li class="carousel__slide current-slide">
              <router-link to="/zerules">
                <img src="../assets/img/Zerules.png" alt="Landing page zerules"></router-link>
            </li>
            <li class="carousel__slide current-slide">
              <router-link to="/bosss3">
                <img src="../assets/img/BossS3.png" alt="Boss S3"></router-link>
            </li>
            <li class="carousel__slide current-slide">
              <router-link to="/projet1">
                <img src="../assets/img/PS1.png" alt="Projet du Semestre 1"></router-link>
            </li>

          </ul>
        </div>
        <button class="carousel__button carousel__button--right"> <!-- -- means modifier-->
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chevron_right.svg/1024px-Chevron_right.svg.png" alt="right icon">
        </button>

        <div class="carousel__nav">
          <button class="carousel__indicator current-slide"></button>
          <button class="carousel__indicator"></button>
          <button class="carousel__indicator"></button>
          <button class="carousel__indicator"></button>
        </div>
      </div>
    </div>
    <div id="Crea">
      <h3>Ma Galerie</h3>
      <div class="galerie">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
<!--      <div>-->
<!--        <router-link to="/galerie" alt="galerie">En voir plus</router-link>-->
<!--      </div>-->
    </div>
    <div id="Apropos">
      <h3>À propos</h3>

      <div class="competence">
        <h4>Mes Compétences</h4>
        <div class="comp">
          <div class="descr">
            <h5>Développement Front-End</h5>
            <p>Le développement front-end est un domaine que j'apprécie énormément et le fait de pouvoir manier plusieurs langages est quelque chose de très satisfaisant.</p>
          </div>
          <div class="icones-dev">
            <img src="../../src/assets/icones/html5-brands.svg" alt=""><img src="../../src/assets/icones/css3-alt-brands.svg" alt=""><img src="../../src/assets/icones/js-brands.svg" alt=""><img src="../../src/assets/icones/vuejs-brands.svg" alt=""><img src="../../src/assets/icones/wordpress-simple-brands.svg" alt="">
          </div>
        </div>
        <div class="compAlt">
          <div class="icones-webdes">
            <img src="../../src/assets/icones/icons8-adobe-xd.svg" alt=""><img src="../../src/assets/icones/icons8-adobe-photoshop.svg" alt=""><img src="../../src/assets/icones/icons8-adobe-illustrator.svg" alt=""><img src="../../src/assets/icones/icons8-adobe-indesign.svg" alt="">
          </div>
          <div class="descrAlt">
            <h5>Webdesign</h5>
            <p>Le webdesign est très important, car peut importe ce qu'on fait, dans le domaine du web il y a une grande importance a l'esthétisme tout en gardant l'Ux et l'Ui pas très loin.</p>
          </div>
        </div>
        <div class="comp">
          <div class="descr">
            <h5>3D</h5>
            <p>J'ai découvert la 3D en 2022 et c'est une activité qui me permet de créer des choses sans forcément avoir le besoin de trop réfléchir, et ça me permet de m'évader</p>
          </div>
          <div class="icones-3d">
            <img src="../../src/assets/icones/icons8-blender-3d.svg" alt=""><img src="../../src/assets/icones/icons8-autodesk-3ds-max.svg" alt="">
          </div>
        </div>
      </div>
      <div class="parcours">
        <h4>Mon Parcours</h4>
        <div v-for="passe in competences">
          <h5>{{ passe.etablissement }}</h5>
          <p>{{ passe.diplome }}</p>
        </div>
        <div class="cv">
          <p>Mon CV</p>
            <a type="file" href="https://drive.google.com/file/d/1h3ksapoqvtA9hOcWewqXG7Owz5vz80e8/view?usp=sharing" target="_blank">
            <img src="../../src/assets/icones/download-svgrepo-com.svg" alt="">
            </a>
        </div>
      </div>

    </div>
    <div id="contact">
      <h3>Me contacter</h3>
      <Form/>
    </div>
  </div>
</template>

<script>

import{ init } from '@emailjs/browser';
init("tW-TNFEFf5uRIANMG");
import Form from "./Form";
export default {
  name: "Accueil",
  components: {Form},
  data (){
    return{
      competences:[],
    }
  },
  created(){
    axios.get('static/competence.json')
    .then(function (response){
      this.competences = response.data;
      console.log(response.data);
    }.bind(this))
    .catch(function (error){
      console.log(error)
    })
  },

}
</script>

<style scoped>

/*CV*/
.cv{
  display: grid;
  grid-template-columns: 3fr 1fr;
  width: 20vw;
  border: 1px solid var(--couleur-tonique);
  margin: 0 auto;
  justify-items: center;
  /* padding: 2em; */
  -webkit-box-align: end;
  -ms-flex-align: end;
  min-width: 150px;
  min-height: 40px;
  align-items: center;
}
.cv a{
  width: 100%;
  height: 100%;
  padding-left: 1px solid var(--couleur-tonique);
  display: grid;
  justify-items: center;
  align-items: center;
  border-left: 1px solid var(--couleur-tonique);
}
.cv img{
  width: 3em;
}
.comp{
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  border-left: 2px solid var(--couleur-tonique);
  padding: 0 0 0 1em;
}
.compAlt{
  display: grid;
  grid-template-columns: 2fr 1.5fr;
  border-right: 2px solid var(--couleur-tonique);
  padding: 0 1em 0 0;
}
.icones-dev, .icones-3d{
  display: grid;
  align-items: center;
  justify-items: end;
}
.icones-dev{
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
.icones-3d{
  grid-template-columns: 1fr 1fr;
}
.icones-webdes{
  grid-template-columns: 1fr 1fr 1fr 1fr;
  display: grid;
  align-items: center;
  justify-items: start;
}
.icones-dev img, .icones-webdes img, .icones-3d img{
  max-width: 150px;
}
#Crea a{
  font-family: var(--font-texte);
  color: var(--couleur-tonique);
}
.accueil img {
  display: block;
  margin: auto 0 auto 0;
  height: max-content;
  width: 25vw;
  max-width: 500px;
  padding: 0;
  box-shadow: -2vh 1vw #ECBD90;

}

.accueil{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 0;
  height: 93vh;

}
.text{
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 5vw;
}

/*slider*/
#projet{
  width: 80vw;
  margin-bottom: 4em;
}

.carousel{
  margin: 4em auto;
}

img{
  width: 100%;
}
button{
  outline: none;
  cursor: pointer;
}

/*galerie*/
.galerie{
  display: grid;
  justify-items: center;
  margin: 4em 0 8em 0;
}
#Crea a{
  background-color: rgba(0,0,0, 0.5);
  border-radius: 100vw;
  padding: 0.5vh 2vw;
  text-decoration: none;

}
.galerie > div{
  width: 20vw;
  height: 20vw;
  max-width: 300px;
  max-height: 300px;
  margin: 2vw;
}

.galerie >div:hover{
  transform: scale(1.2);
  transition: transform .2s ease-in-out;
}

.galerie>div:nth-child(1){
  background: center / cover no-repeat url("../../src/assets/galerie/parc.png");
}
.galerie>div:nth-child(2){
  background: center / cover no-repeat url("../../src/assets/galerie/salon.png");
}
.galerie>div:nth-child(3){
  background: center / cover no-repeat url("../../src/assets/galerie/modelling_glock.png");
}
.galerie>div:nth-child(4) {
  background: center / cover no-repeat url("../../src/assets/galerie/premier_bail_solo.png");
}
.galerie>div:nth-child(5){
  background: center / cover no-repeat url("../../src/assets/galerie/ak.png");
}
.galerie>div:nth-child(6){
  background: center / cover no-repeat url("../../src/assets/img/Mono.png");
  background-color: #333333;
}
/*a propos*/
#Apropos{
  margin-top: 15vh;
}
#Apropos p{
  margin: 0;
}
.comp, .compAlt, .parcours h5{
  margin-top: 10vh;
}

#Apropos h4{
  margin-top: 10vh;
}
/*mise en place du responsive pour menu ordi et portable*/
@media screen and (max-width: 720px){
  .text, .img {
    width: auto;
    padding: 0 10vw;
  }
  #Crea a{
    font-size: 2em;
  }
  .competence, .parcours{
    margin: 0 10vw;
  }
  #projet{
    width: 100vw;
  }
  .galerie > div {
    width: 60vw;
    height: 60vw;
    max-width: 300px;
    max-height: 300px;
  }
  .galerie {
    grid-template-columns: 1fr;
    margin-top: 8em;
  }
  .icones-webdes{
    grid-template-columns: 1fr 1fr;
  }
  .icones-dev{
    grid-template-columns: 1fr 1fr 1fr;
  }
  form{
    margin: 0 10vw;
  }
  .galerie>div:nth-child(n+4){
    display: none;
  }
  #Crea>div:last-of-type{
    display: grid;
    justify-content:center;
  }
  .comp {
    grid-template-columns: 1fr;
    border: none;
    padding: 0;
  }
  .compAlt{
    display: flex;
    flex-direction: column-reverse;
    border: none;
    padding: 0;
  }
  .descr{
    border-left: 2px solid var(--couleur-tonique);
    padding-left: 1em;
  }
  .descrAlt{
    border-right: 2px solid var(--couleur-tonique);
    padding-right: 1em;
  }
  .icones-3d, .icones-dev, .icones-webdes{
    justify-items: center;
    margin-top: 2em;
  }

}
@media screen and (min-width: 720px){
  .galerie{
    grid-template-columns: 1fr 1fr;
  }
  #Crea a{
    font-size: 2em;
  }
}
/*responsive*/
@media screen and (max-width: 1100px){
  .accueil img{
    box-shadow: -2vw 2vw var(--couleur-tonique);
  }
  .icones-webdes img, .icones-3d img, .icones-dev img{
    width: 50px;
    height: auto;
  }
}
@media screen and (min-width: 1500px){
  .icones-webdes img, .icones-3d img, .icones-dev img{
    width: 100px;
    height: auto;
  }
}
@media screen and (min-width: 1100px){
  .galerie{
    grid-template-columns: 1fr 1fr 1fr;
  }
  .icones-webdes img, .icones-3d img, .icones-dev img{
    width: 75px;
    height: auto;
  }
}
@media screen and (max-width: 800px){
  .accueil{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;
  }
  .accueil img{
    margin: 0 auto;
  }

}
@media screen and (max-width: 450px){
  .accueil img{
    width: 50vw;
  }
}

.carousel {
  position: relative;
  height: 400px;
  width: 80%;
  max-width: 800px;
}


.carousel__slide {
  width: 800px;
}

.carousel__track-container {
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
}

.carousel__track {
  padding: 0;
  margin: 0;
  list-style: none;
  position: relative;
  height: 100%;
  transition: transform 700ms ease-in;
}

.carousel__slide {
  position: absolute; /* stack images on top of each other */
  top: 0;
  bottom: 0;
  height: 400px;
  width: 100%;
}

.carousel__button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: 0;
  cursor: pointer;
}

.carousel__button img:hover, .carousel__nav button:hover {
  transform: scale(1.2);
  transition: all ease-in 0.2s;
}


.carousel__button--left {
  left: -40px; /* position away from image */
}

.carousel__button--right {
  right: -40px;
}

.carousel__button img {
  width: 30px;
}

.carousel__button:focus, .carousel__indicator:focus {
  outline: none;
}

.carousel__nav {
  display: flex;
  justify-content: center;
  padding: 10px 0;
}

.carousel__indicator {
  border: 0;
  border-radius: 50px;
  width: 15px;
  height: 15px;
  background: rgba(0,0,0,.3);
  margin: 0 12px;
  cursor: pointer;
}

.carousel__indicator.current-slide {
  background: rgba(0,0,0,.75);
}


/* resize images carousel */
@media all and (max-width: 900px) {
  .carousel {
    height: 300px;
    max-width: 600px;
  }
  .carousel__slide {
    width: 600px;
    height: 300px;
  }
}

@media all and (max-width: 720px) {
  .carousel {
    height: 250px;
    max-width: 500px;
  }
  .carousel__slide {
    width: 500px;
    height: 250px;
  }
}

@media all and (max-width: 600px) {
  .carousel {
    height: 200px;
    max-width: 400px;
  }
  .carousel__slide {
    width: 400px;
    height: 200px;
  }
}

@media all and (max-width: 485px) {
  .carousel {
    height: 150px;
    max-width: 350px;
  }
  .carousel__slide {
    width: 350px;
    height: 150px;
  }
}

@media all and (max-width: 400px) {
  .carousel {
    height: 120px;
    max-width: 300px;
  }
  .carousel__slide {
    width: 300px;
    height: 120px;
  }
}

</style>

<template>
  <div>
    <h1>Zerules</h1>
    <a href="http://landingpagezerules.dbsqdamien.fr/" target="_blank"><img src="../../src/assets/img/Zerules.png" alt="Boss"></a>
    <p>Ce projet a été réalisé lors de ma première année du DUT MMI pendant le 2ème semestre. L'objectif de Zerules
      était de regrouper les différentes règles des jeux de sociétés.
      Pour ce projet j'ai surtout participer a l'intégration de la landing page qui est le lien a l'intérieur de l'image
      juste haut
      dessus.</p>
    <p>Cette landing page est uniquement intégrée en HTML/CSS, car nous n'avions pas encore appris le fonctionnement de
      Vue,
      du moins pas au moment de l'intégration de la landing page. </p>
    <h2>Mon rôle dans le projet</h2>
    <p>Ici j'ai principalement participé a la stratégie de commnication, avec les audits de concurrences, le budget,
      j'ai également aider au développement du site final en remplissant la base de donnée, et j'ai donc intégré la
      landing page visible en haut de la page. </p>
    <div class="Crea">
      <div class="galerie">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="flex">
      <img src="../../src/assets/img/mockupZerules.png" alt="Mockup Zerules">
      <img src="../../src/assets/img/zerulesmock.png" alt="Mockup Zerules">
    </div>
    <div class="Crea">
      <h2>Mes autres projets</h2>
      <div class="galerie-autre">
        <router-link to="/alpha" alt="Maquette Alpha Wann">
          <div></div>
        </router-link>
        <router-link to="/bosss3" alt="Boss S3">
          <div></div>
        </router-link>
        <router-link to="/projet1" alt="Projet S1">
          <div></div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Zerules",
}
</script>


<style scoped>
a>img:hover{
  transition: opacity .2s ease-in-out;
  opacity: 65%;
}
.flex{
  display: flex;
  flex-direction: row;
  margin: 4em 0;
}
.flex img{
  width: 45%;
}
.Crea a {
  font-family: var(--font-texte);
  color: var(--couleur-tonique);
}

h1 {
  margin: 2em 0;
  font-size: 4em;
  color: var(--couleur-titre);
  font-family: var(--font-titre);
  font-weight: lighter;
  display: inline-block;
  border-bottom: 1vh solid var(--couleur-tonique);
}

h2 {
  font-size: 3em;
  color: var(--couleur-titre);
  font-family: var(--font-titre);
  font-weight: lighter;
  display: inline-block;
  border-bottom: 1vh solid var(--couleur-tonique);
}
.galerie-autre > a:hover{
  transform: scale(1.2);
  transition: transform .2s ease-in-out;
}
.galerie-autre >div:hover{
  transition: transform .2s ease-in-out;
  transform: scale(0.5);
}
.centre img {
  display: block;
  max-width: 100%;
  margin: 0 auto;
  height: auto;
  padding: 0;

}

p {
  font-size: 2em;
  margin: 3em 0;
}

/*galerie*/
.galerie-autre {
  display: grid;
  justify-items: center;
  margin: 4em 0 4em 0;
}

.galerie-autre a {
  background-color: #FFFFFF;
  margin-bottom: 4em;
}

.galerie-autre div {
  width: 20vw;
  height: 20vw;
  max-width: 300px;
  max-height: 300px;
  margin: 2vw;
  background-color: #FFFFFF;
}

.galerie-autre > a:nth-child(1) > div {
  background: center / cover no-repeat url("../../src/assets/img/Alpha.png");
}

.galerie-autre > a:nth-child(2) > div {
  background: center / cover no-repeat url("../../src/assets/img/BossS3.png");
}

.galerie-autre > a:nth-child(3) > div {
  background: center / cover no-repeat url("../../src/assets/img/PS1.png");
}

/*mise en place du responsive pour menu ordi et portable*/
@media screen and (max-width: 720px) {
  .galerie-autre > div {
    width: 60vw;
    height: 60vw;
    max-width: 300px;
    max-height: 300px;
  }

  .galerie-autre {
    grid-template-columns: 1fr;
    margin-top: 8em;

  }

  h1, h2 {
    margin: 3em 10vw 5vh 10vw;
  }
  .flex{
    flex-direction: column;
  }
  .flex img{
    width: 100%;
  }
  .centre img {
    width: 80vw;
    height: auto;
    margin: 0 10vw 5vh 10vw;
  }

  p {
    margin: 0 10vw;
  }
}

@media screen and (min-width: 720px) {
  .galerie-autre {
    grid-template-columns: 1fr 1fr;
  }
}

/*responsive*/
@media screen and (max-width: 1100px) {
  .accueil img {
    box-shadow: -2vw 2vw var(--couleur-tonique);
  }
}

@media screen and (min-width: 1100px) {
  .galerie-autre {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media screen and (max-width: 800px) {

  .accueil img {
    margin: 0 auto;
  }

}
@media screen and (min-width: 1500px){
  p{
    font-size: 3em;
  }
  h1,h2 {
    font-size: 5em;
  }
}
@media screen and (max-width: 450px) {
  .accueil img {
    width: 50vw;
  }
}
</style>

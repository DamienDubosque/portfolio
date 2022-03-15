<template>
  <div>
    <h1>Boss Semestre 3 DUT MMI</h1>
    <a href="https://bosss3.dbsqdamien.fr/" target="_blank"><img src="../../src/assets/img/BossS3.png" alt="Boss"></a>
    <p>Ce projet est un projet réalisé au 3ème semestre du DUT MMI, les boss sont des épreuves de 2 jours au cours des
      quels il faut créé un site web. Le thème du projet était de prendre une personne connue, j'ai donc décidé de
      prende le basketteur LeBron James</p>
    <p>La première chose qui a été faite est une maquette sur Adobe Xd puis nous l'avons intégrée en Vue (CLI). Avec
      l'aide de flux json pour certaines page (la page sur sa vie ainsi que celle sur sa filmographie). Ce genre de
      projet nous permet de nous rendre compte que nous sommes capable de faire un site web en peut de temps, même s'il
      est difficile d'être satisfait totalement du design par exemple pour lequel avec plus de temps il aurait été
      possible d'approfondir </p>
    <h2>Mon rôle dans le projet</h2>
    <p>Une nouvelle fois un projet individuel, ici le premier jour est donc dédié au maquettage, elle existe en deux
      versions pour pouvoir par la suite créé un site responsive. Le deuxième jour a été dédié a l'intégration en Vue,
      avec la création des différents composants, ou encore les différentes routes.</p>
    <div class="flex">
      <img src="../../src/assets/img/bossmock.png" alt="Mockup boss S3">
      <img src="../../src/assets/img/mockupboss.png" alt="Mockup boss S3">
    </div>
    <div class="Crea">
      <h2>Mes autres projets</h2>
      <div class="galerie-autre">
        <router-link to="/alpha" alt="Maquette Alpha Wann">
          <div></div>
        </router-link>
        <router-link to="/zerules" alt="Zerules">
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
  name: "BossS3"
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
  background: center / cover no-repeat url("../../src/assets/img/Zerules.png");
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

  .flex{
    flex-direction: column;
  }
  .flex img{
    width: 100%;
  }

  .galerie-autre {
    grid-template-columns: 1fr;
    margin-top: 8em;

  }

  h1, h2 {
    margin: 3em 10vw 5vh 10vw;
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
@media screen and (min-width: 1500px){
  p{
    font-size: 3em;
  }
  h1,h2 {
    font-size: 5em;
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

@media screen and (max-width: 450px) {
  .accueil img {
    width: 50vw;
  }
}
</style>

<template>
  <div>
    <h1>Projet du semestre 1 du DUT MMI</h1>
    <a href="http://projets1.dbsqdamien.fr" target="_blank"><img src="../../src/assets/img/PS1.png" alt="Boss"></a>
    <p>Ce projet est le premier projet que j'ai réalisé en MMI, comme pour les autres projets d'abord il y avais une
      phase de maquettage avec des notions de communications également. Le sujet de ce projet était la face cachée du
      numérique et j'avais décidé de montré la pollution créée a partir des applications de visioconférences </p>
    <p>Ce projet est uniquement en HTML/CSS avec du JS uniquement pour le menu hamburger. Ce site est mobile first et
      donc n'est pas responsive sur ordinateur.</p>
    <h2>Mon rôle dans le projet</h2>
    <p>Étant un projet individuel, j'ai donc tout fait moi même, le maquettage, le dossier de communication ainsi que
      celui pour l'identité visuelle, ainsi que l'intégration du projet</p>
    <div class="flex">
      <img src="../../src/assets/img/MockupP1.png" alt="Mockup projet S1">
      <img src="../../src/assets/img/MockupPS1.png" alt="Mockup projet S1">
    </div>
    <div class="Crea">
      <h2>Mes autres projets</h2>
      <div class="galerie-autre">
        <router-link to="/alpha" alt="s">
          <div></div>
        </router-link>
        <router-link to="/zerules" alt="d">
          <div></div>
        </router-link>
        <router-link to="/bosss3" alt="d">
          <div></div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projet1"
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
  background: center / cover no-repeat url("../../src/assets/img/BossS3.png");
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
  .flex{
    flex-direction: column;
  }
  .flex img{
    width: 100%;
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

/*responsive*/

@media screen and (min-width: 1100px) {
  .galerie-autre {
    grid-template-columns: 1fr 1fr 1fr;
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

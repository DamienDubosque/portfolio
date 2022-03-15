<template>
  <div id="app">
    <div id="placement">
      <div class="gauche">
        <div>
          <router-link to="/" alt="Accueil">
            <img id="mono" src="../src/assets/img/Mono.png" alt="Monogramme">
          </router-link>
        </div>
        <div>
          <ul class="reseaux">
            <li>
              <a href="https://github.com/DamienDubosque" target="_blank">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github"
                     class="svg-inline--fa fa-github fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 496 512">
                  <path fill="currentColor"
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/damien-dubosque-aa28141bb/" target="_blank">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in"
                     class="svg-inline--fa fa-linkedin-in fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 448 512">
                  <path fill="currentColor"
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/damien.dbsq/" target="_blank">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram"
                     class="svg-inline--fa fa-instagram fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 448 512">
                  <path fill="currentColor"
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="mailto:damien.dubosque@gmail.com">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope"
                     class="svg-inline--fa fa-envelope fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 512 512">
                  <path fill="currentColor"
                        d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div><!--
--><div class="centre">
      <nav class="menu_ordi">
        <ul>

          <li>
            <router-link @click.native="scrollToProj" to="/" alt="projet">Mes projets</router-link>
          </li>
          <li>
            <router-link to="/galerie" alt="galerie">Ma Galerie</router-link>
          </li>
          <li>
            <a href="#Apropos" alt="projet">À propos</a>
          </li>
          <li>
            <a href="#contact" alt="contact">Me contacter</a>
          </li>
        </ul>
      </nav>

      <div class="nav-toggle" onclick="document.documentElement.classList.toggle('menu-open')">
        <div class="nav-toggle-bar"></div>
      </div>
      <nav class="menu">
        <ul>
          <li>
            <router-link to="/" alt="accueil">Accueil</router-link>
          </li>
          <li>
            <a href="#projet" alt="projet">Mes projets</a>
          </li>
          <li>
            <router-link to="/galerie" alt="galerie">Ma Galerie</router-link>
          </li>
          <li>
            <a href="#Apropos" alt="projet">À propos</a>
          </li>
          <li>
            <a href="#contact" alt="contact">Me contacter</a>
          </li>
        </ul>
      </nav>
      <router-view/>
      <footer>
        <p>Damien Dubosque <span>2022</span></p>
      </footer>
    </div><!--
--><div class="droite">

    </div>

    </div>
  </div>

</template>

<script>

export default {
  name: 'App',
}

</script>

<style>
@font-face {
  font-family: "Soria";
  src: url("assets/font/soria-font.ttf");
}
@font-face {
  font-family: "Leelawadee UI";
  src: url("assets/font/leelawui.ttf");
}

:root{
  --couleur-principale: #031B3D;
  --couleur-tonique: #ECBD90;
  --couleur-titre: #FFFFFF;
  --font-titre: "Soria", sans-serif;
  --font-texte: "Leelawadee UI", sans-serif;
}

html{
  font-size: 62.5%;
  overflow-x: hidden;
}

body{
  margin: 0;
  padding: 0;
  width: 100vw;
  background-color: var(--couleur-principale);
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 10px;
  background-color: rgba(0,0,0,0.1);
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
  background-color: var(--couleur-tonique);
  height: 15px;
}

/*placement des colonnes en vue ordinateur*/
.gauche{
  width:10vw;
  height: auto;
  padding: 0.5em;
  margin: 0;
}
.centre{
  width: 80vw;
  height: auto;
  margin: 0;
}
.droite{
  width:10vw;
  height: auto;
  padding: 0.5em;
  margin: 0;
}
/*style sur menu*/
nav.menu_ordi ul{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  list-style-type: none;
  margin: 0 -10vw 0 0;
  padding: 0;
  height: 7vh;
}
.menu_ordi ul::after{
  content: "";
  display: block;
  width: 10vw;
  height: 0.1vh;
  background-color: var(--couleur-tonique);
}
.menu_ordi>ul>li a{
  margin-left: 3em;
  font-family: var(--font-texte);
  font-size: 1.5em;
  color: var(--couleur-tonique);
  text-decoration: none;
}
.menu_ordi>ul li:last-of-type{
  margin-right: 3em;
}

/*style colonne gauche*/
.gauche>div{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  height:7vh
}
.gauche img{
  width: 80%;
  height: auto;
  max-width: 100px;
  display: block;
}
.reseaux{
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
  height: 93vh;
  position: fixed;
}
.reseaux li{
  margin: 0 0 2.5vh 0;
  padding: 0;
  width: 2vw;
  height: auto;

}
.reseaux a{
  color: var(--couleur-tonique);
}
.reseaux::after{
  content: "";
  display: block;
  width: 0.1vw;
  height: 10vh;
  margin: 0 auto;
  background-color: var(--couleur-tonique);
}

/*style colonne centre*/
h1{
  color: var(--couleur-titre);
  font-family: var(--font-titre);
  font-weight: lighter;
  font-size: 6em;
  margin: 0;
}
h2{
  color: var(--couleur-tonique);
  font-family: var(--font-titre);
  font-weight: lighter;
  font-size: 6em;
  margin: 0;
}
h3{
  font-size: 4em;
  color: var(--couleur-titre);
  font-family: var(--font-titre);
  font-weight: lighter;
  display: inline-block;
  border-bottom: 1vh solid var(--couleur-tonique);
}
h4{
  color: var(--couleur-titre);
  font-family: var(--font-titre);
  font-weight: lighter;
  font-size: 3em;
  margin: 0;
  display: inline-block;
  border-bottom: 1vh solid var(--couleur-tonique);
}
h5{
  color: var(--couleur-titre);
  font-family: var(--font-titre);
  font-weight: lighter;
  font-size: 2.5em;
  margin: 0;
}
p{
  font-family: var(--font-texte);
  color: var(--couleur-tonique);
}
/*footer*/
footer{
  border-top: 0.3vh solid var(--couleur-tonique);
  margin-top: 5vh;
}
footer p{
  font-size: 1.5em;
}
footer>p{
  color: var(--couleur-titre);
}
footer span{
  color: var(--couleur-tonique);
}
/*mise en place du responsive pour menu ordi et portable*/
@media screen and (max-width: 720px) {
  nav.menu_ordi {
    display: none;
  }
  ::-webkit-scrollbar{
    width: 0;
  }

  .centre {
    width: 100vw;
    height: 100vh;
  }

  .gauche, .droite {
    width: 0;
    height: 0;
    display: none;
  }

  h3 {
    margin: 0 10vw;
    font-size: 3em;
  }

  .nav-toggle-bar {
    width: 30px;
  }

  .nav-toggle {
    right: 4rem;
  }

  p {
    font-size: 2em;
  }

  footer {
    margin-left: 10vw;
    margin-right: 10vw;
  }
  footer p{
    padding-bottom: 1.5em;
  }
}
@media screen and (min-width: 720px) {
  nav.menu, div.nav-toggle {
    display: none;
  }

  #placement > div {
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
  }
  p{
    font-size: 3em;
  }
}
/*responsive*/
@media screen and (min-width: 1100px){
  h1,h2{
    font-size: 7em;
  }
  h3{
    font-size: 5em;
  }
  h4{
    font-size: 4em;
  }
  h5{
    font-size: 3.5em;
  }
}
@media screen and (min-width: 1300px){
  .menu_ordi{
    font-size: 1.5em;
  }
  .reseaux li {
    width: 3em;
  }
}

@media screen and (min-width: 1500px){
  .menu_ordi>ul li{
    margin-left: 5em;
  }
  .menu_ordi>ul li:last-of-type{
    margin-right: 5em;
  }

}
@media screen and (max-width: 800px){
  h1,h2{
    font-size: 4em;
  }
}
@media screen and (max-width: 450px){
  h1,h2{
    font-size: 3.5em;
  }
  .mouse{
    display: none;
    pointer-events: auto;
    z-index: -1000;
  }
}
.mouse {
  position: fixed;
  width: 50px;
  height: 50px;
  top: -50%;
  left: -50%;
  margin: -15px 0 0 -15px;
  border-radius: 50%;
  background-color: var(--couleur-tonique);
  backface-visibility: hidden;
  mix-blend-mode: difference;
  transition: transform 0.4s ease-out;
  z-index: 1000;
  pointer-events: none;
}
.nav-toggle{
  /*background-color: #FFE645;*/
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
}

.nav-toggle-bar,
.nav-toggle-bar::after,
.nav-toggle-bar::before{
  content: "";
  background-color: var(--couleur-tonique);
  width: 100%;
  height: 2px;
  position: absolute;
  left: 0;
  transition: all .4s ease-in-out;
  z-index: 10000;
}
.nav-toggle-bar::after{
  top: -10px;
}

.menu-open .nav-toggle-bar{
  transform: rotate(135deg);
  background-color: var(--couleur-tonique);
}

.menu-open .nav-toggle-bar::before,
.menu-open .nav-toggle-bar::after{
  transform: rotate(90deg);
  background-color: var(--couleur-tonique);
  top: 0;
}

.nav-toggle-bar::before{
  top: 10px;
}

/* Menu */

.menu{
  background-color: var(--couleur-principale);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(100vw);
  transition: all .4s;
  z-index: 9999;
}

.menu-open .menu{
  transform: translateX(0);
}

/* Bug IOS*/

.menu-open,
.menu-open body{
  overflow: hidden;
}

.menu ul{
  list-style: none;
  margin: 0;
  font-size: 2.5rem;
  font-family: "Montserrat ExtraBold", sans-serif;
  padding: 0 1rem;
  text-align: center;

}

.menu li {
  margin-bottom: 3rem;
  transform: translateX(3rem);
  opacity: 0;
  transition: all .3s ease;
}
.menu li a{
  color: var(--couleur-tonique);
  text-decoration: none;
}

.menu li:not(:last-of-type) {
  margin-bottom: 10vh;
}

.menu-open .menu li{
  transform: translateX(0);
  opacity: 1;
}

.menu-open .menu li:nth-child(n+1){ transition-delay: .3s;}
.menu-open .menu li:nth-child(n+1){ transition-delay: .35s;}
.menu-open .menu li:nth-child(n+1){ transition-delay: .4s;}
.menu-open .menu li:nth-child(n+1){ transition-delay: .45s;}
.menu-open .menu li:nth-child(n+1){ transition-delay: .5s;}
.menu-open .menu li:nth-child(n+1){ transition-delay: .55s;}

@media (max-width: 720px){
  .nav-toggle-bar,
  .nav-toggle-bar::after,
  .nav-toggle-bar::before{
    width: 30px;
  }
}


</style>

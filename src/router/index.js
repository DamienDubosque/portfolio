import Vue from 'vue'
import Router from 'vue-router'
import Accueil from "../components/accueil";
import Galerie from "../components/galerie";
import ProjetAlpha from "../components/ProjetAlpha";
import Zerules from "../components/Zerules";
import BossS3 from "../components/BossS3";
import Projet1 from "../components/Projet1";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: Accueil
    },
    {
      path: '/galerie',
      name: 'Galerie',
      component: Galerie
    },
    {
      path: '/alpha',
      name: 'ProjetAlpha',
      component: ProjetAlpha
    },
    {
      path: '/zerules',
      name: 'Zerules',
      component: Zerules
    },
    {
      path: '/bosss3',
      name: 'BossS3',
      component: BossS3
    },
    {
      path: '/projet1',
      name: 'Projet1',
      component: Projet1
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

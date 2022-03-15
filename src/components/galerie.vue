<template>
    <div id="Crea">
      <h3>Ma Galerie</h3>
      <div class="galerie">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Galerie",
  data (){
    return{
      parcours:[],
    }
  },
  created(){
    axios.get('static/parcours.json')
      .then(function (response){
        this.parcours = response.data;
        console.log(response.data);
      }.bind(this))
      .catch(function (error){
        console.log(error)
      })
  }
}
</script>

<style scoped>
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
  background: center / contain no-repeat url("../../src/assets/galerie/modelling_glock.png");
}
.galerie>div:nth-child(4) {
  background: center / cover no-repeat url("../../src/assets/galerie/premier_bail_solo.png");
}
.galerie>div:nth-child(5){
  background: center / contain no-repeat url("../../src/assets/galerie/ak.png");
}
.galerie>div:nth-child(6){
  background: center / cover no-repeat url("../../src/assets/galerie/Oui.png");
}
/*.galerie>div:nth-child(7){*/
/*  background: center / cover no-repeat url("../../src/assets/galerie/Rendu_deuxieme_bail.png");*/
/*}*/
/*.galerie>div:nth-child(8){*/
/*  background: center / contain no-repeat url("../../src/assets/galerie/le_rendu_de_la_petite_maison_posé.png");*/
/*}*/

/*mise en place du responsive*/
@media screen and (max-width: 720px){
  .galerie > div {
    width: 60vw;
    height: 60vw;
    max-width: 300px;
    max-height: 300px;
  }
  .galerie{
    grid-template-columns: 1fr;
    margin-top: 8em;

  }
  h3{
    margin-top: 3em;
  }
}
@media screen and (min-width: 720px){
  .galerie{
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (min-width: 1100px){
  .galerie{
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>

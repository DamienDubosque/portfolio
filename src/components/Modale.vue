<template>
  <div class="bloc-modale" v-if="revele">
    <div class="overlay" v-on:click="toggleModale">

    </div>
    <div class="modale">
      <div v-on:click="toggleModale" class="btn-modale"><p>X</p></div>
      <h3>Merci pour votre message</h3>
      <p>Je vous réponds dans les plus bref délais !</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modale",
  props: ['revele', 'toggleModale']
}
</script>

<style scoped>
  .bloc-modale{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
p{
  text-align: center;

}
  .overlay{
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .modale{
    background: var(--couleur-principale);
    color: #333;
    padding: 5em;
    position: fixed;
  }
  .btn-modale{
    position: absolute;
    top: 10px;
    right: 10px;

  }
  .btn-modale p{
    margin: 0;
  }
</style>

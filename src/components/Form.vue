<template>
  <form ref="form" @submit.prevent="sendEmail">
    <div class="grid">
      <div>
        <input type="text" class="champ" name="nom" id="name" placeholder="Entrer votre nom ..." required>
      </div>
      <div>
        <label for="email"></label>
        <input type="email" class="champ" name="email" id="email" placeholder="Entrer votre email ..." required>
      </div>
    </div>
    <div>
      <textarea class="area" name="message" placeholder="Ecriver votre message ..."></textarea>
    </div>
    <modale v-bind:revele="revele" v-bind:toggleModale="toggleModale"></modale>
      <input v-on:click="toggleModale" class="submit" type="submit" value="Envoyer">

  </form>
</template>

<script>
import emailjs from '@emailjs/browser';
import Modale from "./Modale";
export default {
  name: "Form",
  components: {
    'modale' : Modale
  },
  data(){
    return{
      revele: false
    }
  },
  methods: {
    sendEmail() {
      emailjs.sendForm('service_v8oinbg', 'template_4xu4z96', this.$refs.form, 'tW-TNFEFf5uRIANMG')
        .then(function (response) {
          console.log('SUCCESS!', result.text);
        }, (error) => {
          console.log('FAILED...', error.text);
        });
    },
    toggleModale: function (){
      this.revele = !this.revele
    }
  }
}
</script>

<style scoped>
/*Form*/
.submit{
  border: 1px solid var(--couleur-tonique);
  margin-top: 2em;
  font-family: var(--font-texte);
  background-color: var(--couleur-principale);
  color: var(--couleur-tonique);

}
.grid{
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}
.grid input, textarea{
  background-color: var(--couleur-principale);
  border-bottom: 2px solid var(--couleur-tonique);
  color: var(--couleur-titre);
  border-left: none;
  border-right: none;
  border-top: none;
  font-family: var(--font-texte);
}
::placeholder{
  color: var(--couleur-tonique);
}
input:focus, textarea:focus {
  outline: none;
}
.champ{
  width: 35vw;
  height: 2em;
  margin-top: 2em;
}
.area{
  width: 35vw;
  margin-top: 2em;
  min-width: 35vw;
  max-width: 35vw;
}
</style>

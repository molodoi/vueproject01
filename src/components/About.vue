<template>
  <div class="about">
    <h1>About</h1> 
    <p>
    	Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.
    </p> 
  </div>
</template>

<script>
import axios from 'axios'
import router from 'vue-router'
export default {
	name: 'about', // Nom du module composant certain préfère mettre Hello ce qui injectera dans la vue la balise <hello> ou <Hello>
	data () { // Définition des data ou parle aussi de state càd les différentes variables qui seront disponible dans la vue et pour lesquels 			//vuejs créera automatiquement un getter et un setter
		return {

		}
	},
	methods: {
		redirect: function(nameUrl){
			this.$router.push(nameUrl)
		}
	},	
	// S'exécute dès l'initialisation de votre composant. les données n'ont pas été rendues réactives, et les événements n'ont pas encore été mis en place.
    beforeCreate: function() {
    	alert('beforeCreate')
        console.log('beforeCreate')
    },
    // Récupérer des données avant que la vue soit affichée
    // On peut accéder aux données réactives et les événements sont actifs. Les modèles et DOM virtuel n'ont pas encore été montés ou rendus.
    created: function(){
    	alert('created')
       	console.log('created') 
    },
    // S'exécute juste avant le rendu initial et après que les fonctions de modèle ou de rendu ont été compilées. 
    // Très probablement, vous n'aurez jamais besoin d'utiliser ce crochet. Rappelez-vous, il n'est pas appelé lors du rendu côté serveur.
    beforeMount: function() {
    	alert('beforeMount')
        console.log('beforeMount')
    },
    // On peut avoir un accès complet au composant réactif, aux templates et au DOM rendu
    // Mounted est le hook de cycle de vie le plus souvent utilisé. Les modèles les plus fréquemment utilisés sont la récupération de données pour votre composant 
    mounted: function() {
    	alert('mounted and redirect to home')
        console.log('mounted and redirect to home in 2sec')
        let self = this
    	setTimeout(function(){
        	self.redirect('home')
    	}, 2000)
    },
    // S'exécute après les modifications de données sur votre composant et le cycle de mise à jour commence, juste avant que le DOM soit patché et rendu de nouveau. 
    // Il vous permet d'obtenir le nouvel état de toutes les données réactives sur votre composant avant qu'il ne soit réellement rendu.
    beforeUpdate: function() {
    	alert('beforeUpdate')
        console.log('beforeUpdate')
    },
    // S'exécute après les modifications de données sur votre composant et les re-rendus DOM. 
    // Si vous avez besoin d'accéder au DOM après un changement de propriété, voici probablement l'endroit le plus sûr pour le faire.
    updated: function() {
    	alert('updated')
        console.log('updated')
    },
    // Est déclenché juste avant le démontage. Votre composant sera toujours entièrement présent et fonctionnel. 
    // Si vous avez besoin de nettoyer des événements ou des abonnements réactifs, beforeDestroy serait probablement le moment de le faire.
    beforeDestroy: function() {
    	alert('beforeDestroy')
        console.log('beforeDestroy')
    },
    // Vous pouvez utiliser le hook destroy pour effectuer un nettoyage de dernière minute ou informer un serveur distant que le composant a été détruit
    destroyed: function() {
    	alert('destroyed')
        console.log('destroyed')
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
<script setup lang="ts">
import { ref } from 'vue';
import type { ArticleFormData } from '@/types/ArticleFormData';

const articleForm = ref<ArticleFormData>({
	title: '',
	content: '',
	category: ''
});

const submitForm = () => {
	console.log(articleForm.value);
	// TO DO : ajouter la logique (par exemple avec Axios)
};

</script>

<template>
	<div>
		<h1>Créer un Article</h1>
		<form @submit.prevent="submitForm">
			<div>
				<label for="title">Titre</label>
				<input v-model="articleForm.title" id="title" required>
			</div>
			<div>
				<label for="content">Contenu</label>
				<textarea v-model="articleForm.content" id="content" required></textarea>
			</div>
			<div>
				<label for="category">Catégorie</label>
				<input v-model="articleForm.category" id="category">
			</div>
			<button type="submit">Créer</button>
		</form>
	</div>
</template>

/* À rajouter plus tard : 
- Affichage automatique de la date
- Catégorie
- Slug dans l'adresse
- Bouton édition pour l'administrateur
- Bouton de suppression pour l'administrateur
- Fonction de partage (par mail ou réseaux sociaux)
- Commentaire
- WYSIWYG pour la mise en forme
*/
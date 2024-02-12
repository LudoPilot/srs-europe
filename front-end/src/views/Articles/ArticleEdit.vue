<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { ArticleFormData } from '@/types/ArticleFormData';
// ajouter Axios plus tard
import { useRoute } from 'vue-router';

const route = useRoute();
const articleId = route.params.id;

const articleForm = ref<ArticleFormData>({
	title: '',
	content: '',
	category: ''
});
</script>

<template>
	<div>
		<h1>Modifier l'Article</h1>
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
			<button type="submit">Mettre à jour</button>
		</form>
	</div>
</template>
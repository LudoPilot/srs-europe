import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticleViewVue from '@/views/Articles/ArticleView.vue'
import ArticlesListVue from '@/views/Articles/ArticlesList.vue'
import ArticleCreateVue from '@/views/Articles/ArticleCreate.vue'
import ArticleEditVue from '@/views/Articles/ArticleEdit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
	{
		path: '/articles',
		name: 'articles',
		component: ArticlesListVue,
	},
	{
		path: '/articles/:id', // éventuellement à remplacer par un slug plus tard
		name: 'article-view',
		component: ArticleViewVue,
		props: true,
	},
	{
		path: '/articles/create',
		name: 'article-create',
		component: ArticleCreateVue,
	},
	{
		path: '/articles/edit',
		name: 'article-edit',
		component: ArticleEditVue,
		props: true,
	}
  ]
})

export default router

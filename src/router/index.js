import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Posts from '@/components/Posts'
import SinglePost from '@/components/SinglePost'
import About from '@/components/About'
import Sidebar from '@/components/Sidebar'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
		path: '/',
		name: 'home',
		// injecter un composant au router-view
		//component: Hello,
		// Injecter plusieurs composant au router-view
		components: {
			default: Hello,
			sidebar: Sidebar
		}
    },
    {
    	// passer un paramètres dans une url
		path: '/posts/:id(\\d+)',
		name: 'posts-id',
		//component: SinglePost,
		components: {
			default: SinglePost,
			sidebar: Sidebar
		}
    },
    {
		path: '/posts',
		name: 'posts',
		//component: Posts,
		components: {
			default: Posts,
			sidebar: Sidebar
		}
    },
    {
		path: '/about',
		name: 'about',
		//component: About,
		components: {
			default: About,
			sidebar: Sidebar
		}
    },
    {
    	// renvoyer à la racine quand l'utilisateur saisie n'importe quoi
		path: '*',
		redirect: '/',
    }
  ]
})

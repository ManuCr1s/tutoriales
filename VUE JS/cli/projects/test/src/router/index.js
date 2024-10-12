import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    //Para un parametro
    path:'/blog/:post',
    name:'blog',
    component: BlogView
  },
  {
    //Para varios parametros
    path:'/blog/user/:user/post/:post',
    name:'post',
    component:  () => import(/* webpackChunkName: "about" */ '../views/PostView.vue')
  },
  //Para coincidencia de rutas
  {
    //Solo permite numeros en el parametro
    path:'/compras/:ordenId(//d+)',
    name:'orden',
    component:  () => import(/* webpackChunkName: "about" */ '../views/OrdenView.vue')
  },
  {
    path:'/compras/:productName',
    name:'producto',
    component:  () => import(/* webpackChunkName: "about" */ '../views/ProductView.vue')
  },
  {
    //Ruta con parametro opcional 
    path:'/user/:userId?',
    name:'user',
    component:  () => import(/* webpackChunkName: "about" */ '../views/UserView.vue')
  },
  {
    //Ruta con parametro opcional 
    path:'/curso/:idCurso?',
    name:'curso',
    component:  () => import(/* webpackChunkName: "about" */ '../views/cursoView.vue'),
    children:[
       {
          path:'',
          name:'cursoIndex',
          component:  () => import(/* webpackChunkName: "about" */ '../views/cursoView/cursoView.vue')
        },
        {
          path:'detail',
          name:'cursoDetail',
          component:  () => import(/* webpackChunkName: "about" */ '../views/cursoView/detailView.vue')
        },
        {
          path:'time',
          name:'cursoTime',
          component:  () => import(/* webpackChunkName: "about" */ '../views/cursoView/timeView.vue')
        }
      ]
  },
  {
    //Para el caso de la ruta no eccontrada
    path:'/:pathMatch(.*)',
    name:'404',
    component:  () => import(/* webpackChunkName: "about" */ '../views/NotView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

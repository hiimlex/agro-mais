import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import Index from './views/Index'
import Registrar from './views/Registrar'
import InformacoeAdicionais from './views/Informacoes'
import Perfil from './views/Perfil'
import Compras from './views/Compras'
import Editar from './views/Editar'
import Recuperarsenha from './views/Recuperarsenha'
import Produto from './views/Produto'
import Notification from './views/Notifications'
import Cart from './views/Cart'
import Search from './views/Search'
import Informacoesvendas from './views/Informacoesvendas'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      
    },
    {
      path: '/registrar',
      name: 'registrar',
      component: Registrar
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: Perfil,
      meta: {
        login: true
      },
      children: [
        {
          path: 'informacoes',
          name: 'informacoes',
          component: InformacoeAdicionais
        },
        {
          path: 'editar',
          name: 'editar',
          component: Editar
        },
        {
          path:'informacoesvendas',
          name: 'informacoesvendas',
          component: Informacoesvendas
        }
      ]
    },
    {
      path: '/compras',
      name: 'compras',
      component: Compras
    },
    
    {
      path: '/recuperarsenha',
      name: 'recuperarsenha',
      component: Recuperarsenha
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: Notification
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path:'/anunciar',
      name:'anunciar',
      component: () => import('./views/Anunciar.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.login)) {
    if (!window.localStorage.token){
      next("/login");
    } else {
      next();
    }
  } else {
    next();
  }
})

export default router
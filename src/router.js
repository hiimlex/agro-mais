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
import Search from './views/Search'
import CadastroProdutor from './views/CadastroProdutor'
import Perfilpublico from './views/Perfilpublico'
import Checkout from './views/Checkout'

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
      path: '/produto/:id',
      name: 'produto',
      component: Produto,
      props: true
    },
    {
      path: '/perfil/:id?',
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
          /* pra ter como eu ir, depois tu faz a implementação dos children e me explica. */
          path:'/perfil/publico',
          name: 'perfilpublico',
          component: Perfilpublico
        },
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
      path: '/checkout',
      name: 'checkout',
      component: Checkout,
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
    },
    {
      path:'/cadastro_produtor',
      name: 'cadastroprodutor',
      component: CadastroProdutor
    },
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
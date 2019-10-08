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

export default new Router({
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
      path: '/perfil/informacoes',
      name: 'informacoes',
      component: InformacoeAdicionais
    },
    {
      path: '/perfil/editar',
      name: 'editar',
      component: Editar
    },
    {
      path:'/perfil/informacoesvendas',
      name: 'informacoesvendas',
      component: Informacoesvendas
    },
    {
      path: '/perfil/:id?',
      name: 'perfil',
      component: Perfil,
      
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
      path: '/produto',
      name: 'produto',
      component: Produto
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
    }
  ]
})

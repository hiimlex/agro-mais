import Vue from 'vue'
import Vuex from 'vuex'
import { api } from '@/services'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    login: false,
    p_incomplete: '',
    usuario: {
        id: null,
        acao: null,
        pessoa: []
    }
  },
  mutations: {
    UPDATE_USUARIO(state, payload) {
      state.usuario = payload
    },
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_MESSAGE_PERFIL(state){
      state.p_incomplete = "Para ter acesso a todas as funcionalidades termine seu cadastro!!!"
    }
  },
  actions: {
    getPerfil(context) {
      return api.get(`/meu_perfil`).then(response => {
        context.commit("UPDATE_USUARIO", response.data.data);
        context.commit("UPDATE_LOGIN", true);
      }).catch(error => {
        if(error.response.status === 404){
          context.commit("UPDATE_LOGIN", true)
          context.commit("UPDATE_MESSAGE_PERFIL")
        }
      });
    },
    logarUsuario(context, payload) {
      return api
        .login({
          email: payload.email,
          pass: payload.pass
        })
        .then(response => {
          window.localStorage.token = `${response.data.token}`;
          context.commit("UPDATE_LOGIN", true);
        });
    },
    deslogar(context){
      let token = localStorage.removeItem('token')
      if(!token){
        context.commit("UPDATE_SNACKBAR", false)
        context.commit("UPDATE_LOGIN", false)
        return true
      }
    }

  }
})

import Vue from 'vue'
import Vuex from 'vuex'
import { api } from '@/services'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    login: false,
    p_incomplete: null,
    usuario: {
        id: null,
        acao: null,
        pessoa: []
    }
  },
  mutations: {
    UPDATE_USUARIO(state, payload) {
      state.usuario = Object.assign(state.usuario, payload);
    },
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_MESSAGE_PERFIL(state,payload){
      if (payload){
        state.p_incomplete = null
      }else{
        state.p_incomplete = "Para ter acesso a todas as funcionalidades termine seu cadastro!!!"
      }
    }
  },
  actions: {
    getPerfil(context) {
      return api.get(`/meu_perfil`).then(response => {
        context.commit("UPDATE_USUARIO", response.data.data);
        context.commit("UPDATE_LOGIN", true);
      })
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
          this.dispatch('getPerfil')
        });
    },
    deslogar(context){
      let token = localStorage.removeItem('token')
      if(!token){
        context.commit("UPDATE_MESSAGE_PERFIL",false)
        context.commit("UPDATE_LOGIN", false);
        context.commit("UPDATE_USUARIO", {
          id: null,
          acao: null,
          pessoa: null
        })
        return true

      }
    }

  }
})

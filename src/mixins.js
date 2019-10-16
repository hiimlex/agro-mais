import { api } from '@/services'

export const validaToken = {
  created() {
    if (window.localStorage.token) {
      api
        .validaToken()
        .then(response => {
          this.$store.dispatch("getPerfil")
        })
        .catch(error => {
          window.localStorage.removeItem('token')
          this.$router.push('login')
        })

    }
  }
}
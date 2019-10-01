import axios from 'axios'

const api = axios.create({
  baseURL: 'http://10.16.85.188:5000/'
})

export default api
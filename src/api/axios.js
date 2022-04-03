import axios from 'axios'
import router from '@/router'

// eslint-disable-next-line import/prefer-default-export
export const Axios = axios.create({
  baseURL: 'http://localhost:3000/api/',
})

Axios.interceptors.response.use(response => {
  if (response.data.message.includes('JWT expired')) {
    router.push({ name: `${localStorage.getItem('role')}-login` })
  }

  return response
})

Axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`

import axios from "axios"

const instance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  timeout: 5000,
  headers:{
    'content-type': 'application/json',
    apikey: import.meta.env.VITE_API_KEY,
    username: import.meta.env.VITE_USER_NAME
  }
}) 

export default instance
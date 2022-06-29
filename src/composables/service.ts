import axios from 'axios'

const service= axios.create({
  baseURL: import.meta.env.VITE_CMS_URL as string,
  timeout: 60000,
  headers: {
    'Authorization': 'bearer ' + import.meta.env.VITE_CMS_TOKEN
  }
})

export { service }
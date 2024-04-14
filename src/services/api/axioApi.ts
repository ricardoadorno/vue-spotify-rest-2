import axios, { type AxiosInstance } from 'axios'

export default (headers?: any): AxiosInstance =>
  axios.create({
    baseURL: `${import.meta.env.VITE_SPOTIFY_URL}`,
    headers: {
      common: headers
    }
  })

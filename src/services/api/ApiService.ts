import type { AxiosInstance } from 'axios'
import axiosApi from './axioApi'

class ApiService {
  protected readonly apiInstance: AxiosInstance

  protected readonly token?: string

  constructor(token?: string) {
    this.token = token

    this.apiInstance = token ? axiosApi({ Authorization: `Bearer ${token}` }) : axiosApi()
  }

  async getAlbumById(albumId: string) {
    try {
      const { data } = await this.apiInstance.get(`albums/${albumId}`)
      return data
    } catch (error) {
      this.handleError(error)
    }
  }

  async getSearchResults(searchTerm: string) {
    try {
      const { data } = await this.apiInstance.get('search', {
        params: {
          q: searchTerm,
          type: 'album',
          limit: 10
        }
      })

      return data
    } catch (error) {
      this.handleError(error)
    }
  }

  async getTrackById(trackId: string) {
    try {
      const { data } = await this.apiInstance.get(`tracks/${trackId}`)
      return data
    } catch (error) {
      this.handleError(error)
    }
  }

  protected handleError(error: any) {
    console.error(error)
  }
}

export default ApiService

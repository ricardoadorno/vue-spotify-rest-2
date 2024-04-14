import type { TokenContent } from '@/common/types/TokenContent'
import LocalStorageService from '@/services/LocalStorageService'
import { defineStore } from 'pinia'

const useAuthStore = defineStore('auth', {
  state: () => ({
    authStorage: LocalStorageService.get<TokenContent>('@auth')
  }),
  getters: {
    getToken: (state) => state.authStorage?.access_token,
    hasToken: (state) => Boolean(state.authStorage),
    hasExpired: (state) => {
      if (!state.authStorage) return true

      const now = new Date().getTime()
      const expiresAt = state.authStorage.created_at + state.authStorage.expires_in * 1000

      return now > expiresAt
    }
  },
  actions: {
    setToken(data: TokenContent) {
      LocalStorageService.set('@auth', data)

      this.authStorage = LocalStorageService.get<TokenContent>('@auth')
    },
    clearToken() {
      LocalStorageService.clear('@auth')

      this.authStorage = null
    }
  }
})

export default useAuthStore

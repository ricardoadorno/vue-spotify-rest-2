import { defineStore } from 'pinia'

const usePlayerStore = defineStore('player', {
  state: () => ({
    url: '',
    name: ''
  }),
  getters: {},
  actions: {
    setAudio(url: string, name: string) {
      this.url = url
      this.name = name
    },
    closeAudio() {
      this.url = ''
      this.name = ''
    }
  }
})

export default usePlayerStore

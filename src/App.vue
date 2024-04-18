<script setup lang="ts">
import { onMounted } from 'vue'
import useAuthStore from '@/stores/auth'
import AuthService from './services/AuthService'
import usePlayerStore from '@/stores/player'
import AudioPlayer from './components/molecules/AudioPlayer.vue'

const authStore = useAuthStore()
const playerStore = usePlayerStore()

onMounted(async () => {
  if (!authStore.hasToken) {
    const tokenContent = await AuthService.getAcessToken()

    authStore.setToken(tokenContent)
  }

  if (authStore.hasExpired) {
    const tokenContent = await AuthService.getAcessToken()

    authStore.setToken(tokenContent)
  }
})
</script>

<template>
  <router-view />
  <AudioPlayer
    v-if="playerStore.url"
    @close-audio="playerStore.closeAudio"
    :url="playerStore.url"
    :name="playerStore.name"
  />
</template>

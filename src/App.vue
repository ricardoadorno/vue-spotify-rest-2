<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import useAuthStore from '@/stores/auth'
import AuthService from './services/AuthService'

const authStore = useAuthStore()

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
  <RouterView />
</template>

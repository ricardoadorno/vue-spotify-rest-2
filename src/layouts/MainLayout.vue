<script setup lang="ts">
import MainFooter from './components/MainFooter.vue'
import MainNavbar from './components/MainNavbar.vue'
</script>

<template>
  <MainNavbar />
  <main class="container mx-auto p-4 h-screen">
    <router-view />
  </main>
  <MainFooter />
</template>

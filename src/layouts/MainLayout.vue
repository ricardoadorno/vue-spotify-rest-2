<script setup lang="ts">
import MainFooter from './components/MainFooter.vue'
import MainNavbar from './components/MainNavbar.vue'
</script>

<template>
  <MainNavbar />
  <main class="container mx-auto p-4 min-h-screen">
    <router-view v-slot="{ Component }">
      <transition name="scale" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
  <MainFooter />
</template>

<style>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>

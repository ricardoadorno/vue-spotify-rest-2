<script setup lang="ts">
import AppTypography from '@/components/atoms/AppTypography.vue'
</script>

<template>
  <nav class="bg-light-dark w-100">
    <div class="container mx-auto p-4 flex justify-between items-center">
      <router-link to="/">
        <div class="flex gap-3 items-center">
          <img src="@/assets/spotify-icon.svg" alt="Spotify logo" class="h-8" />
          <AppTypography variant="paragraph">Vue Spotify API 2.0</AppTypography>
        </div>
      </router-link>

      <a href="https://github.com/ricardoadorno">
        <AppTypography variant="paragraph"> By Ricardo Adorno </AppTypography>
      </a>
    </div>
  </nav>
</template>

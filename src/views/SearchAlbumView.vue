<script setup lang="ts">
import SearchBar from '@/components/molecules/SearchBar.vue'
import { ref } from 'vue'

const search = ref('')
</script>

<template>
  <div class="flex flex-col items-center justify-center pt-8">
    <SearchBar
      v-model="search"
      placeholder="Search for any artist or album"
      @submit="() => console.log('Searching for:', search)"
    />
  </div>
</template>

<script setup lang="ts">
import SearchBar from '@/components/molecules/SearchBar.vue'
import { ref } from 'vue'
import useAuthStore from '@/stores/auth'
import ApiService from '@/services/api/ApiService'
import type { AlbumTypes } from '@/common/types'
import AlbumCard from '@/components/molecules/AlbumCard.vue'

const authStore = useAuthStore()

const search = ref('')
const isLoading = ref(false)
const albums = ref<AlbumTypes[]>([])

const searchAlbum = async () => {
  isLoading.value = true

  const service = new ApiService(authStore.getToken)

  const res = await service.getSearchResults(search.value)

  albums.value = res.albums.items

  isLoading.value = false
}
</script>

<template>
  <div class="flex flex-col items-center justify-center pt-8">
    <SearchBar
      v-model="search"
      placeholder="Search for any artist or album"
      @submit="searchAlbum"
    />
  </div>
  <div v-if="isLoading && albums.length !== 0" class="flex flex-wrap justify-center">
    <AlbumCard
      v-for="album in albums"
      :key="album.id"
      :album="{
        name: album.name,
        artists: album.artists[0].name,
        release_date: album.release_date,
        image_url: album.images[1].url
      }"
    />
  </div>
</template>

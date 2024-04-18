<script setup lang="ts">
import SearchBar from '@/components/molecules/SearchBar.vue'
import { ref } from 'vue'
import useAuthStore from '@/stores/auth'
import ApiService from '@/services/api/ApiService'
import type { AlbumTypes } from '@/common/types'
import AlbumCard from '@/components/molecules/AlbumCard.vue'
import AppIcon from '@/components/atoms/AppIcon.vue'
import { MusicalNoteIcon } from '@heroicons/vue/24/solid'
import AppTypography from '@/components/atoms/AppTypography.vue'
import AppButton from '@/components/atoms/AppButton.vue'

const authStore = useAuthStore()

const search = ref('')
const albums = ref<AlbumTypes[]>([])

const searchAlbum = async () => {
  const service = new ApiService(authStore.getToken)

  const res = await service.getSearchResults(search.value)

  albums.value = res.albums.items
}

const clearSearch = () => {
  search.value = ''
  albums.value = []
}
</script>

<template>
  <div>
    <div class="flex items-center justify-center pt-8">
      <SearchBar v-model="search" placeholder="Search..." @submit="searchAlbum" />
      <AppButton variant="ghost" :disabled="!albums.length" @click="clearSearch"> Clear </AppButton>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      <AlbumCard
        v-for="album in albums"
        :key="album.id"
        :album="{
          id: album.id,
          name: album.name,
          artists: album.artists[0].name,
          release_date: album.release_date,
          image_url: album.images[1].url
        }"
      />
    </div>
    <div v-if="!albums.length" class="flex flex-col gap-4 items-center justify-center pt-8">
      <AppTypography variant="heading">Search for an album</AppTypography>
      <AppIcon>
        <MusicalNoteIcon />
      </AppIcon>
    </div>
  </div>
</template>

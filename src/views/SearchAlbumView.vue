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
import { debounceTime, filter, tap, throttleTime } from 'rxjs/operators'
import { from } from '@vueuse/rxjs'

const fetchResults = (query: string) => {
  console.log('fetching results', query)
}

const authStore = useAuthStore()

const search = ref('')
const albums = ref<AlbumTypes[]>([])

const searchAlbum = async (term: string) => {
  const service = new ApiService(authStore.getToken)

  const res = await service.getSearchResults(term)

  albums.value = res.albums.items
}

const clearSearch = () => {
  search.value = ''
  albums.value = []
}

from(search)
  .pipe(
    tap((value) => console.log(value)),
    filter((value) => value.length > 3),
    debounceTime(500),
    throttleTime(500)
  )
  .subscribe(searchAlbum)
</script>

<template>
  <div>
    <div class="flex items-center justify-center pt-8">
      <SearchBar v-model="search" placeholder="Search..." @submit="() => searchAlbum(search)" />
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

  <!-- <section>
    <SearchBar placeholder="Search..." v-model="searchInput" />
  </section> -->
</template>

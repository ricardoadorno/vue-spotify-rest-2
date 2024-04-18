<script setup lang="ts">
import ApiService from '@/services/api/ApiService'
import useAuthStore from '@/stores/auth'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import type { AlbumTypes } from '@/common/types'
import AppTypography from '@/components/atoms/AppTypography.vue'
import AppIcon from '@/components/atoms/AppIcon.vue'
import { ArrowLeftIcon } from '@heroicons/vue/24/solid'
import { formatMilliseconds } from '@/utils/timeFormat'

const route = useRoute()
const authStore = useAuthStore()

const album = ref<AlbumTypes>()

onMounted(async () => {
  const service = new ApiService(authStore.getToken)

  album.value = await service.getAlbumById(String(route.params.id))
})
</script>

<template>
  <div>
    <AppIcon @click="$router.push('/')" v-if="album">
      <ArrowLeftIcon />
    </AppIcon>
    <div v-if="album" class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div class="flex flex-col gap-2 justify-center items-center">
        <div>
          <img
            :src="album.images?.[1].url"
            alt="Album Image"
            class="rounded-md w-full md:w-96 h-96 md:h-96 object-cover mb-4"
          />
          <div>
            <AppTypography variant="heading">{{ album.name }}</AppTypography>

            <AppTypography variant="paragraph">By {{ album.artists[0].name }}</AppTypography>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-4">
        <AppTypography variant="heading">Track List</AppTypography>
        <ul
          class="flex flex-col gap-2 max-h-96 overflow-y-auto p-4 rounded-md bg-light-dark"
          v-if="album.tracks && album.tracks.items.length"
        >
          <li
            v-for="track in album.tracks.items"
            :key="track.id"
            @click="$router.push(`/track/${track.id}`)"
            class="flex justify-between items-center p-2 rounded-md bg-light cursor-pointer hover:bg-dark transition-colors duration-300 ease-in-out"
          >
            <AppTypography variant="paragraph">{{ track.name }}</AppTypography>
            <small>{{ formatMilliseconds(track.duration_ms) }}</small>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

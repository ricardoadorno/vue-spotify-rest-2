<script setup lang="ts">
import ApiService from '@/services/api/ApiService'
import useAuthStore from '@/stores/auth'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import type { AlbumTypes } from '@/common/types'
import AppTypography from '@/components/atoms/AppTypography.vue'
import AppIcon from '@/components/atoms/AppIcon.vue'
import { ArrowLeftIcon } from '@heroicons/vue/24/solid'
import TrackList from '@/components/molecules/TrackList.vue'

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

      <TrackList :tracks="album.tracks" />
    </div>
  </div>
</template>

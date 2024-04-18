<script setup lang="ts">
import ApiService from '@/services/api/ApiService'
import useAuthStore from '@/stores/auth'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import type { TrackTypes } from '@/common/types'
import AppTypography from '@/components/atoms/AppTypography.vue'
import AppIcon from '@/components/atoms/AppIcon.vue'
import { ArrowLeftIcon } from '@heroicons/vue/24/solid'
import { formatMilliseconds } from '@/utils/timeFormat'
import { formatDate } from '@/utils/dateFormat'
import { FireIcon } from '@heroicons/vue/24/solid'
import { CalendarIcon } from '@heroicons/vue/24/solid'
import { MicrophoneIcon } from '@heroicons/vue/24/solid'
import { MusicalNoteIcon } from '@heroicons/vue/24/solid'
import { ClockIcon } from '@heroicons/vue/24/solid'
import { PlayIcon } from '@heroicons/vue/24/solid'

import AppButton from '@/components/atoms/AppButton.vue'
import usePlayerStore from '@/stores/player'

const route = useRoute()
const authStore = useAuthStore()
const playerStore = usePlayerStore()

const track = ref<TrackTypes>()

const handleTrackPlay = (audioUrl: string, trackName: string) => {
  playerStore.closeAudio()
  playerStore.setAudio(audioUrl, trackName)
  console.log(playerStore.url, playerStore.name)
}

onMounted(async () => {
  const service = new ApiService(authStore.getToken)

  track.value = await service.getTrackById(String(route.params.id))
})
</script>

<template>
  <div>
    <AppIcon @click="$router.go(-1)" v-if="track" class="mb-2">
      <ArrowLeftIcon />
    </AppIcon>
    <div v-if="track" class="grid grid-cols-6 md:grid-cols-12">
      <div class="col-span-6 flex justify-center items-center">
        <img
          alt="Album Image"
          :src="track.album.images?.[1].url"
          class="rounded-md w-full md:w-96 h-96 md:h-96 object-cover mb-4"
        />
      </div>
      <div class="col-span-5 flex flex-col gap-4 p-4 rounded-md">
        <AppTypography variant="heading">{{ track.name }}</AppTypography>
        <div class="flex gap-2 items-center">
          <AppIcon>
            <MicrophoneIcon></MicrophoneIcon>
          </AppIcon>
          <b>Artist: </b>{{ track.artists.map((artist) => artist.name).join(', ') }}
        </div>

        <div class="flex gap-2 items-center">
          <AppIcon>
            <MusicalNoteIcon></MusicalNoteIcon>
          </AppIcon>
          <b>Album:</b>
          {{ track.album.name }}
        </div>
        <div class="flex gap-2 items-center">
          <AppIcon>
            <ClockIcon></ClockIcon>
          </AppIcon>
          <b>Duration:</b> {{ formatMilliseconds(track.duration_ms) }}
        </div>
        <div class="flex gap-2 items-center">
          <AppIcon>
            <FireIcon></FireIcon>
          </AppIcon>
          <b>Popularity:</b> {{ track.popularity }}/100
        </div>
        <div class="flex gap-2 items-center">
          <AppIcon>
            <CalendarIcon></CalendarIcon>
          </AppIcon>
          <b>Release Date:</b> {{ formatDate(track.album.release_date) }}
        </div>

        <AppButton
          v-if="track.preview_url"
          class="flex items-center gap-2 mt-6"
          @click="handleTrackPlay(track.preview_url, track.name)"
        >
          <AppIcon>
            <PlayIcon></PlayIcon>
          </AppIcon>
          Play a Demo
        </AppButton>
      </div>
    </div>
  </div>
</template>

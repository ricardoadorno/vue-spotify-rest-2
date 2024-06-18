<script setup lang="ts">
import AppTypography from '@/components/atoms/AppTypography.vue'
import { formatMilliseconds } from '@/utils/timeFormat'

defineProps<{
  tracks: {
    items: {
      id: string
      name: string
      duration_ms: number
    }[]
  }
}>()
</script>

<template>
  <div class="flex flex-col gap-4" data-testid="track-list">
    <AppTypography variant="heading">Track List</AppTypography>
    <ul
      class="flex flex-col gap-2 max-h-96 overflow-y-auto p-4 rounded-md bg-light-dark"
      v-if="tracks && tracks.items.length"
    >
      <li
        v-for="track in tracks.items"
        :key="track.id"
        @click="$router.push(`/track/${track.id}`)"
        class="flex justify-between items-center p-2 rounded-md bg-light cursor-pointer hover:bg-dark transition-colors duration-300 ease-in-out"
      >
        <AppTypography variant="paragraph">{{ track.name }}</AppTypography>
        <small>{{ formatMilliseconds(track.duration_ms) }}</small>
      </li>
    </ul>
    <div v-else class="flex justify-center items-center h-96">
      <AppTypography variant="paragraph" data-testid="track-list-empty-message"
        >No tracks found</AppTypography
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

defineProps<{
  album: {
    id: string
    name: string
    artists: string
    release_date: string
    image_url: string
  }
}>()
</script>

<template>
  <div
    @click="router.push(`/album/${album.id}`)"
    class="flex flex-col w-full max-w-xs p-4 m-4 rounded-md transition-transform transform-gpu hover:scale-105 duration-300 ease-in-out cursor-pointer"
  >
    <img :src="album.image_url" alt="Album Image" class="rounded-md" />
    <div class="flex flex-col gap-2 mt-4">
      <h3 class="text-lg font-bold">
        {{ album.name }}
      </h3>
      <p class="text-sm">Artist's Name: {{ album.artists }}</p>

      <small class="text-xs text-gray"
        >Release Date: {{ new Date(album.release_date).toLocaleDateString() }}</small
      >
    </div>
  </div>
</template>

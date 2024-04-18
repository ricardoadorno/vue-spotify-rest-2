<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/solid'
import AppIcon from '@/components/atoms/AppIcon.vue'
import AppTypography from '@/components/atoms/AppTypography.vue'

defineProps<{
  url: string
  name: string
}>()

defineEmits<{
  (event: 'close-audio'): void
}>()
</script>

<template>
  <div
    class="fixed bottom-0 left-1/2 right-0 pt-2 bg-dark flex flex-col items-center justify-between bg-white shadow-lg rounded-t-xl transform -translate-x-1/2 w-96 h-24 z-50"
  >
    <AppIcon
      @click="$emit('close-audio')"
      class="cursor-pointer absolute top-2 right-2 text-danger w-6 h-6"
    >
      <XMarkIcon />
    </AppIcon>
    <AppTypography variant="caption" class="text-dark">{{ name }}</AppTypography>

    <audio controls autoplay>
      <source :src="url" type="audio/mpeg" />
    </audio>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  album: {
    name: string
    artists: string
    release_date: string
    image_url: string
  }
}>()
</script>

<template>
  <div class="card">
    <img :src="album.image_url" alt="Album Image" class="card__img" />
    <div class="card__content">
      <h3 class="card__content-title">
        {{ album.name }}
      </h3>
      <p>Artist's Name: {{ album.artists }}</p>

      <small>Release Date: {{ album.release_date }}</small>
    </div>
  </div>
</template>

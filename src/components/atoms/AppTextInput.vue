<script setup lang="ts">
const model = defineModel<string>()
</script>

<template>
  <input v-model="model" class="p-2 rounded-md text-dark placeholder-dark italic" />
</template>

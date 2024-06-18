<script setup lang="ts">
import AppButton from '../atoms/AppButton.vue'
import AppTextInput from '../atoms/AppTextInput.vue'

defineProps<{
  placeholder: string
}>()

const search = defineModel<string>()

defineEmits<{
  (e: 'submit'): void
}>()
</script>

<template>
  <form
    @submit.prevent="$emit('submit')"
    class="flex items-center w-5/12"
    data-testid="search-bar-form"
  >
    <AppTextInput
      data-testid="search-bar"
      :placeholder="placeholder"
      v-model="search"
      class="w-full rounded-r-none bg-gray text-dark"
    />
    <AppButton type="submit" class="rounded-l-none">Search</AppButton>
  </form>
</template>

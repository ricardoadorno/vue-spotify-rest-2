<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'ghost'
  }>(),
  {
    variant: 'primary'
  }
)

const variantClasses = {
  primary: 'bg-primary text-white hover:bg-primary-dark',
  secondary: 'bg-secondary text-white',
  danger: 'bg-danger text-white',
  success: 'bg-success text-white',
  ghost: 'bg-transparent text-primary'
}
</script>

<template>
  <button
    class="font-bold py-2 px-4 rounded disabled:opacity-50"
    :class="variantClasses[props.variant]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant: 'paragraph' | 'heading' | 'caption'
  }>(),
  {
    variant: 'paragraph'
  }
)

const variantClasses = {
  paragraph: '',
  heading: 'text-2xl font-bold',
  caption: 'text-lg'
}
</script>

<template>
  <p :class="variantClasses[props.variant]">
    <slot />
  </p>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant: 'paragraph' | 'heading'
  }>(),
  {
    variant: 'paragraph'
  }
)

const variantClasses = {
  paragraph: 'text-gray-700',
  heading: 'text-black font-bold'
}
</script>

<template>
  <p :class="variantClasses[props.variant]">
    <slot />
  </p>
</template>

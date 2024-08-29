<script setup lang="ts">
const props = defineProps<{
  label: string
  type: string
}>()
</script>

<template>
  <label>{{ props.label }}</label>
  <input :type="props.type" />
</template>
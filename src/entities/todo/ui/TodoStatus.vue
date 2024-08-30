<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { Status, StatusLabel } from '../model/todo'

const props = defineProps<{
  status: Status
}>()

const bgClass = computed(() => {
  switch(props.status) {
    case 'NotStarted':
      return 'bg-gray-600'
    case 'Doing':
      return 'bg-blue-600'
    case 'Done':
      return 'bg-emerald-600'
    default:
      return ''
  }
})
</script>

<template>
  <div class="py-1 text-center rounded-full text-white text-sm w-20" :class="bgClass">
    {{ StatusLabel[props.status]  }}
  </div>
</template>
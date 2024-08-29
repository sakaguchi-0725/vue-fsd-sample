<script setup lang="ts">
import { Todo } from '@/entities/todo/model/todo';

const props = defineProps<{
  todo: Todo
}>()

defineEmits<{
  toEdit: [id: number]
}>()
</script>

<template>
  <li>
    <span>{{ props.todo.title }}</span>
    <span>{{ props.todo.description }}</span>
    <span @click="$emit('toEdit', props.todo.id)">編集</span>
  </li>
</template>
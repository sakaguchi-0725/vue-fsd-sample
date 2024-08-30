<script setup lang="ts">
import { Todo, TodoStatus } from '@/entities/todo'

const props = defineProps<{
  todo: Todo
}>()

defineEmits<{
  toEdit: [id: number]
}>()
</script>

<template>
  <li class="border-b px-4 py-2 flex items-center">
    <TodoStatus :status="props.todo.status" />
    <span class="flex-1 min-w-0 ml-4">
      <span class="w-20 text-center font-bold truncate">{{ props.todo.title }}</span>
      <span class="ml-4 flex-auto text-gray-500 truncate">{{ props.todo.description }}</span>
    </span>
    <button type="button" class="ml-auto bg-gray-800 text-white py-2 px-4 rounded-md" @click="$emit('toEdit', props.todo.id)">編集</button>
  </li>
</template>
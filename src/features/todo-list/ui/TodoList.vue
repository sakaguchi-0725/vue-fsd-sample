<script setup lang="ts">
import { useTodoList } from '../hooks/useTodoList'
import TodoItem from './TodoItem.vue'

const { todos, toEditPage } = useTodoList()
</script>

<template>
  <div class="max-w-3xl mx-auto">
    <ui class="list-none" v-if="todos.length !== 0">
      <TodoItem v-for="todo in todos" :key=todo.id :todo="todo" @to-edit="toEditPage" />
    </ui>
    <div v-else class="text-center text-gray-500">
      <span>登録されているタスクはありません</span>
    </div>
  </div>
</template>
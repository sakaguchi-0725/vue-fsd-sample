<script setup lang="ts">
import { useTodoList } from '../hooks/useTodoList'
import TodoItem from './TodoItem.vue'

const { todos, toEditPage } = useTodoList()
</script>

<template>
  <ui>
    <TodoItem v-for="todo in todos" :key=todo.id :todo="todo" @to-edit="toEditPage" />
  </ui>
</template>
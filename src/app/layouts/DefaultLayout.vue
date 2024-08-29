<script setup lang="ts">
import { Header } from '@/shared/ui'
import { RouterView } from 'vue-router'
</script>

<template>
  <Header></Header>
  <div class="container mx-auto p-5">
    <RouterView />
  </div>
</template>
<script setup lang="ts">
import { AppProvider } from './providers'
import { RouterView } from 'vue-router'
</script>

<template>
  <AppProvider>
    <RouterView />
  </AppProvider>
</template>

<style lang="css">
@import url('./styles/index.css');
</style>
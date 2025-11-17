<template>
  <div class="min-h-screen flex flex-col">
    <AppNavbar />
    <main class="grow">
      <div class="w-full p-4 md:p-6 lg:py-10 lg:px-20">
        <RouterView />
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppNavbar from './AppNavbar.vue'
import AppFooter from './AppFooter.vue'
</script>

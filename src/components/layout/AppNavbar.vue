<script setup lang="ts">
import { useRouter } from 'vue-router'
import Menubar from 'primevue/menubar'
import { ref } from 'vue'

const router = useRouter()

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    command: () => router.push('/'),
  },
  {
    label: 'Features',
    icon: 'pi pi-star',
    command: () => router.push('/features'),
  },
  {
    label: 'Projects',
    icon: 'pi pi-search',
    command: () => router.push('/projects'),
  },
  {
    label: 'Contact',
    icon: 'pi pi-envelope',
    command: () => router.push('/contact'),
  },
])
</script>

<template>
  <div class="card p-4 bg-zinc-900">
    <Menubar :model="items" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import Menubar from 'primevue/menubar'
import { ref } from 'vue'

const router = useRouter()

const items = ref([
  {
    label: 'Inicio',
    icon: 'pi pi-home',
    command: () => router.push('/'),
  },
  {
    label: 'Productos',
    icon: 'pi pi-box',
    command: () => router.push('/products'),
  },
  {
    label: 'Nosotros',
    icon: 'pi pi-star',
    command: () => router.push('/about'),
  },
  {
    label: 'Contacto',
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

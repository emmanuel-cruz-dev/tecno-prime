<template>
  <div class="card">
    <Galleria
      :value="images"
      :responsiveOptions="responsiveOptions"
      :numVisible="5"
      containerStyle="max-width: 640px"
    >
      <template #item="slotProps">
        <img
          :src="slotProps.item.itemImageSrc"
          :alt="slotProps.item.alt"
          style="width: 100%; display: block"
        />
      </template>
      <template #thumbnail="slotProps">
        <img
          :src="slotProps.item.thumbnailImageSrc"
          :alt="slotProps.item.alt"
          style="display: block"
        />
      </template>
      <template #caption="slotProps">
        <div class="mb-1 font-bold">{{ slotProps.item.title }}</div>
        <p class="text-sm text-white">{{ slotProps.item.alt }}</p>
      </template>
    </Galleria>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Galleria from 'primevue/galleria'
import { PhotoService } from '../../service/PhotoService'

onMounted(() => {
  PhotoService.getImages().then((data) => (images.value = data))
})

const images = ref()
const responsiveOptions = ref([
  {
    breakpoint: '1300px',
    numVisible: 4,
  },
  {
    breakpoint: '575px',
    numVisible: 1,
  },
])
</script>

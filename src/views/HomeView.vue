<script setup lang="ts">
import ProductCard from '@/components/product/ProductCard.vue'
import FAQs from '@/components/ui/FAQs.vue'
import GalleryItems from '@/components/ui/GalleryItems.vue'
</script>

<template>
  <main>
    <section>
      <h2 class="my-8 text-center text-3xl font-bold">Nuestros productos</h2>
      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
    </section>
    <section>
      <h2 class="my-8 text-center text-3xl font-bold">Preguntas frecuentes</h2>
      <div class="max-w-4xl mx-auto">
        <FAQs />
      </div>
    </section>
    <section class="mt-12 flex justify-center">
      <GalleryItems />
    </section>
  </main>
</template>

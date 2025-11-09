<template>
  <footer class="bg-linear-to-b from-zinc-900 to-black text-white mt-auto border-t border-zinc-800">
    <section class="container mx-auto px-6 py-12 pb-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div class="md:col-span-2">
          <div class="flex items-center gap-2 mb-4">
            <i class="pi pi-bolt text-blue-500 text-3xl"></i>
            <h3
              class="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              Tecno Prime
            </h3>
          </div>
          <p class="text-gray-400 leading-relaxed max-w-md">
            Tu destino para la mejor tecnología. Productos de calidad, precios competitivos y el
            mejor servicio al cliente.
          </p>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4 text-white">Navegación</h4>
          <ul class="flex flex-col space-y-2">
            <li>
              <router-link
                to="/"
                class="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                Inicio
              </router-link>
            </li>
            <li>
              <router-link
                to="/products"
                class="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                Productos
              </router-link>
            </li>
            <li>
              <router-link
                to="/about"
                class="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                Nosotros
              </router-link>
            </li>
            <li>
              <router-link
                to="/contact"
                class="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                Contacto
              </router-link>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4 text-white">Síguenos</h4>
          <div class="flex gap-3 [&>button]:cursor-pointer">
            <button
              class="w-10 h-10 rounded-full bg-zinc-800 hover:bg-blue-600 transition-all duration-200 flex items-center justify-center group"
              aria-label="Facebook"
            >
              <i class="pi pi-facebook text-gray-400 group-hover:text-white"></i>
            </button>
            <button
              class="w-10 h-10 rounded-full bg-zinc-800 hover:bg-sky-500 transition-all duration-200 flex items-center justify-center group"
              aria-label="Twitter"
            >
              <i class="pi pi-twitter text-gray-400 group-hover:text-white"></i>
            </button>
            <button
              class="w-10 h-10 rounded-full bg-zinc-800 hover:bg-pink-600 transition-all duration-200 flex items-center justify-center group"
              aria-label="Instagram"
            >
              <i class="pi pi-instagram text-gray-400 group-hover:text-white"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="border-t border-zinc-800 pt-6"></div>
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-gray-500 text-sm">&copy; 2025 Tecno Prime. Todos los derechos reservados.</p>
        <div class="flex gap-6">
          <router-link
            to="#"
            class="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-200"
          >
            Términos y Condiciones
          </router-link>
          <router-link
            to="#"
            class="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-200"
          >
            Política de Privacidad
          </router-link>
        </div>
      </div>
    </section>
  </footer>
</template>

<script setup lang="ts"></script>

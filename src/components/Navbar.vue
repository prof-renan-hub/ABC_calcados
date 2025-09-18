<template>
  <div class="navbar h-16 bg-neutral text-neutral-content shadow-sm">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">ABC Calçados</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal">
        <li class="mx-1 border-2 border-transparent hover:border-2 rounded-md hover:border-neutral-content">
          <a>Marcas</a></li>
        <li class="mx-1 border-2 border-transparent hover:border-2 rounded-md hover:border-neutral-content"><a>Mais
            vendidos</a></li>
        <li class="mx-1 border-2 border-transparent hover:border-2 rounded-md hover:border-neutral-content"><a>Novas
            coleções</a></li>
        <li class="mx-1 border-2 border-transparent hover:border-2 rounded-md hover:border-neutral-content">
          <a>Contato</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const user = ref(null)

onMounted(() => {
  const stored = localStorage.getItem('user')
  if (stored) user.value = JSON.parse(stored)
})

function logout() {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
  localStorage.removeItem('user')
  user.value = null
  window.location.href = '/login'
}
</script>
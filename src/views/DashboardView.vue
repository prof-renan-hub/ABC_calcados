<script setup>
import CalendarPopover from "../components/CalendarPopover.vue";
import Navbar from "../components/Navbar.vue";
import { ref } from "vue";

const data = ref('')
</script>

<template>
    <Navbar />
    <div class="p-4">
        <h1>Dashboard</h1>
    </div>
    <div class="p-6 space-y-4">
    <h1 class="text-lg font-bold">Exemplo com CalendarPopover</h1>

    <CalendarPopover v-model="data" />

    <p class="mt-4">📅 Data selecionada: {{ data }}</p>
  </div>
</template>

<!-- <script setup>
import { ref } from 'vue'
import axios from 'axios'
import { Plus } from 'lucide-vue-next';

const msg = ref('')

async function callProtected() {
  try {
    const token = localStorage.getItem('accessToken')
    const { data } = await axios.get('http://localhost:5000/protected', {
      headers: { Authorization: `Bearer ${token}` }
    })
    msg.value = data.message
  } catch (e) {
    msg.value = e?.response?.data?.message || 'Erro na chamada'
  }
}
</script> -->

<template>
  <div class="p-4">
    <ProductList />
  </div>
</template>

<!-- <script setup>
import { ref } from 'vue'
import api from '../api/http'

const msg = ref('')

const callProtected = async () => {
  const { data } = await api.get('/protected')
  msg.value = data.message
}
</script> -->


<script setup>
import { ref } from 'vue'
import axios from 'axios'
import ProductList from '../components/ProductList.vue'
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
</script>

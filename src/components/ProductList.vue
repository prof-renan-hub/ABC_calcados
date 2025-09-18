<template>
    <div class="flex justify-end mb-4">
        <button class="btn btn-success text-amber-50" onclick="create_product_modal.showModal()">
          <Plus class="h-5 w-5 text-amber-50" />
          Novo
        </button>
    </div>
    <div class="mb-4">
        <h2 class="text-3xl font-bold">Lista de calçados cadastrados</h2>
    </div>
    <ul class="list bg-base-100 rounded-box shadow-md" >
        <li class="list-row" v-for="calcado in calcados" :key="calcado.id">
            <div><img class="size-15 rounded-box" :src=calcado.imagem /></div>
            <div>
                <div>{{ calcado.nome }}</div>
                <div class="text-xs uppercase font-semibold opacity-60">{{ calcado.marca }}</div>
                <div class="text-xs uppercase font-semibold opacity-60">Preço: {{ calcado.preco }}</div>
            </div>
            <button class="btn btn-square btn-ghost">
                <Pencil class="text-yellow-500"/>
            </button>
            <button class="btn btn-square btn-ghost">
                <Trash2 class="text-red-500"/>
            </button>
        </li>
    </ul>
    <CreateProductView />
</template>

<script setup>
import { Pencil, Trash2, Plus } from 'lucide-vue-next';
import CreateProductView from '../views/CreateProductView.vue';



const calcados = [
    {
        id: 1,
        nome: 'Tênis Esportivo',
        marca: 'Nike',
        preco: 99.99,
        imagem: 'https://down-br.img.susercontent.com/file/eff62eda793e70c0e14d37fb59bf44a9'
    },
    {
        id: 2,
        nome: 'Sandália Casual',
        marca: 'Timberland',
        preco: 199.99,
        imagem: 'https://images.freeimages.com/images/premium/previews/1992/19920232-old-sandals.jpg'
    },
    {
        id: 3,
        nome: 'Sandália de Verão',
        marca: 'Havaianas',
        preco: 79.99,
        imagem: 'https://static.wixstatic.com/media/370052_b1dc4e939b454985823837919e43bcc2~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85/370052_b1dc4e939b454985823837919e43bcc2~mv2.jpg'
    }
]

</script>
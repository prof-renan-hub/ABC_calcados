<template>
    <div class="flex justify-end mb-4">
        <button
            class="btn btn-success text-amber-50"
            onclick="create_product_modal.showModal()"
        >
            <Bone class="h-5 w-5 text-amber-50" />
            Novo
        </button>
    </div>
    <div class="mb-4">
        <h2 class="text-3xl font-bold">Lista de calçados cadastrados</h2>
    </div>

    <ul class="list bg-base-100 rounded-box shadow-md" v-if="!loading">
        <li class="list-row" v-for="calcado in listaCalcados" :key="calcado.id">
            <div>
                <img
                    class="size-15 rounded-box"
                    :src="calcado.imagem"
                    alt="calçado"
                />
            </div>
            <div>
                <div>{{ calcado.tipo_nome }}</div>
                <div class="text-xs uppercase font-semibold opacity-60">
                    Cor: {{ calcado.cor }}
                </div>
                <div class="text-xs uppercase font-semibold opacity-60">
                    Categoria: {{ calcado.categoria_nome }}
                </div>
                <div class="text-xs uppercase font-semibold opacity-60">
                    Marca: {{ calcado.marca_nome }}
                </div>
                <div class="text-xs uppercase font-semibold opacity-60">
                    Tamanho: {{ calcado.tamanho }}
                </div>
                <div class="text-xs uppercase font-semibold opacity-60">
                    Preço: {{ calcado.preco }}
                </div>
                <div class="text-xs uppercase font-semibold opacity-60">
                    {{ calcado.descricao }}
                </div>
            </div>
            <button class="btn btn-square btn-ghost">
                <Pencil class="text-yellow-500" />
            </button>
            <button class="btn btn-square btn-ghost" @click="excluirCalcado(calcado)">
                <Trash2 class="text-red-500" />
            </button>
        </li>
    </ul>
    <CreateProductView />
    <Loading />
    <DeleteProductView 
    ref="modalDeleteRef" 
    :calcado="calcadoSelecionado"
    @apagado="calcadoApagado()"/>
</template>

<script setup>
import axios from "axios";
import { Bone, Pencil, Plus, Trash2 } from "lucide-vue-next";
import { onMounted, ref } from "vue";
import Loading from "./Loading.vue";
import CreateProductView from "../views/CreateProductView.vue";
import DeleteProductView from "../views/DeleteProductView.vue";

const listaCalcados = ref([]);
const loading = ref(false);

const modalDeleteRef = ref(null)

const calcadoSelecionado = ref(null)

function excluirCalcado(calcado) {
    calcadoSelecionado.value = calcado
    modalDeleteRef.value?.abrirModal()
}

onMounted(
    () => buscarListaCalcados()
);

async function buscarListaCalcados() {
    abrirLoading();
    const url = "http://localhost:5000/api/calcados";
    const resposta = await axios.get(url);
    if (resposta.status == 200) {
        listaCalcados.value = resposta.data;
        fecharLoading();
    } else {
        fecharLoading();
        console.log("Erro ao buscar dados");
    }
}

function abrirLoading() {
    const exibirLoading = document.getElementById("loading_modal");
    loading.value = true;
    exibirLoading.showModal();
}

function fecharLoading() {
    const exibirLoading = document.getElementById("loading_modal");
    loading.value = false;
    exibirLoading.close();
}

function calcadoApagado() {
    buscarListaCalcados()
}
</script>

<template>
    <dialog class="modal" id="create_product_modal">
        <div class="modal-box w-11/12 max-w-3xl">
            <div class="flex justify-end">
                <form method="dialog">
                    <button class="btn btn-square btn-ghost w-8 h-8" @click="fecharModal()">
                        <CircleX class="text-red-500 w-5 h-5" />
                    </button>
                </form>
            </div>
            <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                <legend class="fieldset-legend text-xl">Novo calçado</legend>

                <div class="columns-2">
                    <label class="label">Selecione o tipo</label>
                    <select class="select select-accent w-full" v-model="tipo">
                        <option disabled value="">Tipo</option>
                        <option v-for="tipo in tipos"
                        :key="tipo.tipo_id"
                        :value="tipo.tipo_id">{{ tipo.nome }}</option>
                    </select>

                    <label class="label">Selecione a categoria</label>
                    <select class="select select-accent w-full" v-model="categoria">
                        <option disabled value="">Categoria</option>
                        <option v-for="categoria in categorias"
                        :key="categoria.categoria_id"
                        :value="categoria.categoria_id">{{ categoria.nome }}</option>
                    </select>
                </div>

                <div class="columns-2">
                    <label class="label">Selecione a marca</label>
                    <select class="select select-accent w-full" v-model="marca">
                        <option disabled value="">Marca</option>
                        <option v-for="marca in marcas"
                        :key="marca.marca_id"
                        :value="marca.marca_id">{{ marca.nome }}</option>
                    </select>

                    <label class="label">Descrição</label>
                    <input type="text" v-model="descricao" class="input input-success w-full" placeholder="Calçado..." />
                </div>

                <div class="columns-3 mb-4">
                    <label class="label">Tamanho</label>
                    <input type="text" v-model="tamanho" required class="input input-success w-full" placeholder="00" />

                    <label class="label">Cor</label>
                    <input type="text" v-model="cor" required class="input input-success w-full" placeholder="Cor..." />

                    <label class="label">Preço R$</label>
                    <input type="text" v-model="preco" class="input input-success w-full" placeholder="0,00" />
                </div>
                <div class="flex justify-end">
                    <button class="btn btn-warning text-amber-50 mx-2" @click="fecharModal()">
                        Cancelar
                    </button>
                    <button class="btn btn-success text-amber-50" @click="salvar()" :disabled="!tipo || !categoria || !marca || !descricao || !tamanho || !cor || !preco">
                        Salvar
                    </button>
                </div>
            </fieldset>
        </div>
    </dialog>
</template>

<script setup>
import axios from 'axios';
import { CircleX } from 'lucide-vue-next';
import { onMounted, ref } from 'vue';

const tipo = ref('')
const categoria = ref('')
const marca = ref('')
const descricao = ref('')
const tamanho = ref('')
const cor = ref('')
const preco = ref('')

const tipos = ref(null)
const categorias = ref(null)
const marcas = ref(null)
const loading = ref(false)
const erro = ref(null)

onMounted(
    async function buscarDados() {
        loading.value = true
        erro.value = null
        try {
            const [res1, res2, res3] = await Promise.all([
                axios.get('http://localhost:5000/api/tipos'),
                axios.get('http://localhost:5000/api/categorias'),
                axios.get('http://localhost:5000/api/marcas')
            ])

            tipos.value = res1.data
            categorias.value = res2.data
            marcas.value = res3.data

        } catch {
            erro.value = 'Erro ao carregar dados'
        } finally {
            loading.value = false
        }
    }
)

async function salvar() {
    const calcado = {
        tipo_id: tipo.value,
        categoria_id: categoria.value,
        marca_id: marca.value,
        descricao: descricao.value,
        tamanho: tamanho.value,
        cor: cor.value,
        preco: preco.value
    }

    loading.value = true
    
    try {
        const resposta = await axios.post('http://localhost:5000/api/calcados', calcado)
        fecharModal()
    } catch {
        console.log('Erro ao salvar dados')
    } finally {
        loading.value = false
    } 
}

function reset() {
    tipo.value = ''
    categoria.value = ''
    marca.value = ''
    descricao.value = ''
    tamanho.value = ''
    cor.value = ''
    preco.value = ''
}

function fecharModal() {
    const modal = document.getElementById('create_product_modal')
    modal.close()
    reset()
}
</script>
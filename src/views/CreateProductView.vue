<template>
    <dialog id="create_product_modal" class="modal">

        <div class="modal-box w-11/12 max-w-3xl">
            <div class="flex justify-end">
                <form method="dialog">
                    <button class="btn btn-square btn-ghost w-8 h-8" @click="cancelar()">
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
                        <option>Feminino</option>
                        <option>Masculino</option>
                        <option>Infantil</option>
                    </select>

                    <label class="label">Selecione a categoria</label>
                    <select class="select select-accent w-full" v-model="categoria">
                        <option disabled value="">Categoria</option>
                        <option>Light mode</option>
                        <option>Dark mode</option>
                        <option>System</option>
                    </select>
                </div>

                <div class="columns-2">
                    <label class="label">Selecione a marca</label>
                    <select class="select select-accent w-full" v-model="marca">
                        <option disabled value="">Marca</option>
                        <option>Havaianas</option>
                        <option>Nike</option>
                        <option>Bracol</option>
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
                    <button class="btn btn-warning text-amber-50 mx-2" @click="cancelar()">
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
import { CircleX } from 'lucide-vue-next';
import { ref } from 'vue'

const tipo = ref('')
const categoria = ref('')
const marca = ref('')
const descricao = ref('')
const tamanho = ref('')
const cor = ref('')
const preco = ref('')




function salvar() {
    const calcado = {
        tipo: tipo.value,
        categoria: categoria.value,
        marca: marca.value,
        descricao: descricao.value,
        tamanho: tamanho.value,
        cor: cor.value,
        preco: preco.value
    }
    console.log('Salvar', calcado)
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

function cancelar() {
    const modal = document.getElementById('create_product_modal')
    modal.close()
    reset()
}
</script>
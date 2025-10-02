<template>
    <dialog ref="modalDeleteRef" class="modal">
        <div class="modal-box w-11/12 max-w-3xl">
            <div class="flex justify-end">
                <form method="dialog">
                    <button
                        class="btn btn-square btn-ghost w-8 h-8"
                        @click="fecharModal()"
                    >
                        <CircleX class="text-red-500 w-5 h-5" />
                    </button>
                </form>
            </div>
            <h1 class="text-xl font-bold mb-2">
                Deseja realmente a apagar o calçado?
            </h1>
            <fieldset
                class="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4"
            >
                <div class="text-xs uppercase font-semibold opacity-60">
                    Tipo: {{ props.calcado?.tipo_nome }}
                </div>
                <div class="text-xs uppercase font-semibold opacity-60">
                    Cor: {{ props.calcado?.cor }}
                </div>
                <div class="text-xs uppercase font-semibold opacity-60">
                    Categoria: {{ props.calcado?.categoria_nome }}
                </div>
                <div class="text-xs uppercase font-semibold opacity-60">
                    Marca: {{ props.calcado?.marca_nome }}
                </div>
                <div class="text-xs uppercase font-semibold opacity-60">
                    Tamanho: {{ props.calcado?.tamanho }}
                </div>
                <div class="text-xs uppercase font-semibold opacity-60">
                    Preço: {{ props.calcado?.preco }}
                </div>
                <div class="text-xs uppercase font-semibold opacity-60">
                    {{ props.calcado?.descricao }}
                </div>
                <div class="flex justify-end">
                    <button
                        class="btn btn-warning text-amber-50 mx-2"
                        @click="fecharModal()"
                    >
                        Cancelar
                    </button>
                    <button
                        class="btn btn-success text-amber-50"
                        @click="apagar()"
                        :disabled="loading"
                    >
                        Apagar
                    </button>
                </div>
            </fieldset>
        </div>
    </dialog>
</template>

<script setup>
import axios from "axios";
import { CircleX } from "lucide-vue-next";
import { ref } from "vue";

const modalDeleteRef = ref(null);

const loading = ref(false);

const props = defineProps({
    calcado: {
        type: Object,
        default: null,
    },
});

const emit = defineEmits(['apagado'])

function abrirModal() {
    modalDeleteRef.value?.showModal();
}

function fecharModal() {
    modalDeleteRef.value?.close();
}

defineExpose({ abrirModal });

async function apagar() {
    abrirLoading();
    try {
        const resposta = await axios.delete(
            `http://localhost:5000/api/calcados/${props.calcado}`
        );
        fecharLoading();
        emit('apagado')
        fecharModal();
    } catch (err) {
        console.log("Erro ao apagar calcado", err);
    } finally {
        fecharLoading();
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
</script>

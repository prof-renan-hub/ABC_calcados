<template>
  <div>
    <!-- Botão que abre o popover -->
    <button 
      popovertarget="cally-popover1" 
      class="input input-border px-4 py-2 border rounded w-full text-left" 
      id="cally1" 
      style="anchor-name:--cally1"
    >
      {{ dataFormatada || 'Selecione uma data' }}
    </button>

    <!-- Popover -->
    <div 
      popover 
      id="cally-popover1" 
      ref="popoverRef"
      class="dropdown bg-base-100 rounded-box shadow-lg p-4"
      style="position-anchor:--cally1"
    >
      <calendar-date class="cally" @change="atualizarData">
        <!-- Botão anterior -->
        <svg 
          aria-label="Previous" 
          class="fill-current size-4" 
          slot="previous" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24"
        >
          <path d="M15.75 19.5 8.25 12l7.5-7.5"></path>
        </svg>

        <!-- Botão próximo -->
        <svg 
          aria-label="Next" 
          class="fill-current size-4" 
          slot="next" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24"
        >
          <path d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
        </svg>

        <!-- Mês -->
        <calendar-month></calendar-month>
      </calendar-date>

      <!-- Botão fechar -->
      <button 
        @click="fecharPopover" 
        class="mt-3 bg-red-500 text-white px-3 py-1 rounded w-full"
      >
        Fechar
      </button>
    </div>
  </div>
</template>







<script setup>
import { ref, computed } from "vue";

// Configuração do v-model
const props = defineProps({
    modelValue: {
        type: String,
        default: "",
    },
});
const emit = defineEmits(["update:modelValue"]);

const popoverRef = ref(null);

// Computed para exibir data no formato brasileiro
const dataFormatada = computed(() => {
    if (!props.modelValue) return "";
    const data = new Date(props.modelValue);
    return data.toLocaleDateString("pt-BR", { timeZone: "UTC" });
});

// Atualiza valor selecionado
function atualizarData(event) {
    const valor = event.target.value;
    emit("update:modelValue", valor);
    fecharPopover();
}

// Fecha manualmente
function fecharPopover() {
    popoverRef.value?.hidePopover?.();
}
</script>

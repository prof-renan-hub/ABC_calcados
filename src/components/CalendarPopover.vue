<template>
    <div>
        <button popovertarget="cally-popover1"
            class="input input-border"
            id="cally1"
            style="anchor-name: --cally1">
            {{ internalDate ? formatDateBR(internalDate) : "Selecionar data" }}
        </button>

        <div popover
            id="cally-popover1"
            class="dropdown bg-base-100 rounded-box shadow-lg p-2"
            style="position-anchor: --cally1">
            <div class="flex justify-end mt-2">
                <button class="btn btn-square btn-ghost w-8 h-8"
                    @click="closeCalendar()">
                    <CircleX class="text-red-500 w-5 h-5" />
                </button>
            </div>
            <calendar-date class="cally"
                :min="today"
                :value="internalDate"
                @change="handleDateChange">
                <svg aria-label="Previous"
                    class="fill-current size-4"
                    slot="previous"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                </svg>
                <svg aria-label="Next"
                    class="fill-current size-4"
                    slot="next"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                </svg>
                <calendar-month></calendar-month>
            </calendar-date>
        </div>
    </div>
</template>

<script setup>
import { CircleX } from "lucide-vue-next";
import { ref, onMounted, watch } from "vue";

const props = defineProps({
    modelValue: { type: String, default: "" },
});
const emit = defineEmits(["update:modelValue"]);

const today = ref("");
const internalDate = ref(props.modelValue);

// ao montar, calcula a data de hoje no formato YYYY-MM-DD
onMounted(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    today.value = `${year}-${month}-${day}`;
});

// mantém interno sincronizado com modelValue externo
watch(
    () => props.modelValue,
    (newVal) => {
        internalDate.value = newVal;
    }
);

function formatDateBR(dateStr) {
    if (!dateStr) return "";
    const [year, month, day] = dateStr.split("-");
    return `${day}/${month}/${year}`;
}

function handleDateChange(event) {
    const value = event.target.value;
    if (value < today.value) {
        alert("Não é permitido selecionar uma data anterior a hoje.");
        return;
    }
    internalDate.value = value;
    emit("update:modelValue", value);
    closeCalendar();
}

function closeCalendar() {
    const popover = document.getElementById("cally-popover1");
    popover?.hidePopover();
}
</script>
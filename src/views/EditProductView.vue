<template>
    <dialog id="delete_product_modal" class="modal">
        <div class="modal-box w-11/12 max-w-3xl">
            <div class="flex justify-end">
                <form method="dialog">
                    <button
                        class="btn btn-square btn-ghost w-8 h-8"
                        @click="cancelar()"
                    >
                        <CircleX class="text-red-500 w-5 h-5" />
                    </button>
                </form>
            </div>
            <h1>Apagar Produto</h1>
        </div>
    </dialog>
</template>

<script setup>
import { CircleX } from "lucide-vue-next";

function cancelar() {
    const modal = document.getElementById("create_product_modal");
    modal.close();
}
</script>

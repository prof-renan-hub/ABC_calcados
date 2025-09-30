<template>
    <div class="navbar h-16 bg-neutral text-neutral-content shadow-sm">
        <div class="flex-1">
            <a class="btn btn-ghost text-xl" @click="Home()">ABC Calçados</a>
        </div>
        <div class="flex-none">
            <ul class="menu menu-horizontal">
                <li
                    class="mx-1 border-2 border-transparent hover:border-2 rounded-md hover:border-neutral-content"
                >
                    <router-link to="/lista/calcados">Calçados</router-link>
                </li>
                <li
                    class="mx-1 border-2 border-transparent hover:border-2 rounded-md hover:border-neutral-content"
                >
                    <router-link to="/estoque">Estoque</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function listarCalcados() {
    router.push("/lista/calcados");
}

function listarEstoque() {
    router.push("/estoque");
}

function Home() {
    router.push("/dashboard");
}
</script>

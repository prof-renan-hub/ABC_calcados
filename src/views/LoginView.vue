<template>
    <div class="h-screen flex items-center justify-center bg-gray-400">
        <div
            class="w-full h-96 bg-[url('/src/assets/images/calcados.jpg')] flex items-center justify-center"
        >
            <div class="sm:w-1/4">
                <div
                    class="w-96 card text-neutral-content bg-neutral shadow-sm flex flex-col items-center justify-center h-full"
                >
                    <div class="w-full card-body flex flex-col items-center">
                        <div class="flex justify-between">
                            <h2 class="text-3xl font-bold">Login</h2>
                        </div>
                        <form
                            class="w-full flex flex-col items-center"
                            @submit.prevent="onSubmit"
                        >
                            <div class="mb-4 w-full justify-center">
                                <label>Email</label>
                                <input
                                    type="email"
                                    required
                                    v-model="email"
                                    placeholder="user@email.com"
                                    class="input input-accent text-gray-800 btn-block"
                                />
                            </div>
                            <div class="mb-4 w-full">
                                <label>Senha</label>
                                <input
                                    v-model="senha"
                                    type="password"
                                    required
                                    placeholder="********"
                                    class="input input-accent text-gray-800 btn-block"
                                />
                            </div>
                            <button
                                :class="[
                                    'btn btn-block',
                                    !loading
                                        ? 'btn-accent'
                                        : 'btn-neutral text-gray-200',
                                ]"
                                :disabled="loading"
                            >
                                {{ loading ? "Entrando..." : "Entrar" }}
                            </button>
                            <div class="mt-4">
                                <p class="text-red-500" v-if="error">
                                    {{ error }}
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";

const email = ref("");
const senha = ref("");
const loading = ref(false);
const error = ref("");
const router = useRouter();
const route = useRoute();

async function onSubmit() {
    loading.value = true;
    error.value = "";

    // try {
    // const { response } = await axios.post('http://localhost:5000/auth/login', {
    //   email: email.value,
    //   senha: senha.value
    // })

    const response = {
        logado: true,
    };

    if (response.logado) {
        router.push("/dashboard");
    } else {
        error.value = "Falha no login";
    }
    // } catch (err) {
    //   error.value = 'Erro ao conectar ao servidor'
    // } finally {
    //   loading.value = false
    // }
}
</script>

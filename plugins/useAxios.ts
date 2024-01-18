import axios from "axios";

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('axios', axios);
})
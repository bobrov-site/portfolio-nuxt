import { defineStore } from "pinia";

export const appStore = defineStore('appStore', {
    state: () => ({
        theme: 'light',
    }),
    actions: {
        initTheme () {
            const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const html = document.querySelector('html');
            html.dataset.bsTheme = isDarkTheme ? 'dark' : 'light';
            this.theme = isDarkTheme ? 'dark' : 'light';
        },
        switchTheme () {
            const html = document.querySelector('html');
            html.dataset.bsTheme = html.dataset.bsTheme === 'dark' ? 'light' : 'dark';
            this.theme = html.dataset.bsTheme
        }
    }
})
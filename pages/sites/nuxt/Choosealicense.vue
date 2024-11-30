<template>
    <ProjectContent :techStack="techStack" :siteUrl="siteUrl" :title="title" :images="images"
    :responsibilities="responsibilities" :achivments="achivments" />
</template>

<script setup>
import ProjectContent from '../components/Project-content.vue'
useSeoMeta({
    title: title,
    description: achivments,
    ogDescription: achivments
})
const achivments =
    `Разработал и сверстал c 0 интерфейс сайта сервиса подбора лицензий для компании Открытый код при помощи Vue.js/Nuxt.js. <br>
    Разработал древовидный конструктор подбора лицензий при помощи библиотеки Vue-flow, который может создавать бесконечное количество нод в глубину и ширину. <br>
    Оптимизировал сайт до 89 баллов производительности pagespeed. <br>
    Освоил архитектурный паттерн FSD для создания приложений. <br>
    Выпустил сайт в релиз с командой за 3 недели. <br>
    Разработал систему управление лицензиями и их взаимодействия с нодами за 3 недели.
    `
const responsibilities = [
    'Разработка и верстка компонентов на vue.js.',
    'Создание конструктора подбора лицензий с учетом алгоритма.',
    'Получение и отправка данных серверу.',
    'Интеграция компонентов с другими частями приложения, такими как API и база данных.',
    'Работа с фреймворком Nuxt.js и его экосистемой.',
    'Использование языков программирования, таких как JavaScript и TypeScript.',
    'Работа с CSS и препроцессорами, такими как SCSS.',
    'Тестирование и отладка кода.',
    'Разработка функций для добавления, удаления и обновления нод и краев.',
    'Реализация логики для управления лицензиями и их взаимодействием с нодами.'
]
const images = [
    '/img/choosealicense/choosealicense1.png',
    '/img/choosealicense/choosealicense2.png',
    '/img/choosealicense/choosealicense3.png',
    '/img/choosealicense/choosealicense4.png',
    '/img/choosealicense/choosealicense5.png',
]

const title = 'Сервис подбора лицензий'

const siteUrl = 'https://choosealicense.ru/'
const techStack = [
    'HTML',
    'CSS',
    'typescript',
    'Vue.js',
    'Nuxt.js',
    'NuxtUI',
    'Pinia',
    'Yup',
    'Eslint',
    'Vue-flow',
]
</script>

<style lang="scss" scoped>

</style>
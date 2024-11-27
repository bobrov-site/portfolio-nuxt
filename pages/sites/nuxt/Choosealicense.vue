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
    `Разработал и сверстал интерфейс сайта сервиса подбора лицензий для компании Открытый код. 
    Разработал древовидный конструктор подбора лицензий, который может создавать бесконечное количество нод в глубину и ширину. 
    Оптимизировал сайт до 89 баллов производительности pagespeed.
    Освоил архитектурный паттерн FSD для создания приложений.
    Выпустил сайт в релиз с командой за 3 недели.
    `
const responsibilities = [
    'Разработка и верстка компонентов на vue.js.',
    'Создание конструктора подбора лицензий с учетом алгоритма.',
    'Получение и отправка данных серверу.',
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
    'JS',
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
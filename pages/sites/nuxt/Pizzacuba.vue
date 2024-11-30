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
    `Оптимизировал производительность сайта с 39 до 66 баллов. FCP 0.8, TBT 10mc, LCP 4,7, SI 4,9 <br>
    Уменьшил dom дерево главной страницы за счет уменьшения количества компонентов <br>
    Довел проект до релиза с legacy кодом от 3 фронтенд-разработчиков. <br>
    Выпустил сайт в релиз с командой за 2 месяца <br>
    `
const responsibilities = [
    'Разработка публичной и административной части интерфейсов. 2 репозитория',
    'Создание интерфейса интернет магазина и его логики на фронтенд части приложения',
    'Вывод и отправка данных на бэкенд части приложения при помощи REST API',
    'Менторинг младшего разработчика в рамках создания приложения',
    'Адаптивная верстка интерфейса для мобильных устройств',
]
const images = [
    '/img/cuba/cuba1.png',
    '/img/cuba/cuba2.png',
    '/img/cuba/cuba3.png',
    '/img/cuba/cuba4.png',
]

const title = 'Сеть пиццерий Куба'

const siteUrl = 'https://pizza-cuba.ru/'
const techStack = [
    'HTML',
    'CSS',
    'typescript',
    'Vue.js',
    'Nuxt.js',
    'Pinia',
    'Nuxt/seo',
    'Eslint',
]
</script>

<style lang="scss" scoped>

</style>
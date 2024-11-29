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
    `
    Оптимизировал сайт до 83 баллов производительности по Pagespeed. FCP 0,7 TBT 130mc CLS 0.023 LCP 2.1 SI 2.3 <br>
    Создал реактивный интерфейс работы с событиями имеющие вложенные мероприятия без перезагрузки страницы <br>
    Получил благодарственное письмо от фестиваля НаукаКубань 0+ за разработку приложения. <br>
    Создал приложение за 1 месяц в команде. <br>
    `
const responsibilities = [
    'Разработка пользовательского интерфейса на vue.js в экосистеме Nuxt.js',
    'Типизация приложения с использованием Typescript',
    'Соблюдение стандартов качества кода и стилевого гида на основе Eslint конфига компании',
    'Разработка форм и валидация данных: Вы создавали формы для различных компонентов и использовали библиотеку Yup для валидации данных.',
    'Разработка приложения по архитектуре FSD'

]
const images = [
    '/img/kuban/kuban1.png',
    '/img/kuban/kuban2.png',
    '/img/kuban/kuban3.png',
    '/img/kuban/kuban4.png',
]

const title = 'Крупнейший научно-популярный фестиваль в России. КубаньНаука 0+'

const siteUrl = 'https://festival.kubsf.ru/'
const techStack = [
    'Vue.js',
    'Nuxt.js',
    'NuxtUI',
    'Pinia',
    'Yup',
    'Eslint',
    'typescript',
    'eslint',
]
</script>

<style lang="scss" scoped>

</style>
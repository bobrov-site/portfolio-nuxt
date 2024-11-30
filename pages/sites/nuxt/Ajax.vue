<template>
    <ProjectContent :techStack="techStack" :siteUrl="siteUrl" :title="title"
    :responsibilities="responsibilities" :achivments="achivments" />
</template>

<script setup>
import ProjectContent from '../components/Project-content.vue'
useSeoMeta({
    title: title,
    description: achivments,
    ogDescription: achivments
})
const achivments = 'Выполнено более 30 задач технической поддержки интерфейса приложения на Nuxt.js <br>'
const responsibilities = ['Исправление баг и создание новых фич технической поддержкой']

const title = 'Аякс. Поиск недвижимости в Краснодаре'

const siteUrl = 'https://www.ayax.ru/'
const techStack = [
    'HTML',
    'CSS',
    'js',
    'Vue.js',
    'Nuxt.js',
    '$fetch',
]
</script>
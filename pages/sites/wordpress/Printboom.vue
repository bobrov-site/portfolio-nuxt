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
    'Разработал сайт на Wordpress для компании Print-boom. Сайт получился работоспособен. Сайт приносит заявки на покупку кружек и сувенирной продукции.'
const responsibilities = ['Разработка сайта на Wordpress по ТЗ']
const images = [
    '/img/printboom/printboom1.jpeg',
    '/img/printboom/printboom2.jpeg',
    '/img/printboom/printboom3.jpeg',
    '/img/printboom/printboom4.jpeg'
]

const title = 'Печать фотографий на кружках'
const siteUrl = 'https://print-boom.ru/'
const techStack = ['Wordpress']
</script>
  
<style lang="scss" scoped></style>
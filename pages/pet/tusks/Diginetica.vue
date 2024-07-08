<template>
    <ProjectContent :tech-stack="techStack" :tusk-url="tuskUrl" :github-url="githubUrl" :siteUrl="siteUrl" :title="title"
        :images="images" :responsibilities="responsibilities" :achivments="achivments" />
</template>
  
<script setup>
import ProjectContent from '../components/Project-content.vue'

const achivments =
    'Выполнил тестовое задание и прошел на технический этап собеседования'
const responsibilities = [
    'Верстка по макету из Figma',
    'Написание стилей на SCSS',
    'Выполнение задачи по ТЗ',
    'Работа с vue.js 2, pro'
]
const images = ['/img/diginetica/diginetica.png']

const title = 'Тестовое задание для Diginetica'
const siteUrl = 'https://diginetica-vue.vercel.app/'
const githubUrl = 'https://github.com/bobrov-site/diginetica-vue?tab=readme-ov-file'
const tuskUrl = 'https://docs.google.com/document/d/1cYDhmM4o0st7mGylsOIlxyVC3gZyNtAb/edit'
const techStack = ['HTML', 'SCSS', 'vue2']
</script>
  
<style lang="scss" scoped></style>
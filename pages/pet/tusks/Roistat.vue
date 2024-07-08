<template>
    <ProjectContent :tech-stack="techStack" :tusk-url="tuskUrl" :github-url="githubUrl" :siteUrl="siteUrl" :title="title"
    :responsibilities="responsibilities" :achivments="achivments" />
</template>
  
<script setup>
import ProjectContent from '../components/Project-content.vue'

const achivments =
    'Выполнил 4/5 поставленных задач из ТЗ'
const responsibilities = [
    'Разработка по макету приложения',
    'Хранение данных в localstorage',
    'Работа с деревьями как со структурой данных',
    'Работа с Vue.js 2',
    'Созданние сортировки данных в таблице'
]

const title = 'Тестовое задание для Roistat'
const siteUrl = 'https://roistat-test-rvnd.vercel.app/'
const githubUrl = 'https://github.com/bobrov-site/roistat-test'
const tuskUrl = 'https://docs.google.com/document/d/1Crkyr_BYp0wX2SPvsWx0ElkFWJQ5VINyCSsmd7vU8kw/edit?usp=sharing'
const techStack = ['HTML', 'css', 'Webpack', 'vue2', 'vue cli', 'javascript']
</script>
  
<style lang="scss" scoped></style>
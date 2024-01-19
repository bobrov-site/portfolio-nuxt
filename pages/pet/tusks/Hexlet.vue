<template>
    <ProjectContent :tech-stack="techStack" :tusk-url="tuskUrl" :github-url="githubUrl" :siteUrl="siteUrl" :title="title"
        :images="images" :responsibilities="responsibilities" :achivments="achivments" />
</template>
  
<script setup>
import ProjectContent from '../components/Project-content.vue'

const achivments =
    'Сверстал баннер для школы Хекслет. Задача была сделана за 2-3 часа при помощи HTML/CSS/Bootstrap 5. Получилось полностью выполнить задачу в соответствии с ТЗ'
const responsibilities = [
    'Верстка по макету из Figma',
    'Использование Bootstrap 5 в качетве UI фреймворка',
    'Выполнение задачи по ТЗ'
]
const images = ['/img/hexlet/hexlet.png']

const title = 'Тестовое задание для Хекслета'
const siteUrl = 'https://bobrov-site.github.io/hexlet-test-tusk.github.io/'
const githubUrl = 'https://github.com/bobrov-site/HexletTestTusk'
const tuskUrl = 'https://hexlet-ru.notion.site/38fd01d380cb43efa94702b5188cfde4'
const techStack = ['HTML', 'Sass', 'Webpack', 'Bootstrap5']
</script>
  
<style lang="scss" scoped></style>
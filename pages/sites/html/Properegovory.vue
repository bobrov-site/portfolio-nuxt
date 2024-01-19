<template>
    <ProjectContent :siteUrl="siteUrl" :title="title" :images="images" :responsibilities="responsibilities"
        :achivments="achivments" />
</template>
  
<script setup>
import ProjectContent from '../components/Project-content.vue'
const achivments =
    'Сверстал адаптивно сайт по макету из Figma. Сайт быстро загружается и работает на всех устройствах'
const responsibilities = [
    'Верстка по макету при помощи HTML/CSS',
    'Перенос сайт на хостинг',
    'Настройка и установка jivochat на сайт'
]
const images = [
    '/img/properegovory/properegovory1.jpeg',
    '/img/properegovory/properegovory2.jpeg',
    '/img/properegovory/properegovory3.jpeg'
]

const title = 'Корпоративные тренинги'
const siteUrl = 'https://pro-peregovory.ru/'
</script>
  
<style lang="scss" scoped></style>
<template>
    <ProjectContent :techStack="techStack" :githubUrl="githubUrl" :siteUrl="siteUrl" :title="title" :images="images"
        :responsibilities="responsibilities" :achivments="achivments" />
</template>
  
<script setup>
import ProjectContent from '../components/Project-content.vue'

const achivments =
    'Разработал сайт evrotrans.net на vue.js. Сайт стал работать быстрее, стал масштабируемым. Настроил компонент поиска билета. Настроил страницу оформления билетов. Написал валидацию для оформления билетов. Сверстал все страницы предусмотренные дизайнером из Figma и адаптировал под все устройства.'
const responsibilities = [
    'верстка сайта по макету на bootstrap 5.',
    'Верстка компонентов при помощи vuetify, без дизайн-макета по ТЗ.',
    'Исправление ошибок в верстке при отображении на разных типах устройств.',
    'Настройка маршрутизации страниц.',
    'Исправление ошибок в работе компонентов.'
]
const images = [
    '/portfolio/img/evrotrans/evrotrans1.png',
    '/portfolio/img/evrotrans/evrotrans2.png',
    '/portfolio/img/evrotrans/evrotrans3.png'
]

const title = 'Билеты на автобус'

const githubUrl = 'https://github.com/vfz/et_app'
const siteUrl = 'https://evrotrans.net/'
const techStack = [
    'HTML',
    'CSS',
    'JS',
    'Vue.js',
    'Bootstrap',
    'Vue-yandex-maps',
    'Vue-router',
    'Axios',
    'Api'
]
</script>
  
<style lang="scss" scoped></style>
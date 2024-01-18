<template>
    <ProjectContent :techStack="techStack" :siteUrl="siteUrl" :title="title" :images="images"
        :responsibilities="responsibilities" :achivments="achivments" />
</template>
  
<script setup>
import ProjectContent from '../components/Project-content.vue'
const achivments =
    'Разработал сайт по дизайну из Figma на Wordpress для корпоративного тренера из США. Создана система для обучения внутри сайта, где учитель может добавлять курсы и проверять задания учеников. Встроена система оплаты stripe для оплаты курсов'
const responsibilities = [
    'Разработка сайта по ТЗ',
    'Верстка по дизайн-макету при помощи HTML/CSS',
    'Работа с плагином по созданию уроков',
    'Добавление системы оплаты',
    'Создание личного кабинета для учеников и учителя'
]
const images = [
    '/portfolio/img/academyofmotivation/academyofmotivation1.jpeg',
    '/portfolio/img/academyofmotivation/academyofmotivation2.jpeg',
    '/portfolio/img/academyofmotivation/academyofmotivation3.jpeg'
]

const title = 'Корпоративный тренер из США'
const siteUrl = 'https://academyofmotivaction.com/'
const techStack = ['Wordpress']
</script>
  
<style lang="scss" scoped></style>
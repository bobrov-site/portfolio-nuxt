<template>
    <ProjectContent :tech-stack="techStack" :tusk-url="tuskUrl" :github-url="githubUrl" :siteUrl="siteUrl" :title="title"
        :images="images" :responsibilities="responsibilities" :achivments="achivments" />
</template>
  
<script setup>
import ProjectContent from '../components/Project-content.vue'
const achivments =
    'Сверстал лендинг для Яндекса. Задача была сделана за 6 часов при помощи HTML/CSS/VITE. Сайт получился адаптивным и с анимациями'
const responsibilities = [
    'Верстка сайта по макету из Figma',
    'Pixel Perfect верстка',
    'Адаптивная верстка'
]
const images = [
    '/img/yandex/yandex1.jpeg',
    '/img/yandex/yandex2.jpeg',
    '/img/yandex/yandex3.jpeg',
    '/img/yandex/yandex4.jpeg',
    '/img/yandex/yandex5.jpeg'
]

const title = 'Тестовое задание для Яндекса'
const siteUrl = 'https://bobrov-site.github.io/yandex-test.github.io/'
const githubUrl = 'https://github.com/bobrov-site/yandex'
const tuskUrl =
    'https://www.figma.com/file/hPoTSryZFpFN5J0ookjAir/Yandes-test?type=design&node-id=0%3A1&mode=design&t=4L17gfDPuJfYMWmi-1'
const techStack = ['HTML', 'CSS', 'JS', 'VITE', 'Figma', 'Swiper.js', 'animate.css', 'wow.js']
</script>
  
<style lang="scss" scoped></style>
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
    'Разработал сайт под ключ для компании Ставгаз. Разработал квиз для рассчета стоимости газификации объекта. Добавил форму обратной связи для получения заявок на почту клиента. Сделал сайт адаптивным для всех устройств'
const responsibilities = [
    'Анализ конкурентов.',
    'Разработка структуры сайта.',
    'Оформление договора оказания услуг.',
    'Создание прототипа дизайна сайта.',
    'Создание дизайн-макета для пк, планшетов и мобильных устройств.',
    'Верстка дизайн-макета и посадка кода на Wordpress.',
    'Первичное SEO оптимизация с плагином Yoast SEO. Оптимизация производительности сайта.',
    'Установка и настройка плагинов для работы сайта',
    'Приобретение хостинга и домена. Перенос сайта на хостинг.',
    'Запись видеоинструкции по работе с сайтом'
]
const images = [
    '/img/stavgaz/stavgaz1.jpeg',
    '/img/stavgaz/stavgaz2.jpeg',
    '/img/stavgaz/stavgaz3.jpeg'
]

const title = 'Газификация коммерческих объектов и индивидуальных жилых домов'
const siteUrl = 'https://stvgaz.ru/'
const techStack = [
    'HTML',
    'SCSS',
    'JS',
    'PHP',
    'Wordpress',
    'ACF',
    'Webpack',
    'Gulp',
    'Yoast SEO',
    'Bootstrap'
]
</script>
  
<style lang="scss" scoped></style>
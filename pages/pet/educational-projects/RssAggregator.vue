<template>
    <ProjectContent :tech-stack="techStack" :images="images" :github-url="githubUrl" :title="title"
        :responsibilities="responsibilities" :achivments="achivments" :site-url="siteUrl" />
</template>

<script setup>
useSeoMeta({
    title: title,
    description: achivments,
    ogDescription: achivments
})
const achivments =
    `Создал приложение для агрегации RSS-потоков,с помощью которых удобно читать разнообразные источники, 
    например, блоги. Он позволяет добавлять неограниченное количество RSS-лент, 
    сам их обновляет и добавляет новые записи в общий поток.
    <br>
    Усвоил набор следующих навыков: 
    <br>
    1. Работа с DOM API браузера;
    <br>
2. Работа с селекторами, событиями и генерацией HTML средствами DOM API;
<br>
3. Понимание основ UX при работе с формами;
<br>
4. Знание шаблона проектирования MVC и его модификаций;
<br>
5. Работа с асинхронным JavaScript и обработка ошибок;
<br>
6. Понимание принципов безопасности при внешнем взаимодействии в браузере;
<br>
7. Умение работать со сборщиками, такими как Webpack, и выполнять деплой в продакшен. 

    `
const responsibilities = [
    'Работа с DOM API браузера',
    'Манипулирование внешним видом страницы при помощи Javascript',
    'Взаимодействие с RSS фидами',
    'Отработка работы с селекторами, событиями и генерацией HTML средствами DOM API',
    'Особое внимание к работе с формами, включая знание нужных событий и понимание основ UX',
    'Реализация блокировок во время отправки форм, отображение прогресса и настройка фокусов',
    'Проведение валидации данных форм',
    'Разработка приложения на основе шаблона проектирования MVC и его модификаций',
    'Разделение кода на слои, правильное выделение состояния и нормализация его',
    'Использование идей автоматного программирования для управления процессом загрузки данных',
    'Выполнение HTTP-запросов и работа с Axios, включая обработку асинхронного JavaScript и промисов',
    'Обработка ошибок и понимание вопросов безопасности, связанных с внешним взаимодействием в браузере',
    'Настройка этапа сборки проекта с помощью сборщиков вроде Webpack',
    'Выполнение деплоя в продакшен',
]
const images = [
    '/img/rss-aggregator/rssAggregator1.png',
    '/img/rss-aggregator/rssAggregator2.png',
    '/img/rss-aggregator/rssAggregator3.png',
    '/img/rss-aggregator/rssAggregator4.png'
];
const title = 'RSS Агрегатор'
const githubUrl = 'https://github.com/bobrov-site/rss-aggregator'
const techStack = [
    'DOM API',
    'JavaScript',
    'HTML',
    'CSS',
    'MVC',
    'Архитектура фронтенд-приложений',
    'Автоматное программирование',
    'Axios',
    'HTTP-запросы',
    'Асинхронный JavaScript',
    'Promises',
    'Webpack',
    'Vercel',
    'Bootstrap',
    'i18next',
    'lodash',
    'yup'
]
const siteUrl = 'https://frontend-project-11-drab-eight.vercel.app'
</script>

<style lang="scss" scoped>

</style>
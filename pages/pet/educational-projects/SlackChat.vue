<template>
    <ProjectContent :tech-stack="techStack" :images="images" :github-url="githubUrl" :title="title"
        :responsibilities="responsibilities" :achivments="achivments" :site-url="siteUrl"/>
</template>

<script setup>
useSeoMeta({
    title: title,
    description: achivments,
    ogDescription: achivments
})

const achivments =`

1. Разработал дипломный проект. В приложении можно: создавать новых пользователей, авторизовываться, создавать, удалять и переименовывать каналы, общаться между собой с помощью веб-сокетов \n
2. Освоил и примененил возможности React, включая хуки, контекст, прямое взаимодействие с DOM и механизмы для оптимизации производительности. \n
3. Использовал библиотеку Redux для управления состоянием приложения. \n
4. Примененил библиотеку Formik для упрощения программирования форм. \n
5. Использованал react-bootstrap для создания интерфейсов. \n
6. Освоил опыт работы с продакшеном, включая сборку бандла, деплой и мониторинг ошибок с помощью инструмента Rollbar. \n

`
const responsibilities = [
    'Использование технологий и инструментов, применяемых в повседневной работе фронтенд-разработчиками, включая React, Redux, Webpack и другие.',
    'Реализация стандартных задач фронтенд-разработки, таких как работа с веб-сокетами, взаимодействие с REST API, организация роутинга на клиенте, авторизация и аутентификация.',
    'Применение различных методов и подходов для оптимизации производительности.',
    'Управление состоянием приложения с использованием библиотеки Redux и reduxjs/toolkit.',
    'Программирование форм с использованием сторонних библиотек и архитектурных подходов.',
    'Создание интерфейсов с использованием библиотеки react-bootstrap.',
    'Работа с продакшеном, включая сборку бандла, деплой и мониторинг ошибок.',
]
const images = [
    '/img/slack-chat/slackchat1.png',
    '/img/slack-chat/slackchat2.png',
    '/img/slack-chat/slackchat3.png',
    '/img/slack-chat/slackchat4.png'
];
const title = 'Slack чат'
const githubUrl = 'https://github.com/bobrov-site/Slack-chat'
const techStack = [
    'JavaScript',
    'React.js',
    'Redux/Toolkit',
    'Axios',
    'React Bootsrap',
    'Formik',
    'Axios',
    'Rollbar',
    'i18next',
    'Socket.io',
    'yup',
]
const siteUrl = 'https://frontend-project-12-mc2o.onrender.com/'
</script>

<style lang="scss" scoped>

</style>
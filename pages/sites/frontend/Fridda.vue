<template>
    <ProjectContent :techStack="techStack" :siteUrl="siteUrl" :title="title" :images="images"
    :responsibilities="responsibilities" :achivments="achivments" />
</template>

<script setup>
useSeoMeta({
    title: title,
    description: achivments,
    ogDescription: achivments
})
const responsibilities = [
    'Построение SPA приложения для краткосрочной аренды недвижимости при помощи Nuxt 3 и vue.js 3 Composition api.',
    'Интеграция с сервисами Bnovo, Avito, Yandex при помощи REST API. Сохранение данных от этих сервисов при помощи базы данных MongoDB',
    'Интеграция Яндекс Карт с vue-yandex-maps и настройка отображения квартир по геопозициям от Bnovo или генерация гео-кода по адресу квартиры.',
    'Автоматизация статусов бронирования, формирования pdf документов, отправка сообщений и отчетов на почту при помощи jspdf и nodemailer.',
    'Настройка регистрации и аутентификации пользователей с next-auth, bcrypt.',
    'Поддержка состояния приложения в рамках pinia store.',
    'Создание личного кабинета администратора. Интеграция расписания бронирования гостей при помощи диаграммы Ганта.',
    'Создание личного кабинета гостя. Взаимодействие гостя с избранными квартирами и возможностью отслеживания статуса брони квартиры.',
    'Адаптивная и валидная верстка компонентов при помощи Bootstrap.',
    'Валидация полученных данных от пользователей при помощи Yup',
    'Написание автотестов vitest (jest)',
    'Настройка CI/CD проекта. Настройка интеграции деплоинга проекта на стороннем хостинге при помощи GitHub и Docker File.',
    'Добавление локалей при помощи i18n.',
    'Интеграция эквайринга МТС Банка.',
    'Добавление и настройка Яндекс Метрики.',
]

const title = 'Fridda - сервис аренды квартир'
const achivments = `
<ul class="list-group mb-2">
    <li class="list-group-item">Разработал с нуля сервис по краткосрочной аренде жилья https://fridda.ru за 5 месяцев</li>
    <li class="list-group-item">Добился отрисовки первого контента за 0.3 секунды FCP. Сумма отрисовки всего контента оптимизирована до 110мс TBT. Поисковая оптимизация реализована на 75 баллов по версии page speed.</li>
    <li class="list-group-item">Покрыл 60% кода автотестами.</li>
    <li class="list-group-item">Освоил работу SSR в рамках Nuxt 3. Изучил новые технологии: mongoose для работы с базой данных MongoDB, nuxt-scheduler для cron задач, vitest для написание автотестов.</li>
    <li class="list-group-item">Сэкономил деньги клиенту, взяв работу по разработке сайта полностью на себя.</li>
</ul>
`

const siteUrl = 'https://fridda.ru'
const techStack = [
    'HTML',
    'SCSS',
    'JS',
    'Nuxt 3',
    'Vue.js 3',
    'Vite',
    'Pinia',
    'Yup',
    'JSPDF',
    'Nodemailer',
    'NextAuth',
    'bcrypt',
    'Bootstrap',
    'Jest',
    'Vitest',
    'Axios',
    'Vue-yandex-maps',
    'Rest-api'
]
const images = [
    '/img/fridda/fridda1.png',
    '/img/fridda/fridda2.png',
    '/img/fridda/fridda3.png',
    '/img/fridda/fridda4.png',
    '/img/fridda/fridda5.png',
    '/img/fridda/fridda6.png',
]
</script>

<style lang="scss" scoped>

</style>
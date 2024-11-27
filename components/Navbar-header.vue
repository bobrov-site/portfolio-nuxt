<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container">
                <NuxtLink class="navbar-brand mb-0" to="/">Бобров Даниил 👨‍💻</NuxtLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" :class="{ active: route.fullPath.includes('sites') }"
                                href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Сайты
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <h6 class="dropdown-header">Nuxt.js</h6>
                                </li>
                                <li>
                                    <NuxtLink to="/sites/nuxt/choosealicense" :class="{ active: route.name === 'sites-nuxt-Choosealicense' }" class="dropdown-item">
                                        Сервис подбора лицензии
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink :class="{ active: route.name === 'sites-frontend-Fridda' }" class="dropdown-item"
                                    to="/sites/frontend/fridda">Сервис аренды квартир</NuxtLink>
                                </li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                                <li>
                                    <h6 class="dropdown-header">Vue.js</h6>
                                </li>
                                <li>
                                    <NuxtLink :class="{ active: route.name === 'sites-frontend-Evrotrans' }" class="dropdown-item"
                                        to="/sites/frontend/evrotrans">Билеты на автобус</NuxtLink>
                                </li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                                <li>
                                    <h6 class="dropdown-header">Под ключ (дизайн и wordpress)</h6>
                                </li>
                                <li>
                                    <NuxtLink :class="{ active: route.name === 'sites-keys-Mag' }" class="dropdown-item"
                                        to="/sites/keys/mag">Агропромышленная техника и запчасти</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink :class="{ active: route.name === 'sites-keys-Stavgaz' }" class="dropdown-item"
                                        to="/sites/keys/stavgaz">Газификация объектов</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink :class="{ active: route.name === 'sites-keys-Gogocars' }" class="dropdown-item"
                                        to="/sites/keys/gogocars">Авто из Сша в Россию</NuxtLink>
                                </li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                                <li>
                                    <h6 class="dropdown-header">Разработка на Wordpress</h6>
                                </li>
                                <li>
                                    <NuxtLink :class="{ active: route.name === 'sites-wordpress-Academyofmotivation' }"
                                        class="dropdown-item" to="/sites/wordpress/academyofmotivation">Корпоративный
                                        тренер из США</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink :class="{ active: route.name === 'sites-wordpress-Printboom' }" class="dropdown-item"
                                        to="/sites/wordpress/printboom">Печать фотографий на кружках</NuxtLink>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" :class="{ active: route.fullPath.includes('pet') }" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Пет-проекты
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <h6 class="dropdown-header">Тестовые задании</h6>
                                </li>
                                <li>
                                    <NuxtLink :class="{ active: route.name === 'pet-tusks-Yandex' }" class="dropdown-item"
                                        to="/pet/tusks/yandex">
                                        Лендинг для Яндекса
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink :class="{ active: route.name === 'pet-tusks-Hexlet' }" class="dropdown-item"
                                        to="/pet/tusks/hexlet">
                                        Баннер для Хекслета
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink :class="{ active: route.name === 'pet-tusks-Ostrovok' }" class="dropdown-item"
                                        to="/pet/tusks/ostrovok">
                                        Тестовые задачи для Островка
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink :class="{ active: route.name === 'pet-tusks-Tutu' }" class="dropdown-item"
                                        to="/pet/tusks/tutu">
                                        Тестовые задачи для Tutu.ru
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink :class="{ active: route.name === 'pet-tusks-Roistat' }" class="dropdown-item"
                                        to="/pet/tusks/roistat">
                                        Тестовое задание для Roistat
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink :class="{ active: route.name === 'pet-tusks-Diginetica' }" class="dropdown-item"
                                        to="/pet/tusks/diginetica">
                                        Тестовое задание для Diginetica
                                    </NuxtLink>
                                </li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                                <li>
                                    <h6 class="dropdown-header">Учебные проекты</h6>
                                </li>
                                <li>
                                    <NuxtLink :class="{ active: route.name === 'pet-educational-projects-BrainGames' }" class="dropdown-item"
                                        to="/pet/educational-projects/braingames">Игры разума</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink :class="{ active: route.name === 'pet-educational-projects-Gendiff' }" class="dropdown-item"
                                        to="/pet/educational-projects/gendiff">Вычислитель отличий</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink :class="{active: route.name === 'pet-educational-projects-RssAggregator'}" class="dropdown-item" to="/pet/educational-projects/rssaggregator">
                                        RSS Агрегатор
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink :class="{active: route.name === 'pet-educational-projects-SlackChat'}" class="dropdown-item" to="/pet/educational-projects/slackchat">
                                        Slack чат
                                    </NuxtLink>
                                </li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                                <li>
                                    <h6 class="dropdown-header">Собственные проекты</h6>
                                </li>
                                <li>
                                    <NuxtLink :class="{ active: route.name === 'pet-pet-projects-Todolist' }" class="dropdown-item"
                                        to="/pet/pet-projects/todolist">Тудулист</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink :class="{ active: route.name === 'pet-pet-projects-Hangman' }" class="dropdown-item"
                                        to="/pet/pet-projects/hangman">Виселица (hangman)</NuxtLink>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://github.com/bobrov-site/contributed" target="_blank">Вклад в Open-source</a>
                        </li>
                    </ul>
                    <div class="d-flex">
                        <a class="link-icon" href="https://github.com/bobrov-site" target="_blank">
                            <i class="bi bi-github me-2"></i>
                        </a>
                        <a class="link-icon" href="https://t.me/TheWalkingDan" target="_blank">
                            <i class="bi bi-telegram me-2"></i>
                        </a>
                        <a class="link-icon" href="https://www.linkedin.com/in/daniil-bobrov/" target="_blank">
                            <i class="bi bi-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>
  
<script setup>

const route = useRoute()
// TODO доделать вывод страниц через цикл
const pages = [
    {
        title: 'Nuxt.js',
        items: [
            {
                title: 'Билеты на автобус',
                url: '/sites/vue/evrotrans',
            },
            {
                title: 'Сервис аренды квартир',
                url: '/sites/vue/fridda',
            },
        ]
    },
    {
        title: 'Под ключ (дизайн и wordpress)',
        items: [
            {
                title: 'Агропромышленная техника и запчасти',
                url: '/sites/keys/mag',
            },
            {
                title: 'Авто из США в Россию',
                url: '/sites/keys/gogocars',
            },
            {
                title: 'Газификация объектов',
                url: '/sites/keys/stavgaz',
            }
        ]
    },
    {
        title: 'Разработка на Wordpress',
        items: [
            {
                title: 'Корпоративный тренер из США',
                url: '/sites/wordpress/academyofmotivation',
            },
            {
                title: 'Печать фотографий на кружках',
                url: '/sites/wordpress/printboom',
            }
        ]
    }
]

</script>
  
<style lang="scss" scoped>
.bi-linkedin,
.bi-telegram,
.bi-github {
    font-size: 2rem;
}
</style>
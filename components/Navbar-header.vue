<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <p class="navbar-brand mb-0">Бобров Даниил 👨‍💻</p>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <RouterLink class="nav-link" :class="{ active: route.name === 'home' }" to="/">Главная
                            </RouterLink>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" :class="{ active: route.fullPath.includes('sites') }"
                                href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Сайты
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <h6 class="dropdown-header">Фронтенд (vue.js)</h6>
                                </li>
                                <li>
                                    <RouterLink :class="{ active: route.name === 'evrotrans' }" class="dropdown-item"
                                        to="/sites/frontend/evrotrans">Билеты на автобус</RouterLink>
                                </li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                                <li>
                                    <h6 class="dropdown-header">Под ключ (дизайн и wordpress)</h6>
                                </li>
                                <li>
                                    <RouterLink :class="{ active: route.name === 'mag' }" class="dropdown-item"
                                        to="/sites/keys/mag">Агропромышленная техника и запчасти</RouterLink>
                                </li>
                                <li>
                                    <RouterLink :class="{ active: route.name === 'stavgaz' }" class="dropdown-item"
                                        to="/sites/keys/stavgaz">Газификация объектов</RouterLink>
                                </li>
                                <li>
                                    <RouterLink :class="{ active: route.name === 'gogocars' }" class="dropdown-item"
                                        to="/sites/keys/gogocars">Авто из Сша в Россию</RouterLink>
                                </li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                                <li>
                                    <h6 class="dropdown-header">Разработка на Wordpress</h6>
                                </li>
                                <li>
                                    <RouterLink :class="{ active: route.name === 'academyofmotivaction' }"
                                        class="dropdown-item" to="/sites/wordpress/academyofmotivaction">Корпоративный
                                        тренер из США</RouterLink>
                                </li>
                                <li>
                                    <RouterLink :class="{ active: route.name === 'printboom' }" class="dropdown-item"
                                        to="/sites/wordpress/printboom">Печать фотографий на кружках</RouterLink>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Пет-проекты
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <h6 class="dropdown-header">Тестовые задании</h6>
                                </li>
                                <li>
                                    <RouterLink :class="{ active: route.name === 'yandex' }" class="dropdown-item"
                                        to="/pet/tusks/yandex">
                                        Лендинг для Яндекса
                                    </RouterLink>
                                </li>
                                <li>
                                    <RouterLink :class="{ active: route.name === 'hexlet' }" class="dropdown-item"
                                        to="/pet/tusks/hexlet">
                                        Баннер для Хекслета
                                    </RouterLink>
                                </li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                                <li>
                                    <h6 class="dropdown-header">Учебные проекты</h6>
                                </li>
                                <li>
                                    <RouterLink :class="{ active: route.name === 'brain-games' }" class="dropdown-item"
                                        to="/pet/educational-projects/brain-games">Игры разума</RouterLink>
                                </li>
                                <li>
                                    <RouterLink :class="{ active: route.name === 'gendiff' }" class="dropdown-item"
                                        to="/pet/educational-projects/gendiff">Вычислитель отличий</RouterLink>
                                </li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                                <li>
                                    <h6 class="dropdown-header">Собственные проекты</h6>
                                </li>
                                <li>
                                    <RouterLink :class="{ active: route.name === 'todolist' }" class="dropdown-item"
                                        to="/pet/pet-projects/todolist">Тудулист</RouterLink>
                                </li>
                                <li>
                                    <RouterLink :class="{ active: route.name === 'hangman' }" class="dropdown-item"
                                        to="/pet/pet-projects/hangman">Виселица (hangman)</RouterLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div class="d-flex">
                        <a class="link-icon" href="https://github.com/bobrov-site" target="_blank">
                            <i class="bi bi-github me-2"></i>
                        </a>
                        <a class="link-icon" href="https://t.me/TheWalkingDan" target="_blank">
                            <i class="bi bi-telegram me-2"></i>
                        </a>
                        <a class="link-icon" href="https://www.instagram.com/bobrov_site/" target="_blank">
                            <i class="bi bi-instagram me-4"></i>
                        </a>
                        <button @click="callMe()" type="button" class="btn btn-outline-primary">
                            Связаться со мной
                            <i class="bi bi-telephone-fill"></i>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>
  
<script setup>
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const callMe = () => {
    return (location.href = 'tel:+7 962 425 66 01')
}
</script>
  
<style lang="scss" scoped>
.bi-instagram,
.bi-telegram,
.bi-github {
    font-size: 2rem;
}
</style>
<template>
    <ProjectContent :tech-stack="techStack" :images="images" :ascinema="ascinema" :github-url="githubUrl" :title="title"
        :responsibilities="responsibilities" :achivments="achivments" />
</template>
  
<script setup>
import ProjectContent from '../components/Project-content.vue'
const achivments =
    'Создал приложение список задач. Приложение загружает данные по fake api, есть пагинация тудушек. Есть поиск по задачам. Сделал адаптивную версию. Сделал валидацию формы регистрации и входа пользователя. Научился работать с firebase, теперь возможно добавлять новых пользователей, а так же взаимодействовать со старыми.'
const responsibilities = [
    'Создание функционала для добавления, удаления и редактирования задач',
    'Создание возможности сделать логин и регистрацию через почту или google, а так же восстановление пароля',
    'Создание функционала для редактирования профиля',
    'Написание валидации для формы регистрации и входа пользователя'
]
const images = [
    '/img/todolist/todolist1.jpeg',
    '/img/todolist/todolist2.jpeg',
    '/img/todolist/todolist3.jpeg',
    '/img/todolist/todolist4.jpeg'
]

const title = 'Тудулист'
const githubUrl = 'https://github.com/bobrov-site/todolistvue'
const techStack = [
    'Vue.js',
    'Vite',
    'Vee-validate',
    'Vue-router',
    'Bootstrap',
    'Firebase',
    'Axios',
    'Eslint',
    'Sass'
]
</script>
  
<style lang="scss" scoped></style>
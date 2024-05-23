<template>
    <ProjectContent :tech-stack="techStack" :tusk-url="tuskUrl" :github-url="githubUrl" :title="title"
        :achivments="achivments" />
</template>

<script setup>
const achivments =
    'Выполнил тестовое задание на позицию фронтенд-разработчика'

const title = 'Тестовое задание для Туту на позицию фронтенд-разраоботчика'
const githubUrl = 'https://github.com/bobrov-site/tutu-frontend-test'
const tuskUrl = 'https://github.com/tutu-ru/frontend-javascript-test'
const techStack = ['Javascript']
</script>

<style lang="scss" scoped></style>
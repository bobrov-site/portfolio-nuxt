<template>
    <ProjectContent :tech-stack="techStack" :tusk-url="tuskUrl" :github-url="githubUrl" :title="title"
        :achivments="achivments" />
</template>

<script setup>
const achivments =
    'Выполнил тестовое задание на позицию фронтенд-разработчика'

const title = 'Тестовое задание для Островка на позицию фронтенд-разраоботчика'
const githubUrl = 'https://github.com/bobrov-site/ostrovok-frontend'
const tuskUrl = 'https://github.com/ostrovok-tech/code-challenge/tree/master/js'
const techStack = ['Javascript']
</script>

<style lang="scss" scoped></style>
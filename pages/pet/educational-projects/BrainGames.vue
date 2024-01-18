<template>
    <ProjectContent :tech-stack="techStack" :ascinema="ascinema" :github-url="githubUrl" :title="title"
        :responsibilities="responsibilities" :achivments="achivments" />
</template>
  
<script setup>
import ProjectContent from '../components/Project-content.vue'
const achivments =
    'Создал консольную игру "Игры разума". Разобрался в основах javascript. Научился настраивать свой собственный npm пакет. Научился пользоваться линтером. Научился расписывать полное описание к проекту на Гитхаб. Научился делать проект модульным. Научился настраивать Eslint на параметр Airbnb. Научился добавлять команды при помощи makefile'
const responsibilities = [
    'Создание консольных игр на Javascript',
    'Добавление новой версии игр через Git',
    'Отлаживание ошибок через github actions и eslint',
    'Создание модулей и написание качественного кода',
    'Исправление ошибок и добавление кода под руководством наставника '
]
const ascinema = `<a href="https://asciinema.org/a/wkvLHGhMGur9BMiptTkyy4Imo" target="_blank"><img src="https://asciinema.org/a/wkvLHGhMGur9BMiptTkyy4Imo.svg" /></a>`
const title = 'Игры разума'
const githubUrl = 'https://github.com/bobrov-site/brain-games'
const techStack = ['JS', 'Node.js', 'Makefile', 'Eslint']
</script>
  
<style lang="scss" scoped></style>
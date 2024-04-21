<template>
    <ProjectContent :tech-stack="techStack" :ascinema="ascinema" :github-url="githubUrl" :title="title"
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
    'Создал программу, которая вычисляет отличия в файлах формата json, yaml, yml. Программа показывает в каком месте был добавлен, удален или отредактирован код. Можно сравнивать как файлы одинакового формата, так и разного. Научился настраивать автоматическое тестирование при помощи jest. Научился настраивать проверку после пуша в репозиторий при помощи github actions. Научился использовать code climate для отслеживание состояния качества кода и покрытия тестами кода. Научился пользоваться консольным расширением commander.js. Научился парсить файлы с выше перечисленными расширениями. Научился делать абстракции для написания качественного кода. Научился использовать Node.js для построения путей до файлов'
const responsibilities = [
    'Создание парсера файлов json, yaml, yml',
    'Написание тестов для приложения',
    'Создание функции, которая демонстрирует отличие в формате дерева',
    'Создание функции, которая демонстрирует отличие в формате json',
    'Создание функции, которая демонстрирует отличие в формате plain',
    'Исправление ошибок и добавление кода под руководством наставника '
]
const ascinema = `<a href="https://asciinema.org/a/fzCW6swmlpH9XUluA5RHz3m61" target="_blank"><img src="https://asciinema.org/a/fzCW6swmlpH9XUluA5RHz3m61.svg" /></a>`
const title = 'Вычислитель отличий'
const githubUrl = 'https://github.com/bobrov-site/gendiff'
const techStack = ['JS', 'Node.js', 'Makefile', 'Eslint', 'Commander', 'lodash', 'jest']
</script>
  
<style lang="scss" scoped></style>
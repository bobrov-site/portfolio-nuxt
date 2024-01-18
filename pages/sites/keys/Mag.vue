<template>
    <ProjectContent
      :techStack="techStack"
      :githubUrl="githubUrl"
      :siteUrl="siteUrl"
      :title="title"
      :images="images"
      :responsibilities="responsibilities"
      :achivments="achivments"
    />
  </template>
  
  <script setup>
  import ProjectContent from '../components/Project-content.vue'
  
  const achivments =
    'Разработал сайт под ключ для компании Монолит Агро Групп. На сайте можно редактировать контент из админ панели в любом месте. Можно пополнять продукцию компании, редактировать и удалять. Сайт приносит заявки на покупку оборудования и запчастей.'
  const responsibilities = [
    'Анализ конкурентов.',
    'Разработка структуры сайта.',
    'Оформление договора оказания услуг.',
    'Создание прототипа дизайна сайта.',
    'Создание дизайн-макета для пк, планшетов и мобильных устройств.',
    'Верстка дизайн-макета и посадка кода на Wordpress.',
    'Первичное SEO оптимизация с плагином Yoast SEO. Оптимизация производительности сайта.',
    'Установка и настройка плагинов для работы сайта',
    'Приобретение хостинга и домена. Перенос сайта на хостинг.',
    'Запись видеоинструкции по работе с сайтом'
  ]
  const images = [
    '/portfolio/img/mag/mag1.jpeg',
    '/portfolio/img/mag/mag2.jpeg',
    '/portfolio/img/mag/mag3.jpeg'
  ]
  
  const title = 'Продажа агропромышленной техники и запчастей'
  
  const githubUrl = 'https://github.com/bobrov-site/mag'
  const siteUrl = 'https://ooo-mag.ru'
  const techStack = ['HTML', 'SCSS', 'JS', 'PHP', 'Webpack', 'ACF', 'Wordpress', 'Bootstrap']
  </script>
  
  <style lang="scss" scoped></style>
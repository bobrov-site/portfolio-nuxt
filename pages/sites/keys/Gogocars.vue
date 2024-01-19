<template>
    <ProjectContent
      :techStack="techStack"
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
    'Разработал сайт под ключ для компании Go-go-cars. Разработал квиз для подбора автомобиля. Добавил форму обратной связи для получения заявок на почту клиента. Сделал сайт адаптивным для всех устройств. Сделал сайт редактируемым с интеграцией из instagram'
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
    '/img/gogocars/gogocars1.jpeg',
    '/img/gogocars/gogocars2.jpeg',
    '/img/gogocars/gogocars3.jpeg'
  ]
  
  const title = 'Авто из США в Россию'
  const siteUrl = 'https://gogocars.ru/'
  const techStack = [
    'HTML',
    'SCSS',
    'JS',
    'PHP',
    'Wordpress',
    'ACF',
    'Webpack',
    'Gulp',
    'Yoast SEO',
    'Bootstrap'
  ]
  </script>
  
  <style lang="scss" scoped></style>
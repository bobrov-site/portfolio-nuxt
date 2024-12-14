<template>
    <div class="card w-100 p-2 mt-4">
                <div class="card-body">
                    <img src="/img/avatar2.jpg" class="avatar rounded-circle" alt="аватарка" />
                    <h1 class="card-title">{{ `<Привет, друг!>` }}</h1>
                    <hr>
                    <p class="card-text font-bold">Фронтенд-разработчиком в компании <a href="https://rusrobots.ru/" target="_blank">Russian Robotics</a></p>
                    <p class="card-text">
                        Занимаюсь разработкой сайтов 4+ года. 
                    </p>
                    <p class="card-text">
                        Специалист в разработке приложений на <span class="fst-italic">Vue.js и Nuxt.js</span>.
                        Разработал приложения разного типа: лендинги,
                        многостраничные сайты, интернет магазины, древовидные конструкторы, spa-приложения, агрегаторы и т.д.
                        Улучшал производительность трудных сайтов, работал в команде с другими разработчиками, выводил в релиз сайты, помогал младшим разработчикам в команде.
                    </p>
                    <p class="card-text">
                        Я работал над проектами для таких компаний как: <span class="fst-italic fst-bold">Пицца Куба, Аякс, Флагман, Открытый-код, НаукаКубань 0+, Евротранс </span>
                    </p>
                    <p class="card-text">
                        Вхожу в топ 3 контрибьютеров в open-source проекте <a href="https://github.com/hexlet-rus/runit" target="_blank">Runit.</a> Блог в instagram <span class="fst-italic instagram">**организация, деятельность которой запрещена на территории Российской Федерации**</span> охватил более 1 млн. аккаунтов и более 3 млн. простров на тематику IT. Веду технический тг канал, где написал более 200 постов про фронтенд. 
                    </p>
                    <p class="card-text">
                        В период фриланса занимался разработкой сайтов под ключ (дизайн + посадка на
                        Wordpress). Получил 30 положительных отзывов и попал в топ-10 лучших исполнителей в Ставрополе по разработке сайтов в сервисе Яндекс.Услуги.
                    </p>
                    <p class="card-text">
                        Рассматриваю предложения на позицию фронтенд-разработчика в компанию, где смогу
                        улучшать свои навыки и создавать масштабные и полезные сервисы в команде
                        единомышленников
                    </p>
                    <a href="cv.pdf" target="_blank" class="btn btn-lg btn-primary">Посмотреть резюме PDF</a>
                </div>
            </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.avatar {
    max-width: 200px;
    height: auto;
    object-fit: cover;
}
.instagram {
    font-size: 10px;
}
</style>
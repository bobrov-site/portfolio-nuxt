<template>
    <div class="card w-100 p-2 mt-4">
                <div class="card-body">
                    <img src="/img/avatar2.jpg" class="avatar rounded-circle" alt="аватарка" />
                    <h1 class="card-title">Фронтенд-разработчик 👋</h1>
                    <h4>Технический стэк:</h4>
                    <div class="mt-2 mb-2 d-flex gap-2">
                        <span v-for="item in stack" :key="item" class="badge text-bg-success">{{ item }}</span>
                    </div>
                    <p class="card-text">
                        Занимаюсь разработкой сайтов 3+ года. 
                    </p>
                    <p class="card-text">
                        Разработал сайты и приложения разного типа: лендинги,
                        многостраничные сайты и интернет магазины разной коммерческой направленности. В моей
                        базе более 30 положительных отзывов от клиентов предпринимателей в малом и среднем
                        бизнесе. 
                    </p>
                    <p class="card-text">
                        Ранее, занимался разработкой сайтов под ключ (дизайн + посадка на
                        Wordpress). Сейчас, занимаюсь разработкой приложений на <span class="fst-italic">Nuxt.js, Vue.js и React.js</span>.
                    </p>
                    <p class="card-text">
                        Вхожу в топ 3 контрибьютеров в open-source проекте <a href="https://github.com/hexlet-rus/runit" target="_blank">Runit</a>
                    </p>
                    <p class="card-text text-decoration-line-through">
                        Рассматриваю вакансию на позицию фронтенд-разработчика в компанию, где смогу
                        улучшать свои навыки и создавать масштабные и полезные сервисы в команде
                        единомышленников
                    </p>
                    <p class="card-text font-bold">Являюсь фронтенд-разработчиком в компании <a href="https://rusrobots.ru/" target="_blank">Russian Robotics</a></p>
                    <a href="cv.pdf" target="_blank" class="btn btn-lg btn-primary">Посмотреть полное резюме PDF</a>
                </div>
            </div>
</template>

<script setup>
const stack = [
    'Vue.js',
    'Nuxt.js',
    'React.js',
    'JS',
    'TS'
]
</script>

<style lang="scss" scoped>
.avatar {
    max-width: 200px;
    height: auto;
    object-fit: cover;
}
</style>
<script setup>
useSeoMeta({
    title: 'Бобров Даниил | Портфолио | Frontend-developer | Vue | Nuxt | React | JS | TS | GIT',
    description: `Занимаюсь разработкой сайтов 3+ года. Мною были разработаны разного типа: лендинги,
                        многостраничные сайты и интернет магазины разной коммерческой направленности. В моей
                        базе более 30 положительных отзывов от клиентов предпринимателей в малом и среднем
                        бизнесе. Так же занимался разработкой сайтов под ключ (дизайн + посадка на
                        Wordpress). На данный момент занимаюсь разработкой приложений на Vue.js`,
    ogDescription: `Занимаюсь разработкой сайтов 3+ года. Мною были разработаны разного типа: лендинги,
                        многостраничные сайты и интернет магазины разной коммерческой направленности.`
})
</script>
<template>
    <div class="row">
        <div class="col-12 col-lg-7">
            <div class="card w-100 p-2 mt-4">
                <div class="card-body">
                    <img src="/img/avatar2.jpg" class="avatar rounded-circle" alt="аватарка" />
                    <h1 class="card-title">Фронтенд-разработчик 👋</h1>
                    <h4>Технический стэк:</h4>
                    <div class="mt-2 mb-2 d-flex gap-2">
                        <span class="badge text-bg-success">Vue.js</span>
                        <span class="badge text-bg-success">Nuxt.js</span>
                        <span class="badge text-bg-success">React.js</span>
                        <span class="badge text-bg-success">JS</span>
                        <span class="badge text-bg-success">TS</span>
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
            <LastProject :title="'Сервис аренды квартир'" :breadcrumbs="['Сайты', 'Фронтенд (Vue.js)']"
                :img-src="'/img/fridda/fridda1.png'" :project-url="'/sites/frontend/fridda'" :date="'23.06.2024'"/>
        </div>
        <div class="col-12 col-lg-5">
            <div class="card w-100 p-2 mt-4">
                <div class="card-body">
                    <h4 class="card-title">Популярные языки статистика</h4>
                    <img class="w-100" src="https://camo.githubusercontent.com/afba742a1afcdcc49f850c2c07f052cc7c2bfd28b5523ffffc6d26f0bf2882c3/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d626f62726f762d73697465266c61796f75743d636f6d70616374267468656d653d6d61726f6f6e676f6c64">
                </div>
            </div>
            <div class="card w-100 p-2 mt-4">
                <div class="card-body">
                    <h4 class="card-title">Wakatime статистика</h4>
                    <figure>
                        <embed src="https://wakatime.com/share/@bobrovSite/39094ffb-84bc-4f5e-b49b-deb58cf01c87.svg">
                    </figure>
                </div>
            </div>    
        <ClientsReviews />
        </div>
        <div class="col-12">
            <TelegramPosts />
        </div>
    </div>
</template>
<style lang="scss" scoped>
.avatar {
    max-width: 200px;
    height: auto;
    object-fit: cover;
}

.carousel-control-prev,
.carousel-control-next {
    color: #323232;
}

.project-preview {
    width: 100%;
}
</style>
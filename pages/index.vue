<template>
    <div class="row">
        <div class="col-12 col-lg-7">
            <WelcomeData />
            <!-- <LastProject :title="'Сервис аренды квартир'" :breadcrumbs="['Сайты', 'Фронтенд (Vue.js)']"
                :img-src="'/img/fridda/fridda1.png'" :project-url="'/sites/frontend/fridda'" :date="'23.06.2024'" />
            <div class="card w-100 p-2 mt-4">
                <div class="card-body">
                    <h4 class="card-title">Видео 📹</h4>
                    <iframe width="100%" height="315"
                        src="https://www.youtube.com/embed/94bUCLpn9s0?si=GaydQXg0b_nT6Du6" title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div> -->
        </div>
        <div class="col-12 col-lg-5">
            <div class="card w-100 p-2 mt-4">
                <div class="card-body">
                    <h4 class="card-title">Wakatime статистика</h4>
                    <figure v-if="app.theme === 'light'"><embed src="https://wakatime.com/share/@bobrovSite/39094ffb-84bc-4f5e-b49b-deb58cf01c87.svg"></figure>
                    <figure v-else><embed src="https://wakatime.com/share/@bobrovSite/1916b64c-3bc1-466b-ae4e-381a89767a6e.svg"></embed></figure>
                </div>
            </div>
            <div class="card w-100 p-2 mt-4">
                <div class="card-body">
                    <h4 class="card-title">Популярные языки статистика</h4>
                    <img class="w-100"
                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=bobrov-site&layout=compact&theme=maroongold"
                        alt="langs">
                </div>
            </div>
            <div class="card w-100 p-2 mt-4">
                <div class="card-body">
                    <h4 class="card-title">Leetcode статистика</h4>
                    <img class="w-100" src="https://leetcard.jacoblin.cool/bobrov-site?theme=dark&font=PT%20Sans"
                        alt="leetcode" />
                </div>
            </div>
            <ClientsReviews />
        </div>
        <div class="col-12">
            <PopularProjects :projects="projects" />
        </div>
        <div class="col-12">
            <TelegramPosts />
        </div>
    </div>
</template>
<script setup>
import { appStore } from '~/stores/app';

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
const app = appStore();
const projects = [
    {
        title: 'Fridda - сервис аренды квартир',
        url: '/sites/frontend/fridda',
        img: '/img/fridda/fridda1.png',
    },
    {
        title: 'Билеты на автобус',
        url: '/sites/frontend/evrotrans',
        img: '/img/evrotrans/evrotrans1.png',
    },
    {
        title: 'Вычислитель отличий',
        url: '/pet/educational-projects/gendiff',
    },
]
</script>
<style lang="scss" scoped>
.carousel-control-prev,
.carousel-control-next {
    color: #323232;
}

.project-preview {
    width: 100%;
}
</style>
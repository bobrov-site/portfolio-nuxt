<template>
    <div class="card w-100 p-2 mt-4">
        <div class="card-body">
            <h4 class="card-title">Вам стоит увидеть эти проекты 🔥</h4>
            <div class="container popular-projects">
                <div class="row g-4">
                    <div v-for="(project, index) in projects" :key="index" class="col-12 col-lg-4" >
                        <NuxtLink :to="project.url">
                            <div class="popular-project flex flex-column border border-success p-2 rounded">
                                <h5>{{ project.title }}</h5>
                                <img :src="project.img ?? '/img/defaultPopularProject.jpeg'" alt="популярный проект" class="popular-project__img">
                            </div>
                        </NuxtLink>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    projects: Array
})
</script>

<style lang="scss" scoped>
.popular-project__img {
    width: 100%;
    height: 320px;
    object-fit: cover;
}
</style>
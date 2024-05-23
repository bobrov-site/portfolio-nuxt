<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card p-2 mt-4">
                    <div class="card-body">
                        <h1 class="card-title">Проект: {{ props.title }}</h1>
                        <div v-if="props.images" id="carouselExample" class="carousel slide mb-4 shadow-lg rounded-4" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div v-for="(item, index) in props.images" :key="index" class="carousel-item"
                                    :class="{ active: index === 0 }">
                                    <div class="d-flex justify-content-center">
                                        <img :src="item" :alt="`${item}${index}`" class="img-fluid rounded carousel-image" />
                                    </div>
                                    
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample"
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div v-if="props.ascinema" v-html="props.ascinema" class="ascinema w-100 shadow-lg rounded-4"></div>
                        <h2 v-if="props.responsibilities" class="card-title">Обязанности:</h2>
                        <ul v-if="props.responsibilities" class="list-group mb-2">
                            <li v-for="item in props.responsibilities" :key="item" class="list-group-item">
                                {{ item }}
                            </li>
                        </ul>
                        <h2 class="card-title">Достижения:</h2>
                        <p class="card-text" v-html="props.achivments"></p>
                        <h2 v-if="props.techStack" class="card-title">Технологии:</h2>
                        <div v-if="props.techStack" class="mb-4">
                            <span v-for="(item, index) in sortTechStack(props.techStack)" :key="index"
                                :class="{ 'me-2': index !== props.techStack.length - 1 }" class="badge text-bg-secondary">{{
                                    item }}</span>
                        </div>
                        <p v-if="props.githubUrl" class="card-text">
                            <a :href="props.githubUrl" class="text-link" target="_blank">Ссылка на проект в Github</a>
                        </p>
                        <p v-if="props.tuskUrl" class="card-text">
                            <a :href="props.tuskUrl" class="text-link" target="_blank">Ссылка на поставленную задачу</a>
                        </p>
                        <a v-if="props.siteUrl" :href="props.siteUrl" class="btn btn-primary" target="_blank">Посмотреть
                            сайт</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
const sortTechStack = (techStack) => {
    return techStack.sort()
}

const props = defineProps({
    title: String,
    images: Array,
    responsibilities: Array,
    achivments: String,
    githubUrl: String,
    siteUrl: String,
    tuskUrl: String,
    ascinema: String,
    techStack: Array
})
</script>
  
<style lang="scss">
.ascinema {
    img {
        width: 100%;
    }
}

.carousel-image {
    max-height: 720px;
}
</style>
  
<style lang="scss" scoped>
.text-link {
    cursor: pointer;
}
</style>
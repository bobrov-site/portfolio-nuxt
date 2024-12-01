<template>
    <div class="card w-100 p-2 mt-4">
        <div class="card-body">
            <h4 class="card-title">Новый проект 🚀</h4>
            <div @mouseover="isHover = true" @mouseleave="isHover = false" :class="{ 'shadow-lg': isHover }" class="card border-success">
                <div class="card-body">
                    <h6 class="card-title d-flex justify-content-between">
                        <span>{{ props.title }}</span>
                        <span class="text-secondary d-block">{{ props.date }}</span>
                    </h6>
                    <div class="mb-2">
                        <span v-for="(breadcrumb, index) in props.breadcrumbs" :key="breadcrumb"
                            :class="{ 'me-2': index === 0 }" class="badge text-bg-secondary">{{ breadcrumb }}</span>
                    </div>
                    
                    <img class="project-preview rounded w-100 shadow-sm mb-4" :src="props.imgSrc" alt="" />
                    <NuxtLink class="btn btn-lg btn-success stretched-link" :to="props.projectUrl">Посмотреть проект</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
const props = defineProps({
    title: String,
    imgSrc: String,
    projectUrl: String,
    projectDate: String,
    breadcrumbs: Array,
    date: String,
})

const isHover = ref(false)
</script>
  
<style lang="scss" scoped>
@media screen and (max-width: 767px) {
    .project-preview {
        max-height: 250px;
        object-fit: cover;
        width: 100%;
    }
}
</style>
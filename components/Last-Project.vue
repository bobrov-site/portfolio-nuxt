<template>
    <div class="card w-100 p-2 mt-4">
        <div class="card-body">
            <h4 class="card-title">Последний проект в портфолио 🥹</h4>
            <div class="card">
                <div class="card-body">
                    <h6 class="card-title">{{ props.title }}</h6>
                    <div class="mb-2">
                        <span v-for="(breadcrumb, index) in props.breadcrumbs" :key="breadcrumb"
                            :class="{ 'me-2': index === 0 }" class="badge text-bg-secondary">{{ breadcrumb }}</span>
                    </div>
                    <img class="project-preview rounded w-100" :src="props.imgSrc" alt="" />
                    <span class="text-secondary d-block">03.11.2023</span>
                    <RouterLink class="btn btn-primary mt-2 mb-2" :to="props.projectUrl">Посмотреть проект
                    </RouterLink>
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
    breadcrumbs: Array
})
</script>
  
<style lang="scss" scoped></style>
<template>
    <div class="card">
        <div class="card-body">
            <img class="avatar mb-2" :src="avatarUrl" :alt="name" />
            <h6 class="card-title">{{ name }}</h6>
            <div class="mb-2">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
            </div>
            <p v-if="!isShowFullText" @click="showFullText()" class="card-text pointer">
                {{ cropText(reviewText) }}
            </p>
            <p v-else class="card-text">{{ reviewText }}</p>
            <a v-if="url" :href="url" target="_blank">Перейти в профиль клиента в VK</a>
        </div>
    </div>
</template>
  
<script setup>

const showFullText = () => {
    return (isShowFullText.value = !isShowFullText.value)
}
const cropText = (text) => {
    if (text.length > 200) {
        return text.slice(0, 200) + '...'
    }
}
const isShowFullText = ref(false)
defineProps({
    name: String,
    reviewText: String,
    avatarUrl: String,
    url: String
})
</script>
  
<style lang="scss" scoped>
.avatar {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50px;
}

.bi-star-fill {
    color: #ffc107;
}

.pointer {
    cursor: pointer;
}
</style>
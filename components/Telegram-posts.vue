<template>
    <div class="card w-100 p-2 mt-4">
        <div class="card-body">
            <h2 class="card-title">Последние посты в Telegram канале 💬</h2>
            <a href="https://t.me/bobrov_frontend" target="_blank" class="btn btn-primary mb-2">Перейти в TG канал</a>
            <div v-if="loading" class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div v-for="(post, index) in getLastPosts" :key="index" class="card mb-2">
                <div class="card-body">
                    <div class="card-content card-content-telegram" v-html="post.content_html"></div>
                    <a :href="post.url" class="btn btn-primary mt-2">Перейти к посту</a>
                </div>
            </div>
            <div v-if="posts.length === 0 && !loading">
                <p class="card-text">Постов на данный момент нет. Но вы можете подписаться на блог 🫠</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import axios from 'axios'
import { ref, onMounted, computed } from 'vue';
onMounted(async() => {
    await getPosts();
    addClassToImages();
})
const posts = ref([])
const loading = ref(false)
const getLastPosts = computed(() => {
    return posts.value.slice(0, 5)
})
const getPosts = async() => {
    loading.value = true
    const response = await axios.get('https://wtf.roflcopter.fr/rss-bridge/?action=display&bridge=TelegramBridge&username=%40bobrov_frontend&format=Json')
    posts.value = response.data.items
    loading.value = false
}
const addClassToImages = () => {
    const cardContent = document.getElementsByClassName('card-content');
    const arrayCardContent = Array.from(cardContent)
    arrayCardContent.map((item) => {
        const img = item.querySelector('img')
        if (img !== null) {
            img.classList.add('card-img')
        }
    })
}
</script>

<style lang="scss">
.card-content-telegram {
    img {
        object-fit: cover;
        width: 100%;
        max-width: 720px;
    }
}
</style>
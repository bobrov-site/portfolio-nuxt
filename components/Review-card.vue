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
            <p @click="showFullText" :class="{'wrapper-text': !isShowFullText}" class="card-text pointer">
                {{ reviewText }}    
            </p>
        </div>
    </div>
</template>
  
<script setup>

const showFullText = () => {
    isShowFullText.value = !isShowFullText.value
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

.wrapper-text {
    -webkit-line-clamp: 5;
	line-clamp: 5;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	overflow: hidden;
}
</style>
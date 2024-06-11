<script setup>
const articles = ref([])
const videos = ref([])
const sites = ref([])
const repositories = ref([])

const loadData = () => {
    
}

onMounted(() => {
    
})
</script>
<template>
    <ModalForm/>
    <div class="card mt-4">
        <div class="card-body">
            <div class="row">
                <div class="col-12 d-flex justify-content-center flex-wrap">
                    <h1 class="text-center">База знаний для фронтенд-разработчика</h1>
                    <div class="w-100">
                        <p class="text-center">Это место, где вы можете найти полезную информацию о
                            фронтенд-разработке <br>
                            Здесь опубликованы статьи, видео, сайты, которые могут прокачать вас, как
                            фронтенд-разработчика
                        </p>
                    </div>
                </div>
            </div>
            <div class="row mb-4 mt-4">
                <div class="col-12">
                    <SourceCard sectionTitle="Статьи" :sources="articles" />
                </div>
            </div>
            <div class="row mb-4">
                <div class="col-12">
                    <SourceCard sectionTitle="Видео" />
                </div>
            </div>
            <div class="row mb-4">
                <div class="col-12">
                    <SourceCard sectionTitle="Сайты" />
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <SourceCard sectionTitle="Репозитории" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#search {
    max-width: 720px;
}
</style>
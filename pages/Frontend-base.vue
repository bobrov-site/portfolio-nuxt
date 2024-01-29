<script setup>
import { createClient } from '@supabase/supabase-js'
const runtimeConfig = useRuntimeConfig();
// console.log(runtimeConfig.supabaseUrl);
// console.log(runtimeConfig.supabaseKey);
// TODO env
const supabase = createClient('https://cyzmzybefioslszyvhzm.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5em16eWJlZmlvc2xzenl2aHptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY1MTMxMzYsImV4cCI6MjAyMjA4OTEzNn0.hYNPef34xR2YLX8WEpf2FbDPG2Xb_DX6PieW8QfBylE');
const articles = ref([])
const videos = ref([])
const sites = ref([])
const repositories = ref([])

const getArticles = async() => {
    const { data } = await supabase.from('articles').select()
    articles.value = data
}

const getVideos = async() => {
    const {data} = await supabase.from('videos').select();
    videos.value = data
}

const getSites = async() => {
    const {data} = await supabase.from('sites').select();
    sites.value = data
}

const getRepositories = async() => {
    const {data} = await supabase.from('repositories').select();
    repositories.value = data
}

onMounted(() => {
    getArticles();
    getRepositories();
    getSites();
    getVideos();
})
</script>
<template>
    <div class="card mt-4">
        <div class="card-body">
            <div class="row">
                <div class="col-12 d-flex justify-content-center flex-wrap">
                    <h1 class="text-center">База знаний для фронтенд-разработчика</h1>
                    <div class="w-100">
                        <p class="text-center">Это open-source проект, где вы можете найти полезную информацию о
                            фронтенд-разработке <br>
                            Здесь опубликованы статьи, видео, сайты, которые могут прокачать вас, как
                            фронтенд-разработчика
                        </p>
                    </div>
                    <button class="btn btn-lg btn-outline-primary">Опубликовать</button>
                    <span class="d-block w-100 text-center">или</span>
                    <input type="text" class="form-control form-control-lg" id="search" placeholder="Найти например: javascript">
                </div>
            </div>
            <div class="row mb-4 mt-4">
                <div class="col-12">
                    <SourceCard sectionTitle="Статьи" :sources="articles"/>
                </div>
            </div>
            <div class="row mb-4">
                <div class="col-12">
                    <SourceCard sectionTitle="Видео"/>
                </div>
            </div>
            <div class="row mb-4">
                <div class="col-12">
                    <SourceCard sectionTitle="Сайты"/>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <SourceCard sectionTitle="Репозитории"/>
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
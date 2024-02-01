<script setup>
const supabase = useSupabaseClient();
const articles = ref([])
const videos = ref([])
const sites = ref([])
const repositories = ref([])

const getArticles = async () => {
    const { data } = await supabase.from('articles').select()
    articles.value = data
}

const getVideos = async () => {
    const { data } = await supabase.from('videos').select();
    videos.value = data
}

const getSites = async () => {
    const { data } = await supabase.from('sites').select();
    sites.value = data
}

const getRepositories = async () => {
    const { data } = await supabase.from('repositories').select();
    repositories.value = data
}

const submitForm = () => {
    // TODO добавить валидацию данных. Валидация формы должна смотреть похожие названия ресурсов и смотреть одинаковые ссылки
}

onMounted(() => {
    getArticles();
    getRepositories();
    getSites();
    getVideos();
})
</script>
<template>
    <div class="modal fade" id="formModal" tabindex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="formModalLabel">Добавить полезный материал</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p class="card-text">
                        Заполните форму для добавления материала на сайт. <br>
                        Добавление контента может занять время на ее модерацию
                    </p>
                    <form @submit.prevent="submitForm()">
                        <div class="mb-3">
                            <select class="form-select" aria-label="Выберите категорию">
                                <option selected>Статья</option>
                                <option value="1">Репозиторий</option>
                                <option value="2">Сайт</option>
                                <option value="3">Видео</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="title" class="form-label">Название</label>
                            <input type="email" class="form-control" id="title">
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label">Описание</label>
                            <textarea class="form-control" id="description" rows="3"
                                aria-describedby="descriptionHelp"></textarea>
                            <div id="descriptionHelp" class="form-text">Необязательно</div>
                        </div>
                        <div class="mb-3">
                            <label for="url" class="form-label">Ссылка</label>
                            <input type="url" class="form-control" id="url">    
                        </div>
                        <button type="submit" class="btn btn-primary">Опубликовать</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
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
                    <button type="button" data-bs-toggle="modal" data-bs-target="#formModal"
                        class="btn btn-lg btn-outline-primary">Опубликовать</button>
                    <span class="d-block w-100 text-center">или</span>
                    <input type="text" class="form-control form-control-lg" id="search"
                        placeholder="Найти например: javascript">
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
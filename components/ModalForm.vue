<script setup>
const title = ref()
const description = ref()
const category = ref()
const url = ref()
const pushedBy = ref()
const isDisabled = ref(false);
const errorsForm = ref({}) 
const submitForm = () => {
    isDisabled.value = true;
    const formData = {
        title: title.value,
        description: description.value,
        category: category.value,
        url: url.value,
        pushedBy: pushedBy.value
    }
    const validation = validateForm(formData)
    validation
    .then((response) => {
        console.log(response);
    })
    .catch((e) => {
        e.inner.forEach((error) => {
            errorsForm.value[error.path] = error.message
        });
    })
    isDisabled.value = false;
}

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
                            <label for="category" class="form-label">Категория</label>
                            <select v-model="category" class="form-select" aria-label="Выберите категорию" id="category" value="">
                                <option selected>Статья</option>
                                <option value="1">Репозиторий</option>
                                <option value="2">Сайт</option>
                                <option value="3">Видео</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="title" class="form-label">Название</label>
                            <input v-model="title" type="text" class="form-control" :class="{'is-invalid' : errorsForm.title}" id="title">
                            <div v-if="errorsForm.title" class="invalid-feedback">{{ errorsForm.title }}</div>
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label">Описание</label>
                            <textarea v-model="description" class="form-control" id="description" rows="3"
                                aria-describedby="descriptionHelp"></textarea>
                            <div id="descriptionHelp" class="form-text">Необязательно</div>
                        </div>
                        <div class="mb-3">
                            <label for="url" class="form-label">Ссылка</label>
                            <input v-model="url" type="text" class="form-control" id="url">
                        </div>
                        <div class="mb-3">
                            <label for="pushedBy" class="form-label">Ваше имя</label>
                            <input v-model="pushedBy" type="text" class="form-control" id="pushedBy"
                                aria-describedby="descriptionHelpPushedBy">
                            <div id="descriptionHelpPushedBy" class="form-text">Напишите ваше имя и оно будет опубликовано
                                под каждым опубликованным вашим материалом, а так же внизу страницы в списке всех
                                пользователей. Поле необязательное</div>
                        </div>
                        <button type="submit" :disabled="isDisabled" class="btn btn-primary">Опубликовать</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
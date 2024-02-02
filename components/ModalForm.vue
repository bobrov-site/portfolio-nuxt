<script setup>
const submitForm = () => {

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
                            <select class="form-select" aria-label="Выберите категорию" required>
                                <option selected>Статья</option>
                                <option value="1">Репозиторий</option>
                                <option value="2">Сайт</option>
                                <option value="3">Видео</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="title" class="form-label">Название</label>
                            <input type="text" class="form-control" id="title" required>
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label">Описание</label>
                            <textarea class="form-control" id="description" rows="3"
                                aria-describedby="descriptionHelp"></textarea>
                            <div id="descriptionHelp" class="form-text">Необязательно</div>
                        </div>
                        <div class="mb-3">
                            <label for="url" class="form-label">Ссылка</label>
                            <input type="text" class="form-control" id="url">
                        </div>
                        <div class="mb-3">
                            <label for="pushedBy" class="form-label">Ваше имя</label>
                            <input type="text" class="form-control" id="pushedBy"
                                aria-describedby="descriptionHelpPushedBy">
                            <div id="descriptionHelpPushedBy" class="form-text">Напишите ваше имя и оно будет опубликовано
                                под каждым опубликованным вашим материалом, а так же внизу страницы в списке всех
                                пользователей. Поле необязательное</div>
                        </div>
                        <button type="submit" class="btn btn-primary">Опубликовать</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
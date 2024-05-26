<template>
    <div class="row">
        <div class="col-12 text-center">
            <h1>Собеседник AI. <span class="fst-italic">Powered by Gigachat</span></h1>
        </div>
    </div>
    <div class="row">
        <div class="col-12 d-flex justify-content-center">
            <div>тут будет форма</div>
        </div>
        {{ auth }}
    </div>
</template>

<script setup>
const {pending, data: auth} = useLazyFetch('/api/sobesednik/auth', {method: 'POST'})
onMounted(async() => {

})
</script>

<style lang="scss" scoped>

</style>
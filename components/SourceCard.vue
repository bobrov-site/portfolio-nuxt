<template>
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">{{ props.sectionTitle }}</h3>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    sectionTitle: String,
    sources: Array,
})
</script>

<style lang="scss" scoped></style>
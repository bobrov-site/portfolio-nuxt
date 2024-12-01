<template>
    <div class="app">
        <NavbarHeader/>
        <main>
            <div class="container">
                <slot/>
            </div>
        </main>
        <FooterBar/>
    </div>
</template>
<script setup>
const app = appStore();
onBeforeMount(() => {
    app.initTheme();
})
</script>
<style lang="scss" scoped>
.app {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>
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
<style lang="scss" scoped>
.app {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>
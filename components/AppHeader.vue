<template>
    <header class="fixed top-0 left-0 right-0 opacity-90">
        <div class="p-5 pb-0 bg-primary">
            <h1 class="text-white">Colin Faivre</h1>
            <img src="~/assets/img/avatar.jpeg" alt="avatar" class="header__img avatar">
        </div>
        <div class="p-5 pt-0 bg-gradient-to-r from-primary-extra-light to-primary-light border-secondary">
            <h1 class="text-secondary">Senior frontend developer</h1>
        </div>
    </header>
</template>

<style>
.header__img {
    position: absolute;
    right: 20px;
    top: 20px;
    border-radius: 40px;
}
.avatar {
    height: 80px;
    width: 80px;
}
</style>
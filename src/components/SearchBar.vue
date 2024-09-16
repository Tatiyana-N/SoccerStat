<template>
<div class="search-container">
    <div class="container flex-center">
        <form class="form-search flex-center">

            <div class="searchBar">
                    <input
                    placeholder="Поиск"
                    class="searchInput"
                    @input="onInput"
                    />
            </div>
        </form>
    </div>

</div>

</template>

<script>
export default {
    methods: {
        onInput(event) {
        this.$emit('search', event.target.value);
        },
    },
};
</script>

<style scoped>

.form-search {
    width: 100%;
    max-width: 850px;
}

.searchBar {
    width: 100%;
    max-width: 500px;
    height: 44px;
    position: relative;
}

.searchInput {
    width: 100%;
    height: 100%;
    border: 1px solid #e6e6e6;
    border-radius: 22px;
    padding-left: 20px;
    padding-right: 35px;
    font-size: 20px; /* Увеличить размер шрифта здесь */
}



.search-container {
    margin-bottom: 20px; /* Добавить отступ снизу для разделения с карточками */
}

</style>
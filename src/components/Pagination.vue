<template>
<div class="search-container">
    <div class="container flex-center">
        <form class="form-search flex-center" @submit.prevent>
        
            <div class="pagination">
                <button @click="prevPage" :disabled="activePage === 1">Назад</button>
                <span>Страница {{ activePage }}</span>
                <button @click="nextPage" :disabled="activePage >= totalPages">Вперед</button>
            </div>

        </form>
    </div>

</div>

</template>

<script>
export default {
    props: {
        activePage: Number,
        totalItems: Number,
        itemsPerPage: Number,
    },
    computed: {
        totalPages() {
        return Math.ceil(this.totalItems / this.itemsPerPage);
        },
    },
    methods: {
        prevPage() {
        if (this.activePage > 1) {
            this.$emit('page-changed', this.activePage - 1);
        }
        },
        nextPage() {
        if (this.activePage < this.totalPages) {
            this.$emit('page-changed', this.activePage + 1);
        }
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

.pagination {
        display: flex;
        justify-content: center; /* Центрируем пагинацию */
        align-items: center; /* Выравниваем элементы по центру по вертикали */
        margin-top: 20px; /* Отступ сверху */
    }
    .pagination button {
        margin: 0 5px; /* Отступы между кнопками */
        padding: 10px 15px; /* Внутренний отступ */
        border: none; /* Убираем стандартные границы */
        border-radius: 4px; /* Скругление углов */
        background-color: #ccc; /* Цвет фона */
        color: white; /* Цвет текста */
        cursor: pointer; /* Курсор в виде указателя */
        transition: background-color 0.3s; /* Плавный переход при наведении */
    }

    .pagination button:hover {
        background-color: #888888; /* Цвет фона при наведении */
    }
    .activePageNumber {
        background-color: #888888; /* Цвет для активной страницы */
        pointer-events: none; /* Отключаем события для активной кнопки */
    }
    .inactivePageNumber {
        background-color: #ccc; /* Цвет для неактивных страниц */
    }

</style>
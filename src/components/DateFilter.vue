<template>
<div class="searchBar">
    с 
    <input
        type="date"
        class="dateInput"
        v-model="startDate"
        @change="updateDateRange"
    />
    по 
    <input
        type="date"
        class="dateInput"
        v-model="endDate"
        @change="updateDateRange"
    />
</div>

</template>

<script>

export default {
    data() {
        return {
        startDate: '',
        endDate: ''
        };
    },
    methods: {
        updateDateRange() {
        this.$emit('date-range-changed', {
            startDate: this.startDate,
            endDate: this.endDate
        });
        }
    }
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

  /* Стили для блока выбора дат */
    .searchBar {
        display: flex;
        align-items: center; /* Центрируем элементы по вертикали */
        margin: 20px 0; /* Отступ сверху и снизу */
    }
    .dateInput {
        margin: 0 10px; /* Отступы между полями */
        padding: 5px; /* Внутренний отступ */
        border: 1px solid #ccc; /* Граница */
        border-radius: 12px; /* Скругление углов */
        font-size: 16px; /* Размер шрифта */
    }


</style>
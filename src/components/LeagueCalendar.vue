<template>


    <div class="leagues-wrapper" id="rests-container">


     

            <div class="leagues-list">
                <div class="leagues-item">


                    <h3 class="leagues-title"> Матчи </h3>

                    <DateFilter @date-range-changed="onDateRangeChanged" />

                    <template v-if="filteredLeaguematchs.length > 0">
                        <table>
                            <thead>
                                <tr>
                                    <th>Дата</th>
                                    <th>Время</th>
                                    <th>Статус</th>
                                    <th>Домашняя команда</th>
                                    <th>Гости</th>
                                    <th>Счет</th>
                                </tr>
                            </thead>
                            <tbody>



                                <tr template v-for="leaguematch in paginatedLeaguematchs" :key="leaguematch.id"
                                    class="tableLine">


                                    

                                    <td class="date">
                                        {{ formatDate(leaguematch.utcDate) }}

                                    </td>
                                    <td class="time">
                                        {{ formatTime(leaguematch.utcDate) }}

                                    </td>
                                    <td class="status">
                                        {{ leaguematch.status }}

                                    </td>
                                    <td class="homeTeam">
                                        {{ leaguematch.homeTeam.name }}

                                    </td>
                                    <td class="awayTeam">
                                        {{ leaguematch.awayTeam.name }}
                                    </td>
                                    <td class="score">
                                        {{ leaguematch.score.fullTime.home }} : {{ leaguematch.score.fullTime.away }}

                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </template>

                    <template v-else>
                        <p>Загрузка матчей...</p>
                    </template>


                </div>
            </div>

        </div>



    <Pagination :active-page="activePage" :total-items="leaguematchs.length" :items-per-page="itemsPerPage"
        @page-changed="onPageChange" />


</template>

<script>

import Pagination from './Pagination.vue'; 
import {getLeaguematchList} from '../datasources/leaguecalendar.js';


import DateFilter from './DateFilter.vue';


export default {
    // props: ['id'], // Получаем id как пропс
    components: {
        Pagination,
        DateFilter,
    },
    data() {
        return {
            leaguematchs: [],
            activePage: 1,
            itemsPerPage: 15,
            startDate: '', //null,
            endDate: '', //null,
        };
    },

    computed: {
        filteredLeaguematchs() {
            return this.leaguematchs.filter(match => {
                const matchDate = new Date(match.utcDate);
                const start = this.startDate ? new Date(this.startDate) : null;
                const end = this.endDate ? new Date(this.endDate) : null;

                // Проверяем, попадает ли дата матча в диапазон
                return (!start || matchDate >= start) && (!end || matchDate <= end);
            });
        },
        paginatedLeaguematchs() {
            const start = (this.activePage - 1) * this.itemsPerPage;
            return this.filteredLeaguematchs.slice(start, start + this.itemsPerPage);
        },

        totalPages() {
            return Math.ceil(this.filteredLeaguematchs.length / this.itemsPerPage);
        }


    },

    methods: {
        async created() {
            const leagueId = this.$route.params.id;
            this.leaguematchs = await getLeaguematchList(leagueId);
            console.log("leaguematchlist= ", this.leaguematchs);
        },

        onDateRangeChanged({ startDate, endDate }) {
            this.startDate = startDate;
            this.endDate = endDate;
            this.activePage = 1; // Сброс страницы при изменении диапазона дат
        },

        onPageChange(newPage) {
            if (newPage < 1 || newPage > this.totalPages) return;
            this.activePage = newPage;
        },

        formatDate(dateString) {
            const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
            return new Date(dateString).toLocaleDateString(undefined, options);
        },
        formatTime(dateString) {
            const options = { hour: '2-digit', minute: '2-digit' };
            return new Date(dateString).toLocaleTimeString(undefined, options);
        },

    },





    onPageChange(newPage) {
        console.log("Changing to page:", page);
        this.activePage = newPage;
        console.log("Current active page:", this.activePage);
    },

    created() {
        this.created();         // Вызов функции для получения матчей
    }

};



</script>

<style scoped>
.team-calendar {
    padding: 20px;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

.tableLine {
    background-color: #f9f9f9;
}

.tableLine:hover {
    background-color: #f1f1f1;
}

.date,
.time,
.status,
.homeTeam,
.awayTeam,
.score {
    vertical-align: middle;
}

/* Стили для блока выбора дат */
.searchBar {
    display: flex;
    align-items: center;
    /* Центрируем элементы по вертикали */
    margin: 20px 0;
    /* Отступ сверху и снизу */
}

.dateInput {
    margin: 0 10px;
    /* Отступы между полями */
    padding: 5px;
    /* Внутренний отступ */
    border: 1px solid #ccc;
    /* Граница */
    border-radius: 12px;
    /* Скругление углов */
    font-size: 16px;
    /* Размер шрифта */
}
</style>

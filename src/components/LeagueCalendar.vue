<template>

<div class="leagues-wrapper" id="rests-container">
        

        
        <div class="container">
        
            <div class="leagues-list">
                <div class="leagues-item">
                    <h3 class="leagues-title">Календарь лиги - Mатчи</h3>    
                    
                    <div class="searchBar">
                        с
                        <input type="date" class="dateInput">
                        по
                        <input type="date" class="dateInput">
                    </div>

                <template v-for="leaguematch in leaguematchs" :key="leaguematch.id">
                    <table>
                        
                        <tbody>
        
                            <tr class="tableLine">
                                <td class="date">
                                    {{leaguematch.data}}
                                    
                                </td>
                                <td class="time">
                                    {{leaguematch.time}}
                                    
                                </td>
                                <td class="status">
                                    {{leaguematch.status}}
                                    
                                </td>
                                <td class="homeTeam">
                                    {{leaguematch.homeTeam}}
                                    
                                </td>
                                <td class="awayTeam">
                                    {{leaguematch.awayTeam}}
                                </td>
                                <td class="score">
                                    {{leaguematch.score}}
                                    
                                </td>
                            </tr>
                            
                        </tbody>   
                    </table>
                </template>

                    <div class="pagination">
                            <button class="activePageNumber">1</button>
                            <button class="inactivePageNumber">2</button>
                            <button class="inactivePageNumber">3</button>
                            <button disabled="" class="inactivePageNumber">…</button>
                            <button class="inactivePageNumber">19</button>
                    </div>
                </div>
            </div>

        </div>

    
</div>

</template>

<script>


import getLeaguematchList from '../leaguecalendar.js';

    const leaguematchlist = getLeaguematchList();
    console.log(leaguematchlist);
    const leaguematchs = leaguematchlist.leaguematchs;

    export default {
        data() {
            return {
                leaguematchs
            };
        },
    }


</script>

<style>

   

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
        border-radius: 4px; /* Скругление углов */
        font-size: 16px; /* Размер шрифта */
    }

    /* Стили для пагинации */
    .pagination {
        display: flex;
        justify-content: center; /* Центрируем пагинацию */
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



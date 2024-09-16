<template>

    <div class="leagues-wrapper" id="rests-container">



        <div class="container">

            <div class="leagues-list">
                <div class="leagues-item">
                    <h3 class="leagues-title">Календарь команды - Mатчи</h3>
                    <div class="searchBar">
                        с
                        <input type="date" class="dateInput">
                        по
                        <input type="date" class="dateInput">
                    </div>

                    <template v-for="teammatch in teammatchs" :key="teammatch.id">
                    <table>
                        
                        <tbody>
        
                            <tr class="tableLine">
                                <td class="date">
                                    {{teammatch.data}}
                                    
                                </td>
                                <td class="time">
                                    {{teammatch.time}}
                                    
                                </td>
                                <td class="status">
                                    {{teammatch.status}}
                                    
                                </td>
                                <td class="homeTeam">
                                    {{teammatch.homeTeam}}
                                    
                                </td>
                                <td class="awayTeam">
                                    {{teammatch.awayTeam}}
                                </td>
                                <td class="score">
                                    {{teammatch.score}}
                                    
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

import getTeammatchList from '../teamcalendar.js';

    const teammatchlist = getTeammatchList();
    console.log(teammatchlist);
    const teammatchs = teammatchlist.teammatchs;

    export default {
        data() {
            return {
                teammatchs
            };
        },
    }


</script>

<style>

  table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
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
        .date, .time, .status, .homeTeam, .awayTeam, .score {
            vertical-align: middle;
        }
</style>

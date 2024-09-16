<template>

        <div class="container">

                <nav class="breadCrumbs">

                        <span class="rootElement">
                                <router-link to="/" class=" "> Лиги </router-link>
                        </span>
                        <span class="divider">{{ ' > ' }}</span>
                        <span class="openedElement">{{ leagueName }}</span>
                </nav>

                <LeagueCalendar />

        </div>

</template>


<script>

import LeagueCalendar from '@/components/LeagueCalendar.vue';

import {getLeagueName} from '../datasources/leaguecalendar.js';


export default {

        components: {
                LeagueCalendar, 
        },
        data() {
                return {
                        leagueName: '',   
                };
        },

        computed: {

        },

        methods: {
                async created() {

                        const id = this.$route.params.id;
                        this.leagueName = await getLeagueName(id);
                        console.log("leagueName = ", this.leagueName);
                
                },
        },


        created() {
                this.created();         // Вызов функции для получения матчей
        }

};


</script>





<style scoped>

</style>
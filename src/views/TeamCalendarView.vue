

<template>

        <div class="container"> 
                <nav class="breadCrumbs">

                        <span class="rootElement">
                        <router-link to="/teams" class=" "> Команды </router-link>
                        </span>
                        <span class="divider">{{ ' > ' }}</span>
                        <span class="openedElement">{{ teamName }}</span>
                        </nav>
                
                <TeamCalendar /> 

        </div>
</template>



<script>
// ввызов функции коттрая вернет список данных  о лиге название 



import TeamCalendar from '@/components/TeamCalendar.vue';
import getTeamName from '../datasources/teams.js';
// import fetchTeams from '../components/TeamsList.vue'

export default {
        components: {
        TeamCalendar,
        },

        data() {
                return {
                        // teams:[],
                        teamName: '',   
                };
        },


        methods: {
        async fetchTeamName() {
            const id = Number(this.$route.params.id); // Убедитесь, что id - это число
            this.teamName = await getTeamName(id);
            console.log("teamName = ", this.teamName);
        },
    },

    created() {
        this.fetchTeamName(); // Вызов функции для получения имени команды
    }
};

        // computed: {

        // },

//         methods: {
//                 async created() {

//                         const id = this.$route.params.id;
//                         // const teamName = teams.name;
//                         this.teamName = await getTeamName(id);

//                         console.log("teamName = ", this.teamName);
                
//                 },
//         },


//         created() {
//                 this.created();         // Вызов функции для получения матчей
//         }



// };

</script>
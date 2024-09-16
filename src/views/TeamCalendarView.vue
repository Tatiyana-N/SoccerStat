

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




import TeamCalendar from '@/components/TeamCalendar.vue';
import getTeamName from '../datasources/teams.js';


export default {
        components: {
        TeamCalendar,
        },

        data() {
                return {
                        
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



</script>
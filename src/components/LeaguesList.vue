<template>
    <SearchBar @search="onSearch" />

    <div class="leagues" id="rests-container">
        <template v-for="league in paginatedLeagues" :key="league.id">
        <div class="card" @click="openLeagueCalendar(league.id)">
            
            <div class="innerCard">
                <!-- <template v-for="group in paginatedGroups" :key="group.id"> -->
                    <router-link :to="{ name: 'LeagueCalendar', params: { id: league.id }}" class="cardLink">
                        
                            
                                <!-- <div class="container"> -->
                                    <div class="league">
                                        <img :src="league.emblem" alt="image" class="leagueImage">
                                        <h4 @click="goToCalendar(league.id)" class="leagues-title">{{league.name}}</h4>
                                        <h4 class="leagues-title">{{league.country}}</h4>
                                        
                                    </div>
                                <!-- </div> -->
                        
                    </router-link>
                <!-- </template> -->
            </div >

            

        </div>
        </template>
    </div>

            <Pagination
            :active-page="activePage"
            :total-items="filteredLeagues.length"
            :items-per-page="itemsPerPage"
            @page-changed="onPageChange"
            />


</template>

<script>
    import axios from 'axios';
    // import getLeagueList from '@/league.js';
    import SearchBar from './SearchBar.vue'; // Импортируйте компонент SearchBar
    import Pagination from './Pagination.vue'; // Импортируйте компонент Pagination

    // const leaguelist = getLeagueList();
    // console.log(leaguelist);
    // const leagues = leaguelist.leagues;

    export default {
            components: {
        SearchBar,
        Pagination
    },
            data() {
                
                return {
                    leagues:[],
                    searchInput: '',
                    activePage: 1,
                    itemsPerPage: 10
                };
            },
            // created() {
            // this.fetchLeagues();
            // },
                computed: {
        filteredLeagues() {
        
            return this.leagues.filter(league =>
            league.name.toLowerCase().includes(this.searchInput.toLowerCase())
            );
        },
    
        paginatedLeagues() {
        const start = (this.activePage - 1) * this.itemsPerPage;
        return this.filteredLeagues.slice(start, start + this.itemsPerPage);
        }
    },
    methods: {

            openLeagueCalendar(leagueId) {
            this.$router.push({ name: 'LeagueCalendar', params: { id: leagueId } });
        },


        async fetchLeagues() {
        try {
            const response = await axios.get('https://api.football-data.org/v4/competitions/', {
                headers: {
                    'X-Auth-Token':  import.meta.env.VITE_API_KEY //'759ad70c2c5d43839b5ec4849e9f9251'  // Ваш API ключ '01e4e5bec2a841fba91a0574fad1bf1b'
                }
            });
            
            this.leagues = response.data.competitions.map(league => ({
            id: league.id,
            name: league.name,
            emblem: league.emblem,
            country: league.area.name // Получаем название страны из объекта area
        })) || [];
        } catch (error) {
            console.error('Ошибка при получении лиг:', error);
            this.error = error.message; // Обработка ошибок
            }
        },
        onSearch(search) {
        this.searchInput = search;
        this.activePage = 1; // Сбрасываем активную страницу при новом поиске
        },
        onPageChange(newpage) {
        this.activePage = newpage;
        },
    },
        
    created() {
    this.fetchLeagues(); // Загружаем команды при создании компонента
},    
            onPageChange(page) {
            console.log("Changing to page:", page);
            this.activePage = page;
            console.log("Current active page:", this.activePage);
            },
};



</script>

<style scoped>

.leagues {
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
max-width: 1500px;
margin-left: auto;
margin-right: auto;

}

.card {
width: 250px;
height: 300px;
background: rgb(235, 235, 235);
margin: 20px;
border: #000000 3px solid;
border-radius: 5px;
}

.league > h1 {
font-size: 25px;
}

.league {
text-align: center;
width: 244px;
height: 300px;

}


.cardLink {
color: inherit;
text-decoration: inherit;
}

.leagueImage {
width: 200px;
height: auto;
margin: auto;
}

.innerCard {
width: 244px;
}

</style>



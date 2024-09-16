<template>
  <SearchBar @search="onSearch" />

  <div class="leagues" id="rests-container">
      <template v-for="team in paginatedTeams" :key="team.id">
          <div class="card" @click="openTeamCalendar(team.id)">
              <div class="innerCard">
                  <!-- <template v-for="team in teams" :key="team.id"> -->
                      <router-link :to="{ name: 'TeamCalendar', params: { id: team.id }}" class="cardLink">
                          <!-- <div class="container"> -->

                          <!-- <div class="leagues-list"> -->
                                  <div class="league">
                                      <h2 @click="goToCalendar(team.id)" class="leagues-title-name">{{team.name}}</h2>
                                      <img :src="team.emblem" alt="image" class="leagueImage">
                                      
                                  </div>
                          <!-- </div> -->

                          <!-- </div> -->
                      </router-link>
                  <!-- </template> -->

              </div>
          </div>
      </template>
  </div>
      
      <Pagination
          :active-page="activePage"
          :total-items="filteredTeams.length"
          :items-per-page="itemsPerPage"
          @page-changed="onPageChange"
          />

</template>

<script>
import axios from 'axios';

// import getTeamList from '../team.js';
import SearchBar from './SearchBar.vue'; // Импортируйте компонент SearchBar
import Pagination from './Pagination.vue'; // Импортируйте компонент Pagination

  // const teamlist = getTeamList();
  // console.log(teamlist);
  // const teams = teamlist.teams;

  export default {
      components: {
      SearchBar,
      Pagination,
  },
      data() {
          return {
              teams:[],
              searchInput: '',
              activePage: 1,
              itemsPerPage: 10
              
          };
      },
      computed: {
      filteredTeams() {
          return this.teams.filter(team => 
              team.name.toLowerCase().includes(this.searchInput.toLowerCase())
          );
      },
      paginatedTeams() {
          const start = (this.activePage - 1) * this.itemsPerPage;
          return this.filteredTeams.slice(start, start + this.itemsPerPage);
      }
  },
      methods: {
          openTeamCalendar(teamId) {
          this.$router.push({ name: 'TeamCalendar', params: { id: teamId } });
      },
          
        
    
      

      async fetchTeams() {
    try {
      const response = await axios.get('https://api.football-data.org/v4/teams', {
        headers: {
          'X-Auth-Token':  import.meta.env.VITE_API_KEY //'759ad70c2c5d43839b5ec4849e9f9251'  // Ваш API ключ
        }
      });
      this.teams = response.data.teams.map(team => ({
        id: team.id,
        name: team.name,
        emblem: team.crest
      })) || [];
    } catch (error) {
      console.error('Ошибка при загрузке команд:', error.message);
      this.error = error.message; // Обработка ошибок
    }
  },
  onSearch(search) {
    this.searchInput = search;
    this.activePage = 1; // Сбрасываем активную страницу при новом поиске
  },
  onPageChange(newPage) {
          this.activePage = newPage;
      },

},
created() {
  this.fetchTeams(); // Загружаем команды при создании компонента
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
background: white;
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
width: 150px; 
max-width: 100%;
height: auto;
margin: auto;
}

.innerCard {
width: 244px;
}

</style>

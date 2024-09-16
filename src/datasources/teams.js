import axios from 'axios';

async function fetchTeams() {
    try {
        const response = await axios.get('https://api.football-data.org/v4/teams', {
            headers: {
                'X-Auth-Token':  import.meta.env.VITE_API_KEY //'759ad70c2c5d43839b5ec4849e9f9251'  // Ваш API ключ
            }
        });

        const data = response.data;

        // Возвращаем массив команд
        return data.teams || [];

    } catch (error) {
        console.error('Ошибка при загрузке команд:', error.message);
        throw error; // Пробрасываем ошибку дальше
    }
}

export default async function getTeamName(teamId) {
    const teams = await fetchTeams();
    const team = teams.find(t => t.id === teamId); // Ищем команду по id
    
    return team ? team.name : null; // Возвращаем имя команды или null, если не найдено
}






// async function fetchTeams() {
//     try {
//         const response = await axios.get('https://api.football-data.org/v4/teams', {
//         headers: {
//           'X-Auth-Token': '759ad70c2c5d43839b5ec4849e9f9251'  // Ваш API ключ
//         }
//         });

//         const data = response.data;
       
//         const teams = data.teams.map(team => ({
//         id: team.id,
//         name: team.name,
//         emblem: team.crest
//         })) || [];

//         // return data.teams;

//     const teamName = data.team.name;
//     return {
//         teams,
//         teamName,
//     };

//     } catch (error) {
//         console.error('Ошибка при загрузке команд:', error.message);
//       this.error = error.message; // Обработка ошибок
//     }
// }




// export default async function getTeammatchescard() {
//     const teammatchcard = await fetchTeams();
//     return teammatchcard;
// }

// export default  function getTeamName(teamId) {
//     const teammatchcard =  fetchTeams(teamId);
//     const teamName = teammatchcard.teamName;
    
//     return teamName;
// }








// const fetchTeamName = async () => {
//     if (teamId.value) {
//       try {
//         const response = await axios.get(`https://api.football-data.org/v4/teams/${teamId.value}`);
//         teamName.value = response.data.team.name; // Предполагается, что имя команды находится здесь
//       } catch (error) {
//         console.error("Failed to fetch team name:", error);
//       }
//     }
//   };


//  async function fetchTeamData(teamId) {
//      try {
//          const response = await axios.get(`https://api.football-data.org/v4/teams/${teamId}/matches/`, {
//             headers: {
//                 'X-Auth-Token': '759ad70c2c5d43839b5ec4849e9f9251'  //'759ad70c2c5d43839b5ec4849e9f9251'  // Ваш API ключ
//             }
//         });

//         const matches = response.data.matches.map(match => ({
//             ...match,
//             status: statusTranslation[match.status] || match.status // Заменяем статус, если он есть в объекте, иначе оставляем оригинальный
//         }));


//         return matches;
//     } catch (error) {
//         console.error('Ошибка при загрузке данных команды:', error.message);
//         return {

//             // вставить 
            
//         };
//     }
// }

// export default async function getTeammatchList(teamId) {

    
//     const teammatchlist = await fetchTeamData(teamId);
//     return teammatchlist;

// }






    
    // return {
        
    //     teammatchs: [
    //         {
    //             id: 0,
    //             data: '16.08.2024',
    //             time: '20:00',
    //             status: 'Завершен1',
    //             homeTeam: 'Manchester United FC1',
    //             awayTeam: 'Fulham FC1',
    //             score: '1:0'
    //         },
    //         {
    //             id: 1,
    //             data: '17.08.2024',
    //             time: '21:00',
    //             status: 'Завершен2',
    //             homeTeam: 'Manchester United FC2',
    //             awayTeam: 'Fulham FC2',
    //             score: '1:1'
    //         },
    //         {
    //             id: 2,
    //             data: '18.08.2024',
    //             time: '22:00',
    //             status: 'Завершен3',
    //             homeTeam: 'Manchester United FC3',
    //             awayTeam: 'Fulham FC3',
    //             score: '0:0'
    //         }
    //     ]
    // }
// }


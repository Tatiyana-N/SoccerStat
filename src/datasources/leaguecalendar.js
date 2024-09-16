import axios from 'axios';

const statusTranslation = {
    LOADING: "Загрузка",
    TIMED: "Объявлен",
    SCHEDULED: "Запланирован",
    LIVE: "В прямом эфире",
    IN_PLAY: "В игре",
    PAUSED: "Пауза",
    FINISHED: "Завершен",
    POSTPONED: "Отложен",
    SUSPENDED: "Приостановлен",
    CANCELED: "Отменен",
};

async function fetchLeagueData(leagueId) {
    try {
        const response = await axios.get(`https://api.football-data.org/v4/competitions/${leagueId}/matches/`, {
            headers: {
                'X-Auth-Token':  import.meta.env.VITE_API_KEY //'759ad70c2c5d43839b5ec4849e9f9251'  //'759ad70c2c5d43839b5ec4849e9f9251'  // Ваш API ключ
            }
        });

        const data = response.data;

        const matches = data.matches.map(match => ({
            ...match,
            status: statusTranslation[match.status] || match.status // Заменяем статус, если он есть в объекте, иначе оставляем оригинальный
        }));

        const leagueName = data.competition.name;
        
        // return matches; 
        return {
            matches,
            leagueName,
        } ; 

    } catch (error) {
        console.error('Ошибка при загрузке данных команды:', error.message);
        return {

            // вставить 
            
        };
    }
}

export async function getLeaguematchList(leagueId) {

    const leaguedetails = await fetchLeagueData(leagueId);
    const leaguematchlist = leaguedetails.matches;
    return leaguematchlist;

}

export async function getLeagueName(leagueId) {

    const leaguedetails = await fetchLeagueData(leagueId);
    const name = leaguedetails.leagueName;
    return name;

}

// export default { getLeaguematchList, getLeagueName }



// export function paginateMatches(leaguematchs, currentPage, itemsPerPage) {
//     const start = (currentPage - 1) * itemsPerPage;
//     return leaguematchs.slice(start, start + itemsPerPage);
// }


    // return {
    //     leaguematchs: [
    //         {
    //             id: 0,
    //             data:'16.08.2024',
    //             time:'20:00',
    //             status:'Завершен1',
    //             homeTeam:'Manchester United FC1',
    //             awayTeam:'Fulham FC1',
    //             score:'1:0'
    //         },
    //         {
    //             id: 1,
    //             data:'17.08.2024',
    //             time:'21:00',
    //             status:'Завершен2',
    //             homeTeam:'Manchester United FC2',
    //             awayTeam:'Fulham FC2',
    //             score:'1:1'
    //         },
    //         {
    //             id: 2,
    //             data:'18.08.2024',
    //             time:'22:00',
    //             status:'Завершен3',
    //             homeTeam:'Manchester United FC3',
    //             awayTeam:'Fulham FC3',
    //             score:'0:0'
    //         },
    //         {
    //             id: 3,
    //             data:'18.08.2024',
    //             time:'22:00',
    //             status:'Завершен3',
    //             homeTeam:'Manchester United FC3',
    //             awayTeam:'Fulham FC3',
    //             score:'0:0'
    //         },
    //         {
    //             id: 4,
    //             data:'18.08.2024',
    //             time:'22:00',
    //             status:'Завершен3',
    //             homeTeam:'Manchester United FC3',
    //             awayTeam:'Fulham FC3',
    //             score:'0:0'
    //         },
    //         {
    //             id: 5,
    //             data:'16.08.2024',
    //             time:'20:00',
    //             status:'Завершен1',
    //             homeTeam:'Manchester United FC1',
    //             awayTeam:'Fulham FC1',
    //             score:'1:0'
    //         },
    //         {
    //             id: 6,
    //             data:'16.08.2024',
    //             time:'20:00',
    //             status:'Завершен1',
    //             homeTeam:'Manchester United FC1',
    //             awayTeam:'Fulham FC1',
    //             score:'1:0'
    //         },
    //         {
    //             id: 7,
    //             data:'17.08.2024',
    //             time:'21:00',
    //             status:'Завершен2',
    //             homeTeam:'Manchester United FC2',
    //             awayTeam:'Fulham FC2',
    //             score:'1:1'
    //         },
    //         {
    //             id: 8,
    //             data:'18.08.2024',
    //             time:'22:00',
    //             status:'Завершен3',
    //             homeTeam:'Manchester United FC3',
    //             awayTeam:'Fulham FC3',
    //             score:'0:0'
    //         },
    //         {
    //             id: 9,
    //             data:'18.08.2024',
    //             time:'22:00',
    //             status:'Завершен3',
    //             homeTeam:'Manchester United FC3',
    //             awayTeam:'Fulham FC3',
    //             score:'0:0'
    //         },
    //         {
    //             id: 10,
    //             data:'18.08.2024',
    //             time:'22:00',
    //             status:'Завершен3',
    //             homeTeam:'Manchester United FC3',
    //             awayTeam:'Fulham FC3',
    //             score:'0:0'
    //         },
    //         {
    //             id: 11,
    //             data:'16.08.2024',
    //             time:'20:00',
    //             status:'Завершен1',
    //             homeTeam:'Manchester United FC1',
    //             awayTeam:'Fulham FC1',
    //             score:'1:0'
    //         },
    //         {
    //             id: 12,
    //             data:'16.08.2024',
    //             time:'20:00',
    //             status:'Завершен1',
    //             homeTeam:'Manchester United FC1',
    //             awayTeam:'Fulham FC1',
    //             score:'1:0'
    //         },
    //         {
    //             id: 13,
    //             data:'17.08.2024',
    //             time:'21:00',
    //             status:'Завершен2',
    //             homeTeam:'Manchester United FC2',
    //             awayTeam:'Fulham FC2',
    //             score:'1:1'
    //         },
    //         {
    //             id: 14,
    //             data:'18.08.2024',
    //             time:'22:00',
    //             status:'Завершен3',
    //             homeTeam:'Manchester United FC3',
    //             awayTeam:'Fulham FC3',
    //             score:'0:0'
    //         },
    //         {
    //             id: 15,
    //             data:'18.08.2024',
    //             time:'22:00',
    //             status:'Завершен3',
    //             homeTeam:'Manchester United FC3',
    //             awayTeam:'Fulham FC3',
    //             score:'0:0'
    //         },
    //         {
    //             id: 16,
    //             data:'18.08.2024',
    //             time:'22:00',
    //             status:'Завершен3',
    //             homeTeam:'Manchester United FC3',
    //             awayTeam:'Fulham FC3',
    //             score:'0:0'
    //         },
    //         {
    //             id: 17,
    //             data:'16.08.2024',
    //             time:'20:00',
    //             status:'Завершен1',
    //             homeTeam:'Manchester United FC1',
    //             awayTeam:'Fulham FC1',
    //             score:'1:0'
    //         },
    //         {
    //             id: 18,
    //             data:'16.08.2024',
    //             time:'20:00',
    //             status:'Завершен1',
    //             homeTeam:'Manchester United FC1',
    //             awayTeam:'Fulham FC1',
    //             score:'1:0'
    //         },
    //         {
    //             id: 19,
    //             data:'17.08.2024',
    //             time:'21:00',
    //             status:'Завершен2',
    //             homeTeam:'Manchester United FC2',
    //             awayTeam:'Fulham FC2',
    //             score:'1:1'
    //         },
    //         {
    //             id: 20,
    //             data:'18.08.2024',
    //             time:'22:00',
    //             status:'Завершен3',
    //             homeTeam:'Manchester United FC3',
    //             awayTeam:'Fulham FC3',
    //             score:'0:0'
    //         },
    //         {
    //             id: 21,
    //             data:'18.08.2024',
    //             time:'22:00',
    //             status:'Завершен3',
    //             homeTeam:'Manchester United FC3',
    //             awayTeam:'Fulham FC3',
    //             score:'0:0'
    //         },
    //         {
    //             id: 22,
    //             data:'18.08.2024',
    //             time:'22:00',
    //             status:'Завершен3',
    //             homeTeam:'Manchester United FC3',
    //             awayTeam:'Fulham FC3',
    //             score:'0:0'
    //         },
    //         {
    //             id: 23,
    //             data:'16.08.2024',
    //             time:'20:00',
    //             status:'Завершен1',
    //             homeTeam:'Manchester United FC1',
    //             awayTeam:'Fulham FC1',
    //             score:'1:0'
    //         },
    //     ]
    // }
// }

// export function paginateMatches(leaguematchs, currentPage, itemsPerPage) {
//     const start = (currentPage - 1) * itemsPerPage;
//     return leaguematchs.slice(start, start + itemsPerPage);
// }
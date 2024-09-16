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


async function fetchTeamData(teamId) {
    try {
        const response = await axios.get(`https://api.football-data.org/v4/teams/${teamId}/matches/`, {
            headers: {
                'X-Auth-Token':  import.meta.env.VITE_API_KEY //'759ad70c2c5d43839b5ec4849e9f9251'  //'759ad70c2c5d43839b5ec4849e9f9251'  // Ваш API ключ
            }
        });


        const data = response.data;

        const matches = data.matches.map(match => ({
            ...match,
            status: statusTranslation[match.status] || match.status // Заменяем статус, если он есть в объекте, иначе оставляем оригинальный
        }));

    // const teamName = data.competition.name;
       
     return matches;

    } catch (error) {
        console.error('Ошибка при загрузке данных команды:', error.message);
        return {

            // вставить 
            
        };
    }
}

export default async function getTeammatchList(teamId) {

    
    const teammatchlist = await fetchTeamData(teamId);
    return teammatchlist;

}
    
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


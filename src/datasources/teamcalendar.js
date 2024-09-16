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
                'X-Auth-Token':  import.meta.env.VITE_API_KEY 
            }
        });


        const data = response.data;

        const matches = data.matches.map(match => ({
            ...match,
            status: statusTranslation[match.status] || match.status // Заменяем статус, если он есть в объекте, иначе оставляем оригинальный
        }));


    
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
    

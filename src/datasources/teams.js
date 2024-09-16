import axios from 'axios';

async function fetchTeams() {
    try {
        const response = await axios.get('https://api.football-data.org/v4/teams', {
            headers: {
                'X-Auth-Token':  import.meta.env.VITE_API_KEY 
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






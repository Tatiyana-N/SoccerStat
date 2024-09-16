<template>

    <div class="leagues-wrapper" id="rests-container">
        <div class="flex-center">
            <template v-for="group in groups" :key="group.id">
                <router-link to="/leaguecalendar" class="products-card">
                    <div class="container">
                        
                            <div class="leagues-list">
                                <div class="leagues-item">
                                    <img :src="group.emblem" alt="image" class="leagues-image">
                                    <h3 class="leagues-title">{{group.name}}</h3>
                                    <h4 class="leagues-title">{{group.country}}</h4>
                                    
                                </div>
                        

                            </div>
                    </div>
                </router-link>
            </template>
        </div>
    </div>




</template>

<script>
    import getGroupList from '@/league.js';

    const grouplist = getGroupList();
    console.log(grouplist);
    const groups = grouplist.groups;

    export default {
            data() {
                
                return {
                    groups
                };
            },
        }

</script>

<style scoped>

.leagues-list {
    display: flex; /* Используем flexbox для расположения карточек */
    flex-wrap: wrap; /* Позволяем карточкам переноситься на новую строку */
    gap: 10px; /* Задаем промежуток между карточками */
}

.leagues-item {
    border: 1px solid lightgray; /* Светло-серая обводка */
    border-radius: 8px; /* Слегка закругленные углы */
    padding: 10px; /* Внутренние отступы для содержимого */
    text-align: center; /* Центрируем текст в карточке */
    width: 200px; /* Ширина карточки, можете настроить под себя */
    transition: box-shadow 0.3s; /* Плавный переход для эффекта наведения */
}

.leagues-item:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Эффект тени при наведении */
}

.leagues-image {
    max-width: 100%; /* Ограничение ширины изображения, чтобы оно не выходило за пределы карточки */
    height: auto; /* Автоматическая настройка высоты изображения */
    border-radius: 8px; /* Закругление углов изображения */
}

.flex-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
}



</style>



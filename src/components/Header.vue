<template>

    <header class="header">
    <div class="container">
    <div class="header-box">
        <router-link to="/" class="header-logo logo">
        <img src="../assets/images/image logo.png" alt="logo">

        </router-link>
        
        <div class="header-controls">
            <router-link to="/" class="header-logo logo">
                <button class="btn btn-outline" id="cart-button">
                    
                    Лиги
                </button>
            </router-link>
            <router-link to="/teams" class="header-logo logo">
                <button class="btn btn-outline" id="cart-button">
                    
                    Команды
                </button>
            </router-link>

        </div>
    </div>
    </div>
    </header>

</template>

<script setup>
   

</script>

<style scoped>

.header {
display: flex;
align-items: center;
min-height: 124px;

}

.header-box {
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
}

.header-controls {
display: flex;
align-items: center;
justify-content: flex-end;
gap: 10px;
}

.btn {
    display: flex;
    padding-left: 20px; /* Увеличиваем отступы */
    padding-right: 20px; /* Увеличиваем отступы */
    padding-top: 10px; /* Увеличиваем отступы */
    padding-bottom: 10px; /* Увеличиваем отступы */
    align-items: center;
    gap: 4px;
    outline: none;
    cursor: pointer;
    font-size: 16px; /* Увеличиваем размер шрифта */
}

.btn-outline {
    border-radius: 2px;
    border: 1px solid #D9D9D9;
    background: #FFF;
    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.00);
    color: #595959;
}

</style>
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

</style>
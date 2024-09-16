<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <div class="page-wrapper">
    <Header />

    <main class="main">
      <router-view></router-view>
    </main>

    <Footer />
  </div>
</template>

<style scoped>

</style>

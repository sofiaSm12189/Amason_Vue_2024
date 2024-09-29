<template>
  <div>
    <NavBar />
    <main>
      <router-view />
    </main>
    <footer>
      <FooterLayout />
    </footer>
  </div>
</template>

<script setup>

import NavBar from '@/components/LayoutComponents/NavBar.vue';
import FooterLayout from '@/components/LayoutComponents/FooterLayout.vue';

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

</style>
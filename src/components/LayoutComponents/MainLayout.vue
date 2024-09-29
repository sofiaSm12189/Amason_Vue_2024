<template>
    <div>
      <NavBar/>

      <main>
        <router-view /> 
      </main>
  

      <footer>

        <p>&copy; 2024 Mi Aplicación</p>
      </footer>
    </div>
  </template>
  
  <script setup>

  import NavBar from '@/components/LayoutComponents/NavBar.vue';
  

  </script>
  
  <style scoped>
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
  
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #53b2de;
    margin-bottom: 2rem;
  }
  
  footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 1rem;
    position: fixed;
    width: 100%;
    bottom: 0;
  }
  
  .no-scroll {
    overflow: hidden;
    height: 100vh;
    position: fixed;
    width: 100%;
  }
  </style>
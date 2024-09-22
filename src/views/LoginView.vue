<template>

    <SignUpCard/>

</template>


<script setup>

import SignUpCard from '../components/SignUpCard.vue'

</script>


<style scoped>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

body{
    background-color: #000000;
    background: linear-gradient(to right, #972e2e, #092fad);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
}

</style>
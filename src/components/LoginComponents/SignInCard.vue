<template>
  <div class="container" id="container">
    <slot></slot>
    <div class="form-container sign">
      <form>
        <h1>Iniciar Sesión</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button class="Enviar" type="button" @click="handleLogin">Ingresar</button>

        <button class="Enviar" type="button">Ingresar</button>

        <p></p>
        <p>¿No tienes una cuenta?</p>
        <button type="button" @click="$emit('toggle')">Registrarse</button>
      </form>
    </div>
  </div>
</template>

<script setup>

import { useRouter } from 'vue-router';

const router = useRouter();

const handleLogin = () => {
  router.push('/prueba'); 
};
</script>

<style scoped>

</style>


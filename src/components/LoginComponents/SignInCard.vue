<template>
  <div class="container" id="container">
    <slot></slot>
    <div class="form-container sign">
      <form>
        <h1>Iniciar Sesión</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button class="Enviar" type="button" @click="handleLogin">Ingresar</button>
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

// Función para manejar el inicio de sesión
const handleLogin = () => {
  // Aquí puedes agregar lógica para verificar las credenciales o realizar otras acciones
  // Luego redirigir a otra ruta
  router.push('/prueba');  // Reemplaza '/nueva-ruta' con la ruta a la que deseas redirigir
};
</script>

<style scoped>

</style>


<template>
  <div class="container" id="container">
    <slot></slot>
    <div class="form-container sign">
      <form @submit.prevent="login">
        <h1>Iniciar Sesión</h1>
        <label for="email">Email</label>
      <input type="email" v-model="email" required />
      
      <label for="password">Password</label>
      <input type="password" v-model="password" required />

      <button type="submit">Login</button>
        <p>¿No tienes una cuenta?</p>
        <button type="button" @click="$emit('toggle')">Registrarse</button>
      </form>
    </div>
  </div>
</template>

<!-- <script setup>
import { useRouter } from 'vue-router';


const router = useRouter();

const handleLogin = () => {
  router.push('/Menu'); 
};

</script> -->

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:8000/api/login', {
          email: this.email,
          password: this.password
        });
        
        // Guarda el token en el localStorage para utilizarlo en futuras peticiones
        const token = response.data.token;
        const roles = response.data.roles; // Recibe los roles desde la API
        localStorage.setItem('token', token);

        // Configura Axios para incluir el token en los headers de las siguientes peticiones
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
       
        const roleNames = roles.map(role => role.name);//se captura el nombre del roll del user

         // Verifica si el usuario es "seller"
          if (roleNames.includes('seller')) {
          this.$router.push('/controlPanel'); // Redirige al panel de control si es "seller"
        } else {
          this.$router.push('/Menu'); // Si no es "seller", redirige al menú u otra página
        }
      } catch (error) {
        console.error('Login failed:', error);
      }
    }
  }
};

</script>

<style scoped>

</style>

<template>
  <div class="container" id="container">
    <slot></slot>
    <div class="form-container sign">
      <form @submit.prevent="submitForm">
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

<script>
import { loginUser } from '../../../api/auth';
import axios from 'axios';

export default {
  data() {
    return {
      
        email: '',
        password: '',
      
      error: null
    };
  },
  methods: {
    async submitForm() {
      try {
        this.error = null;
        const response = await loginUser({email: this.email, password: this.password});
        const token = response.data.token;
        localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        this.$router.push('/Menu');
      } catch (error) {
        this.error = 'Login failed. Please check your credentials and try again.';
        console.error('Login failed:', error);
      }
    }
  }
};

</script>

<style scoped>

</style>

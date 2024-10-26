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
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        <p>¿No tienes una cuenta?</p>
        <button type="button" @click="$emit('toggle')">Registrarse</button>
      </form>
    </div>
  </div>
</template>

<script>
import { loginUser } from '../../../api/auth';

export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: null,
      error: null
    };
  },
  methods: {
    async submitForm() {
      this.errorMessage = null;
      
      try {

//CART
        await loginUser({ email: this.email, password: this.password });
        this.$router.push('/Menu');
//VENDEDORES
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
        this.errorMessage = error.message;
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
  font-size: 17px;
  font-weight: 400;
  text-align: center;
}
</style>

<template>
  <div class="container" id="container">
    <slot></slot>
    <div class="form-container sign">
      <form @submit.prevent="register">
        <h1>Registrarse</h1>
        <label for="name">Nombre</label>
        <input type="text" v-model="name" placeholder="Nombre" required />

        <label for="email">Email</label>
        <input type="email" v-model="email" placeholder="Email" required />

        <label for="password">Contraseña</label>
        <input type="password" v-model="password" placeholder="Contraseña" required />

        <label for="confirmPassword">Confirmar Contraseña</label>
        <input
          type="password"
          v-model="confirmPassword"
          placeholder="Confirmar contraseña"
          required
        />

        <label for="role">Tipo de Usuario</label>
        <select v-model="role" required>
          <option disabled value="">Seleccione el tipo de usuario</option>
          <option value="admin">Admin</option>
          <option value="vendedor">Vendedor</option>
        </select>

        <button class="Enviar">Confirmar</button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        <button type="button" @click="$emit('toggle')">¿Ya tienes una cuenta?</button>
      </form>
    </div>
  </div>
</template>

<script>
import { registerUser } from '../../../api/auth';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: '',
      errorMessage: '',
      error: null
    };
  },
  methods: {
    async register() {
      // Validación de contraseñas coincidentes y tipo de usuario
      if (this.password !== this.confirmPassword) {
        this.errorMessage = 'Las contraseñas no coinciden';
        return;
      }

      if (!this.role) {
        this.errorMessage = 'Por favor, seleccione un tipo de usuario.';
        return;
      }

      try {
        await registerUser({
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.confirmPassword,
          role: this.role
        });
        
        // Cambio a pantalla de inicio de sesión
        this.$emit('toggle');
      } catch (error) {
        // Mostrar mensaje de error específico
        this.errorMessage = error.message;
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
  font-weight: 400;
  text-align: center;
}
</style>

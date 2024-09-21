<template>
    <div class="container" id="container">
      <div class="form-container sign-in">
        <form>
          <h1>Sign In</h1>
          <div class="social-icons"></div>
          <span>or use your email password</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forget Your Password?</a>
          <button>Sign In</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    // Script para la lógica del componente, si es necesario
  };
  </script>
  
  <style scoped>
  /* Estilo base para el contenedor */
  .container {
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
    position: relative;
    overflow: hidden;
    width: 80vw; /* Ancho flexible basado en el viewport */
    max-width: 768px; /* Limita el ancho máximo */
    min-height: 50vh; /* Altura mínima flexible */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    transition: width 0.3s, height 0.3s; /* Transición suave en cambios de tamaño */
  }
  
  .container p {
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: 0.3px;
    margin: 20px 0;
  }
  
  .container span {
    font-size: 0.875rem;
  }
  
  .container a {
    color: #333;
    font-size: 0.875rem;
    text-decoration: none;
    margin: 15px 0 10px;
  }
  
  .container button {
    background-color: #512da8;
    color: #fff;
    font-size: 0.875rem;
    padding: 10px 2.5rem;
    border: 1px solid transparent;
    border-radius: 8px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-top: 10px;
    cursor: pointer;
  }
  
  .container button.hidden {
    background-color: transparent;
    border-color: #fff;
  }
  
  .container form {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 2.5rem;
    height: 100%;
  }
  
  .container input {
    background-color: #eee;
    border: none;
    margin: 8px 0;
    padding: 10px 15px;
    font-size: 1rem;
    border-radius: 8px;
    width: 100%;
    outline: none;
  }
  
  .form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
    display: flex;
    justify-content: center;
  }
  
  .sign-in {
    width: 100%;
    z-index: 2;
  }
  
  /* Media Queries para transiciones suaves */
  @media (max-width: 1024px) {
    .container {
      width: 90vw; /* Cambia el ancho de forma progresiva */
    }
  }
  
  @media (max-width: 768px) {
    .container {
      width: 95vw;
      min-height: 60vh; /* Ajuste gradual de la altura mínima */
      padding: 15px;
    }
  
    .container form {
      padding: 0 20px;
    }
  
    .container button {
      padding: 10px 30px;
      font-size: 0.85rem;
    }
  
    .container input {
      font-size: 0.95rem;
      padding: 8px 12px;
    }
  }
  
  @media (max-width: 480px) {
    .container {
      width: 100vw;
      border-radius: 20px;
      min-height: 70vh;
      padding: 10px;
    }
  
    .container h1 {
      font-size: 1.25rem;
    }
  
    .container button {
      padding: 8px 25px;
      font-size: 0.8rem;
    }
  
    .container input {
      padding: 8px 10px;
    }
  
    .container a {
      font-size: 0.75rem;
    }
  }
  </style>
  
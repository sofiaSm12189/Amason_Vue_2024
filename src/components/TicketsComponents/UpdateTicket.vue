<template>
    <div class="chat-container">
      <div class="chat-header">
        <h2>Asistente de Soporte</h2>
      </div>
      <div class="chat-messages">
        <div class="message bot-message">
          <p>Hola, soy el asistente de soporte. ¿En qué puedo ayudarte?</p>
        </div>
  
        <div class="message bot-message">
          <p>¿Cuál es el motivo de tu reclamo?</p>
          <select v-model="ticket.category" class="form-input" required>
            <option value="" disabled selected>Selecciona un reclamo</option>
            <option value="No se encuentra el paquete">No se encuentra el paquete</option>
            <option value="Producto dañado">Producto dañado</option>
            <option value="Error en la factura">Error en la factura</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
  
        <div class="message bot-message">
          <p>¿Cuál es el asunto del ticket?</p>
          <input type="text" v-model="ticket.subject" class="form-input" required placeholder="Escribe el asunto" />
        </div>
  
        <div class="message bot-message">
          <p>Describe el problema:</p>
          <textarea v-model="ticket.description" class="form-input" required placeholder="Describe el problema..."></textarea>
        </div>
  
        <div class="message bot-message">
          <p>¿Deseas recibir notificaciones?</p>
          <label>
            <input type="checkbox" v-model="ticket.notifyEmail" /> Email
          </label>
          <label>
            <input type="checkbox" v-model="ticket.notifySMS" /> Mensaje de texto
          </label>
          <input v-if="ticket.notifySMS" type="text" v-model="ticket.phoneNumber" class="form-input" placeholder="Número de teléfono (ej. 6098 8877)" />
        </div>
      </div>
      <div class="footer">
        <button @click="submitTicket" class="btn-update">Actualizar</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        ticket: {
          category: '',
          subject: '',
          description: '',
          notifyEmail: false,
          notifySMS: false,
          phoneNumber: '',
        }
      };
    },
    methods: {
      submitTicket() {
        console.log("Ticket actualizado:", this.ticket);
      }
    }
  };
  </script>
  
  <style scoped>
  .chat-container {
    max-width: 650px;
    width: 100%;
    height: 700px;
    margin: 20px auto;
    background-color: #f4f6f9;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    font-family: 'Arial', sans-serif;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  
  .chat-header {
    background-color: #0073e6;
    color: white;
    text-align: center;
    padding: 15px;
    font-size: 1.2rem;
  }
  
  .chat-messages {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-y: auto;
    flex-grow: 1;
  }
  
  .message {
    padding: 10px 15px;
    border-radius: 10px;
    max-width: 80%;
  }
  
  .bot-message {
    background-color: #e9eff6;
    color: #333;
    align-self: flex-start;
  }
  
  .form-input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 0.9rem;
    margin-top: 8px;
  }
  
  .footer {
    padding: 15px;
    background-color: #f4f6f9;
    text-align: center;
    border-top: 1px solid #ddd;
  }
  
  .btn-update {
    padding: 10px 20px;
    background-color: #0073e6;
    color: white;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .btn-update:hover {
    background-color: #005bb5;
  }
  
  @media (max-width: 480px) {
    .chat-container {
      max-width: 100%;
      height: auto;
    }
  
    .chat-header {
      font-size: 1rem;
      padding: 10px;
    }
  
    .btn-update {
      width: 100%;
      font-size: 0.9rem;
    }
  }
  
  @media (max-width: 768px) {
    .chat-container {
      max-width: 90%;
      height: auto;
    }
  
    .chat-header {
      font-size: 1.1rem;
    }
  
    .btn-update {
      font-size: 0.95rem;
    }
  }
  </style>
  
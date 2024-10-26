<template>
    <div class="chat">
      <h2>Chat en Vivo</h2>
      <div class="messages">
        <div v-for="(msg, index) in messages" :key="index" class="message">
          <p><strong>{{ msg.user }}:</strong> {{ msg.text }}</p>
        </div>
      </div>
      <input v-model="newMessage" placeholder="Escribe tu mensaje..." @keyup.enter="sendMessage"/>
      <button @click="sendMessage">Enviar</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ChatView',
    data() {
      return {
        messages: [
          { user: 'Soporte', text: '¡Hola! ¿En qué puedo ayudarte?' },
        ],
        newMessage: ''
      };
    },
    methods: {
      sendMessage() {
        if (this.newMessage.trim() !== '') {
          this.messages.push({ user: 'Tú', text: this.newMessage });
          this.newMessage = '';
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .chat {
    padding: 20px;
  }
  .messages {
    border: 1px solid #ccc;
    padding: 10px;
    height: 200px;
    overflow-y: auto;
  }
  .message {
    margin-bottom: 10px;
  }
  </style>
  
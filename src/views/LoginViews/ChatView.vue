<template>
    <div class="chat-container">
      <div class="chat-box">
        <div class="messages">
          <div v-for="message in messages" :key="message.id" class="message">
            <p><strong>{{ message.sender }}:</strong> {{ message.text }}</p>
          </div>
        </div>
        <form @submit.prevent="sendMessage">
          <input type="text" v-model="newMessage" placeholder="Escribe tu mensaje..." class="chat-input"/>
          <button type="submit" class="btn-send">Enviar</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        messages: [
          { id: 1, sender: 'Soporte', text: 'Hola, ¿en qué puedo ayudarte?' },
          { id: 2, sender: 'Cliente', text: 'Tengo un problema con mi pedido.' }
        ],
        newMessage: ''
      };
    },
    methods: {
      sendMessage() {
        if (this.newMessage !== '') {
          this.messages.push({ id: this.messages.length + 1, sender: 'Cliente', text: this.newMessage });
          this.newMessage = '';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .chat-container {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .chat-box {
    display: flex;
    flex-direction: column;
  }
  .messages {
    flex-grow: 1;
    margin-bottom: 20px;
    max-height: 300px;
    overflow-y: auto;
  }
  .message {
    padding: 10px;
    background-color: #f1f1f1;
    margin-bottom: 10px;
    border-radius: 5px;
  }
  .chat-input {
    padding: 10px;
    width: 100%;
    margin-right: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  .btn-send {
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  
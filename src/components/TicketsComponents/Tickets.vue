<template>
    <div class="tickets">
      <h2>Lista de Tickets</h2>
      <ul>
        <li v-for="ticket in tickets" :key="ticket.id">
          <strong>{{ ticket.title }}</strong> - {{ ticket.status }}
          <p>{{ ticket.description }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TicketsView',
    props: ['tickets'] 
  }
  </script>
  
  <style scoped>
  .tickets {
    padding: 20px;
  }
  </style>
  
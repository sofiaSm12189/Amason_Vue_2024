<template>
  <div class="page-wrapper">
      <div class="background"></div> 
      <div class="main-container"> 
        <div class="header">
          <h2>Sistema de Tickets</h2>
        </div>
  
        <table class="ticket-table">
          <thead>
            <tr>
              <th>Orden o Paquete</th>
              <th>Tipo de Reclamo</th>
              <th>Asunto</th>
              <th>Descripción</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="ticket in tickets" :key="ticket.id">
              <td>{{ ticket.order }}</td>
              <td>{{ ticket.claimType }}</td>
              <td>{{ ticket.subject }}</td>
              <td>{{ ticket.description }}</td>
              <td>{{ ticket.status }}</td>
              <td>
                <button @click="viewTicket(ticket.id)" class="btn btn-details">Ver Detalles</button>
              </td>
            </tr>
          </tbody>
        </table>
  
        <router-link to="/create-ticket">
          <button class="btn btn-create">Crear Nuevo Ticket</button>
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tickets: [
          {
            id: 1,
            order: 'Paquete 123',
            claimType: 'Producto defectuoso',
            subject: 'Problema con el producto',
            description: 'El producto llegó dañado.',
            status: 'Abierto'
          },
          {
            id: 2,
            order: 'Paquete 456',
            claimType: 'Entrega tardía',
            subject: 'El paquete no ha llegado',
            description: 'Han pasado 10 días y no recibí el paquete.',
            status: 'Abierto'
          },
          {
            id: 3,
            order: 'Paquete 789',
            claimType: 'Otro',
            subject: 'Consulta sobre el envío',
            description: 'Quiero saber el estado del envío.',
            status: 'Cerrado'
          }
        ]
      };
    },
    methods: {
      viewTicket(ticketId) {
        console.log("Ver detalles del ticket:", ticketId);
      },
      createTicket() {
        console.log("Crear un nuevo ticket");
      }
    }
  };
  </script>
  
  <style scoped>
  
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
  
  .background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1; 
    background-color: #91ebff;
    background: linear-gradient(to top, #e2e2e2, #e8faff);
  }
  
  :deep(.container) {
      background-color: #fff;
      border-radius: 30px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
      position:relative;
      overflow: hidden;
      width: 45vw;
      height: 35vw;
      max-width: 768px;
      min-height: 80vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      transition: width 0.3s, height 0.3s;
  }
  
  
  .main-container {
    max-width: 1000px;
    margin: 40px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  }
  
  .header {
    text-align: center;
    margin-bottom: 30px;
  }
  .header h2 {
    font-size: 2rem;
    color: #34495e;
    margin-bottom: 0;
  }
  
  .ticket-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  }
  
  .ticket-table th,
  .ticket-table td {
    padding: 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  .ticket-table th {
    background-color:  #00aed5;
    color: white;
    font-weight: bold;
  }
  
  .ticket-table tr:hover {
    background-color: #f1f1f1;
  }
  
  .ticket-table td {
    color: #333;
  }
  
  .ticket-table td:last-child {
    text-align: center;
  }
  
  .btn {
    padding: 8px 12px;
    font-size: 1rem;
    background-color:  #00aed5;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .btn:hover {
    background-color: #2980b9;
  }
  
  .btn-create {
    background-color: #00aed5;
    width: 100%;
    margin-top: 20px;
  }
  
  .btn-create:hover {
    background-color: black;
  }
  
  .btn-details {
    background-color: #e74c3c;
  }
  
  .btn-details:hover {
    background-color: black;
  }
  </style>
  
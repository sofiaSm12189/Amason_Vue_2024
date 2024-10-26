<template>
    <div>
      <h2>Crear Nueva Tienda</h2>
      <div class="form-group">
        <input type="text" v-model="newStoreName" placeholder="Nombre de la Tienda" />
        <textarea v-model="newStoreDescription" placeholder="Descripción de la Tienda" rows="4"></textarea>
        <button class="btn-create" @click="addStore">Agregar Tienda</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      stores: Array,
      updateStores: Function,
    },
    data() {
      return {
        newStoreName: "",
        newStoreDescription: "",
      };
    },
    methods: {
      addStore() {// el codigo que esta aqui es solo visual, es decir, todavia no esta funcionando con la base porque eso nos toca en la tercera iteracion
        if (this.newStoreName.trim() === "") {
          alert("Por favor ingresa un nombre para la tienda.");
          return;
        }
  
        const isDuplicate = this.stores.some(store => store.name === this.newStoreName);
        if (isDuplicate) {
          alert("Ya existe una tienda con ese nombre. Por favor elige otro.");
          return;
        }
  
        this.$emit("update-stores", {
          name: this.newStoreName,
          description: this.newStoreDescription,
        });
  
        this.newStoreName = "";
        this.newStoreDescription = "";
        alert("¡Tienda creada exitosamente!");
      },
    },
  };
  </script>
  
  <style scoped>
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  input,
  textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .btn-create {
    background-color: #0096c7;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .btn-create:hover {
    background-color: #0077b6;
  }
  </style>
  
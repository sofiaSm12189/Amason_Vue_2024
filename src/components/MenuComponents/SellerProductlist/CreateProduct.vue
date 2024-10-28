<template>
  <div :class="{ 'modal-overlay': true, 'hidden': !showModal }">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h2 class="modal-title">Crear Nuevo Producto</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Nombre del Producto</label>
          <input
            type="text"
            id="name"
            v-model="product.name"
            required
          />
        </div>
        <div class="form-group">
          <label for="category">Categoría</label>
          <select
            id="category"
            v-model="product.category"
            required
          >
            <option disabled value="">Seleccionar categoría</option>
            <option value="electronics">Electrónicos</option>
            <option value="clothing">Ropa</option>
            <option value="books">Libros</option>
          </select>
        </div>
        <div class="form-group">
          <label for="price">Precio</label>
          <input
            type="text"
            id="price"
            v-model="product.price"
            required
          />
        </div>
        <div class="form-group">
          <label for="stock">Stock</label>
          <input
            type="number"
            id="stock"
            v-model="product.stock"
            required
          />
        </div>
        <div class="form-group">
          <label for="description">Descripción</label>
          <textarea
            id="description"
            v-model="product.description"
            rows="3"
            required
          ></textarea>
        </div>
        <div class="form-actions">
          <button type="button" @click="closeModal" class="cancel-button">Cancelar</button>
          <button type="submit" class="save-button">Crear Producto</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ['showModal'],
  data() {
    return {
      product: {
        name: '',
        category: '',
        price: '',
        stock: '',
        description: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      this.$emit('create', this.product); // Emitir el producto creado
      this.closeModal();
    },
    closeModal() {
      this.$emit('close-modal');
    }
  }
};
</script>

<style scoped>
.hidden {
  display: none;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 350px;
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.close {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  color: #333;
  cursor: pointer;
}

.modal-title {
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  color: #007098;
  margin-bottom: 5px;
  display: block;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.form-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.cancel-button {
  background-color: #e74c3c;
  color: #f0f0f0;
  border: 1px solid #e74c3c;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.save-button {
  background-color: #0ea5e9;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>

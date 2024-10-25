import Vuex from 'vuex';
import api from '../services/api';

export default new Vuex.Store({
  state: {
    cart: [],
    totalAmount: 0,
  },
  mutations: {
    setCart(state, products) {
      state.cart = products;
    },
    setTotalAmount(state, totalAmount) {
      state.totalAmount = totalAmount;
    },
    removeProduct(state, idProductToRemove) { // Cambio de "RemoveProduct" a "removeProduct"
      const index = state.cart.findIndex(item => item.id === idProductToRemove);
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
    updatedQuantity(state, { productId, newQuantity }) {
      const product = state.cartItems.find(item => item.product_id === productId)
      if (product) {
        product.quantity = newQuantity
      }
    },
    removeFromCart(state, productId) {
      state.cartItems = state.cartItems.filter(item => item.product_id !== productId)
    }
  },
  actions: {
    async fetchCartItems({ commit }) {
      try {
        const userId = localStorage.getItem('pivotId');
        if (!userId) {
          throw new Error('No se econtró el usuario');
        }
        const response = await api.get(`/cart/${userId}`);
        commit('setCart', response.data.cart_products);
        commit('setTotalAmount', response.data.total_amount);
      } catch (error) {
        console.error('Error encontrando el artículo:', error);
      }
    },
      async removeProductFromCart({ commit }, idProductToRemove) {
        try {
          const response = await fetch('/cart/removeProductFromCart', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ idproducttoremove: idProductToRemove }),
          });
    
          if (response.ok) {
            const data = await response.json();
            commit('removeProduct', idProductToRemove); // Actualizar el estado en Vuex
            return data;
          } else {
            throw new Error('Error al eliminar el producto en el servidor');
          }
        } catch (error) {
          console.error('Error al eliminar el producto del carrito:', error);
          throw new Error('No se pudo eliminar el producto del carrito.');
        }
      }
    },  
  getters: {
    cartItems: (state) => state.cart,
    totalAmount: (state) => state.totalAmount,
    formattedTotalAmount: (state) => {
      return new Intl.NumberFormat('es-CR', {
        style: 'currency',
        currency: 'CRC',
      }).format(state.totalAmount); // Formatea el total a colones
    },
  },
});

<template>
  <div class="category-card">
    <h2 class="item-headline">{{ category.title }}</h2>
    <div class="items">
      <div
        v-for="(item, index) in category.items"
        :key="index"
        class="item-card"
      >
        <img :src="item.image || patitoImage" :alt="item.title" />
        <p>{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import patitoImage from '@/assets/patito-amarillo.jpeg';

export default {
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      patitoImage,
    };
  },
};
</script>

<style scoped>
.category-card {
  border: 1px solid #ddd;
  padding: 20px;
  width: 300px;
  align-content: center;
  text-align: left;
  height: auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s; 
  background-color: #fff; 
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); 
} 

.items {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 10px;
  
}

.item-card {
  width: 45%;
  height: 65%;
  margin: 10px 0;
}

.item-card img {
  width: 100%;
  height: auto;
}

.item-card p {
  margin-top: 5px;
  font-size: 14px;
}

.item-headline {
  font-size: 21px !important;
  line-height: 27.3px !important;
}
</style>

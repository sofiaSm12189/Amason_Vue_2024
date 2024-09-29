<template>
   
  <div class="categories-card">
    <CategoryCard
      v-for="(category, index) in categories"
      :key="index"
      :category="category"
    />
  </div>
</template>

<script>
import CategoryCard from '@/components/LayoutComponents/CategoryCard.vue';

export default {
  components: {
    CategoryCard,
  },
  data() {
    return {
      categories: [
        {
          title: 'Electronics',
          items: [
            { title: 'Phone', img: 'phone.jpg' },
            { title: 'Laptop', img: 'laptop.jpg' },
            { title: 'Headphones', img: 'headphones.jpg' },
            { title: 'Camera', img: 'camera.jpg' },
          ],
        },
        {
          title: 'Clothing',
          items: [
            { title: 'T-shirt', img: 'tshirt.jpg' },
            { title: 'Jeans', img: 'jeans.jpg' },
            { title: 'Jacket', img: 'jacket.jpg' },
            { title: 'Shoes', img: 'shoes.jpg' },
          ],
        },
        {
          title: 'aaaaa',
          items: [
            { title: 'T-aaa', img: 'tshirt.jpg' },
            { title: 'aa', img: 'jeans.jpg' },
            { title: 'a', img: 'jacket.jpg' },
            { title: 'a', img: 'shoes.jpg' },
          ],
        },
        {
          title: 'aaaaa',
          items: [
            { title: 'T-aaa', img: 'tshirt.jpg' },
            { title: 'aa', img: 'jeans.jpg' },
            { title: 'a', img: 'jacket.jpg' },
            { title: 'a', img: 'shoes.jpg' },
          ],
        },{
          title: 'aaaaa',
          items: [
            { title: 'T-aaa', img: 'tshirt.jpg' },
            { title: 'aa', img: 'jeans.jpg' },
            { title: 'a', img: 'jacket.jpg' },
            { title: 'a', img: 'shoes.jpg' },
          ],
        },{
          title: 'aaaaa',
          items: [
            { title: 'T-aaa', img: 'tshirt.jpg' },
            { title: 'aa', img: 'jeans.jpg' },
            { title: 'a', img: 'jacket.jpg' },
            { title: 'a', img: 'shoes.jpg' },
          ],
        },{
          title: 'aaaaa',
          items: [
            { title: 'T-aaa', img: 'tshirt.jpg' },
            { title: 'aa', img: 'jeans.jpg' },
            { title: 'a', img: 'jacket.jpg' },
            { title: 'a', img: 'shoes.jpg' },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>

.categories-card {
  display: flex;
  margin-top: 17vh;
  margin-left: 4vh;
  margin-right: 4vh;
  margin-bottom: 6vh;
  flex-wrap: wrap;
  background-color: transparent;
  gap: 20px;
  justify-content: space-around;
  overflow: hidden;
}

</style>

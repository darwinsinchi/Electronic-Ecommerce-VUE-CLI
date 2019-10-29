 <template>
  <div class="mainproducts">
    <div class="AllProducts" v-for="(AllProduct,i) in filteredProducts" :key="i">
      <router-link v-bind:to="'/Individual/'+ AllProduct.ID"><img class="picture" v-bind:src="AllProduct.Picture1" alt="Main Picture" /></router-link>
      <span class="name">{{AllProduct.Name}}</span>
      <span class="description">{{AllProduct.SubTitle}}</span>
      <span class="price">${{AllProduct.Price}}</span>
        <img @click="addToCart(AllProduct)" class="iconpic" src="https://image.flaticon.com/icons/svg/1665/1665731.svg" />
      <!-- <img class="iconpic" src="https://image.flaticon.com/icons/svg/1665/1665731.svg" /> -->
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data(){
    return{
     
    }
  },
  created(){

  },
  
  computed: {
    ...mapState(['posts', "input"]),
    filteredProducts() {
      return this.posts.filter(prod => prod.Name.toLowerCase().match(this.input.toLowerCase())||prod.SubTitle.toLowerCase().match(this.input.toLowerCase()))
    }
  },
  //above is for loading the axios data
   methods: {
    addToCart(AllProduct) {
      this.$store.commit('ADD_TO_CART', AllProduct);
      this.$store.commit('totalPrice')
      //invId for me would be ID
    },
  },
};
</script>
<style scoped>
.searchbox {
  color: black;
  width: 100%;
  height: 30px;
}

.picture {
  height: 300px;
  width: 200px;
  object-fit: contain
}

.AllProducts {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 310px;
  border-style: groove;
  border-width: 10px;
  border-color: #CDCDCD;
  margin-top: 20px;
  border-radius: 20px;
  align-items: center
}

.mainproducts {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 10px;
}



.name,
.price {
  text-align: center;}

.iconpic{
    height:30px;
    width:30px;
}

.btn{
  background-color: #E9E9E9;
  border-width: 1px;
  border-style: solid;
  border-color:black;
  margin-bottom: 10px
}
</style>

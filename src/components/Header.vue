 <template>
  <div>
    <div class="topHeader">
    <div>
   
      <!-- <v-toolbar flat app class="green"> -->
        <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
        <v-navigation-drawer app v-model="drawer" class="ice">
          <h2>
            <router-link to="/">All Products</router-link>
          </h2>
          <h2>
            <router-link to="/Cameras">Cameras</router-link>
          </h2>
          <h2>
            <router-link to="/Computers">Computers</router-link>
          </h2>
          <h2>
            <router-link to="/Drones">Drones</router-link>
          </h2>
          <h2>
            <router-link to="/Phones">Phones</router-link>
          </h2>
          <h2>
            <router-link to="/TV">TVs</router-link>
          </h2>
        
        </v-navigation-drawer>  
           <!-- </v-toolbar>  -->
    
    
    </div>
    <!-- shooping cart will go below -->
      <ShoppingCart />
  </div>
    <!-- shopping cart will go above -->
    <h1>Darwie's Market Place</h1>
  </div>
</template>

<script>
import ShoppingCart from './ShoppingCart.vue';
export default {
  components: {
     ShoppingCart,
  },
  data() {
    return {
      drawer: false
    
    };
  }
};
</script>
<style scoped>
h1 {
  color: white;
  text-align: center;
  background-color: #99D3DF;
  padding: 20px;
  font-family: cursive;

}

h2 {
  margin-top: 10px;
}

.shoppingCartIcon{
  height:50px;
  width:50px
  
}

.topHeader{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 5px
}

.ice{
  background-color: #99D3DF
}

</style>


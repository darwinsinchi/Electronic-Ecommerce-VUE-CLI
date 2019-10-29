<template>
  <v-dialog max-width="600px">
    <v-btn flat slot="activator"><img class ="shoppingButton" src="https://image.flaticon.com/icons/svg/711/711979.svg"> Cart ({{ productQuantity }})</v-btn>
    <v-card>
      <v-card-title>
        <div class="title">
          <h2> Shopping Cart</h2> 
        </div>
      </v-card-title>
      <div>
        <table class="table">
          <tbody>
              <!-- the line below should have two parameters for the v-for but it doesnt work so i took it out and it still works -->
              
            <tr>
               <td><h2>Item</h2></td>
              <td><h2>Item Name</h2></td>
              <td><h2>Item Price</h2></td>
              <td><h2>Product Quantity</h2></td>
              <td><h2>Subtract Item</h2></td>
              <td><h2>Add Item</h2></td>
              <td><h2>Cancel</h2></td>
            </tr>         
                      
            <tr v-for="(item, index) in inCart" :key="index">
              <td> <img class="picture" v-bind:src="item.Picture1" alt="Main Picture" /></td>
              <td>{{ item.Name }}</td>
              <td>${{ item.Price}}</td>
              <td> {{ item.productQuantity }} Items</td>
              <td>
                 <img @click="subtractOne(item.ID)" class="add" src="https://www.flaticon.com/premium-icon/icons/svg/169/169783.svg"/>
           
              </td>
              <td>
                <img @click="addOne(item.ID)" class="add" src="https://image.flaticon.com/icons/svg/148/148764.svg"/>
              </td>
              <td>
                <img @click="removeFromCart(index)" class="add" src="https://image.flaticon.com/icons/svg/458/458594.svg"/>

              </td>
            </tr>
            <tr>
              <th></th>
              <th>Total Price</th>
              <th>{{ totalPrice }}</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </tbody>
        </table>
         <h3>Today you saved :${{total- totalPrice}}</h3>
      </div>
  
    </v-card>
  </v-dialog> 
</template>

<script>

export default {
  name: 'shoppingCart',
  data () {
    return {
    }
  },
  computed: {
    inCart() { 
      return this.$store.state.inCart
    },
    numInCart() { return this.inCart.length; },
    cart() {
      return this.$store.state.inCart;
    },
    productQuantity() {
      return this.$store.state.productQuantity;
    },
    // total() {
    //   return this.cart.reduce((acc, cur) => this.$store.state.productQuantity * cur.Price, 0);
    // },

total() {
       let total = 0;
       let productQuantity = this.$store.state.productQuantity
       for (let product of this.$store.state.inCart) {
        total += product.Price * product.productQuantity }
       return total.toFixed(2);},




  totalPrice () {
    let total = this.$store.state.totalPrice
    console.log('from method', total)
    let productQuantity = this.$store.state.productQuantity
      
    for (let product of this.$store.state.inCart) {
      if (product.productQuantity >= 4){
        total -=  product.Price * Math.floor(product.productQuantity/4)
      }
    }
    if (productQuantity >=5){
      total -= total * .1
    }
    return total.toFixed(2)
  },

  
    //maybe use something length to find total number of quantity


 

    
 },


  methods: {
    removeFromCart(index) {
      this.$store.dispatch('removeFromCart', index);
    },
    subtractOne(ID){
      this.$store.commit('REMOVE_ONE', ID);
         this.$store.commit('totalPrice')
    },
    
    addOne(ID){
      this.$store.commit('ADD_ONE', ID)
         this.$store.commit('totalPrice')
    }
  }
    
};
</script>

<style scoped>
.shoppingButton{

  height: 36px;
  width: 36px
}

tr{
  border-style: groove;
  border-width: 10x;
  border-color: red;
  background-color: lightblue;
  width: 400px;
  margin-bottom: 10px
}

td{
  margin-bottom: 10px;
  
}

.picture {
  height:50px;
  width: 50px;
}

.add{
  display: flex;
  flex-direction: row;
  height:30px;
  width: 30px;
  
}

h2{
  align-items: center;
  text-align: center
}



</style>

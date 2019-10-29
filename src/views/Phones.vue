 <template>
  <div>
    <app-Header></app-Header>
    <app-searchbar></app-searchbar>
    <h1>Phones</h1>
    <div class="phoneflex1">
    <div class="phoneflex2" v-for="phone in AllPhones" v-bind:key="phone">
       <router-link v-bind:to="'/Individual/'+ phone.ID">
      <img class="picture" v-bind:src="phone.Picture1" alt="Main Picture" /></router-link>
      <span class="name">{{phone.Name}}</span>
      <span class="description">{{phone.SubTitle}}</span>
      <span class="price">${{phone.Price}}</span>
      <img @click="addToCart(phone)" class="iconpic" src="https://image.flaticon.com/icons/svg/1665/1665731.svg" />
    </div>
    </div>
   </div>
</template>

<script>
import {mapState} from 'vuex'
import Header from '../components/Header.vue'
import SearchBar from '../components/SearchBar.vue'
export default {
  components: {
    "app-Header": Header,
    "app-searchbar": SearchBar
  },
    created(){
    this.$store.dispatch('loadPosts')
  },
  
  // computed: {
  //   ...mapState(['posts'])
  // },
  computed: {
  ...mapState(['posts', "input"]),
      AllPhones () {
      let AllPhones = []
      for (var i = 0; i < this.posts.length; i++) {
        if (this.posts[i].Category === 'Phone') {
          AllPhones.push(this.posts[i])
        }
        
       }
        return AllPhones.filter(prod => prod.Name.toLowerCase().match(this.input.toLowerCase())||prod.SubTitle.toLowerCase().match(this.input.toLowerCase()))
     
    },
   
  },

   methods: {
    addToCart(ID) {
      this.$store.commit('ADD_TO_CART', ID);
         this.$store.commit('totalPrice')
      //invId for me would be ID
    },
  },

  
};
</script>
<style scoped>
h1 {
  color: white;
  text-align: center;
  background-color: #99D3DF;
  padding: 20px;
  margin-top: 10px
}

.picture {
  height: 300px;
  width: 200px;
  object-fit: contain
}

.phoneflex1 {
 display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 10px;
}

.phoneflex2{
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 310px;
  border-style: groove;
  border-width: 5px;
  border-color: #CDCDCD;
  margin-top: 20px;
  border-radius: 20px;
  align-items: center
}

.iconpic{
    height:30px;
    width:30px;
}
</style>
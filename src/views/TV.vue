 <template>
  <div>
    <app-Header></app-Header>
    <app-searchbar></app-searchbar>
    <h1>TVs</h1>
    <div class="TVflex1">
    <div class="TVflex2" v-for="TV in AllTVs" v-bind:key="TV">
      <router-link v-bind:to="'/Individual/'+ TV.ID">

      <img class="picture" v-bind:src="TV.Picture1" alt="Main Picture" /></router-link>
      <span class="name">{{TV.Name}}</span>
        <span class="description">{{TV.SubTitle}}</span>
      <span class="price">${{TV.Price}}</span>
       <img @click="addToCart(TV)" class="iconpic" src="https://image.flaticon.com/icons/svg/1665/1665731.svg" />
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
      AllTVs () {
      let AllTVs = []
      for (var i = 0; i < this.posts.length; i++) {
        console.log(this.posts[i].Category)
        if (this.posts[i].Category === 'TV') {
          AllTVs.push(this.posts[i])
        }
      }
      
    return AllTVs.filter(prod => prod.Name.toLowerCase().match(this.input.toLowerCase())||prod.SubTitle.toLowerCase().match(this.input.toLowerCase()))
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

.TVflex1 {
 display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 10px;
}

.TVflex2 {
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
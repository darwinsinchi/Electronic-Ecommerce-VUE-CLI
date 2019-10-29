 <template>
  <div id= singlePage>
    <app-Header></app-Header>
    <div class="singleItem"  v-if="getItem">
     <img class="picture" v-bind:src="getItem.Picture1" alt="Main Picture" />


  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in getItem.Picture2"
      :key="i"
      :src="item"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>


     <!-- carousel will go on top -->
    <p>Name: {{getItem.Name}}</p>
    <p>Price: ${{getItem.Price}}</p>
    <p>{{getItem.SubTitle}}</p>
    <p>Item Description: {{getItem.Description}}</p>
   
<img @click="addToCart(getItem)" class="iconpic" src="https://image.flaticon.com/icons/svg/1665/1665731.svg" />
 
  </div></div>

</template>

<script>
import Header from "../components/Header.vue";
import {mapState} from 'vuex'

export default {
    props:["id"],
  components: {
    "app-Header": Header
  },

  data() {
    return {
      
    }
  },
  created()
  {
 
   
  }, 
 methods: {
    addToCart(ID) {
      this.$store.commit('ADD_TO_CART', ID);
         this.$store.commit('totalPrice')
      //invId for me would be ID
    },
  },
 computed: {

    ...mapState(['posts']),
      getItem () {
        // console.log("onc",this.id,this.posts);
      for (var i = 0; i < this.posts.length; i++) {
        if (this.posts[i].ID === this.id) {
          // console.log(this.posts[i]);
          
         return this.posts[i]
        }
      }
        
    },
      
  },

  

};
</script>
<style scoped>
h1 {
  color: white;
  text-align: center;
  background-color: rgb(64, 206, 123);
  padding: 20px;
}

.picture {
  height: 400px;
  width: 500px;
  object-fit: contain
}
.singleItem{
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
}

p{
  width: 500px;
  align-text:center;

}

.iconpic{
  height:60px;
    width:60px;
    margin-bottom: 10px;
    margin-top:5px

}

</style>

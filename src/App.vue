 <template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from "./views/Home";
import Phones from "./views/Phones";
import TV from "./views/TV";
import Drones from "./views/Drones";
import Computers from "./views/Computers";
import Cameras from "./views/Cameras";
import Individual from "./views/Individual";
// import {mapState} from 'vuex'

export default {
  // mounted(){
  //   this.$store.dispatch('loadPosts')
  // },
  // computed:{
  //   ...mapState(['posts'])
  // },
  //above is for loading the axios data
  components: {
    "app-Home": Home
  },
  data() {
    return {
      //
    };
  }
};
</script>
<style scoped>
h1 {
  color: white;
  text-align: center;
  background-color: rgb(64, 206, 123);
  padding: 20px;
}
</style>

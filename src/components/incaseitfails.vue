 <template>
  <div>
    <app-Header></app-Header>
    <app-searchbar></app-searchbar>
    <AllProducts></AllProducts>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import AllProducts from "./components/AllProducts.vue";
import Header from "./components/Header.vue";

export default {
  components: {
    "app-Header": Header,
    "app-searchbar": SearchBar,
    AllProducts: AllProducts
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

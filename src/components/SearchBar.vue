 <template>
  <div>
    <input type="text" class="searchbox"  @input="sendInput"  v-model="search" placeholder="Search..."  />
   
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      search: ''
      //
    };
  },
  methods: {
    sendInput(){
      this.$store.commit("SET_INPUT", this.search)
    }
  },
    computed: {
    filteredItems: function() {
      return this.posts.filter(post => {
        return (
          post.Picture1.toLowerCase().match(this.search.toLowerCase()) ||
          post.Name.toLowerCase().match(this.search.toLowerCase())
        );
      });
    }
  }
};
</script>
<style scoped>
.searchbox {
  background-color:#88BBD6;
  color: black;
  width: 100%;
  height: 30px;
  margin-top: 30px;
}
</style>

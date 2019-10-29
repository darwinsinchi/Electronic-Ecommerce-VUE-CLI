import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    posts: [],
    input: "",
    inCart: [],
    productQuantity: 0,
    totalPrice: 0

  },
  getters: {
    // we create getters to access this data
    // forSale: state => state.posts,
    // inCart: state => state.inCart,

    // TODO: Add getters
  },
  actions: {
    loadPosts({ commit }) {
      axios
        .get('https://api.myjson.com/bins/y9odd')
        .then(data => {
          console.log(data.data)
          let posts = data.data
          commit('SET_POSTS', posts)
        })
        .catch(error => {
          console.log(error)
        })
    },

    // addToCart(context, ID) { context.commit('ADD_TO_CART', ID); },
    removeFromCart(context, index) { context.commit('REMOVE_FROM_CART', index); },
  },
  mutations: {
    SET_POSTS(state, posts) {
      console.log(posts);

      state.posts = posts.BestBuy
    },
    SET_INPUT(state, data) {
      state.input = data
    },
    ADD_TO_CART(state, AllProduct) {
      state.productQuantity += 1;
      let found = state.inCart.find(product => product.ID === AllProduct.ID)
      if (found) {
        found.productQuantity += 1
      } else {
        AllProduct.productQuantity = 1
        state.inCart.push(AllProduct);
        console.log(state.inCart)
      }
    },
    REMOVE_FROM_CART(state, index) { state.inCart.splice(index, 1); },
    REMOVE_ONE(state, ID) {
      state.productQuantity -= 1
      let product = state.inCart.find(prod => prod.ID === ID)
      product.productQuantity -= 1
    },

    ADD_ONE(state, ID) {
      state.productQuantity += 1
      let product = state.inCart.find(prod => prod.ID === ID)
      product.productQuantity += 1
    },
    totalPrice(state) {
      // productQuantity = state.productQuantity
      let totalPrice = 0
      for (let product of state.inCart) {
        console.log(product)
        totalPrice += product.Price * product.productQuantity
      }
      console.log(totalPrice)
      state.totalPrice = totalPrice
    },


  },
});

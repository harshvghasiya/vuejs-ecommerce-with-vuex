import axios from 'axios';
import mutations from './mutations';
import state from './state';
import { useToast } from "vue-toastification";

const baseUrl = 'http://resto-api.test/api/'


const actions = {

	async productList({commit}, filter){
		let url = 'product/list';

		const options = {
		  method: 'GET',
		  url: `${baseUrl}${url}`,
		  params:filter
		};

		return await axios.request(options)
					.then((response) => {
			            commit('productList', response.data);
						// console.log(response.data);
						return response.data;

					})
	},

	async productDetail({commit}, slug){
		let url = 'product-details';

		const options = {
		  method: 'GET',
		  url: `${baseUrl}${url}`,
		  params:{slug:slug}
		};

		return await axios.request(options)
					.then((response) => {
						console.log(response.data)
			            commit('productDetail', response.data);
						return response.data;

					})
	},

	async registerUser({commit}, formData){
		let url = 'auth/register';

		const options = {
		  method: 'POST',
		  url: `${baseUrl}${url}`,
		  params:formData
		};

		return await axios.request(options)
				.then((response) => {
					return response.data;

				});
	},

	async submitCheckout({commit, dispatch}, formData){
		let url = 'auth/checkout';
		let token = state.token

		const options = {
		  method: 'POST',
		  url: `${baseUrl}${url}`,
		  params:formData,
		  headers: {
	        Accept: 'application/json',
	        ...(token ? { Authorization: `Bearer ${token}` } : undefined)
	      },
		};

		return await axios.request(options)
				.then((response) => {
					return response.data;

				});
	},

	async saveUserInfo({commit}, formData){
		let url = 'auth/save-my-info';
		let token = state.token

		const options = {
		  method: 'POST',
		  url: `${baseUrl}${url}`,
		  params:formData,
		  headers: {
	        Accept: 'application/json',
	        ...(token ? { Authorization: `Bearer ${token}` } : undefined)
	      },
		};

		return await axios.request(options)
				.then((response) => {
					return response.data;

				});
	},

	async updatePassword({commit}, formData){
		let url = 'auth/update-password';
		let token = state.token

		const options = {
		  method: 'POST',
		  url: `${baseUrl}${url}`,
		  params:formData,
		  headers: {
	        Accept: 'application/json',
	        ...(token ? { Authorization: `Bearer ${token}` } : undefined)
	      },
		};

		return await axios.request(options)
				.then((response) => {
					return response.data;

				});
	},

	async saveCardInfo({commit}, formData){
		let url = 'auth/save-card-info';
		let token = state.token

		const options = {
		  method: 'POST',
		  url: `${baseUrl}${url}`,
		  params:formData,
		  headers: {
	        Accept: 'application/json',
	        ...(token ? { Authorization: `Bearer ${token}` } : undefined)
	      },
		};

		return await axios.request(options)
				.then((response) => {
					return response.data;

				});
	},

	async myOrders({commit}){
		let url = 'auth/my-orders';
		let token = state.token

		const options = {
		  method: 'GET',
		  url: `${baseUrl}${url}`,
		  headers: {
	        Accept: 'application/json',
	        ...(token ? { Authorization: `Bearer ${token}` } : undefined)
	      },
		};

		return await axios.request(options)
				.then((response) => {
					commit('myOrders', response.data)
					return response.data;
				});
	},

	async deleteCard({commit}){
		let url = 'auth/delete-card';
		let token = state.token

		const options = {
		  method: 'GET',
		  url: `${baseUrl}${url}`,
		  headers: {
	        Accept: 'application/json',
	        ...(token ? { Authorization: `Bearer ${token}` } : undefined)
	      },
		};

		return await axios.request(options)
				.then((response) => {
					return response.data;
				});
	},

	async userInfo({commit}){
		let url = 'auth/my-info';
		let token = state.token

		const options = {
		  method: 'GET',
		  url: `${baseUrl}${url}`,
		  headers: {
	        Accept: 'application/json',
	        ...(token ? { Authorization: `Bearer ${token}` } : undefined)
	      },
		};

		return await axios.request(options)
				.then((response) => {
					commit('userDetails', response.data)
					return response.data;
				});
	},

	async loginUser({commit}, formData){
		let url = 'auth/login';

		const options = {
		  method: 'POST',
		  url: `${baseUrl}${url}`,
		  params:formData
		};

		return await axios.request(options)
				.then((response) => {
					
					commit('updateToken', response.data.token)
					window.localStorage.setItem('token', response.data.token);

					return response.data;
				});
	},

	async logout({commit}, token){

		console.log(token)
		let url = 'auth/logout';

		const options = {
		  method: 'POST',
		  url: `${baseUrl}${url}`,
		  headers: {
	        Accept: 'application/json',
	        ...(token ? { Authorization: `Bearer ${token}` } : undefined)
	      },
		};

		return await axios.request(options)
				.then((response) => {

					return response.data;
				});
	},

	async removeCart({commit, dispatch}, cartId){
		let url = 'remove-from-cart';

		const options = {
		  method: 'GET',
		  url: `${baseUrl}${url}`,
		  params:{ id: cartId}
		};

		return await axios.request(options)
				.then((response) => {

		            dispatch('cartItems')
					return response.data;

				});

	},

	async addToCart({commit, dispatch}, data){

		let url = 'product/add-to-cart';

		let token = state.token

		let options = {
		  method: 'GET',
		  url: `${baseUrl}${url}`,
		  params:data
		};

		if ( token ) {

			options.headers = {
		        Accept: 'application/json',
		        ...(token ? { Authorization: `Bearer ${token}` } : undefined)
		      }
		}

		return await axios.request(options)
				.then((response) => {
		            dispatch('cartItems')
					return response.data;

				})
	},

	async updateCart({commit, dispatch}, data){

		let url = 'product/update-cart-item';

		let token = state.token

		let options = {
		  method: 'POST',
		  url: `${baseUrl}${url}`,
		  params:data
		};

		if ( token ) {

			options.headers = {
		        Accept: 'application/json',
		        ...(token ? { Authorization: `Bearer ${token}` } : undefined)
		      }
		}

		return await axios.request(options)
				.then((response) => {
		            dispatch('cartItems')
					return response.data;

				})
	},


	async categoryList({commit}){
		let url = 'product-category/list';

		const options = {
		  method: 'GET',
		  url: `${baseUrl}${url}`,
		};

		return await axios.request(options)
				.then((response) => {
		            commit('categoryList', response.data);
					// console.log(response.data);
					return true;

				})
	},

	async cartItems({commit}){
		
		let url = 'cart-items';

		const options = {
		  method: 'GET',
		  url: `${baseUrl}${url}`,
		};

		return await axios.request(options)
				.then((response) => {
		            commit('cartItems', response.data);
					console.log(response.data);
					return true;

				})
	},

	async tagList({commit}){

		let url = 'product-tag/list';

		const options = {
		  method: 'GET',
		  url: `${baseUrl}${url}`,
		};

		return await axios.request(options)
				.then((response) => {
		            commit('tagList', response.data);
					// console.log(response.data);
					return true;

				})
	},

}
export default actions
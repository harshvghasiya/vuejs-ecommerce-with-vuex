import state from './state'

const getters = {

	cartItems(state){

		let price = 0;

		if ( state.cartItems.data != [] ) {

			price = state.cartItems.data.reduce((acc, cartItem) => {

		      return (cartItem.total_product * cartItem.price) + acc;

		    }, 0).toFixed(2);
		}

		let data = {

			price: price,
			data:  state.cartItems.data,
			total: state.cartItems.total
		}

		return data
	},

	isAuthenticated(state){

		if ( state.token ) {

			return true
		}

		return false
	}
}

export default getters
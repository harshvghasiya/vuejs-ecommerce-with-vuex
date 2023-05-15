import state from './state'

const mutations = {

	productList(state, playload){

		state.productList.data = playload.data
		state.productList.totalPage = playload.total_page
	},

	categoryList(state, playload){

		state.categoryList.data = playload.data
		state.categoryList.total = playload.total
	},

	myOrders(state, playload){

		state.myOrders.data = playload.data
		state.myOrders.total = playload.total
	},

	cartItems(state, playload){

		state.cartItems.data = playload.data
		state.cartItems.total = playload.total
	},

	addToCart(state, playload){

		stat.cartIems.data
	},

	tagList(state, playload){

		state.tagList.data = playload.data
		state.tagList.total = playload.total
	},

	productDetail(state, playload) {
		
		state.productDetail.details = playload.data 
	},

	userDetails(state, playload) {
		
		state.userDetails.personalDetails = playload.data.personal_details 
		state.userDetails.paymentDetails = playload.data.card_details
	},

	updateToken(state, playload){

		state.token = playload
	}
}

export default mutations
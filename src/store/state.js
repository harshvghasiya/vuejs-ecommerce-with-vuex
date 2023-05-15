
const state = {

	productList: {

		data:[],
		totalPage:0
	},

	myOrders: {

		data:[],
		total:0
	},

	categoryList:{

		data:[],
		total:0
	},

	cartItems:{

		data:[],
		total:0,
	},
	tagList:{

		data:[],
		total:0
	},

	userDetails:{

		personalDetails:{

					name:'',
					address:'',
					pincode:'',
					city:''
				},
		paymentDetails:null,
	},

	productDetail: {
		
		details:null,
	},

	token: window.localStorage.getItem('token'),

}


export default state
<template>
    
    <Preloader v-if="!hideLoading" />
	
	<bread-crum title="Checkout" />

	<div class="py-24">
	    <div class="container">
	        <div class="grid grid-cols-12 gap-5">
	            <div class="col-span-12 lg:col-span-7">
	                <div>
	                    <h3 class="text-lg font-semibold mb-5">Personal Details</h3>
	                    <form class="personal-information">
	                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-5">
	                            
	                            <div>
	                                <div>
	                                    <label class="mb-1 inline-block">Full Name <span class="text-red-400">*</span></label>
	                                    <input
	                                        class="border border-solid border-gray-300 w-full mb-2 py-1 px-5 placeholder-current text-dark h-12 focus:outline-none text-base"
	                                        type="text" v-model="formData.name" >
	                                    <div class="mb-5" v-if="formData.name == '' ">
	                                    	<span class="text-red-400">{{ formErrors.name[0] }}</span>
	                                    </div>
	                                </div>
	                            </div>
	                            <div>
	                                <div>
	                                    <label class="mb-1 inline-block">Phone <span class="text-red-400">*</span></label>
	                                    <input
	                                        class="border border-solid border-gray-300 w-full mb-2 py-1 px-5 placeholder-current text-dark h-12 focus:outline-none text-base"
	                                        type="text" v-model="formData.phone">
	                                    <div class="mb-5" v-if="formData.phone == '' ">
	                                    	<span class="text-red-400">{{ formErrors.phone[0] }}</span>
	                                    </div>
	                                </div>
	                            </div>
	                            <div>
	                                <div>
	                                    <label class="mb-1 inline-block">City <span class="text-red-400">*</span></label>
	                                    <input
	                                        class="border border-solid border-gray-300 w-full mb-2 py-1 px-5 placeholder-current text-dark h-12 focus:outline-none text-base"
	                                        type="text" v-model="formData.city">
	                                    <div class="mb-5" v-if="formData.city == '' ">
	                                    	<span class="text-red-400">{{ formErrors.city[0] }}</span>
	                                    </div>
	                                </div>
	                            </div>
	                            <div>
	                                <div>
	                                    <label class="mb-1 inline-block">PinCode <span class="text-red-400">*</span></label>
	                                    <input
	                                        class="border border-solid border-gray-300 w-full mb-2 py-1 px-5 placeholder-current text-dark h-12 focus:outline-none text-base"
	                                        type="text" v-model="formData.pincode">
	                                </div>
	                                <div class="mb-5" v-if="formData.pincode == '' ">
	                                    	<span class="text-red-400">{{ formErrors.pincode[0] }}</span>
	                                </div>
	                            </div>
	                           
	                            <div class="lg:col-span-2">
	                                <div>
	                                    <label class="mb-1 inline-block">Street Address <span class="text-red-400">*</span></label>
	                                    <input
	                                        class="border border-solid border-gray-300 w-full mb-2 py-1 px-5 placeholder-current text-dark h-12 focus:outline-none text-base"
	                                         type="text" v-model="formData.address">
	                                    <div class="mb-5" v-if="formData.address == '' ">
	                                    	<span class="text-red-400">{{ formErrors.address[0] }}</span>
	                                	</div>
	            
	                                </div>
	                            </div>
	                        </div>

	                    	<h3 class="text-lg font-semibold mb-5 mt-8">Billing Details</h3>

	                    	<div class="grid grid-cols-1 lg:grid-cols-2 gap-x-5">
	                    		<div class="col-span-4">
	                    			<div>
	                                    <label class="mb-1 inline-block">Cardholder Name <span class="text-red-400">*</span></label>
	                                    <input
	                                        class="border border-solid border-gray-300 w-full mb-2 py-1 px-5 placeholder-current text-dark h-12 focus:outline-none text-base"
	                                        type="text" v-model="formData.card_name">  
	                                    <div class="mb-5" v-if="formData.card_name == '' ">
	                                    	<span class="text-red-400">{{ formErrors.card_name[0] }}</span>
	                                    </div>

	                                </div>
	                    		</div>
	                    		<div class="col-span-4">
	                    			<div>
	                                    <label class="mb-1 inline-block">Card Number <span class="text-red-400">*</span></label>
	                                    <input
	                                        class="border border-solid border-gray-300 w-full mb-2 py-1 px-5 placeholder-current text-dark h-12 focus:outline-none text-base"
	                                        type="text" v-model="formData.card_number">
	                                    <div class="mb-5" v-if="formData.card_number == ''">
	                                    	<span class="text-red-400">{{ formErrors.card_number[0] }}</span>
	                                	</div>
	                                </div>
	                    		</div>

	                    		<div >
	                    			<div>
	                                    <label class="mb-1 inline-block">Expiry Month <span class="text-red-400">*</span></label>
	                                    <input
	                                        class="border border-solid border-gray-300 w-full mb-2 py-1 px-5 placeholder-current text-dark h-12 focus:outline-none text-base"
	                                        type="text" v-model="formData.expiry_month">
	                                    <div class="mb-5" v-if="formData.expiry_month == '' ">
	                                    	<span class="text-red-400">{{ formErrors.expiry_month[0] }}</span>
	                                	</div>
	                                </div>
	                    		</div>
	                    		<div >
	                    			<div>
	                                    <label class="mb-1 inline-block">Expiry Year <span class="text-red-400">*</span></label>
	                                    <input
	                                        class="border border-solid border-gray-300 w-full mb-2 py-1 px-5 placeholder-current text-dark h-12 focus:outline-none text-base"
	                                        type="text" v-model="formData.expiry_year">
	                                    <div class="mb-5" v-if="formData.expiry_year == '' ">
	                                    	<span class="text-red-400">{{ formErrors.expiry_year[0] }}</span>
	                                	</div>
	                                </div>
	                    		</div>
	                    		<div >
	                    			<div>
	                                    <label class="mb-1 inline-block">CVV <span class="text-red-400">*</span></label>
	                                    <input
	                                        class="border border-solid border-gray-300 w-full mb-2 py-1 px-5 placeholder-current text-dark h-12 focus:outline-none text-base"
	                                        type="text" v-model="formData.cvv">
	                                    <div class="mb-5" v-if="formData.cvv == '' ">
	                                    	<span class="text-red-400">{{ formErrors.cvv[0] }}</span>
	                                	</div>
	                                </div>
	                    		</div>
	                    	</div>
	                    </form>
	                </div>
	            </div>
	            <div class="col-span-12 lg:col-span-5 mt-4 mt-lg-0">
	                <div>
	                    <h3 class="text-lg font-semibold mb-5">Your order</h3>
	                    <div class="bg-gray-700 p-10">
	                        <div class="your-order-product-info">
	                            <ul class="flex flex-wrap items-center justify-between">
	                                <li class="text-base font-semibold">Product</li>
	                                <li class="text-base font-semibold">Total</li>
	                            </ul>
	                            <ul class="border-t border-b border-gray-600 py-5 my-5" v-if="cartItems.data">
	                                <li class="flex flex-wrap items-center justify-between" v-for="item in cartItems.data">
	                                    <span>{{ item.name }} X {{ item.total_product }}</span>
	                                    <span>${{ item.price*item.total_product }} </span>
	                                </li>
	                            </ul>
	                            <ul class="flex flex-wrap items-center justify-between">
	                                <li class="text-base font-semibold">Shipping</li>
	                                <li class="text-base font-semibold">Free shipping</li>
	                            </ul>
	                            <ul
	                                class="flex flex-wrap items-center justify-between border-t border-b border-gray-600 py-5 my-5">
	                                <li class="text-base font-semibold">Total</li>
	                                <li class="text-base font-semibold">${{ cartItems.price }}</li>
	                            </ul>
	                        </div>

	                    </div>
	                    <div class="mt-6">
	                        <a class="block w-full text-center leading-none uppercase text-white text-sm bg-dark px-5 py-5 transition-all hover:bg-orange font-semibold"
	                            href="#" @click="submitCheckout">Place Order</a>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </div>
	</div>
</template>

<script>
	
	import BreadCrum from './layouts/BreadCrum'
	import { useToast } from "vue-toastification";
	import { mapGetters } from 'vuex'
    import Preloader from './layouts/Preloader'

	export default{

		name:'Checkout',
		components:{

			BreadCrum,Preloader
		},

		data(){

			return{

				formData:{

					name:"",
					address:"",
					city:"",
					pincode:"",
					phone:"",
					card_name:"",
					card_number:"",
					expiry_month:"",
					expiry_year:"",
					cvv:"",
				},

				formErrors:{

					name:"",
					address:"",
					city:"",
					pincode:"",
					phone:"",
					card_name:"",
					card_number:"",
					expiry_month:"",
					expiry_year:"",
					cvv:"",
				},

				hideLoading:true
			}

		},
		methods:{

			submitCheckout(){

				this.hideLoading = false

				this.$store.dispatch('submitCheckout', this.formData)
					.then( (response) => {

						this.$store.dispatch('cartItems')

						useToast().success(response.msg)
						this.$router.push({'name':"home"})

					}).catch((error) =>{
							
						let errors = error.response.data.msg

						if ( error.response.status == 422 ) {

							this.formErrors.name = error.response.data.msg.name
							this.formErrors.city = errors.city
							this.formErrors.pincode = errors.pincode
							this.formErrors.address = errors.address
							this.formErrors.phone = errors.phone
							this.formErrors.card_name = errors.card_name
							this.formErrors.card_number = errors.card_number
							this.formErrors.expiry_month = errors.expiry_month
							this.formErrors.expiry_year = errors.expiry_year
							this.formErrors.cvv = errors.cvv

						}else{

                        	useToast().error(errors)
						}  

                        this.hideLoading = true
                        return false
                    })
				
			}
		},
		computed:{

			...mapGetters({

				cartItems:'cartItems',

			})
		}
	}
</script>
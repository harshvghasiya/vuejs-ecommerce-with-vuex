<template>
	
	<Preloader v-if="!hideLoading" />

	<bread-crum title="My Account" />

	<div class="pb-24 mt-16">
	    <div class="container">

	        <div id="shoptab" class="grid grid-cols-12 gap-y-5 lg:gap-y-0 gap-x-5">
	            <div class="col-span-12 lg:col-span-4">

	                <ul class="shop-tab-nav account-nav flex flex-wrap flex-col">

	                    <li :class="tabId=='whishlist' ? 'active':'' " @click="showTab('whishlist')"><a class="font-medium py-4 px-5 leading-none uppercase transition-all hover:text-white hover:bg-orange cursor-pointer text-base border-t border-l border-r border-gray-600 block"
	                            >my whishlist</a></li>

	                    <li :class="tabId=='payment-method' ? 'active':'' " @click="showTab('payment-method')"><a class="font-medium py-4 px-5 leading-none uppercase transition-all hover:text-white hover:bg-orange  text-base border-t cursor-pointer border-l border-r border-gray-600 block"
	                            >payment method</a></li>

	                    <li :class="tabId=='account' ? 'active':'' " @click="showTab('account')"><a
	                            class="font-medium py-4 px-5 leading-none uppercase transition-all hover:text-white hover:bg-orange  text-base border-t border-l border-r cursor-pointer border-gray-600 block"
	                            > Account Details </a></li>

	                    <li><router-link :to="{name: 'myorders'}" class="font-medium py-4 px-5 leading-none uppercase transition-all hover:text-white hover:bg-orange  text-base border-t border-l border-r border-b border-gray-600 block"
	                            >Orders</router-link></li>

	                    <li><a class="font-medium cursor-pointer py-4 px-5 leading-none uppercase transition-all hover:text-white hover:bg-orange  text-base border-t border-l border-r border-b border-gray-600 block"
	                            @click="logout">Logout</a></li>
	                </ul>
	            </div>
	            <div class="col-span-12 lg:col-span-8">
	                <div>
	                    <div id="whishlist" v-if="tabId == 'whishlist'" class="shop-tab-content">
	                        <div class="p-8 border border-gray-600">
	                            <h3
	                                class="font-semibold text-md lg:text-lg capitalize pb-5 mb-5 border-b border-gray-600 leading-none">
	                                Dashboard</h3>
	                            <p>
	                                Hello, <strong>Alex Tuntuni</strong> (If Not
	                                <strong>Tuntuni ! </strong><a href="login-register.html"
	                                    class="transition-all hover:text-orange">Logout</a>)
	                            </p>
	                            <p>
	                                From your account dashboard. you can easily check &amp; view
	                                your recent orders, manage your shipping and billing addresses
	                                and edit your password and account details.
	                            </p>
	                        </div>

	                    </div>
	                    
	                    <div id="payment-method" v-if="tabId == 'payment-method'" class="shop-tab-content">
	                        <div class="p-8 border border-gray-600">
	                            <h3
	                                class="font-semibold text-md lg:text-lg capitalize pb-5 mb-5 border-b border-gray-600 leading-none">
	                                Payment Method</h3>

	                            <div v-if="!paymentDetails">
	                            	<p class="font-medium p-4" v-if="!showCardForm" >You didn't Saved Your Payment Method yet. </p>

	                            	<div class="mt-5">
										<button v-if="!showCardForm" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800" @click="formToggle('show')">
										  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
										      Add Card Information
										  </span>
										</button>

	                                	<div class="grid grid-cols-12 gap-x-5" v-if="showCardForm">
	                                		<div class="col-span-12 mb-5">
	                                			<h4 class="text-md capitalize mt-4 mx-4 font-bold">Add Your card information</h4>
	                                		</div>
	                                		<div class="col-span-12 mb-5">
		                                        <input
		                                            class="border border-solid border-gray-300 w-full py-1 px-5 placeholder-current text-dark h-12 focus:outline-none text-base"
		                                            id="card_name" v-model="paymentForm.card_name" placeholder="Card Holder Name" type="text">
	                                        	<p class="mb-5 text-red-400" v-if="formErrors.card_name">{{ formErrors.card_name[0] }}</p>

		                                    </div>

		                                    <div class="col-span-12 mb-5">
		                                        <input
		                                            class="border border-solid border-gray-300 w-full py-1 px-5 placeholder-current text-dark h-12 focus:outline-none text-base"
		                                            id="card_number" v-model="paymentForm.card_number" placeholder="Card Number" type="text">
	                                        	<p class="mb-5 text-red-400" v-if="formErrors.card_number">{{ formErrors.card_number[0] }}</p>

		                                    </div> 

		                                    <div class="col-span-4 mb-5">
		                                        <input
		                                            class="border border-solid border-gray-300 w-full py-1 px-5 placeholder-current text-dark h-12 focus:outline-none text-base"
		                                            id="expiry_month" v-model="paymentForm.expiry_month" placeholder="Expiry Month" type="text">
	                                        	<p class="mb-5 text-red-400" v-if="formErrors.expiry_month">{{ formErrors.expiry_month[0] }}</p>

		                                    </div>

		                                    <div class="col-span-4 mb-5">
		                                        <input
		                                            class="border border-solid border-gray-300 w-full py-1 px-5 placeholder-current text-dark h-12 focus:outline-none text-base"
		                                            id="expiry_year" v-model="paymentForm.expiry_year" placeholder="Expiry Year" type="text">
	                                        	<p class="mb-5 text-red-400" v-if="formErrors.expiry_year">{{ formErrors.expiry_year[0] }}</p>

		                                    </div>

		                                    <div class="col-span-12 mb-5">
				                                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800" >
												  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" @click="saveCardInfo">
												      Save Card Information
												  </span>
												</button>


		                                        <button class="inline-block leading-none ml-12 uppercase rounded-lg text-white text-sm bg-dark px-3 py-3 transition-all hover:bg-orange"
	                                            aria-label="Update Password" type="button" @click="formToggle('hide')">Cancel
	                                        	</button>
		                                    </div>

	                                	</div>
	                            	</div>
	                            </div>
	                            <div v-else>
									<div class="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">

									    <img class="relative object-cover w-full h-full rounded-xl" src="../assets/card.png">

									    <div class="w-full px-8 absolute top-8">
									        <div class="flex justify-between">
									            <div class="">
									                <p class="font-light">
									                    Name
									                </p>
									                <p class="font-medium tracking-widest">
									                    {{ paymentDetails.card_name }}
									                </p>
									            </div>
									            <!-- <img class="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png" /> -->
									        </div>
									        <div class="pt-3">
									            <p class="font-light">
									                Card Number
									            </p>
									            <p class="font-medium tracking-more-wider">
									                {{ paymentDetails.card_number }}
									            </p>
									        </div>
									        <div class="pt-5 pr-6">
									            <div class="flex justify-between">
									               
									                <div class="">
									                    <p class="font-light text-xs text-xs">
									                        Expiry
									                    </p>
									                    <p class="font-medium tracking-wider text-sm">
									                    {{ paymentDetails.expiry_month }}/{{ paymentDetails.expiry_year}}
									                    </p>
									                </div>

									                <div class="">
									                    <p class="font-light text-xs">
									                        CVV
									                    </p>
									                    <p class="font-bold tracking-wider text-sm">
									                        ···
									                    </p>
									                </div>
									            </div>
									        </div>

									    </div>
									</div>

									<div class="mt-10">
										<button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800" @click="deleteCard">
											<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
											      Remove Card
											</span>
										</button>
									</div>
								</div>

	                        </div>
	                    </div>
	                    <div id="account" v-if="tabId == 'account'" class="shop-tab-content active">
	                        <div class="p-8 border border-gray-600">
	                            <h3
	                                class="font-semibold text-md lg:text-lg capitalize pb-5 mb-5 border-b border-gray-600 leading-none">
	                                Account Details</h3>
	                            <form method="post">
	                                <div class="grid grid-cols-12 gap-x-5">

	                                	<div class="col-span-12 mb-5">
	                                        <input
	                                            class="border border-solid border-gray-300 w-full py-1 px-5 mb-2 placeholder-current text-dark h-12 focus:outline-none text-base"
	                                            id="display-name" v-model="personalForm.name" placeholder="Display Name" type="text">
	                                        <p v-if="personalForm.name == ''" class="text-red-400">{{ formErrors.name[0] }}</p>
	                                    </div>

	                                    <div class="col-span-12 mb-5">
	                                        <input
	                                            class="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
	                                            id="addtext" v-model="personalForm.address" placeholder="Address" type="text">
	                                    </div>

	                                    <div class="col-span-12 lg:col-span-6 mb-5">
	                                        <input
	                                            class="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
	                                            id="city" v-model="personalForm.city" placeholder="City" type="text">
	                                    </div>

	                                    <div class="col-span-12 lg:col-span-6 mb-5">
	                                        <input
	                                            class="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
	                                            id="pincode" v-model="personalForm.pincode" placeholder="Pincode" type="text">
	                                    </div>

	                                    <div class="col-span-12">
	                                        <button
	                                            class="inline-block leading-none uppercase text-white text-sm bg-dark px-4 py-4 transition-all hover:bg-orange"
	                                            aria-label="Save Changes" type="button" @click="submitDetails">Save Changes</button>
	                                    </div>

	                                    <div class="col-span-12 mb-5 mt-12">
	                                        <h4 class="font-semibold text-base capitalize">Password change</h4>
	                                    </div>

	                                    <div class="col-span-12 mb-5">
	                                        <input
	                                            class="border border-solid border-gray-300 w-full py-1 px-5 placeholder-current text-dark h-12 focus:outline-none text-base"
	                                            id="current-pwd" v-model="passwordForm.current_password" placeholder="Current Password" type="password">
	                                        <p class="mb-5 text-red-400" v-if="formErrors.current_password">{{ formErrors.current_password[0] }}</p>
	                                    </div>

	                                    <div class="col-span-12 lg:col-span-6 mb-5">
	                                        <input
	                                            class="border border-solid border-gray-300 w-full py-1 px-5 placeholder-current text-dark h-12 focus:outline-none text-base"
	                                            id="new-pwd" v-model="passwordForm.new_password" placeholder="New Password"  type="password">
	                                        <p class="mb-5 text-red-400" v-if="formErrors.new_password">{{ formErrors.new_password[0] }}</p>

	                                    </div>

	                                    <div class="col-span-12 lg:col-span-6 mb-5">
	                                        <input
	                                            class="border border-solid border-gray-300 w-full py-1 px-5 placeholder-current text-dark h-12 focus:outline-none text-base"
	                                            id="confirm-pwd" v-model="passwordForm.confirm_password" placeholder="Confirm Password" type="password">
	                                        <p class="mb-5 text-red-400" v-if="formErrors.confirm_password">{{ formErrors.confirm_password[0] }}</p>

	                                    </div>

	                                    <div class="col-span-12">
	                                        <button
	                                            class="inline-block leading-none uppercase text-white text-sm bg-dark px-4 py-4 transition-all hover:bg-orange"
	                                            aria-label="Update Password" type="button" @click="updatePassword">Update Password</button>
	                                    </div>
	                                </div>
	                            </form>
	                        </div>
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
    import Preloader from './layouts/Preloader'

	export default{

		name:'Account',
		components:{

			Preloader,BreadCrum
		},
		data(){

			return{

				hideLoading:false,
				tabId:'account',
				passwordForm:{

					current_password:'',
					new_password:'',
					confirm_password:''
				},
				paymentForm:{

					card_number:'',
					card_name:'',
					expiry_year:'',
					expiry_month:'',
				},
				showCardForm:false,
				formErrors:{

					name:'',
					current_password:'',
					new_password:'',
					confirm_password:'',
					card_name:'',
					card_number:'',
					expiry_month:'',
					expiry_year:'',
				}

			}
		},
		methods:{

			logout(){

				let token = this.$store.state.token
				
				this.$store.dispatch('logout', token)
					.then( (response) => {

						window.localStorage.removeItem('token');

						this.$store.commit('updateToken', null)

						useToast().success( response.msg )
						this.$router.push({ name:'home'})

					}).catch( (error) => {

						useToast().error('Something went wrong try again later' )
					});
			},

			showTab(tabId){

				this.tabId = tabId
			},

			submitDetails(){

				this.hideLoading = false

				this.$store.dispatch('saveUserInfo', this.personalForm)
						  .then( (response) => {

						  		useToast().success(response.msg)
						  		this.hideLoading = true

						  })
						  .catch( (error) => {

						  		if ( error.response.status == 422 ) {

						  			this.formErrors.name = error.response.data.msg.name

						  		}else{

						  			useToast().error( error.response.data.msg )
						  		}

						  		this.hideLoading = true
						  })
			},

			updatePassword(){

				this.hideLoading = false

				this.$store.dispatch('updatePassword', this.passwordForm)
						  .then( (response) => {

						  		useToast().success(response.msg)
						  		this.formErrors.current_password = ''
						  		this.formErrors.new_password = ''
						  		this.formErrors.confirm_password = ''

						  		this.passwordForm = {

									current_password:'',
									new_password:'',
									confirm_password:''
								}
						  		this.hideLoading = true
						  })
						  .catch( (error) => {

						  		if ( error.response.status == 422 ) {

						  			this.formErrors.current_password = error.response.data.msg.current_password
						  			this.formErrors.new_password = error.response.data.msg.new_password
						  			this.formErrors.confirm_password = error.response.data.msg.confirm_password

						  		}else{

						  			this.formErrors.current_password = ''
						  			this.formErrors.new_password = ''
						  			this.formErrors.confirm_password = ''
						  			useToast().error( error.response.data.msg )
						  		}

						  		this.hideLoading = true
						  })
			},

			deleteCard(){

				this.$swal({
	              title: 'Are you sure?',
	              text: "Are you sure want to remove your card details!",
	              type: 'warning',
	              icon: 'warning',
	              showCancelButton: true,
	              confirmButtonColor: '#3085d6',
	              cancelButtonColor: '#d33',
	              confirmButtonText: 'Yes, remove it!'

	            }).then((result) => {

	              if (result.value) {

					this.hideLoading = false

	              	return this.$store.dispatch('deleteCard')
	              		.then((response) => {
		
							this.$store.dispatch('userInfo')
	              			
	              			useToast().success(response.msg)
	              			this.hideLoading = true
	              			return true

	              		}).catch((error) => {

	              			// console.log(error)
	              			useToast().success(error.response.data.msg)
	              			this.hideLoading = true
	              			return false
	              		})
	              }
	            });
			},

			formToggle(val){

				if ( val == 'show') {

					this.showCardForm = true
				}else{

					this.showCardForm = false
				}
			},

			saveCardInfo(){

				this.hideLoading = false

				this.$store.dispatch('saveCardInfo', this.paymentForm)
						  .then( (response) => {

						  		this.$store.dispatch('userInfo')

						  		this.formErrors.card_name = ''
						  		this.formErrors.card_number = ''
						  		this.formErrors.expiry_month = ''
						  		this.formErrors.expiry_year = ''
						  		
						  		useToast().success(response.msg)
						  		this.hideLoading = true
						  })
						  .catch( (error) => {

						  		if ( error.response.status == 422 ) {

						  			this.formErrors.card_name = error.response.data.msg.card_name
						  			this.formErrors.card_number = error.response.data.msg.card_number
						  			this.formErrors.expiry_month = error.response.data.msg.expiry_month
						  			this.formErrors.expiry_year = error.response.data.msg.expiry_month

						  		}else{

						  			this.formErrors.card_name = ''
						  			this.formErrors.card_number = ''
						  			this.formErrors.expiry_month = ''
						  			this.formErrors.expiry_year = ''
						  			useToast().error( error.response.data.msg )

						  		}	

						  		this.hideLoading = true
						  })
			}
		},

		computed:{

			personalForm(){

				return this.$store.state.userDetails.personalDetails
			},


			paymentDetails(){


				return this.$store.state.userDetails.paymentDetails
			}
		},

		mounted(){

			this.$store.dispatch('userInfo')
					   .then( ( response ) => {

					   		this.hideLoading = true
					   })
					   .catch( ( error ) => {

					   		useToast().error( error.response.data.msg )
					   		this.hideLoading = true
					   })

		}

	}
</script>
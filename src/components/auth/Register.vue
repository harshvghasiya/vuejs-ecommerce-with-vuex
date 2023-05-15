<template>
	
    <Preloader v-if="!hideLoading" />

	<bread-crum title="register to explore more" />
	
	<div class="pb-24 mt-16">
	    <div class="container">

	        <div class="grid grid-cols-12 gap-x-5">
	            <div class="col-span-12">
	                <div id="maintab">

	                    <div>
	                        <div id="register" class="custom-tab-content">
	                            <div class="p-8 md:p-20 shadow max-w-2xl mx-auto">
	                                <form method="post">

	                                	<div class="mb-5">
		                                    <input
		                                        class="border border-solid border-gray-500 w-full py-1 px-5 placeholder-current text-dark h-12 focus:outline-none text-base"
		                                        type="text" name="full-name" v-model="formData.name" placeholder="Full Name">
		                                    <div class="text-red-500" v-if="formErrors.name">
		                                    	{{ formErrors.name[0] }}
		                                    </div>
	                                	</div>

	                                	<div class="mb-5">
		                                    <input
		                                        class="border border-solid border-gray-500 w-full py-1 px-5  placeholder-current text-dark h-12 focus:outline-none text-base"
		                                        type="password" name="user-password" v-model="formData.password" placeholder="Password">

		                                    <div class="text-red-500" v-if="formErrors.password">
		                                    	{{ formErrors.password[0] }}
		                                    </div>
	                                    </div>

	                                	<div class="mb-5">
		                                    <input
		                                        class="border border-solid border-gray-500 w-full py-1 px-5  placeholder-current text-dark h-12 focus:outline-none text-base"
		                                        name="user-email" placeholder="Email" v-model="formData.email" type="email">

		                                    <div class="text-red-500" v-if="formErrors.email">
		                                    	{{ formErrors.email[0] }}
		                                    </div>
	                                    </div>


	                                	<div class="mb-5">
		                                    <input
		                                        class="border border-solid border-gray-500 w-full py-1 px-5  placeholder-current text-dark h-12 focus:outline-none text-base"
	                                        	name="address" placeholder="Address" v-model="formData.address" type="text">
	                                    </div>

	                                	<div class="mb-5">
		                                    <input
		                                        class="border border-solid border-gray-500 w-full py-1 px-5  placeholder-current text-dark h-12 focus:outline-none text-base"
		                                        name="pin" placeholder="Pin Code" v-model="formData.pincode" type="text">
		                                </div>

	                                    <div class="button-box">
	                                        <a @click="submitForm"
	                                            class="inline-block leading-none uppercase cursor-pointer text-white text-sm bg-dark text-center w-full py-3 rounded-lg transition-all hover:bg-orange">
	                                            <span>Register</span>
	                                        </a>
	                                    </div>
	                                </form>

	                                <div class="mt-14">
	                            		<span class="font-bold capitalize mr-3">Already have an account?</span><router-link class="font-bold text-orange-500" :to="{name:'login'}">Login in From Here</router-link>
	                            	</div>
	                            </div>
	                        </div>

	                    </div>
	                </div>

	            </div>
	        </div>


	    </div>

	</div>
</template>

<script>
  
  	import BreadCrum from '../layouts/BreadCrum.vue'
	import { useToast } from "vue-toastification";
    import Preloader from '../layouts/Preloader'
	
	export default{

		name:'Register',
		components:{

			BreadCrum,
			Preloader
		},
		data(){

			return{

				formData:{

					name:"",
					email:"",
					password:"",
					address:"",
					pincode:"",
				},

				formErrors:{

					name:"",
					email:"",
					password:"",
				},

				hideLoading:true

			}
		},

		methods:{

			submitForm(){

				this.hideLoading = false

				return this.$store.dispatch('registerUser', this.formData)
						.then((response) => {

							useToast().success(response.msg)
		                   this.$router.push({ name:'login'})
		                   this.hideLoading = true

		                }).catch((error) => {
							

							if ( error.response.status == 422 ) {

								this.formErrors.name = error.response.data.msg.name
								this.formErrors.email = error.response.data.msg.email
								this.formErrors.password = error.response.data.msg.password

							}else{

								useToast().error('Something went wrong')
							}
							
							this.hideLoading = true
							return false;

							window.scrollBy(0, -200);

						});

			}
		}
	}
</script>
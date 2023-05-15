<template>
	
	<Preloader v-if="!hideLoading" />

	<bread-crum title="Login to explore more" />
	
	<div class="pb-24 mt-16">
	    <div class="container">

	        <div class="grid grid-cols-12 gap-x-5">
	            <div class="col-span-12">
	                <div id="maintab">

	                    <div>
	                       
	                        <div id="login" class="custom-tab-content">
	                            <div class="p-8 md:p-20 shadow max-w-2xl mx-auto">
	                                <form method="post">

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
		                                        type="password" name="user-password" v-model="formData.password" placeholder="Password">

		                                    <div class="text-red-500" v-if="formErrors.password">
		                                    	{{ formErrors.password[0] }}
		                                    </div>
	                                    </div>

	                                    <div class="button-box mt-8">
	                                        <a @click="submitForm"
	                                            class="inline-block w-full leading-none uppercase cursor-pointer text-white text-sm bg-dark text-center py-3 rounded-lg transition-all hover:bg-orange">
	                                            Login
	                                        </a>
	                                    </div>

	                                   	<div class="button-box mt-5">

	                                        <a @click="showCredential"
	                                            class="inline-block w-full leading-none uppercase cursor-pointer text-white text-sm bg-dark text-center py-3 rounded-lg transition-all hover:bg-orange">
	                                            Login with test credentials
	                                        </a>
	                                    </div>
	                                </form>

	                                <div class="mt-14">
	                            		<span class="font-bold capitalize mr-3">Create new account?</span><router-link class="font-bold text-orange-500" :to="{name:'register'}">Register From Here</router-link>
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

		name:'Login',
		components:{

			BreadCrum,Preloader
		},
		data(){

			return{

				formData:{

					email:"",
					password:"",
					
				},

				formErrors:{

					email:"",
					password:"",
				},

				hideLoading:true

			}
		},

		methods:{

			submitForm(){

				this.hideLoading = false

				return this.$store.dispatch('loginUser', this.formData)
						   .then( (response) => {

								useToast().success(response.msg)
						   		this.$router.push({ name:'home'})
		                   		this.hideLoading = true

						   }).catch( (error) => {

							   	if ( error.response.status == 422 ) {

									this.formErrors.email = error.response.data.msg.email
									this.formErrors.password = error.response.data.msg.password

								}else{

									useToast().error(error.response.data.msg)
								}
								
								this.hideLoading = true
								return false;

						   })
			},

			showCredential(){

				this.formData.email = 'test@gmail.com'
				this.formData.password = '123456'
			}
		}

	}
</script>
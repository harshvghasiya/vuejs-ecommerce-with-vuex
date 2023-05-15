<template>
	<div class="px-4 md:px-10 2xl:px-24 py-6 lg:py-0">
		<div class="flex items-center lg:relative">
		    <div class="w-6/12 lg:w-2/12">
		    	<div class="logo">
		    		<a href="index.html">
		    			<img src="../../assets/logo.png" alt="logo" loading="lazy" width="125" height="45" />
		    		</a>
		    	</div>
			</div>
		    <div class="hidden lg:flex flex-1 xl:relative">
		      	<nav class="main-menu">
				  <ul class="flex flex-wrap">
				    
				    <li class="main-menu__item">
				    	<router-link class="block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-primary hover:text-orange transition-all" :to="{ name:'home'}">Home</router-link>
				    </li>
				    <li class="main-menu__item" v-if="!isAuthenticated">
				    	<router-link class="block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-primary hover:text-orange transition-all" :to="{ name:'login'}">Login</router-link>
				    </li>
				    <li class="main-menu__item" v-if="!isAuthenticated">
				    	<router-link class="block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-primary hover:text-orange transition-all" :to="{ name:'register'}">Register</router-link>
				    </li>
				    <li class="main-menu__item" v-if="isAuthenticated">
				    	<router-link :to="{ name:'myorders'}" class="block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-primary hover:text-orange transition-all">My Orders</router-link>
				    </li>

				    <li class="main-menu__item" v-if="isAuthenticated">
				    	<router-link :to="{ name:'myaccount'}" class="block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-primary hover:text-orange transition-all">Account</router-link>
				    </li>
				    <li class="main-menu__item" v-if="isAuthenticated">
				    	<a href="#" class="block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-primary hover:text-orange transition-all" @click="logout">Logout</a>
				    </li>
				  </ul>
				</nav>

		    </div>

		    <div class="w-6/12 lg:w-3/12">
		    	<ul class="flex items-center justify-end">
				  <li class="ml-6">
				    <router-link :to="{name: 'cart'}" class="text-primary text-md hover:text-orange transition-all relative offcanvas-toggle">
				      <span class="w-5 h-5 bg-dark text-white text-sm rounded-full font-normal flex flex-wrap items-center justify-center absolute -top-3 left-2 leading-none">{{ cartItems.total }}</span>
				      <i class="icon-bag"></i>
				      <span class="text-base leading-none text-dark">${{ cartItems.price }}</span>
				    </router-link>
				  </li>
				</ul>	
			</div>
		</div>
	</div>

</template>

<script>
	
	import { mapGetters } from 'vuex'
	import { useToast } from "vue-toastification";

	export default {

		name: 'Header',
		mounted(){

			this.$store.dispatch('cartItems')
			
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
			}
		},
		computed:{

			...mapGetters({

				cartItems:'cartItems',
				isAuthenticated:'isAuthenticated'
			})
		}
	}
</script>

<style>
	
	.router-link-active{

		color:rgb(252 101 57)!important;
	}	
</style>
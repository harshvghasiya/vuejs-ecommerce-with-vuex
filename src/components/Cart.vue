<template>

    <Preloader v-if="!hideLoading" />

	<bread-crum title="Cart" />

	<div class="py-24">

	    <div class="container">
	        <div class="grid grid-cols-1 gap-x-5">
	            <div class="overflow-x-auto">
	                <table class="w-full min-w-max" v-if="cartItems.data.length">
	                    <thead>
	                        <tr>
	                            <th
	                                class="bg-gray-300 p-3 border border-solid border-gray-600 text-center font-medium text-sm capitalize">
	                                Image</th>
	                            <th
	                                class="bg-gray-300 p-3 border border-solid border-gray-600 text-center font-medium text-sm capitalize">
	                                Product</th>
	                            <th
	                                class="bg-gray-300 p-3 border border-solid border-gray-600 text-center font-medium text-sm capitalize">
	                                Price</th>
	                            <th
	                                class="bg-gray-300 p-3 border border-solid border-gray-600 text-center font-medium text-sm capitalize">
	                                Quantity</th>
	                            <th
	                                class="bg-gray-300 p-3 border border-solid border-gray-600 text-center font-medium text-sm capitalize">
	                                Total</th>
	                            <th
	                                class="bg-gray-300 p-3 border border-solid border-gray-600 text-center font-medium text-sm capitalize">
	                                Remove</th>
	                        </tr>
	                    </thead>
	                    <tbody>
	                        <tr v-for="item in cartItems.data" :key="item.cart_id">
	                            <td class="w-32 p-3 border border-solid border-gray-600 text-center">
	                                <a href="#">
	                                    <img :src="item.image" alt="product image"></a>
	                            </td>
	                            <td class="p-3 border border-solid border-gray-600 text-center">
	                                <a href="#" class="transition-all hover:text-orange">{{ item.name }}</a>
	                            </td>
	                            <td class="p-3 border border-solid border-gray-600 text-center">
	                                <span><span>${{ item.price }}</span></span>
	                            </td>
	                            <td class="p-3 border border-solid border-gray-600 text-center">

	                                <div class="flex count border border-solid border-gray-300 p-2 h-11">
	                                    <button class="decrement flex-auto w-5 leading-none" aria-label="button" @click="updateCart(item.cart_id, 'dec')" >-</button>
	                                    <input type="number" disabled="true" min="1" max="100" v-model="item.total_product" :name="'no'+item.cart_id" 
	                                        class="quantity__input flex-auto w-8 text-center focus:outline-none input-appearance-none">
	                                    <button class="increment flex-auto w-5 leading-none" @click="updateCart(item.cart_id, 'inc')" aria-label="button">+</button>
	                                </div>
	                            </td>
	                            <td class="p-3 border border-solid border-gray-600 text-center"><span>${{ item.total_product*item.price }}</span></td>
	                            <td class="p-3 border border-solid border-gray-600 text-center">
	                               <!--  <a href="#" class="inline-block mx-1 hover:text-orange transition-all"><i
	                                        class="icon-pencil"></i></a> -->
	                                <a href="#" class="inline-block mx-1 hover:text-orange transition-all" @click="removeCart(item.cart_id)"><i
	                                        class="icon-close"></i></a>
	                            </td>
	                        </tr>
	                        

	                    </tbody>
	                </table>
	                <div v-else>
	                    	<h4 class="text-orange-600 font-bold font-lg">No Items in Cart!</h4>
	                </div>
	            </div>
	        </div>
	    </div>

	</div>


	<section class="pb-24" v-if="cartItems.data.length">
	    <div class="container">
	        <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-5">
	            <!-- <div>
	                <div>
	                    <h3 class="text-md font-semibold capitalize mb-8">calculate shipping</h3>
	                    <form action="#">
	                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-5">
	                            <div class="col-span-2 sm:col-span-1">
	                                <select
	                                    class="border border-solid border-gray-300 bg-transparent w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base">
	                                    <option>Select country</option>
	                                    <option>Azerbaijan</option>
	                                    <option>Bahamas</option>
	                                    <option>Bahrain</option>
	                                    <option>Bangladesh</option>
	                                    <option>Barbados</option>
	                                </select>
	                            </div>

	                            <div class="col-span-2 sm:col-span-1">
	                                <select
	                                    class="border border-solid border-gray-300 bg-transparent w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base">
	                                    <option>Select State</option>
	                                    <option>Azerbaijan</option>
	                                    <option>Bahamas</option>
	                                    <option>Bahrain</option>
	                                    <option>Bangladesh</option>
	                                    <option>Barbados</option>
	                                </select>
	                            </div>

	                            <div class="col-span-2 sm:col-span-1">
	                                <input
	                                    class="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
	                                    placeholder="Postcode / ZIP" type="text">
	                            </div>

	                            <div class="col-span-2 sm:col-span-1">
	                                <a href="#"
	                                    class="inline-block bg-dark leading-none py-4 px-5 md:px-8 text-sm text-white transition-all hover:bg-orange uppercase font-semibold hover:text-white mb-5 sm:mb-0">estimate</a>
	                            </div>

	                            <div class="col-span-2">
	                                <h3 class="text-md font-semibold capitalize mb-8">Discount coupon Code</h3>
	                            </div>

	                            <div class="col-span-2 sm:col-span-1">
	                                <input
	                                    class="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
	                                    placeholder="coupon Code" type="text">
	                            </div>

	                            <div class="col-span-2 sm:col-span-1">
	                                <a href="#"
	                                    class="inline-block bg-dark leading-none py-4 px-5 md:px-8 text-sm text-white transition-all hover:bg-orange uppercase font-semibold hover:text-white mb-8 sm:mb-0">apply
	                                    code</a>
	                            </div>

	                        </div>
	                    </form>
	                </div>
	            </div> -->
	            <div class="mt-4 lg:mt-0">
	                <div class="bg-gray-700 p-10">
	                    <ul class="flex flex-wrap items-center justify-between">
	                        <li class="text-base font-semibold">Product</li>
	                        <li class="text-base font-semibold">Total</li>
	                    </ul>

	                    <ul class="flex flex-wrap items-center justify-between">
	                        <li class="text-base font-semibold">Shipping</li>
	                        <li class="text-base font-semibold">Free shipping</li>
	                    </ul>
	                    <div class="border-t border-b border-gray-600 py-5 mt-5">
	                        <ul class="flex flex-wrap items-center justify-between">
	                            <li class="text-base font-semibold">Total</li>
	                            <li class="text-base font-semibold text-orange">${{ cartItems.price }}</li>
	                        </ul>
	                    </div>
	                </div>
	                <div class="mt-8" >
	                    <router-link :to="{name:'checkout'}"
	                        class="inline-block bg-dark leading-none py-4 px-5 md:px-8 text-sm text-white transition-all hover:bg-orange uppercase font-semibold hover:text-white">Checkout</router-link>
	                </div>
	            </div>
	        </div>
	    </div>
	</section>
	
</template>

<script>
	
	import Preloader from './layouts/Preloader'
	import BreadCrum from './layouts/BreadCrum'
    import { useToast } from "vue-toastification";
	import { mapGetters } from 'vuex'

	export default{

		name:'Cart',
		components:{

			Preloader,BreadCrum
		},
		data(){

			return{

				hideLoading:false,
				total_product:[],
				updateCartItem:{

					cartId:null,
					type:null,
				}
			}
		},
		methods:{

			removeCart(cartId){

				this.$swal({
	              title: 'Are you sure?',
	              text: "Are you sure want to remove this item from cart!",
	              type: 'warning',
	              icon: 'warning',
	              showCancelButton: true,
	              confirmButtonColor: '#3085d6',
	              cancelButtonColor: '#d33',
	              confirmButtonText: 'Yes, remove it!'

	            }).then((result) => {

	              if (result.value) {

					this.hideLoading = false

	              	return this.$store.dispatch('removeCart', cartId)
	              		.then((response) => {
	              			
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

			updateCart(cartId, type){

				this.hideLoading = false
				this.updateCartItem.cartId = cartId
				this.updateCartItem.type = type

				this.$store.dispatch('updateCart', this.updateCartItem)
					.then( (response) =>{

						useToast().success(response.msg)
						this.hideLoading = true

					})
					.catch( (error) => {

						useToast().error( error.response.data.msg )
						this.hideLoading = true

					})
			},

			decrement(cartId){


			}
		},
		mounted(){

			this.hideLoading = true

		},
		computed:{

			...mapGetters({

				cartItems:'cartItems',

			})
		}
	}
</script>
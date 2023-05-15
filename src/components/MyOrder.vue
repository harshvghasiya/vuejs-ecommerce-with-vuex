<template>
	<Preloader v-if="!hideLoading" />
	
	<bread-crum title="MyOrders" />

	<div class="py-24">

	    <div class="container">
	        <div class="grid grid-cols-1 gap-x-5">
	            <div class="overflow-x-auto">
	                <table class="w-full min-w-max" v-if="myOrders.data.length">
	                    <thead>
	                        <tr>
	                            <th
	                                class="bg-gray-300 p-3 border border-solid border-gray-600 text-center font-medium text-sm capitalize">
	                                Image</th>
	                            <th
	                                class="bg-gray-300 p-3 border border-solid border-gray-600 text-center font-medium text-sm capitalize">
	                                Product Details</th>
	                            <th
	                                class="bg-gray-300 p-3 border border-solid border-gray-600 text-center font-medium text-sm capitalize">
	                                Address</th>
	                            <th
	                                class="bg-gray-300 p-3 border border-solid border-gray-600 text-center font-medium text-sm capitalize">
	                                Total</th>
	                            <th
	                                class="bg-gray-300 p-3 border border-solid border-gray-600 text-center font-medium text-sm capitalize">
	                                Order Status</th>
	                        </tr>
	                    </thead>
	                    <tbody>
	                        <tr v-for="item in myOrders.data" :key="item.id">
	                            <td class="w-32 p-3 border border-solid border-gray-600 text-center">
	                                <a href="#">
	                                    <img :src="item.image" alt="product image"></a>
	                            </td>
	                            <td class="p-3 border border-solid border-gray-600 ">
	                                <p><span class="font-bold text-black">Product Name:</span> <span>{{ item.name }}</span></p>
	                                <p><span class="font-bold text-black">Price:</span> <span>{{ item.price }} X {{ item.total_product }}</span></p>
	                            </td>

	                            <td class="p-3 border border-solid border-gray-600 ">
	                            	<h4 class="font-medium font-bold mb-1">Personal Details</h4>
	                                <p><span class="font-medium text-black-900">Order By:</span> <span class="text-black">{{ item.user_name }}</span></p>
	                                <p><span class="font-medium text-black-900">Phone:</span> <span class="text-black">{{ item.phone }}</span></p>

	                            	<h4 class="font-medium font-bold mt-3">Address</h4>

	                                <p><span class="text-black">{{ item.address }}</span></p>
	                                <p><span class="text-black">{{ item.city }}, {{ item.pincode }}</span></p>
	                            </td>
	                            <td class="p-3 border border-solid border-gray-600 text-center">
	                                <span><span>${{ item.price*item.total_product }}</span></span>
	                            </td>
	                            <td class="p-3 border border-solid border-gray-600 text-center">	
	                            	<span class="p-2 text-xs rounded-md text-center bg-green-400 text-white" v-if="item.status == 'Placed' ">{{ item.status }}</span>
	                            	<span class="p-2 text-xs rounded-md text-center bg-violet-400 text-white" v-if="item.status == 'Dispatch' ">{{ item.status }}</span>
	                            	<span class="p-2 text-xs rounded-md text-center bg-blue-400 text-white" v-if="item.status == 'Delivered' ">{{ item.status }}</span>
	                            	<span class="p-2 text-xs rounded-md text-center bg-red-400 text-white" v-if="item.status == 'Failed' ">{{ item.status }}</span>
	                            </td>
	                        </tr>
	                        

	                    </tbody>
	                </table>
	                <div v-else>
	                    	<h4 class="text-orange-600 font-bold font-lg">No Order Found!</h4>
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

		name:'MyOrder',
		components:{

			Preloader, 
			BreadCrum
		},
		data(){

			return{

				hideLoading:false
			}
		},
		mounted(){

			this.$store.dispatch('myOrders')
						.then( (response) => { 
							this.hideLoading = true
						})
						.catch((error) => {
		                    useToast().error('Something Went Wrong')
		                    this.hideLoading = true
		                })
		},
		computed:{

			myOrders(){

				return this.$store.state.myOrders
			}
		}
	}
</script>
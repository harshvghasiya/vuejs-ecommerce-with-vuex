<template>
	
	<Preloader v-if="!hideLoading" />
	
	<bread-crum title="Product Details" />

	<div class="py-24" v-if="productDetail">
	    <div class="container">
	        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
	            <div>
	                <div class="relative overflow-hidden">
	                    <span
	                        class="font-semibold uppercase text-sm text-white inline-block py-1 px-2 leading-none absolute top-3  z-10 right-3 bg-orange" v-if="productDetail.discount != '' ">{{ productDetail.discount }}% Off</span>
	                    <div class="gallery mb-6">
	                        <div class="swiper-container">
	                            <swiper
									    :loop="true"
									    :pagination="{
									      clickable: true,
									    }"
									    :grabCursor="true"
									    :navigation="true"
									    :modules="modules"
									    class="swiper-wrapper">
	                                <swiper-slide>
	                                    <img :src="productDetail.image" :alt="productDetail.name">
	                                </swiper-slide>
	                                <swiper-slide v-if="productDetail.extra_images" v-for="img in productDetail.extra_images">
	                                    <img :src="img" :alt="productDetail.name">
	                                </swiper-slide>
	                            </swiper>
	                        </div>

	                    </div>

	                    <div class="gallery-nav relative">
	                        <div class="swiper-container">
	                            <swiper 
	                            		:slidesPerView="4"
									    :spaceBetween="0"
									    :grabCursor="true"
									    :loop="true"
									    :pagination="{
									      clickable: true,
									    }"
									    :navigation="true"
									    :modules="modules" 
									    :freeMode="true"
									    class="swiper-wrapper">
	                                <swiper-slide>
	                                    <img :src="productDetail.image" :alt="productDetail.name">
	                                </swiper-slide>
	                                <swiper-slide v-if="productDetail.extra_images" v-for="img in productDetail.extra_images">
	                                    <img :src="img" :alt="productDetail.name">
	                                </swiper-slide>
	                            </swiper>
	                        </div>

	                    </div>

	                </div>
	            </div>

	            <div>
	                <h3 class="font-medium text-lg capitalize">{{ productDetail.name }}</h3>
	                <h5 class="font-bold text-md leading-none text-orange my-3"><del
	                        class="font-normal text-sm mr-1 inline-block">${{ productDetail.orignal_price }}</del>${{ productDetail.sell_price }}</h5>
	                <p class="mb-8">{{ productDetail.description }}</p>

	                <div>

	                    <div class="mb-8">
	                        <div class="flex flex-wrap items-center mt-8">
	                           
	                            <div class="ml-2 sm:ml-8">
	                                <button
	                                    class="bg-black leading-none py-4 px-5 md:px-8 font-normal text-sm h-11 text-white transition-all hover:bg-orange"
	                                    aria-label="add to cart" v-on:click="addToCart(productDetail.id)">Add to Cart</button>
	                            </div>
	                            <a href="#" class="text-md ml-8"><i class="icon-heart"></i></a>
	                        </div>
	                    </div>

	                </div>

	            </div>
	        </div>
	    </div>
	</div>

	<div id="maintab" class="pb-24">
	    <div class="container">
	        <div class="grid grid-cols-1 gap-x-5">
	            <div class="border border-solid border-gray-300 p-8">
	                <ul class="custom-tab-nav flex flex-wrap items-center mb-10 -mx-5 -my-1">
	                    <li :class="[ 'mx-5', 'my-1', tabId == 'description' ? 'active' : '']" @click="showTab('description')"><a
	                            class="pb-3 leading-none capitalize transition-all hover:text-orange text-base sm:text-md before:absolute before:left-auto before:right-0 before:bottom-0 cursor-pointer before:w-0 before:h-2px before:empty before:bg-orange relative before:transition-all ease-out"
	                            >Description</a></li>
	                    <li :class="[ 'mx-5', 'my-1', tabId == 'product-details' ? 'active' : '']" @click="showTab('product-details')"><a
	                            class="pb-3 leading-none capitalize transition-all hover:text-orange text-base sm:text-md before:absolute before:left-auto before:right-0 before:bottom-0 cursor-pointer before:w-0 before:h-2px before:empty before:bg-orange relative before:transition-all ease-out"
	                            >Product Details</a></li>
	                    <li :class="[ 'mx-5', 'my-1', tabId == 'review' ? 'active' : '']" @click="showTab('review')"><a
	                            class="pb-3 leading-none capitalize transition-all hover:text-orange text-base sm:text-md before:absolute before:left-auto before:right-0 before:bottom-0 cursor-pointer before:w-0 before:h-2px before:empty before:bg-orange relative before:transition-all ease-out"
	                            >Reviews</a></li>
	                </ul>
	                <div id="description" v-if="tabId == 'description'" class="custom-tab-content">
	                    <div v-if="productDetail">
	                        {{ productDetail.long_description }}
	                    </div>
	                </div>

	                <div id="product-details" v-if="tabId == 'product-details'" class="custom-tab-content">
	                    <div class="review-bottom">
	                        <div class="single-product-desc">
	                            <div class="product-anotherinfo-wrapper">
	                                <ul v-if="productDetail.extra_details">
	                                    <li class="mb-4" v-for="edetail in productDetail.extra_details">
	                                    	<span class="font-semibold w-28 inline-block">{{ edetail.detail_key }}</span> {{ edetail.detail_value }}
	                                    </li>
	                                </ul>
	                            </div>
	                        </div>
	                    </div>

	                </div>

	                <div id="review" v-if="tabId == 'review'" class="custom-tab-content">
	                    <div>

	                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-5 xl:gap-x-10">
	                            <div>

	                                <div class="flex flex-wrap flex-col sm:flex-row items-start relative mb-12">
	                                    <img class="mr-7 mb-5 sm:mb-0" src="" alt="">
	                                    <div class="flex-1">
	                                        <div class="flex flex-wrap">
	                                            <h4 class="text-base text-dark font-semibold">White Lewis</h4>
	                                            <div class="ml-8 text-orange">
	                                                <i class="icofont-star"></i>
	                                                <i class="icofont-star"></i>
	                                                <i class="icofont-star"></i>
	                                                <i class="icofont-star"></i>
	                                                <i class="icofont-star"></i>
	                                            </div>
	                                        </div>
	                                        <div class="text-right">
	                                            <a class="hover:text-orange transition-all" href="#">Reply</a>
	                                        </div>
	                                        <p>
	                                            Vestibulum ante ipsum primis aucibus orci
	                                            luctustrices posuere cubilia Curae Suspendisse
	                                            viverra ed viverra. Mauris ullarper euismod
	                                            vehicula. Phasellus quam nisi, congue id nulla.
	                                        </p>
	                                    </div>
	                                </div>
	                                <div class="flex flex-wrap flex-col sm:flex-row items-start relative mb-12">
	                                    <img class="mr-7 mb-5 sm:mb-0" src="" alt="">
	                                    <div class="flex-1">
	                                        <div class="flex flex-wrap">
	                                            <h4 class="text-base text-dark font-semibold">White Lewis</h4>
	                                            <div class="ml-8 text-orange">
	                                                <i class="icofont-star"></i>
	                                                <i class="icofont-star"></i>
	                                                <i class="icofont-star"></i>
	                                                <i class="icofont-star"></i>
	                                                <i class="icofont-star"></i>
	                                            </div>
	                                        </div>
	                                        <div class="text-right">
	                                            <a class="hover:text-orange transition-all" href="#">Reply</a>
	                                        </div>
	                                        <p>
	                                            Vestibulum ante ipsum primis aucibus orci
	                                            luctustrices posuere cubilia Curae Suspendisse
	                                            viverra ed viverra. Mauris ullarper euismod
	                                            vehicula. Phasellus quam nisi, congue id nulla.
	                                        </p>
	                                    </div>
	                                </div>

	                            </div>
	                            <div>
	                                <h4 class="text-base text-dark font-semibold">Add a Review</h4>
	                                <form action="#">
	                                    <div class="flex flex-wrap mb-5">
	                                        <span class="mr-4">Your rating:</span>
	                                        <div class="text-orange">
	                                            <i class="icofont-star"></i>
	                                            <i class="icofont-star"></i>
	                                            <i class="icofont-star"></i>
	                                            <i class="icofont-star"></i>
	                                            <i class="icofont-star"></i>
	                                        </div>
	                                    </div>
	                                    <div class="grid grid-cols-2 gap-x-4">
	                                        <div class="leave-form col-span-2 sm:col-span-1">
	                                            <input
	                                                class="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
	                                                placeholder="Name" type="text">
	                                        </div>
	                                        <div class="leave-form col-span-2 sm:col-span-1">
	                                            <input
	                                                class="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
	                                                placeholder="Email" type="email">
	                                        </div>
	                                        <div class="text-leave col-span-2">
	                                            <textarea
	                                                class="border border-solid border-gray-300 w-full py-1 px-5 mb-8 placeholder-current text-dark h-60 focus:outline-none text-base resize-none"
	                                                name="Your Review" placeholder="Message"></textarea>
	                                            <button type="submit"
	                                                class="leading-none uppercase text-white text-sm bg-orange px-5 py-5 transition-all hover:bg-dark"
	                                                aria-label="post">Post comment</button>
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
	</div>

</template>

<script>
	
	import BreadCrum from './layouts/BreadCrum'
	import { useToast } from "vue-toastification";
    import Preloader from './layouts/Preloader'

    import { Swiper, SwiperSlide } from 'swiper/vue';

	 // Import Swiper styles
	import 'swiper/css';

	import 'swiper/css/free-mode';
	import 'swiper/css/navigation';

	import { Navigation, FreeMode } from 'swiper';

	export default{

		name:'ProductDetail',
		components:{

			BreadCrum,Preloader, Swiper,
      		SwiperSlide,
		},
		data(){

			return{

				hideLoading:false,
				slug:'',
				tabId:'description'
			}
		},
		setup() {

	      return {

	        modules: [Navigation, FreeMode],
	      };

	    },
	    methods:{

	    	addToCart(id){

                this.hideLoading = false

                let data = {

                    id:id
                }

                return this.$store.dispatch('addToCart', data)
                        .then((response) => {

                            console.log(response)
                            useToast().success(response.msg)
                            this.hideLoading = true 

                            return true

                        }).catch((error) =>{
                            
                            useToast().error(error.response.data.msg)
                            this.hideLoading = true
                            return false
                        })
            },

            showTab(tabId){

            	this.tabId = tabId
            }
	    },
		mounted(){

			this.slug = this.$route.params.slug
			this.$store.dispatch('productDetail', this.slug)
				.then( ( response ) =>{

					this.hideLoading = true
				})
				.catch( ( error ) => {

					useToast().error(error.response.data.msg);
					this.hideLoading = true
					this.$router.push({ name: 'home'})
				})
		},
		computed:{

			productDetail(){

				return this.$store.state.productDetail.details
			}
		}
	}
</script>
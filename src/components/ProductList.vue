<template>

    <Preloader v-if="!hideLoading" />
    <div class="flex flex-wrap -mb-7 -px-4" v-if="products.length">

        <div class="w-full md:w-1/2 xl:w-1/3 px-4 mb-7" v-for="product in products" :key="product.id">
            <div class="border border-solid border-gray-300 transition-all hover:shadow-product group relative">
                <div class="relative overflow-hidden">
                    <span
                        class="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3" v-if="product.discount != '' ">Sale</span>
                    <span
                        class="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3" v-if="product.discount != '' ">-{{ product.discount }}%</span>
                    <img class="w-full h-full" :src="product.image" alt="product image"
                        loading="lazy" width="432" height="480" />

                    <div class="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                        <ul
                            class="flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden">

                            <li class="py-4 pl-7 md:py-5 md:pl-8" v-if="product.slug">
                                <router-link :to="{ name:'productDetail', params:{ slug: product.slug} }" class="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="quick view" data-tippy-content="Quick View">
                                    <i class="icon-magnifier"></i>
                                </router-link>
                            </li>
                            <li class="py-4 pl-7 md:py-5 md:pl-8">
                                <a href="whishlist.html"
                                    class="text-dark flex items-center justify-center text-md hover:text-orange"
                                    aria-label="quick veiw" data-tippy-content="Add to wishlist">
                                    <i class="icon-heart"></i>
                                </a>
                            </li>
                           
                            <li class="py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8" v-if="product.slug">
                                <router-link :to="{ name:'productDetail', params:{ slug: product.slug} }" 
                                    class="text-dark flex items-center justify-center cursor-pointer text-md hover:text-orange"
                                    aria-label="add to cart" data-tippy-content="Add to cart" v-on:click="addToCart(product.id)">
                                    <i class="icon-bag"></i>
                                </router-link>
                            </li>
                            <li class="py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8" v-else>
                                <a
                                    class="text-dark flex items-center justify-center cursor-pointer text-md hover:text-orange"
                                    aria-label="add to cart" data-tippy-content="Add to cart" v-on:click="addToCart(product.id)">
                                    <i class="icon-bag"></i>
                                </a>
                            </li>

                        </ul>
                    </div>

                </div>

                <div class="py-5 px-4">
                    <h4><a class="block text-base hover:text-orange transition-all" href="#">{{ product.name }}</a>
                    </h4>
                    <h5 class="font-bold text-md leading-none text-orange mt-3"><del
                            class="font-normal text-sm mr-1 inline-block">${{ product.orignal_price }}</del>${{ product.sell_price }}</h5>
                </div>
            </div>

        </div>

    </div>

    <div class="mt-12" v-if="products.length">
        <ul class="pagination flex flex-wrap items-center justify-center">
            <li class="mx-2" v-if="filter.currentPage != 1">
                <a class="flex flex-wrap items-center justify-center  w-11 h-11 bg-white shadow text-orange leading-none transition-all hover:bg-orange hover:text-white"  @click="onChangePagination(filter.currentPage-1)"  href="#">
                    <i class="icon-arrow-left"></i>
                </a>
            </li>


            <li class="mx-2" v-for="page in totalPage" :key="page">
                <a :class="[
                    'flex', 'flex-wrap', 'items-center', 'justify-center',  'w-11', 'h-11', 'bg-white', 'shadow', 'text-orange', 'leading-none', 'transition-all', 'hover:bg-orange', 'hover:text-white', filter.currentPage == page ? 'active':'']" href="#" @click="onChangePagination(page)">{{ page }}</a>
            </li>

            <li class="mx-2" v-if="filter.currentPage != totalPage">
                <a class="flex flex-wrap items-center justify-center  w-11 h-11 bg-white shadow text-orange leading-none transition-all hover:bg-orange hover:text-white" @click="onChangePagination(filter.currentPage+1)" href="#">
                    <i class="icon-arrow-right"></i>
                </a>
            </li>
        </ul>
    </div>

    <div class="mt-12" v-else>
        <h2 class="text-lg text-orange-700 font-bold text-center" >No Products Found</h2>
    </div>

</template>

<script>
    
    import Preloader from './layouts/Preloader'
    import { useToast } from "vue-toastification";

    export default {

        name: 'ProductList',
        components:{
            Preloader,
        },

        props:{

            filter:Object
        },

        data(){

            return{

                hideLoading:false,
                totalPage:1,
            }
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

            onChangePagination(page = 1){

                this.hideLoading = false

                this.filter.page = page

                this.filter.currentPage = page;

                console.log(this.filter)

                // this.$store.dispatch('productList', this.filter)
                //    .then((response) => {
                       
                //         this.hideLoading = true

                //    }).catch((error) => {
                       
                //        useToast().error('Something Went Wrong')
                //         this.hideLoading = true
                //    })
            }
        },

        computed:{

            products(){

                this.totalPage = this.$store.state.productList.totalPage

                return this.$store.state.productList.data
            },

        },

        watch:{

            filter:{

                handler(newVal){

                    this.hideLoading = false
                    
                   
                    this.$store.dispatch('productList', this.filter)
                        .then( (response) => {

                            this.hideLoading = true

                        }).catch((error) => {
                       
                            useToast().error('Something Went Wrong')
                            this.hideLoading = true
                         })

                },
                deep:true
            }
        },

        mounted(){

            // this.filter.categoryIds = sidebarFilter.categoryIds
            // this.filter.tagIds = sidebarFilter.tagIds

            let filter = this.filter

            this.$store.dispatch('productList', filter)
                           .then((response) => {
                               
                                this.hideLoading = true

                           }).catch((error) => {
                               
                               useToast().error('Something Went Wrong')
                                this.hideLoading = true
                           })
           

        }
    }
</script>
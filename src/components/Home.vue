<template>

	<bread-crum title="Products" />


	
 	<div class="py-24">
        <div class="container">
            <div class="flex flex-wrap flex-col lg:flex-row -mx-4">
                <div class="lg:w-1/4 px-4 order-last lg:order-first mt-8 lg:mt-0">
                    <Sidebar @filterChange="getFilterData($event)" />
                </div>

                <div id="shoptab" class="flex-1">
                    <div class="flex flex-wrap justify-between items-center px-4">
                        <div class="flex flex-wrap">
                           <div class="shop-select flex mr-12">
                              <label for="SortBy">Sort by :</label>
                              <select id="SortBy" @change="sortOrderChange" class="px-2 bg-transparent">
                                 <option value="created-descending">Date, new to old</option>
                                 <option value="created-ascending">Date, old to new</option>
                                 <option value="title-ascending">Alphabetically, A-Z</option>
                                 <option value="title-descending">Alphabetically, Z-A</option>
                                 <option value="price-ascending">Price, low to high</option>
                                 <option value="price-descending">Price, high to low</option>
                              </select>
                           </div>
                           <!-- <p class="my-2 sm:my-0">Showing 1 - 9 of 9 result</p> -->
                        </div>
                        <!-- <div>
                           <span>Show :</span>
                           <select class="bg-transparent">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                           </select>
                        </div> -->
                     </div>

                    <div class="mt-10">
                        <div id="grid" class="shop-tab-content">
                           <product-list :filter="sidebarFilter" />
                        </div>
                    </div>

                     
                </div>
            </div>
        </div>
    </div>

</template>

<script>
	
	import Sidebar from './Sidebar.vue'
  import BreadCrum from './layouts/BreadCrum.vue'
	import ProductList from './ProductList.vue'

 	export default{

		name:'Home',
		components:{

			Sidebar,ProductList,BreadCrum
		},

    data(){

        return{

           sidebarFilter:{
                categoryIds:[],
                tagIds:[],
                sortBy:'created-descending',
                page:1,
                currentPage:1 // We can use just 'page' for pagination
            },
        }
    },
    methods:{

      getFilterData(data){
          
          this.sidebarFilter = data
      },

      sortOrderChange(event){

        this.sidebarFilter.page = 1
        this.sidebarFilter.currentPage = 1

        this.sidebarFilter.sortBy = event.target.value
      }
    },
    

	}

</script>


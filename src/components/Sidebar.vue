<template>
	<div class="mb-12">
	    <h4 class="font-medium text-md lg:text-lg text-dark capitalize mb-10" >Search</h4>
	    <div class="pro-sidebar-search mb-50 mt-25">
	        <form class="border border-solid border-gray-300" >
	            <div class="relative">
	                <input class="w-full h-12 text-sm py-4 pl-4 pr-16 bg-white text-dark placeholder-current focus:outline-none" type="search" name="search" placeholder="Search our store" v-model="filter.search">
	                <button class="w-12 h-full absolute top-0 right-0 flex items-center justify-center text-dark text-md border-l border-solid border-gray-300" type="button" v-on:click="filterChange"><i class="icon-magnifier"></i></button>
	            </div>
	        </form>
	    </div>
	 </div>

  
	<div class="mb-12" v-if="categoryList != ''">
	    <h4 class="font-medium text-md lg:text-lg text-dark capitalize mb-5">Categories</h4>
	    <ul>
	      <li class="mb-5 flex justify-between items-center transition-all hover:text-orange" v-for="category in categoryList" :key="category.id">
	        <input class="checkbox opacity-0 absolute" :id="'checkbox-'+category.id" type="checkbox" v-model="filter.categoryIds" :value="category.id" v-on:change="filterChange" >
	        <label :for="'checkbox-'+category.id" class="relative cursor-pointer before:empty before:inline-block before:w-5 before:h-5 before:bg-white before:border-2 before:border-solid before:border-gray-300 before:rounded before:mr-4 align-middle flex items-center">{{ category.name }} </label>
	        <a href="#" class="w-6 h-6 flex items-center justify-center rounded-full bg-gray-300 text-sm hover:text-white
	        hover:bg-orange transition-all">{{ category.total_product }}</a>
	      </li>
	    </ul>
	</div>

	<div class="mb-12" v-if="tagList != ''">
	    <h4 class="font-medium text-md lg:text-lg text-dark capitalize mb-8">Tags</h4>

	    <ul>
	      <li class="mb-5 flex justify-between items-center transition-all hover:text-orange" v-for="tag in tagList" :key="tag.id">
	        <input class="checkbox opacity-0 absolute" :id="'tag-checkbox-'+tag.id" type="checkbox" v-model="filter.tagIds" :value="tag.id" v-on:change="filterChange">
	        <label :for="'tag-checkbox-'+tag.id" class="relative cursor-pointer before:empty before:inline-block before:w-5 before:h-5 before:bg-white before:border-2 before:border-solid before:border-gray-300 before:rounded before:mr-4 align-middle flex items-center">{{ tag.name }} </label>
	        <a href="#" class="w-6 h-6 flex items-center justify-center rounded-full bg-gray-300 text-sm hover:text-white
	        hover:bg-orange transition-all">{{ tag.total_product }}</a>
	      </li>
	    </ul>
	</div>

  	<!-- <div class="mb-12">
	    <h4 class="font-medium text-md lg:text-lg text-dark capitalize mb-10">Price</h4>
	    
	    <input type="range" class="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200" min="10" max="5000" v-model="price" />	    

  	</div> -->


</template>

<script>
	
	export default{

		name:'Sidebar',
    	emits: ['filterChange'],

		data(){

			return {

				price:100,
            	filter:{
                    categoryIds:[],
                    tagIds:[],
                    search:"",
                    sortBy:'created-descending',
                    page:1,
                    currentPage:1
                },
               
			}
		},
		computed:{

			categoryList(){

				return this.$store.state.categoryList.data
			},

			tagList(){

				return this.$store.state.tagList.data
			},
		},
		methods:{


			filterChange(){

				this.filter.page = 1
				this.filter.currentPage = 1
        
				let filters = this.filter

				this.$emit('filterChange', filters)
				
			}
		},
		
		mounted(){

			this.$store.dispatch('categoryList')
			this.$store.dispatch('tagList')

		}


	}
</script>
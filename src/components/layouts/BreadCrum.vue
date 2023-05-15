<template>
	<div class="py-9 bg-gray-light">
	  <div class="container">
	    <div class="grid grid-cols-12 gap-x-4">
	      <div class="col-span-12">
	        <nav>
	          <ul class="flex flex-wrap items-center justify-center">
	            <li class="text-dark font-medium text-base uppercase mr-5">{{ title }}</li>
	          </ul>
	        </nav>
	      </div>
	    </div>
	  </div>
	</div>
</template>

<script>
	
	export default{

		name:'BreadCrum',
		props:{

			'title':null
		}
	}
</script>
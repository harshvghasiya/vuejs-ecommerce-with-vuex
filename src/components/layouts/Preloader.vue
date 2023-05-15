<template>
	<div id="pageloader">
		<img src="../../assets/loader.gif" class="container2" />
	</div>
</template>

<script>
	
	export default{

		name:'Preloader'
	}
</script>

<style>
	
	#pageloader
	{
	  background: rgba( 255, 255, 255, 0.8 );
	  /*display: none;*/
	  height: 100%;
	  position: absolute;
	  width: 100%;
	  z-index: 9999;
	}

	#pageloader img
	{
	  left: 45%;
	  position: fixed;
	  top: 30%;
	}
</style>
<template>
	<div class="Sousuo-warp">
		<Soutop></Soutop>
		<Soumid></Soumid>
		<Soudown></Soudown>
	</div>
</template>

<script>
	import Soutop from "../index/Sousuotop.vue";
	import Soumid from "../index/Sousuomid.vue";
	import Soudown from "../index/Sousuodown.vue";
	export default{
		components:{
			Soutop,
			Soumid,
			Soudown
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="less">
	*{
		margin: 0;
		padding: 0;
	}
	li{
		list-style: none;
	}
</style>
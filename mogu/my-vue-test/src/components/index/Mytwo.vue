<template>
	<div class="Mytwo-warp" >
		<li v-for="(value,index) in Mylist">
			<img :src="value.img1"/>
		    <a>{{ value.a1 }}</a>
		    <span>{{ value.fuhao }}</span>
		</li>
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:{
			Mylist:{
				type:Array,
				default:[]
			}
		}
	}
</script>

<style lang="less" scoped>
	.Mytwo-warp{
		width: 100%;
		height: auto;
	}
	.Mytwo-warp li {
		width: 95%;
		margin-left: 5%;
		height: 1.2rem;
		float: left;
		border-bottom: .02rem solid #E5E5E5;
		font-size: .2rem;
	}
	.Mytwo-warp li:last-of-type{
		border-bottom: .1rem solid #E5E5E5;
		width: 100%;
		margin-left: 0;
		height: 1.2rem;
	}
	.Mytwo-warp li:last-of-type img{
		margin-left: .37rem;
	}
	.Mytwo-warp li img{
		width: .5rem;
		height: .5rem;
	}
	.Mytwo-warp li a{
		width: 3rem;
		height: .5rem;
		line-height: .5rem;
		margin-left: .2rem;
		font-size: .28rem;
	}
	.Mytwo-warp li img,.Mytwo-warp li a{
		float: left;
		margin-top: .35rem;
	}
	.Mytwo-warp li span{
		float: right;
		width: .3rem;
		height: .5rem;
		font-size: .5rem;
		opacity: .7;
		font-weight: 300;
		margin-right: .5rem;
		margin-top: .3rem;
	}
</style>
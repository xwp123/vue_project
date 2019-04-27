<template>
	<div class="Mythreevue-warp">
		<div class="Mythreevue-warp-a">
			<a>退出登录</a>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="less" scoped>
	.Mythreevue-warp{
		width: 100%;
		height: 2rem;
		background-color: #F6F6F6;
		float: left;
		text-align: center;
	}
	.Mythreevue-warp-a{
		width: 85%;
		height: .8rem;
		margin: .12rem auto;
	}
	.Mythreevue-warp-a a{
		text-align: center;
		width: 100%;
		height: .8rem;
		line-height: .8rem;
	    font-size: .3rem;
	    border-radius: .1rem;
	    float: left;
	    background-color: #FF5777;
	    margin: 0 auto;
	    color: white;
	}
</style>
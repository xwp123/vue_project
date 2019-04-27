<template>
	<div class="body3-warp">
		<div class="body3">
			<ul class="tubian" >
				<li v-for="(value,index) in List">
					<img v-bind:src="value.img1">
					<p>{{ value.pbiaoqian1 }}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{

			}
		},
		props:{
			List:{
				Type:Array,
				default:[]
			}
		}
	}
</script>

<style lang="less" scoped>
	*{
		margin: 0;
		padding: 0;
	}
	.body3-warp{
		width: 100%;
		height: 4.9rem;
		border-bottom: .07rem solid #F6F6F6;
	}
	.body3{
		width: 100%;
		height: 4rem;
	}
	.tubian{
		width: 100%;
		height: 4rem;
	}
	.tubian li{
		float: left;
		width: 20%;
		height: 1.6rem;
		text-align: center;
	}
	.tubian img{
	  height: 1rem;
	  width: 1rem;
	  margin-top: .1rem;
	}
	.tubian li{
		font-size: .25rem;
	}
</style>
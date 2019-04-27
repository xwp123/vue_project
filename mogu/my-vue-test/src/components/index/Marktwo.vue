<template>
	<div class="marktwo-warp">
		<div class="marktwo">
			<li v-for="(value,index) in MarkLISTS">
				<img :src="value.img1">
				<p>{{ value.p1 }}</p>
			</li>
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				MarkLISTS:[
				{
					img1:require("@/assets/2019-04-17_153125.png"),
					p1:"女装"
				},
				{
					img1:require("@/assets/2019-04-17_153125.png"),
					p1:"上衣"
				},
				{
					img1:require("@/assets/2019-04-17_153125.png"),
					p1:"裙子"
				},
				{
					img1:require("@/assets/2019-04-17_153125.png"),
					p1:"裤子"
				},
				{
					img1:require("@/assets/2019-04-17_153125.png"),
					p1:"套装"
				},
				{
					img1:require("@/assets/2019-04-17_153125.png"),
					p1:"女鞋"
				},
				{
					img1:require("@/assets/2019-04-17_153125.png"),
					p1:"美妆个护"
				},
				{
					img1:require("@/assets/2019-04-17_153125.png"),
					p1:"包包"
				},
				{
					img1:require("@/assets/2019-04-17_153125.png"),
					p1:"配饰"
				},
				{
					img1:require("@/assets/2019-04-17_153125.png"),
					p1:"内衣"
				},
				{
					img1:require("@/assets/2019-04-17_153125.png"),
					p1:"男友"
				},
				{
					img1:require("@/assets/2019-04-17_153125.png"),
					p1:"家居"
				},
				
				{
					img1:require("@/assets/2019-04-17_153125.png"),
					p1:"母婴"
				},
				{
					img1:require("@/assets/2019-04-17_153125.png"),
					p1:"食品"
				},
				{
					img1:require("@/assets/2019-04-17_153125.png"),
					p1:"运动"
				},
				]
			}
		}
	}
</script>

<style lang="less" scoped>
	*{
		margin: 0;
		padding: 0;
	}
	.marktwo-warp{
		width: 100%;
		height: 4.68rem;
		border-bottom: .09rem solid #EFEFEF;
	}
	
	.marktwo li{
		width: 20%;
		height: 1.5rem;
		text-align: center;
		float: left;
	}
	.marktwo li img{
		width: 1rem;
		height: 1rem;
	}
	.marktwo li p{
		font-size: .22rem;
		margin-top: -.22rem;
		opacity: .7;
	}
</style>
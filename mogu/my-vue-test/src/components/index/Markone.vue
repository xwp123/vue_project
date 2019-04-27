<template>
	<div class="Markone-warp">
		<div class="markone-top">
			<li v-for="(value,index) in MarkLists">
				<img :src="value.img1">
				<p>{{ value.p1 }}</p>
			</li>
		</div>
		<div class="asd">
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				MarkLists:[
		        {
			     img1:require("@/assets/190409_7cag01jledg9g04dieb4117be6680_165x165.jpg"),
			     p1:"风尚快抢"
		        },
		        {
			     img1:require("@/assets/190329_2230c9c30j384ib0c95i37d5i76ee_165x165.jpg"),
			     p1:"热销榜单"
		        },
		        {
			     img1:require("@/assets/190329_67je94h0il500k7ag97hdc07f649g_165x165.jpg"),
			     p1:"好货精选"
		        },
		        {
			     img1:require("@/assets/190409_7cag01jledg9g04dieb4117be6680_165x165.jpg"),
			     p1:"新品快抢"
		        }
		        ]
			}
		}
		
	}
</script>

<style lang="less" scoped>
	.Markone-warp{
		width: 100%;
		height: 2rem;
	}
	.markone-top li{
		float: left;
		height: 2rem;
		width: 25%;
		position: relative;
		text-align: center;
	}
	.markone-top li p{
		position: absolute;
		top: 1.1rem;
		left: .4rem;
		font-size: .27rem;
		color: black;
		opacity: .75;
	}
	.asd{
		width: 100%;
		height: 2rem;
	}
	
</style>
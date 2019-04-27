<template>
	<div class="head-warp">
		<div class="top">
			<div class="top-left">
				<img v-bind:src="img1"/>
			</div>
			<div class="top-mid">
				<p> {{ message1 }} </p>
				<p><img v-bind:src="img2">
				<img v-bind:src="img2">
				<img v-bind:src="img2">
				<img v-bind:src="img2">
				<img v-bind:src="img2">
			      <a>{{ message2 }}</a>
				</p>
			</div>
			<div class="top-right">
				<a>{{ message3 }}</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				img1:require("@/assets/190219_4ii32ja6gi9hdeb56k2487ce7eh24_60x60.png"),
				img2:require("../../assets/190219_78e4hi0k9ld1cjhcea8b8a69bajjl_18x17.png"),
//				message1:"上万达人为你试穿全网品牌",
				message2:"超过2亿用户已下载",
				message3:"打开APP"
			}
		},
		props:{
			message1:{
				type:String,
				default:""
			}
		}
	}
</script>

<style lang="less" scoped>
*{
	margin: 0;
	padding: 0;
}
.head-warp{
	width: 100%;
		height: .9rem;
		position: fixed;
		z-index: 9999;
		top: 0;
		left: 0;
}
.top-mid p[data-v-45635ccc]:first-of-type {
    font-size: 0.24rem;
    color: black;
    margin-left: .08rem;
}
	.top{
		width: 100%;
		height: .9rem;
		background-color: #FFFFFF;
		font-size: .2rem;
		border-bottom: .02rem solid #C5C5C5;
	}
	.top-left,.top-mid,.top{
		float: left;
	}
	.top-right{
		float: right;
	}
	.top-left{
		width: 15%;
		height: .9rem;
	}
	.top-left img{
		margin-left: .3rem;
		margin-top: .1rem;
	}
	.top-mid{
		width: 55%;
		height: .9rem;
	}
	.top-mid p{
		margin-top: .08rem;
	}
	.top-mid p:first-of-type{
		font-size: .24rem;
		color: black;
	}
	.top-mid a:last-of-type{
		color: #8E9CC0;
		margin-left: .2rem;
		
	}
	.top-mid img{
		margin-left: .04rem;
	}
	.top-right{
		width: 25%;
		height: .9rem;
	}
	.top-right a{
		display: inline-block;
		width: 1.3rem;
		height: .5rem;
		background-color: red;
		color: white;
		text-align: center;
		line-height: .5rem;
		border-radius: .07rem;
		margin-top: .18rem;
		margin-left: .2rem;
	}
</style>
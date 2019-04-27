<template>
	<div class="Sousuo-mid-warp">
		<div class="sou">
			<div class="sou-top">
				<div class="sou-left">
					<img :src="img1">
				    <a>{{ aBIAO }}</a>
				</div>
				<div class="sou-right">
					<img :src="img2">
				</div>
				
			</div>
			<div class="sou-down">
			   <a>{{ aBIAO1 }}</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				img1:require("@/assets/下载5.png"),
				aBIAO:"历史搜索",
				img2:require("@/assets/下载6.png"),
				aBIAO1:"暂无历史搜索"
			}
		},
		methods:{},
	}
</script>

<style lang="less" scoped>
	*{
		margin: 0;
		padding: 0;
	}
	.Sousuo-mid-warp{
		min-height: 1.3rem;
		width: 100%;
		border-bottom: .04rem solid #EEEEEE;
	}
	.sou-top{
		height: .7rem;
		width: 100%;
		margin-top: .4rem;
	}
	.sou-left{
		width: 30%;
		float: left;
		height: .7rem;
	}
	.sou-left img{
		width: .3rem;
		height: .3rem;
		float: left;
		margin-left: .37rem;
		margin-top: .05rem;
	}
	.sou-left a{
		font-size: .25rem;
		width: 1.2rem;
		float: left;
		margin-left: .1rem;
		color: #99A6C4;
	}
	.sou-right{
		width: 10%;
		float: right;
		height: .7rem;
	}
	.sou-right img{
		width: .3rem;
		height: .3rem;
		float: left;
	}
	.sou-down{
		height: .3rem;
		width:100%
	}
	.sou-down a{
		float: left;
		font-size: .2rem;
		width: 1.5rem;
		height: .3rem;
		margin-left: .75rem;
		color: #999999;
	}
</style>
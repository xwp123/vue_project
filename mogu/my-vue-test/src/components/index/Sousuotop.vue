<template>
	<div class="sousuo-top-warp">
		<div class="warp-top">
			<div class="warp-top-left">
			    <img @click="Gotoindex" :src="img1"/>
			</div>
			<div class="warp-top-mid">
			    <input type="text" placeholder="带背裤" name="souso"/>
			</div>
			<div class="warp-top-right">
			    <a>{{ a1biaoqian }}</a>
			</div>



		</div>
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				img1:require("@/assets/下载4.png"),
				a1biaoqian:"搜索"
			}
		},
		methods:{
			Gotoindex:function(){
				this.$router.push({
					name:"index"
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	*{
		margin: 0;
		padding: 0;
	}
	.sousuo-top-warp{
		width: 100%;
		height: .8rem;
		font-size: .3rem;
		border-bottom: .03rem #EEEEEE solid;
	}
	.warp-top{
		display: flex;
	}
	.warp-top-left{
		width: 15%;
		height: .8rem;
		text-align: center;
	}
	.warp-top-left img{
		width: .4rem;
		height: .4rem;
		margin-top: .2rem;
	}
	.warp-top-mid{
		width: 70%;
		height: .8rem;
	}
	.warp-top-mid input{
		width: 98%;
		height: .45rem;
		margin-left: .01rem;
		margin-top: .18rem;
		border: .01rem #AAAAAA solid;
		border-radius: .1rem;
		text-indent: .2rem;
		font-size: .25rem;
	}
	.warp-top-mid input:hover{
		border: .01rem red solid;
	}
	.warp-top-right{
		width: 15%;
		height: .8rem;
		text-align: center;
	}
	.warp-top-right a{
		font-weight: 300;
		font-size: .27rem;
		display: inline-block;
		height: .8rem;
		line-height: .8rem;
	}
</style>
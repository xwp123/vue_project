<template>
	<div class="body1-warp">
		<div class="body1">
			<div class="body1-zuo">
				<img v-bind:src="img1"/>
			</div>
			<div class="body1-mid">
				<img @click="Gotosousuo" v-bind:src="img2"/>
				<input  @click="Gotosousuo" type="text" :placeholder="placeHod"/>
			</div>
			<div class="body1-right">
				<img v-bind:src="img3">
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				img1:require("../../assets/180926_3lac93lkglfd5gd4fiahedg5aad79_40x37.png"),
			    img2:require("../../assets/下载.png"),
			    img3:require("../../assets/下载 (1).png"),
			   
			}
		},
		methods:{
			Gotosousuo:function(){
				this.$router.push({
					name:"sousuo"
				})
			},
			
		},
		props:{
		   placeHod:{
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
	.body1,.body1-warp{
		width: 100%;
		height: .9rem;
	}
	.body1-zuo,.body1-right{
		float: left;
		text-align: center;
	}
	.body1-mid{
		float: left;
		
	}
	.body1-zuo,.body1-right{
		width: 15%;
		height: .9rem;
	}
	.body1-mid{
		width: 70%;
		height: .9rem;
	}
	img,input{
	
	float: left;
	}
	.body1-zuo img{
		width: .5rem;
		height: .38rem;
		margin-top: .2rem;
		margin-left: .25rem;
	}
	.body1-mi img,.body1-zuo input{
		float: left;
	}
	.body1-mid img{
		width: .5rem;
		height: .5rem;
		background-color: #EEEEEE;
		margin-top: .18rem;
	}
	
	input{
		text-indent: .18rem;
		width: 85%;
		height: .5rem;
		background-color: #EEEEEE;
		margin-top: .18rem;
		border: none;
		font-size: .3rem;
		
	}
	.body1-right img{
		margin-left: .2rem;
		margin-top: .24rem;
		width: .5rem;
		height: .4rem;
	}
</style>
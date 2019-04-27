<template>
	<div class="Video-body3-warp">
		<div class="kongwei">
	  <li v-for="(value,index) in VidelList">
		<div class="body3-warp">
		 	<img :src="value.img1"/>
		</div>
		<div class="body3-top">
			<img :src="value.img2">
		    <a>{{ value.a1 }}</a>
		</div>
		<div class="body3-mid">
			<a>{{ value.a2 }}</a><img :src="value.img3"><a>{{ value.a3 }}</a>
		</div>
		<div class="body3-down">
			<a>{{ value.a4 }}</a>
		</div>
		<div class="body3-bottom">
			<ul>
				<li>
					<img :src="value.img4"/>
					<p>{{ value.p1 }}</p>
				</li>
				<li>
					<img :src="value.img5"/>
					<p>{{ value.p2 }}</p>
				</li>
				<li>
					<img :src="value.img6"/>
					<p>{{ value.p3 }}</p>
				</li>
			</ul>
		</div>
	  </li>
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
			VidelList:{
				type:Array,
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
	.Video-body3-warp{
		width: 100%;
		height: 5.12rem;
		font-size: .2rem;
		/*border-bottom: .02rem solid darkgray;*/
	}
	.Video-body3-warp{
		position: relative;
		top: 1.8rem;
	}
	.body3-warp{
		text-align: center;
	}
	.body3-warp img{
		height: 4rem;
		width: 95%;
		
		margin-top: .85rem;
	}
	.kongwei{
		width: 100%;
		height: 3rem;
	}
	.kongwei li:last-of-type{
		height: 2.5rem;
	}
	.body3-top{
		position: absolute;
		top: 0.34rem;
		left: .47rem;
		z-index: 10;
	}
	.body3-top img,.body3-top a{
      float: left;		
	}
	.body3-top img{
		border-radius: 50%;
		width: .8rem;
		height: .8rem;
		border: .06rem solid white;
	}
	.body3-top a{
		font-size: .27rem;
		margin-left: .2rem;
		width: 3rem;
		height: 1rem;
		line-height: .7rem;
	}
	.body3-mid{
		float: left;
		width: 1.9rem;
		height: .4rem;
		background-color:#A5A5AC;
		opacity: 0.8;
		text-align: center;
		position: absolute;
		top: 2rem;
		left: .6rem;
		z-index: 10;
	}
	.body3-mid img{
		vertical-align: bottom;
		margin-left: .1rem;
		margin-top: .05rem;
	}
	.body3-mid a:last-of-type{
		margin-left: .08rem;
		color: white;
	}
	.body3-down{
		position: absolute;
		top: 2.58rem;
		left: .68rem;
	}
	.body3-down a{
		color: white;
		font-size: .31rem;
	}
	.body3-bottom{
		position: absolute;
		top: 3.5rem;
		left: .5rem;
	}
	.body3-bottom ul li{
		float: left;
		margin-left: .2rem;
		position: relative;
	}
	.body3-bottom ul li p{
		text-align: center;
		color: white;
		position: absolute;
		top: .7rem;
		left: .1rem;
	}
	li{
		list-style: none;
	}
</style>
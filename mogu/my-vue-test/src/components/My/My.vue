<template>
	<div class="My-warp">
	    <Head :message1="biaoti"></Head>
	    <Myone></Myone>
	     <Mytwo :Mylist="MYLIST"></Mytwo>
	     <Mytwo :Mylist="MYLIST2"></Mytwo>
	     <Mytwo :Mylist="MYLIST3"></Mytwo>
	     <Mythree></Mythree>
		<Foo></Foo>
	</div>
</template>

<script>
	import Foo from "../index/Footer.vue"
    import Head from "../index/Header.vue";
    import Myone from "../index/Myone.vue";
    import Mytwo from "../index/Mytwo.vue";
    import Mythree from "../index/Mythree.vue";
 	export default{
	components: {
        Foo,
        Head,
        Myone,
        Mytwo,
        Mythree
       
    },
    data(){
    	return{
    		biaoti:"买衣服，先逛蘑菇街",
    		MYLIST:[
    		    {
					img1:require("@/assets/180830_64jc99ae7241iikh45he6ebeh617f_88x88.png"),
					a1:"消息",
					fuhao:">"
				},
				{
					img1:require("@/assets/180830_8021c9de4b3fhigk152bj44a7356e_88x88.png"),
					a1:"收藏",
					fuhao:">"
					
				},
    		],
    		MYLIST2:[
    		    {
					img1:require("@/assets/180830_3b8hjl8a44g1ce5g6ehe721j39ec1_88x88.png"),
					a1:"购物车",
					fuhao:">"
				},
				{
					img1:require("@/assets/180830_13f05akli0hibg1jek8a84f3h8l78_88x88.png"),
					a1:"我的订单",
					fuhao:">"
					
				},
				{
					img1:require("@/assets/180830_48dke48gg44j5kj735e04360k1fid_88x88.png"),
					a1:"我的订单",
					fuhao:">"
					
				}
    		],
    		
    		MYLIST3:[
    		    {
					img1:require("@/assets/180830_8a12la84be7150gh4fah2h7l8el7k_88x88.png"),
					a1:"我的钱包",
					fuhao:">"
				},
				{
					img1:require("@/assets/181009_22fecib58jkc5kf8d7322a0a29866_44x44.png"),
					a1:"收货地址",
					fuhao:">"
					
				},
				{
					img1:require("@/assets/180830_62kkcladdid2b32a6jkbae20j2ke7_88x88.png"),
					a1:"客服",
					fuhao:">"
					
				}
    		],
    		
    	}
    }
	}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	li{
		list-style: none;
	}
	
</style>
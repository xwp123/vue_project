<template>
	<div class="Market-warp">
	    <Head :message1="message"></Head>
	    <Body1 :placeHod="message1"></Body1>
	    <Markone></Markone>
	    <Marktwo></Marktwo>
	    <Markthree></Markthree>
	    <Markfour></Markfour>
	    <Markfive></Markfive>
		<Foo></Foo>
	</div>
</template>

<script>
	
	import Foo from "../index/Footer.vue"
    import Head from "../index/Header.vue";
    import Body1 from "../index/Body1.vue";
    import Markone from "../index/Markone.vue";
    import Marktwo from "../index/Marktwo.vue";
    import Markthree from "../index/Markthree.vue";
    import Markfour from "../index/Markfour.vue";
    import Markfive from "../index/Markfive.vue";
    
 	export default{
	components: {
        Foo,
        Head,
        Body1,
        Markone,
        Marktwo,
        Markthree,
        Markfour,
        Markfive
       
    },
    data(){
    	return{
    		
    	message:"APP新人购物立享88折！",
    	message1:"衬衫"
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
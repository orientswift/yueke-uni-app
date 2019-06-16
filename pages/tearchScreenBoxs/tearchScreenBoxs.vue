<template>
	<view class="tearch-boxs">
		<!-- 老师  选项卡 主页 -->
		<view class="tearch-str-head">
			<!-- 选项卡 -->
			<tearch-screen @lis='strlis'></tearch-screen>
		</view>
		<!-- 分类选项 -->
		<tearch-class v-show="nums == 1"></tearch-class>
		<!-- 距离选项 -->
		<tearch-distance v-show="nums == 2"></tearch-distance>
		<!-- 排序选项 -->
		<tearch-sort v-show="nums == 3"></tearch-sort>
		<!-- 筛选 选项 -->
		<tearch-checked v-show="nums == 4"  @lis2='strlis2'></tearch-checked>
		
		<!--选项卡 筛选结果 -->
		<scroll-view class="tearch-str-list" scroll-y='true'>
			<navigator url="../taerchDetails/taerchDetails">
				<tearch-listarr></tearch-listarr>
			</navigator>
			<navigator url="../taerchDetails/taerchDetails">
				<tearch-listarr></tearch-listarr>
			</navigator>
			<navigator url="../taerchDetails/taerchDetails">
				<tearch-listarr></tearch-listarr>
			</navigator>
			<navigator url="../taerchDetails/taerchDetails">
				<tearch-listarr></tearch-listarr>
			</navigator>
			<navigator url="../taerchDetails/taerchDetails">
				<tearch-listarr></tearch-listarr>
			</navigator>
		</scroll-view>
	</view>
	
</template>

<script>
	import tearchScreen from '@/components/tearchs/tearchScreen.vue'  //选项卡
	import tearchClass from '@/components/tearchs/tearchClass.vue'   //分类选项
	import tearchDistance from '@/components/tearchs/tearchDistance.vue'  //距离选项
	import tearchSort from '@/components/tearchs/tearchSort.vue'  //排序选项
	import tearchChecked from '@/components/tearchs/tearchChecked.vue'  //筛选 选项
	
	import tearchListarr from '@/components/tearchLi.vue'  //教师列表
	export default {
		data() {
			return {
				nums:-1
			}
		},
		methods: {
			strlis:function(num){
				//console.log(this.nums)
				this.nums=num
			},
			strlis2:function(){
				//console.log(this.nums)
				console.log('12344444555')
				this.nums=-1
			}
			
		},
		components: {
			tearchScreen,
			tearchClass,
			tearchDistance,
			tearchSort,
			tearchChecked,
			tearchListarr
		},
		computed:{
			nums2:function(){
				return this.$store.state.nums
			}
		}
	}
</script>

<style scoped="true" lang="less">
.tearch-boxs{
	width: 750upx;
	position: relative;
	.tearch-str-head{
		width: 750upx;
		height: 77upx;
		position: fixed;
		left: 0;
		top: 77upx;
		z-index: 5;
		background: #ffffff;
	}
	.tearch-str-list{
		margin-top: 77upx;
		width: 750upx;
	}
}
</style>

<template>
	<view class="tearch-boxs">
		<view class="tearch-boxs-heads">
			<!-- 顶部横条 -->
			<view class="tearch-boxs-icons"></view>
			<!-- 名师推荐 顶部 -->
			<view class="tearch-boxs-title">
				<view class="tearch-boxs-title-left">名师推荐</view>
				<view class="iconfont icon-xiangyou tearch-boxs-title-right"></view>
			</view>
			<!-- 名师推荐 滑块 -->
			<tearchs-boxs></tearchs-boxs>
			<!-- 分割线 -->
			<view class="tearch-hr"></view>
			<!-- 赛选 -->
			<navigator url="../tearchScreenBoxs/tearchScreenBoxs">
				<tearch-screen></tearch-screen>
			</navigator>
		</view>
		<!-- 选项卡 -->
		<tearchs-uls></tearchs-uls>
	</view>
</template>

<script>
	import tearchsBoxs from '@/components/tearchs/tearchsBoxs.vue'  //名师推荐
	import tearchScreen from '@/components/tearchs/tearchScreen.vue'  //老师 赛选条件
	import tearchsUls from '@/components/tearchs/tearchsUls.vue'  //选项卡 盒子
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		components: {
			tearchsBoxs, //名师推荐 滑块
			tearchScreen,  //老师 赛选条件
			tearchsUls  //选项卡
		},
	}
</script>

<style lang="less" scoped="true">
.tearch-boxs{
	width: 750upx;
	position: relative;
	.tearch-boxs-heads{
		position: fixed;
		left: 0;
		top: 80upx;
		z-index: 2;
		background: #ffffff;
	}
	// 顶部 横条
	.tearch-boxs-icons{
		width: 750upx;
		height: 20upx;
		background: #F5F5F5;
		border-bottom: 1px solid #E1E1E1;
	}
	// 名师推荐 头部
	.tearch-boxs-title{
		width: 750upx;
		height: 68upx;
		padding: 0 20upx 0 22upx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		.tearch-boxs-title-left{
			line-height: 68upx;
			color: #469AFF;
			font-size: 30upx;
		}
		.tearch-boxs-title-right{
			color: #BBBBBB;
			font-size: 30upx;
			line-height: 68upx;
		}
	}
	// 名师推荐 滑块
	
	// 分割线
	.tearch-hr{
		width: 750upx;
		height: 20upx;
		border-top: 1px solid #E1E1E1;
		border-bottom: 1px solid #E1E1E1;
		background: #F5F5F5;
	}
	
}
</style>

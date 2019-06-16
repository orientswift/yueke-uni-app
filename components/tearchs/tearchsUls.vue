<template>
	<view class="tearch-box">
		<!-- 名师推荐 盒子 -->
		<navigator url="../../pages/taerchDetails/taerchDetails">
			<tearchs-list></tearchs-list>
		</navigator>
		<navigator url="../../pages/taerchDetails/taerchDetails">
			<tearchs-list></tearchs-list>
		</navigator>
		<navigator url="../../pages/taerchDetails/taerchDetails">
			<tearchs-list></tearchs-list>
		</navigator>
		<navigator url="../../pages/taerchDetails/taerchDetails">
			<tearchs-list></tearchs-list>
		</navigator>
		<navigator url="../../pages/taerchDetails/taerchDetails">
			<tearchs-list></tearchs-list>
		</navigator>
		<navigator url="../../pages/taerchDetails/taerchDetails">
			<tearchs-list></tearchs-list>
		</navigator>
		<navigator url="../../pages/taerchDetails/taerchDetails">
			<tearchs-list></tearchs-list>
		</navigator>
		<navigator url="../../pages/taerchDetails/taerchDetails">
			<tearchs-list></tearchs-list>
		</navigator>
		<navigator url="../../pages/taerchDetails/taerchDetails">
			<tearchs-list></tearchs-list>
		</navigator>
		<view class="mechanism-btn" size='default'><text class="iconfont icon-shuaxin"></text>换一批</view>
	</view>
</template>

<script>
	import tearchsList from '@/components/tearchs/tearchsList.vue'
	export default {
		data() {
			return {
				
			};
		},
		components: {
			tearchsList //老师爷 老师
		},
	}
</script>

<style lang="less">
.tearch-box{
	width: 750upx;
	margin-bottom: 20upx;
	padding-top: 415upx;
	.mechanism-btn{
	margin-left: 30upx;
	width: 690upx;
	height: 88upx;
	text-align: center;
	font-size: 30upx;
	color: #949494;
	background: #E4E4E4;
	border-radius: 9upx;
	line-height: 88upx;
		text{
			margin-right: 15upx;
		}
	}
}
</style>

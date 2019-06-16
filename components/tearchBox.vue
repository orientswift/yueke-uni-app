<template>
	<view class="tearch-box">
		<!-- 名师推荐 盒子 -->
		<navigator url="../../pages/taerchDetails/taerchDetails">
		<tearch-li></tearch-li>
		</navigator>
		<navigator url="../../pages/taerchDetails/taerchDetails">
		<tearch-li></tearch-li>
		</navigator>
		<navigator url="../../pages/taerchDetails/taerchDetails">
		<tearch-li></tearch-li>
		</navigator>
		<navigator url="../../pages/taerchDetails/taerchDetails">
		<tearch-li></tearch-li>
		</navigator>
		<view class="mechanism-btn" size='default'><text class="iconfont icon-shuaxin"></text>换一批</view>
	</view>
</template>

<script>
	import tearchLi from '@/components/tearchLi.vue'
	export default {
		data() {
			return {
				
			};
		},
		components: {
			tearchLi //主页 老师
		},
	}
</script>

<style lang="less">
.tearch-box{
	width: 750upx;
	margin-bottom: 20upx;
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

<template>
	<view class="mechanism-box">
		<!-- 首页 精选机构 盒子 -->
		<navigator url="../../pages/scholl/scholl">
			<mechanism-li></mechanism-li>
		</navigator>
		<navigator url="../../pages/scholl/scholl">
			<mechanism-li></mechanism-li>
		</navigator>
		<navigator url="../../pages/scholl/scholl">
			<mechanism-li></mechanism-li>
		</navigator>
		<navigator url="../../pages/scholl/scholl">
			<mechanism-li></mechanism-li>
		</navigator>
		<!-- <mechanism-li></mechanism-li>
		<mechanism-li></mechanism-li>
		<mechanism-li></mechanism-li>
		<mechanism-li></mechanism-li>
		<mechanism-li></mechanism-li> -->
		<view class="mechanism-btn" size='default'><text class="iconfont icon-shuaxin"></text>换一批</view>
	</view>
</template>

<script>
	import mechanismLi from '@/components/mechanismLi.vue'
	export default {
		data() {
			return {
				
			};
		},
		components: {
			mechanismLi
		},
	}
</script>

<style lang="less">
.mechanism-box{
	width: 690upx;
	margin-left: 30upx;
	margin-bottom: 20upx;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
.mechanism-btn{
	width: 100%;
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
</style>

<template>
	<view class="tearch-boxs-swipes">
		<!-- 名师推荐 滑块 -->
		<scroll-view class="tearch-boxs-swipes-box" scroll-x="true">
			<tearchs-lis></tearchs-lis>
			<tearchs-lis></tearchs-lis>
			<tearchs-lis></tearchs-lis>
			<tearchs-lis></tearchs-lis>
			<tearchs-lis></tearchs-lis>
			<tearchs-lis></tearchs-lis>
			<tearchs-lis></tearchs-lis>
			
		</scroll-view>
	</view>
</template>

<script>
	import tearchsLis from '@/components/tearchs/tearchsLis.vue'
	export default {
		data() {
			return {
				
			};
		},
		components: {
			tearchsLis
		},
	}
</script>

<style lang="less">
.tearch-boxs-swipes{
		width: 750upx;
		height: 226upx;
		padding-left: 15upx;
		box-sizing: border-box;
		overflow: hidden;
		.tearch-boxs-swipes-box{
			width: auto;
			white-space: nowrap;
			
		}
	}
</style>

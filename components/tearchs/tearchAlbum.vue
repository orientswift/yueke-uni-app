<template>
	<view class="details-brief">
		<!-- 老师主页 相册 -->
		<!-- 阴影内的盒子 -->
		<view class="details-brief-box">
			<view class="details-brief-box-imgs">
				<!-- 图片 -->
			</view>
			<view class="details-brief-box-imgs"></view>
			<view class="details-brief-box-imgs"></view>
			<view class="details-brief-box-imgs"></view>
			<view class="details-brief-box-imgs"></view>
			<view class="details-brief-box-imgs"></view>
			<view class="details-brief-box-imgs"></view>
			<view class="details-brief-box-imgs"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		components: {
			
		},
	}
</script>

<style scoped="true" lang="less">
.details-brief{
	width: 750upx;
	background: #F5F5F5;
	padding: 0 20upx 40upx 20upx;
	box-sizing: border-box;
	// 阴影内的盒子
	.details-brief-box{
		width: 710upx;
		background: #ffffff;
		border-radius: 0 0 6upx 6upx;
		padding: 20upx 6upx 6upx 20upx;
		box-sizing: border-box;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		.details-brief-box-imgs{
			width: 214upx;
			height: 214upx;
			background: rosybrown;
			align-items: center;
			margin-right: 14upx;
			margin-bottom: 14upx;
			image{
				width: 214upx;
				height: 214upx;
			}
		}
	}
}
</style>


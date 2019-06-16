<template>
	<view class="details-brief">
		<!-- 老师主页 老师简介 -->
		<!-- 阴影内的盒子 -->
		<view class="details-brief-box">
			<!-- 教授课程 -->
			<details-times></details-times>
			<!-- 老师简介 -->
			<tearch-introduce></tearch-introduce>
			<!-- 老师经历 -->
			<tearch-comment></tearch-comment>
			
			<!-- 老师评论 -->
			<tearch-school></tearch-school>
		</view>
	</view>
</template>

<script>
	import detailsTimes from '@/components/tearchs/detailsTimes.vue'  //引入 教授课程 卡片
	import tearchIntroduce from'@/components/tearchs/tearchIntroduce.vue' //引入 老师 简介 卡片
	import tearchSchool from '@/components/tearchs/tearchSchool.vue'   //引入  评论 卡片
	import tearchComment from '@/components/tearchs/tearchComment.vue'  //引入老师经历 卡片
	export default {
		data() {
			return {
				
			};
		},
		components: {
			detailsTimes,
			tearchIntroduce,
			tearchSchool,
			tearchComment
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
		.details-brief-box-times{
			width: 100%;
			height: 460upx;
		}
	}
}
</style>

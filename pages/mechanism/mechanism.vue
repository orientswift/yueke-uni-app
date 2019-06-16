<template>
	<view class="mechanism">
		<!-- 机构主页 -->
		
		<!-- 行条 -->
		<view class="mechanism-ad1"></view>
		<!-- 标题 -->
		<view class="mechanism-titles">优质机构</view>
		<!-- 优质机构 内容 -->
		<mechan-recom></mechan-recom>
		<!-- 行条 -->
		<view class="mechanism-ad1"></view>
		<!-- 选项卡 -->
		<mechan-table></mechan-table>
		
	</view>
</template>

<script>
	import mechanRecom from '@/components/mechan/mechanRecom.vue'
	import mechanTable from '@/components/mechan/mechanTable.vue'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		components:{
			mechanRecom,
			mechanTable
		}
	}
</script>

<style lang="less" scoped="true">
.mechanism{
	// 横条
	.mechanism-ad1{
		width: 100%;
		height: 20upx;
		background: #F5F5F5;
		border-bottom: 1px solid #E1E1E1;
	}
	//标题
	.mechanism-titles{
		width: 100%;
		height: 66upx;
		font-size: 28upx;
		color: #2F2F2F;
		text-align: center;
		line-height: 66upx;
	}
	.mechanism-titles::before{
		content: '————';
		color: #CCCCCC;
		margin-right: 20upx;
	}
	.mechanism-titles::after{
		content: '————';
		color: #CCCCCC;
		margin-left: 20upx;
	}
}
</style>

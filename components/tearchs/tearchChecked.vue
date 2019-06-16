<template>
	<view class="checked-box">
		<view class="checked-box-submit">
			<!-- 老师  筛选 筛选选项 -->
			<scroll-view class="checked-box-ul" scroll-y='true'>
				<tearchchecked-lis></tearchchecked-lis>
				<tearchchecked-lis></tearchchecked-lis>
				<tearchchecked-lis></tearchchecked-lis>
				<tearchchecked-lis></tearchchecked-lis>
				<tearchchecked-lis></tearchchecked-lis>
				<tearchchecked-lis></tearchchecked-lis>
				<tearchchecked-lis></tearchchecked-lis>
				<tearchchecked-lis></tearchchecked-lis>
				<tearchchecked-lis></tearchchecked-lis>
			</scroll-view>
			<view class="checked-box-foot">
				<view class="checked-box-foot-left">重置</view>
				<view class="checked-box-foot-right" @tap="tabcli">完成</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import tearchcheckedLis from '@/components/tearchs/tearchcheckedLis.vue'
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			tabcli:function(){
				this.$emit('lis2')
			}
		},
		components: {
			tearchcheckedLis
		},
	}
</script>

<style lang="less" scoped="true">
.checked-box{
	width: 750upx;
	height: 100vh;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 999;
	background: rgba(0, 0, 0, 0.4);
	.checked-box-submit{
		width: 650upx;
		height: 100%;
		background: #ffffff;
		padding-top: 8upx;
		box-sizing: border-box;
		margin-left: 100upx;
		overflow: hidden;
		.checked-box-ul{
			width: 650upx;
			height: calc(100vh - 95upx);
		}
	}
	.checked-box-foot{
		width: 650upx;
		height: 88upx;
		position: fixed;
		left: 100upx;
		bottom: 0;
		display: flex;
		.checked-box-foot-left{
			width: 325upx;
			height: 88upx;
			text-align: center;
			font-size: 32upx;
			color: #333333;
			line-height: 88upx;
			background: #EBEBEB;
		}
		.checked-box-foot-right{
			width: 325upx;
			height: 88upx;
			text-align: center;
			font-size: 32upx;
			color: #ffffff;
			line-height: 88upx;
			background: #289DFA;
		}
	}
}
</style>

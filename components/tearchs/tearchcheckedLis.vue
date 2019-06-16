<template>
	<view class="tearchchecked-boxs">
		<view class="tearchchecked-heads">老师资质</view>
		<view class="tearchchecked-ul">
			<view class="tearchchecked-li">老师认证</view>
			<view class="tearchchecked-li">老师认证</view>
			<view class="tearchchecked-li tearchchecked-li-active">老师认证</view>
			<view class="tearchchecked-li">老师认证</view>
			<view class="tearchchecked-li">老师认证</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped="true">
.tearchchecked-boxs{
	border-bottom: 1px solid #E6E6E6;
	padding-bottom: 40upx;
	.tearchchecked-heads{
		height: 60upx;
		padding-top: 26upx;
		padding-left: 32upx;
		box-sizing: border-box;
		font-size: 28upx;
		color: #333333;
		line-height: 34upx;
		font-weight: 500;
	}
	.tearchchecked-ul{
		margin-left: 22upx;
		display: flex;	
		flex-flow:row wrap;
		.tearchchecked-li{
				height: 52upx;
				width: 182upx;
				background: #E8EDEC;
				border-radius: 8upx;
				font-size: 26upx;
				text-align: center;
				line-height: 52upx;
				box-sizing: border-box;
				margin: 20upx 10upx 0 10upx;
				color: #333333;
		}
		.tearchchecked-li-active{
			color: #289DFA;
			border: 2upx solid #289DFA;
			background: #ffffff;
			line-height: 48upx;
		}
	}
}
</style>

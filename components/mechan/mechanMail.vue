<template>
	<view class="mechanMail">
		<!-- 获取预约联系方式 -->
		<!-- 标题 -->
		<view class="mechanMail-head">留下您的联系方式以便老师尽快联系您</view>
		<!-- 验证手机号 -->
		<view class="mechanMail-input">
			<view class="mechanMail-input-numa">
				<input class="mechanMail-input-numa-inp" type="text" placeholder="请输入手机号" maxlength='100' />
			</view>
			<view class="mechanMail-input-numb">
				<input class="mechanMail-input-numb-inp" type="number" placeholder="请输入验证码" maxlength='6' />
				<view class="mechanMail-input-numb-btns">
					<view class="mechanMail-input-numb-btntxt">获取验证码</view>
				</view>
			</view>
		</view>
		<!-- 底部提示 -->
		<view class="mechanMail-foots">
			<view class="mechanMail-foots-num">
				<text class="iconfont icon-renzhengdunpaianquanbaozhangzhibao"></text>
				<text>无强行推销</text>
			</view>
			<view class="mechanMail-foots-num">
				<text class="iconfont icon-renzhengdunpaianquanbaozhangzhibao"></text>
				<text>此号码仅此老师可见</text>
			</view>
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
.mechanMail{
	position: absolute;
	left: 0;
	bottom: 100upx;
	background: #ffffff;
	.mechanMail-head{
		width: 750upx;
		height: 76upx;
		background: #F7F7F7;
		border-top: 1px solid #E2E2E2;
		border-bottom: 1px solid #E2E2E2;
		color: #B9B9B9;
		font-size: 28upx;
		line-height: 76upx;
		text-align: center;
		font-weight: 100upx;
	}
	.mechanMail-input{
		width: 750upx;
		padding-left: 30upx;
		box-sizing: border-box;
		// 手机号
		.mechanMail-input-numa{
			width: 720upx;
			height: 88upx;
			border-bottom: 1px solid #EDEDED;
			line-height: 88upx;
			.mechanMail-input-numa-inp{
				width: 100%;
				height: 100%;
				color: #B1B1B5;
			
				font-size: 28upx;
			}
		}
		// 验证码
		.mechanMail-input-numb{
			width: 720upx;
			height: 88upx;
			line-height: 88upx;
			display: flex;
			.mechanMail-input-numb-inp{
				display: inline-block;
				width: 488upx;
				height: 100%;
				color: #B1B1B5;
				font-size: 28upx;
			}
			.mechanMail-input-numb-btns{
				width: 232upx;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				.mechanMail-input-numb-btntxt{
					width: 160upx;
					height: 66upx;
					text-align: center;
					line-height: 66upx;
					font-size: 28upx;
					color: #ffffff;
					background: #3292FF;
					border-radius: 10upx;
				}
			}
		}
	}
	//底部提示
	.mechanMail-foots{
		width: 100%;
		height: 74upx;
		line-height: 74upx;
		border-top: 1px solid #E3E3E3;
		border-bottom: 1px solid #E3E3E3;
		background: #F7F7F7;
		display: flex;
		justify-content: space-around;
		font-size: 28upx;
		.mechanMail-foots-num text:nth-child(1){
			color: #38D943;
		}	
		.mechanMail-foots-num text:nth-child(2){
			color: #6E6E70;
		}	
	}
}
</style>

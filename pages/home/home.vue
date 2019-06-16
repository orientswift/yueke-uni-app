<template>
	<view class="home">
		<!-- 头部 -->
		<view class="home-head">
			<view class="home-head-box">
			</view>
			<view class="home-head-cont">
				<view class="home-head-cont-imgs">
					<image src="../../static/imgs/t1/tt1.png"></image>
				</view>
				<view class="home-head-cont-name">大傻子</view>
				<view class="home-head-cont-tel">13838828380</view>
			</view>
		</view>
		<!-- 功能——卡片部分 -->
		<view class="home-card">
			<!-- 卡片 -->
			<view class="home-card-ul">
				<view class="home-card-li">
					<view class="home-card-li-na">
						<view class="home-card-li-na-icon">
							<text class="iconfont icon-weibiaoti2fuzhi07"></text>
						</view>
					</view>
					<view class="home-card-li-nb">
						全部订单
					</view>
				</view>
				
				<view class="home-card-li">
					<view class="home-card-li-na">
						<view class="home-card-li-na-icon">
							<text class="iconfont icon-wodeqiaquan"></text>
						</view>
					</view>
					<view class="home-card-li-nb">
						已预约
					</view>
				</view>
				
				<view class="home-card-li">
					<view class="home-card-li-na">
						<view class="home-card-li-na-icon">
							<text class="iconfont icon-yifahuo"></text>
						</view>
					</view>
					<view class="home-card-li-nb">
						待收货
					</view>
				</view>
				
				<view class="home-card-li">
					<view class="home-card-li-na">
						<view class="home-card-li-na-icon">
							<text class="iconfont icon-comment-w"></text>
						</view>
					</view>
					<view class="home-card-li-nb">
						待评价
					</view>
				</view>
				
				
			</view>
		</view>
		<!-- 列表 -->
		<view class="home-list">
			<view class="home-list-li">
				<view class="home-list-li-left">
					<text class="iconfont icon-ren home-list-li-left-icon"></text>
					<text class="home-list-li-left-txt">我的老师</text>
				</view>
				<view class="home-list-li-right">
					<text class="iconfont icon-xiangyou"></text>
				</view>
			</view>
			<view class="home-list-li">
				<view class="home-list-li-left">
					<text class="iconfont icon-youxiang home-list-li-left-icon"></text>
					<text class="home-list-li-left-txt">我的邮箱</text>
				</view>
				<view class="home-list-li-right">
					<text class="iconfont icon-xiangyou"></text>
				</view>
			</view>
			<view class="home-list-li">
				<view class="home-list-li-left">
					<text class="iconfont icon-xiugaimima home-list-li-left-icon"></text>
					<text class="home-list-li-left-txt">修改秘密</text>
				</view>
				<view class="home-list-li-right">
					<text class="iconfont icon-xiangyou"></text>
				</view>
			</view>
			<view class="home-list-li">
				<view class="home-list-li-left">
					<text class="iconfont icon-guanyu home-list-li-left-icon"></text>
					<text class="home-list-li-left-txt">关于</text>
				</view>
				<view class="home-list-li-right">
					<text class="iconfont icon-xiangyou"></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less" scoped="true">
.home{
	// 头部
	.home-head{
		width: 750upx;
		height: 300upx;
		position: relative;
		overflow: hidden;
		// 背景图
		.home-head-box{
			position: absolute;
			bottom: 0;
			left: -375upx;
			width: 1500upx;
			height: 700upx;
			background: #29A3FC;
			border-radius: 50%;
			z-index: 1;
		}
		// 内容部分
		.home-head-cont{
			width: 750upx;
			height: 300upx;
			position: absolute;
			left: 0;
			top: 0;
			z-index: 5;
			padding-top: 30upx;
			box-sizing: border-box;
			.home-head-cont-imgs{
				width: 750upx;
				height: 130upx;
				text-align: center;
				margin-bottom: 14upx;
				image{
					width: 130upx;
					height: 130upx;
					border-radius: 50%;
				}
			}
			.home-head-cont-name{
				width: 750upx;
				height: 36upx;
				font-size: 30upx;
				color: #ffffff;
				text-align: center;
				line-height: 36upx;
			}
			.home-head-cont-tel{
				width: 750upx;
				height: 42upx;
				font-size: 28upx;
				color: #ffffff;
				text-align: center;
				line-height: 42upx;
				font-weight: 200;
			}
		}
	}
	.home-card{
		width: 750upx;
		height: 154upx;
		box-shadow: 0px 10upx 10upx #ACADAE;
		box-sizing: border-box;
		margin-bottom: 20upx;
		.home-card-ul{
			width: 750upx;
			height: 134upx;
			display: flex;
			justify-content: space-around;
			.home-card-li{
				width: 182upx;
				height: 134upx;
				.home-card-li-na{
					width: 182upx;
					height: 32upx;
					margin-top: 35upx;
					display: flex;
					justify-content: center;
					.home-card-li-na-icon{
						width: 100upx;
						height: 32upx;
						font-size: 30upx;
						text-align: center;
					}
				}
				.home-card-li-nb{
					width: 100%;
					height: 70upx;
					line-height: 70upx;
					text-align: center;
					font-size: 30upx;
					color: #848484;
				}
			}
		}
	}
	// 列表
	.home-list{
		width: 710upx;
		box-shadow: 0 0 5upx #848484;
		border-radius: 10upx;
		margin-left: 20upx;
		.home-list-li{
			display: flex;
			width: 100%;
			height: 80upx;
			line-height: 80upx;
			font-size: 28upx;
			color: #B4B4B4;
			justify-content: space-between;
			.home-list-li-left-icon{
				color: #29A3FC;
				margin-right: 10upx;
				margin-left: 30upx;
			}
			.home-list-li-left-txt{
				color: #626262;
			}
		}
	}
}
</style>

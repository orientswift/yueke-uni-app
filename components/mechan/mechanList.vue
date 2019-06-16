<template>
	<view class="mechanlist">
		<view class="mechanlist-imgs">
			<image class="mechanlist-imgs-li" src="../../static/imgs/dianpu/d1.png"></image>
		</view>
		<view class="mechanlist-table">
			<view class="mechanlist-table-head">欣岩钢琴艺术学校</view>
			<view class="mechanlist-table-start">
				<text class="iconfont icon-xingxing1 actives-start"></text>
				<text class="iconfont icon-xingxing1 actives-start"></text>
				<text class="iconfont icon-xingxing1 actives-start"></text>
				<text class="iconfont icon-xingxing1 txt-start"></text>
				<text class="iconfont icon-xingxing1 txt-start"></text>
				<text class="start-number">月销270</text>
			</view>
			<view class="mechanlist-ads">
				<text class="mechanlist-ads-table1">预约礼</text>
				<text class="mechanlist-ads-table2">免费赠送2次试听课</text>
			</view>
			<view class="mechanlist-foots">
				<view class="mechanlist-foots-left">
					<text class="iconfont icon-jiaoyinzujifangke"></text>
					<text class="txt">420人去过</text>
				</view>
				<view class="mechanlist-foots-right">
					<text class="iconfont icon-yulan"></text>
					<text class="txt">1000人浏览</text>
				</view>
			</view>
		</view>
		<view class="mechanlist-aside">
			<view class="mechanlist-aside-heads">
				<text class="mechanlist-aside-heads-tp">￥ 80</text>
				<text class="mechanlist-aside-heads-tx">起</text>
			</view>
			<view class="mechanlist-aside-dis">
				<text class="iconfont icon-dingwei"></text>
				<text class="mechanlist-aside-dis-txt">5.1Km</text>
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
.mechanlist{
	width: 100%;
	height: 206upx;
	padding-left: 30upx;
	padding-right: 30upx;
	box-sizing: border-box;
	display: flex;
	border-top: 1px solid #EBEBEB;
	.mechanlist-imgs{
		width: 150upx;
		height: 206upx;
		padding-top: 30upx;
		box-sizing: border-box;
		.mechanlist-imgs-li{
			width: 150upx;
			height: 100upx;
			border-radius: 10upx;
		}
	}
	.mechanlist-table{
		width:394upx;
		height: 206upx;
		padding-left: 20upx;
		padding-top: 24upx;
		box-sizing: border-box;
		// 学校名称
		.mechanlist-table-head{
			width: 374upx;
			height: 40upx;
			color:#333333;
			font-size: 30upx;
			font-weight: 500;
			line-height: 40upx;
		}
		// 评分
		.mechanlist-table-start{
			width: 374upx;
			height: 32upx;
			font-size: 20upx;
			line-height: 32upx;
			// 未选中星星
			.txt-start{
				color: #CCCCCC;
			}
			// 选中星星
			.actives-start{
				color: #F6BE65;
			}
			//月销
			.start-number{
				color: #808080;
				margin-left: 15upx;
			}
		}
		// 广告
		.mechanlist-ads{
			width: 374upx;
			line-height: 54upx;
			height: 54upx;
			font-size: 20upx;
			overflow: hidden;
			.mechanlist-ads-table1{
				color: #ff0000;
				padding: 2upx 4upx;
				border: 1px solid #ff0000;
			}
			.mechanlist-ads-table2{
				color: #666666;
				margin-left: 15upx;
			}
		}
		.mechanlist-foots{
			width: 374upx;
			height: 32upx;
			line-height: 32upx;
			color: #CBCBCB;
			display: flex;
			justify-content: space-between;
			.mechanlist-foots-left{
				
			}
			.act{
				color: #B2B2B2;
			}
			.txt{
				font-size: 20upx;
				margin-left: 10upx;
			}
		}
	}
	.mechanlist-aside{
		width:148upx;
		height: 206upx;
		padding-top: 24upx;
		box-sizing: border-box;
		.mechanlist-aside-heads{
			margin-bottom: 32upx;
			height: 40upx;
			text-align: right;
			line-height: 40upx;
			.mechanlist-aside-heads-tx{
				color: #B3B3B3;
				font-size: 23.94upx;
			}
			.mechanlist-aside-heads-tp{
				color: #FF9D2A;
				font-size: 35.91upx;
			}
		}
		.mechanlist-aside-dis{
			width: 148upx;
			height: 54upx;
			line-height: 54upx;
			text-align: right;
			font-size: 23.94upx;
			color: #C8C8C8;
			.mechanlist-aside-dis-txt{
				margin-left: 15upx;
			}
		}
	}
}
</style>

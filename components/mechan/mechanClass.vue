<template>
	<view class="mechanclass">
		<!-- 分类 筛选 条件 -->
		<!-- 左侧分类 -->
		<scroll-view class="mechanclass-left" scroll-y="true">
			<view class="mechanclass-left-li">
				<text class='iconfont icon-icon_duihao-xian mechanclass-left-li-icon'></text>文化课
			</view>
			<view class="mechanclass-left-li">
				<text class='iconfont icon-icon_duihao-xian mechanclass-left-li-icon'></text>舞蹈
			</view>
			<view class="mechanclass-left-li">
				<text class='iconfont icon-icon_duihao-xian mechanclass-left-li-icon'></text>美术
			</view>
			<view class="mechanclass-left-li mechanclass-active1">
				<text class='iconfont icon-icon_duihao-xian mechanclass-left-li-icon mechanclass-left-icon-active'></text>乐器
			</view>
			<view class="mechanclass-left-li">
				<text class='iconfont icon-icon_duihao-xian mechanclass-left-li-icon'></text>兴趣
			</view>
			<view class="mechanclass-left-li">
				<text class='iconfont icon-icon_duihao-xian mechanclass-left-li-icon'></text>体育
			</view>
			<view class="mechanclass-left-li">
				<text class='iconfont icon-icon_duihao-xian mechanclass-left-li-icon'></text>外语
			</view>
		</scroll-view>
		<!-- 右侧分类 -->
		<scroll-view class="mechanclass-right"  scroll-y="true">
			<view class="mechanclass-right-li">
				<text class="mechanclass-right-li-left">全部</text>
				<text class="mechanclass-right-li-right">38</text>
			</view>
			<view class="mechanclass-right-li">
				<text class="mechanclass-right-li-left">吉他</text>
				<text class="mechanclass-right-li-right">38</text>
			</view>
			<view class="mechanclass-right-li mechanclass-active2">
				<text class="mechanclass-right-li-left">吉他</text>
				<text class="mechanclass-right-li-right">38</text>
			</view>
			<view class="mechanclass-right-li">
				<text class="mechanclass-right-li-left">架子鼓</text>
				<text class="mechanclass-right-li-right">38</text>
			</view>
			<view class="mechanclass-right-li">
				<text class="mechanclass-right-li-left">古琴</text>
				<text class="mechanclass-right-li-right">38</text>
			</view>
			<view class="mechanclass-right-li">
				<text class="mechanclass-right-li-left">葫芦丝</text>
				<text class="mechanclass-right-li-right">38</text>
			</view>
			<view class="mechanclass-right-li">
				<text class="mechanclass-right-li-left">萨克斯</text>
				<text class="mechanclass-right-li-right">38</text>
			</view>
			<view class="mechanclass-right-li">
				<text class="mechanclass-right-li-left">小提琴</text>
				<text class="mechanclass-right-li-right">38</text>
			</view>
			<view class="mechanclass-right-li">
				<text class="mechanclass-right-li-left">笛子</text>
				<text class="mechanclass-right-li-right">38</text>
			</view>
			<view class="mechanclass-right-li">
				<text class="mechanclass-right-li-left">尤克里里</text>
				<text class="mechanclass-right-li-right">38</text>
			</view>
			<view class="mechanclass-right-li">
				<text class="mechanclass-right-li-left">古筝</text>
				<text class="mechanclass-right-li-right">38</text>
			</view>
			<view class="mechanclass-right-li">
				<text class="mechanclass-right-li-left">口技</text>
				<text class="mechanclass-right-li-right">38</text>
			</view>
			<view class="mechanclass-right-li">
				<text class="mechanclass-right-li-left">长笛</text>
				<text class="mechanclass-right-li-right">38</text>
			</view>
			<view class="mechanclass-right-li">
				<text class="mechanclass-right-li-left">琵琶</text>
				<text class="mechanclass-right-li-right">38</text>
			</view>
			<view class="mechanclass-right-li">
				<text class="mechanclass-right-li-left">电吉他</text>
				<text class="mechanclass-right-li-right">38</text>
			</view>
		</scroll-view>
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

<style scoped="true" lang="less">
.mechanclass{
	width: 100%;
	height: calc(100vh - 158upx);
	border-top: 1px solid #EBEBEB;
	position: absolute;
	left: 0;
	top:78upx;
	z-index: 5;
	display: flex;
	.mechanclass-left{
		width: 240upx;
		.mechanclass-left-li{
			width: 240upx;
			height: 78upx;
			border-bottom: 1px solid #EBEBEB;
			text-align: left;
			line-height: 78upx;
			color: #4C4C4C;
			font-weight: 500;
			font-size: 28upx;
			padding-left: 20upx;
			box-sizing: border-box;
			.mechanclass-left-li-icon{
				margin-right: 10upx;
				color: transparent;
			}
			.mechanclass-left-icon-active{
				color: #258CFF;
			}
		}
		.mechanclass-active1{
			color: #258CFF;
		}
	}
	
	.mechanclass-right{
		width: 510upx;
		background: #F5F5F5;
		.mechanclass-right-li{
			width: 510upx;
			height: 78upx;
			line-height: 78upx;
			color: #4C4C4C;
			font-weight: 500;
			font-size: 28upx;
			display: flex;
			justify-content: space-between;
			padding: 0 40upx;
			box-sizing: border-box;
			.mechanclass-right-li-left{
				display: inline-block;
			}
			.mechanclass-right-li-right{
				display: inline-block;
			}
		}
		.mechanclass-active2{
			color: #258CFF;
		}
	}
	
}
</style>

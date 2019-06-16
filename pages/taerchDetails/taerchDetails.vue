<template>
	<view class="details-boxs">
		<!-- 老师页  老师详情页 -->
		<!-- 头部 -->
		<view class="details-boxs-heads">
			<view class="details-boxs-heads-imgsbox">
				<image  class="details-boxs-heads-imgs" src="../../static/imgs/t1/tt1.png"></image>
				<text class="details-boxs-heads-imgs-icon iconfont icon-nv"></text>
			</view>
			<view class="details-boxs-heads-titlebox">
				<view class="details-boxs-heads-titlebox-names">浮一沉(海博英语学校)<text class="iconfont icon-icon_huangguan-copy"></text></view>
				<view class="details-boxs-heads-titlebox-title">潜心研究儿童教学，致力于快乐的教育</view>
				<view class="details-boxs-heads-titlebox-tables">
					<text class="heads-titlebox-tables-ts">7年教龄</text>
					<text class="heads-titlebox-tables-ts">教师认证</text>
					<text class="heads-titlebox-tables-ts">身份认证</text>
				</view>
			</view>
		</view>
		<!-- 选项卡 -->
		<view class="details-boxs-table">
			<view  @tap="listA" :class="nums==1 ? 'details-boxs-table-txt details-boxs-table-txt-active' : 'details-boxs-table-txt' ">简介</view>
			<text>|</text>
			<view @tap="listB" :class="nums==2 ? 'details-boxs-table-txt details-boxs-table-txt-active' : 'details-boxs-table-txt' ">相册</view>
		</view>
		<!-- 简介 选项 -->
		<details-brief v-show="nums==1"></details-brief>
		<!-- 相册 选项 -->
		<tearch-album v-show="nums==2"></tearch-album>
	</view>
</template>

<script>
	import detailsBrief from '@/components/tearchs/detailsBrief.vue'  //简介 卡片
	import tearchAlbum from '@/components/tearchs/tearchAlbum.vue'  //相册 卡片
	export default {
		data() {
			return {
				nums:1
			};
		},
		onLoad() {
		
		},
		methods:{
			listB:function(){
				this.nums=2
			},
			listA:function(){
				this.nums=1
			}
		},
		components: {
			detailsBrief,
			tearchAlbum
		},
	}
</script>

<style lang="less" scoped="true">
.details-boxs{
	
	// 头部样式
	.details-boxs-heads{
		width: 750upx;
		height: 346upx;
		background: #258CFF;
		padding-top: 20upx;
		box-sizing: border-box;
		// 照片
		.details-boxs-heads-imgsbox{
			width: 750upx;
			height: 134upx;
			text-align: center;
			position: relative;
			.details-boxs-heads-imgs{
				width: 134upx;
				height: 134upx;
				border-radius: 50%;
				margin: 0 auto;
			}
			.details-boxs-heads-imgs-icon{
				font-size: 22upx;
				width: 34upx;
				height: 34upx;
				line-height: 34upx;
				display: inline-block;
				z-index: 5;
				background: #EB5379;
				color: #ffffff;
				position: absolute;
				left: 406upx;
				bottom: 0upx;
				border-radius: 50%;
			}
		}
		// 简介
		.details-boxs-heads-titlebox-names{
			height: 70upx;
			width: 750upx;
			text-align: center;
			font-size: 32upx;
			color: #ffffff;
			line-height: 70upx;
			text{
				color: #FFC925;
			}
		}
		.details-boxs-heads-titlebox-title{
			height: 26upx;
			width: 750upx;
			text-align: center;
			font-size: 26upx;
			color: #C9DDFF;
			line-height: 26upx;
		}
		.details-boxs-heads-titlebox-tables{
			height: 86upx;
			width: 750upx;
			color: #ffffff;
			line-height: 86upx;
			text-align: center;
			.heads-titlebox-tables-ts{
				font-size: 26upx;
			}
			.heads-titlebox-tables-ts::after{
				content: '|';
				color: #C9DDFF;
				font-size: 24upx;
				margin: 0 22upx;
			}
			.heads-titlebox-tables-ts:last-child::after{
				content: '';
			}
		}
	}
	// 选项卡
	.details-boxs-table{
		width: 750upx;
		height: 80upx;
		background: #258CFF;
		display: flex;
		line-height: 80upx;
		.details-boxs-table-txt{
			width: 374upx;
			height: 80upx;
			text-align: center;
			color: #8BB9FF;
			font-size: 32upx;
			font-weight: 500;
		}
		text{
			color: #8BB9FF;
		}
		.details-boxs-table-txt-active{
			color: #ffffff;
		}
	}
}
</style>

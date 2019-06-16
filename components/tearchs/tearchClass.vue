<template>
	<view class="boxs">
		<!--老师  选项卡 筛选 教师分类 -->
		<scroll-view class="boxs-left" croll-y="true">
			<view class="boxs-left-li">
				<text class="iconfont boxs-left-li-icobs icon-icon_duihao-xian boxs-left-li-icobs-active"></text>
				<text class="boxs-left-li-txt boxs-left-li-txt-active">文化课</text>
			</view>
			<view class="boxs-left-li" v-for="(item,index) in lists" :key='index' :data-idls="item.id_li" @tap='cliTab'>
				<text :class="item.id_li == li_id ? 'iconfont boxs-left-li-icobs icon-icon_duihao-xian boxs-left-li-icobs-active' : 'iconfont boxs-left-li-icobs icon-icon_duihao-xian'"></text>
				<text  :class="item.id_li == li_id ? 'boxs-left-li-txt boxs-left-li-txt-active' : 'boxs-left-li-txt'">{{item.title}}</text>
			</view>
			<!-- <view class="boxs-left-li">
				<text class="iconfont boxs-left-li-icobs icon-icon_duihao-xian"></text>
				<text class="boxs-left-li-txt">舞蹈</text>
			</view>
			<view class="boxs-left-li">
				<text class="iconfont boxs-left-li-icobs icon-icon_duihao-xian"></text>
				<text class="boxs-left-li-txt">美术</text>
			</view>
			<view class="boxs-left-li">
				<text class="iconfont boxs-left-li-icobs icon-icon_duihao-xian"></text>
				<text class="boxs-left-li-txt">乐器</text>
			</view>
			<view class="boxs-left-li">
				<text class="iconfont boxs-left-li-icobs icon-icon_duihao-xian"></text>
				<text class="boxs-left-li-txt">体育</text>
			</view>
			<view class="boxs-left-li">
				<text class="iconfont boxs-left-li-icobs icon-icon_duihao-xian"></text>
				<text class="boxs-left-li-txt">外语</text>
			</view> -->
		</scroll-view>
		<view class="boxs-right" croll-y="true">
			<view class="boxs-right-li">
				<view>全部</view>
				<view class="boxs-right-li-number">12</view>
			</view>
			<view class="boxs-right-li">
				<view>小学辅导</view>
				<view class="boxs-right-li-number">3</view>
			</view>
			<view class="boxs-right-li">
				<view>初中辅导</view>
				<view class="boxs-right-li-number">3</view>
			</view>
			<view class="boxs-right-li">
				<view>高中辅导</view>
				<view class="boxs-right-li-number">3</view>
			</view>
			<view class="boxs-right-li">
				<view>成人自考</view>
				<view class="boxs-right-li-number">3</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				li_id:0
			};
		},
		methods:{
			cliTab:function(ev){
				this.li_id=ev.mp.currentTarget.dataset.idls
				
			}
		},
		computed:{
			lists:function(){
			return this.$store.state.list	
		}
	}
	}
</script>

<style scoped="true" lang="less">
.boxs{
	width: 750upx;
	height: calc(100vh - 162upx);
	border-top: 1px solid #EBEBEB;
	box-sizing: border-box;
	display: flex;
	overflow: hidden;
	.boxs-left{
		width: 240upx;
		height: 100%;
		.boxs-left-li{
				width: 100%;
				height: 80upx;
				display: flex;
				font-size: 28upx;
				padding-left: 14upx;
				box-sizing: border-box;
				border-bottom: 1px solid #F2F2F2;
				.boxs-left-li-icobs{
					width: 40upx;
					height: 80upx;
					line-height: 80upx;
					color: transparent;
				}
				.boxs-left-li-txt{
					width: 186upx;
					padding-left: 6upx;
					line-height: 80upx;
					box-sizing: border-box;
					color: #3B3D41;
				}
				.boxs-left-li-icobs-active{
					color: #258CFF;
				}
				.boxs-left-li-txt-active{
					color: #258CFF;
				}
		}
	}
	.boxs-right{
		width: 510upx;
		background: #F5F5F5;
		height: 100%;
		padding: 0 41upx;
		box-sizing: border-box;
		color: #4D4D4D;
		font-size: 28upx;
		 
		.boxs-right-li{
			line-height:80upx;
			width: 100%;
			height: 80upx;
			display: flex;
			justify-content: space-between;	
			
			.boxs-right-li-number{
				color: #989898;
			}
		}
	}
}
</style>

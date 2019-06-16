<template>
	<view class="screen-box">
		<!-- 教师主页 教师赛选 选项卡 -->
			<view class="screen-li1" data-ids='1' @tap="classShow">
				分类<text class="iconfont icon-xiangxia"></text>
			</view>
			<text class="screen-li-ic">|</text>
			<view class="screen-li1" data-ids='2' @click="classShow">
				排序<text class="iconfont icon-xiangxia"></text>
			</view>
			<text class="screen-li-ic">|</text>
			<view class="screen-li1" data-ids='3' @click="classShow">
				距离<text class="iconfont icon-xiangxia"></text>
			</view>
			<text class="screen-li-ic" >|</text>
			<view class="screen-li2" data-ids='4' @click="classShow">
				筛选<text class="iconfont icon-Group-"></text>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			classShow:function(ev){
				//console.log(ev.mp.currentTarget.dataset.ids)
				let strNum=this.$store.state.nums
				let nums=ev.mp.currentTarget.dataset.ids
					if(strNum == ev.mp.currentTarget.dataset.ids){
						nums= -1
					}else{
						nums=ev.mp.currentTarget.dataset.ids
					}
				this.$emit('lis',nums)
				this.$store.commit('addSweeps',nums)
			}
		}
	}
</script>

<style lang="less">
.screen-box{
	width: 750upx;
	height: 77upx;
	display: flex;
	line-height: 77upx;
	
	//教师主页 教师赛选 选项卡
	.screen-li1{
		width: 200upx;
		height: 77upx;
		color: #6C6C6C;
		font-size: 28upx;
		text-align: center;
		.iconfont{
			margin-left: 10upx;
			color: #B3B3B3;
		}
	}
	.screen-li2{
		flex: 1;
		height: 77upx;
		color: #6C6C6C;
		font-size: 28upx;
		text-align: center;
		.iconfont{
			margin-left: 10upx;
			color: #B3B3B3;
		}
	}
	.screen-li-ic{
		font-size: 26upx;
		color: #EBEBEB;
	}
	// 分类选项
	
}
</style>

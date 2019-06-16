import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		list:[],  //分类数据
		nums:-1  //教师分类滑块
	},
	mutations: {
		addList:function(state,str){   //设置分类数据
			state.list=str
		},
		addSweeps:function(state,nums){  //设置教师分类滑块
			state.nums=nums
		}
	},
	actions: {
		
	}
})

export default store

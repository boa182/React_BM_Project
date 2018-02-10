import React,{Component} from 'react'

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

export default class GoodTalk extends Component{
	componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('datalist'));
        // 绘制图表
        myChart.setOption({
            title: { text: '热门城市的民宿好评率' },
            tooltip: {},
            xAxis: {
                data: ["广州", "上海", "北京", "三亚", "重庆", "武汉"]
            },
            yAxis: {},
            series: [{
                name: '好评率',
                type: 'bar',
                data: [65, 20, 36, 10, 50, 20],
    			itemStyle:{
                    normal:{
                        color:'#4ad2ff'
                    }
                },
            }]
        });
    }
	render(){
		return(
				<div className="controlBox">
	               	 <div className="head">
	               	 	<h1>各地民宿的好评率</h1>
	               	 	<p>在这里可以查看各地民宿到各地城市民宿的好评率</p>
	               	 </div>
	               	 <div id="datalist" style={{ width: 700, height: 500 }}>
	               	 	
	               	 </div>
				</div>
				
		)
	}
}
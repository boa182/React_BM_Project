import React,{Component} from 'react'

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

export default class Sell extends Component{
	componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('datalist'));
        // 绘制图表
        myChart.setOption({
            title: { text: '热门城市已拥有的民宿数' },
            tooltip: {},
            xAxis: {
                data: ["广州", "上海", "北京", "三亚", "重庆", "武汉"]
            },
            yAxis: {},
            series: [{
                name: '已拥有的民宿数目',
                type: 'bar',
                data: [365, 220, 236, 110, 150, 320]
            }]
        });
    }
	render(){
		return(
				<div className="controlBox">
	               	 <div className="head">
	               	 	<h1>各城市民宿的营业状况</h1>
	               	 	<p>在这里可以看到各城市民宿的营业状况,然后对以后的工作攻略进行修改</p>
	               	 </div>
	               	 <div id="datalist" style={{ width: 700, height: 500 }}>
	               	 	
	               	 </div>
				</div>
		)
	}
}
import React,{Component} from 'react'
import { Progress,Button,Icon,Modal } from 'antd';

import {connect} from 'react-redux'
import * as actions from './getPlanAction';

const confirm = Modal.confirm;
class GetPlanComponent extends Component{
	componentWillMount(){
		this.props.getplan()
	}
	deletplane(wid){
		this.props.closePlan(wid).then(function(){
			this.props.getplan()
			
		}.bind(this));
	}
	showConfirm(wid){
		var self = this;
		confirm({
    		title: 'Do you want to delete these items?',
    		content: 'When clicked the OK button,it will be delete!',
    	onOk() {
      	return new Promise((resolve, reject) => {
        	setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        	self.deletplane(wid)
      	}).catch(() => console.log('Oops errors!'));
    },
    onCancel() {},
  		});
	}
	render(){
		return(
				<div className="controlBox">
	               	<div className="head">
	               	 	<h1>查看工作计划</h1>
	               	 	<p>在这里你可以看到你记录下来的工作计划,以及它们的进度条</p>
	               	 </div>
	               	 <div className="listbox">
	               	 	<ul className="clearfix">
	               	 		{
	               	 			this.props.ajaxResult.map(item => {
	               	 				return (
	               	 					<li className="planlist" key={item.wid}>
				               	 			<h2><span className="blue">任务标题:</span>{item.title}<p className="fr">起止日期:
				               	 				<span>
				               	 					{item.deadline}
				               	 				</span>
				               	 				</p>
				               	 			</h2>
				               	 			<p>任务内容:</p>
				               	 			<span>{item.content}</span>
				               	 			<div>进度条:<Progress percent={item.percent*1} status="active" /></div>
				               	 			<Button type="danger" onClick={this.showConfirm.bind(this,item.wid)}><Icon type="close" />太难了,不干了</Button>
				               	 		</li>
	               	 				)
	               	 			})
	               	 		}
	               	 	</ul>
	               	 </div>
				</div>
		)
	}
}
let mapStateToProps = (state) =>{
	return{
		ajaxStatus:state.checkReducer.status,
		ajaxResult:state.checkReducer.result == undefined ? [] : state.checkReducer.result.news
	}
}
//把组件，状态，方法发射出去（代替export default class Component）
export default connect(mapStateToProps,actions)(GetPlanComponent);

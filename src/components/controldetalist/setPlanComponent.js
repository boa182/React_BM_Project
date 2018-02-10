import React,{Component} from 'react'
import { DatePicker,Input,Button,Modal} from 'antd';
import './../control/control.scss';

import {connect} from 'react-redux';
import * as actions from './setPlanAction';

import $ from 'jquery';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

class SetPlanComponent extends Component{
	state = {
		title:'',
		content:'',
		deadline:'',
	}
	onChange(date,dateString){
		console.log(dateString)
		var d = dateString.join(',')
		this.setState({
			deadline:d
		})
	}
	success(){
		Modal.success({
		    title: '温馨提示',
		    content: '保存成功',
		});
	}
	error(){
		Modal.error({
			 title: '错误提示',
    		 content: '内容不能为空'
		})
	}
	title(e){
		this.setState({
			title:e.target.value
		})
	}
	setplan(){
		if(this.state.deadline!=''&&this.state.title!=''&&this.state.content!=''){
			this.props.setPlan(this.state.title,this.state.content,this.state.deadline).then(function(){
			
				this.success();
				console.log($('input'))
				$('input').val("");
				$('textarea').val("");
			}.bind(this))
		}else{
			this.error();
		}
	}
	content(e){
		this.setState({
			content:e.target.value
		})
	}
	render(){
		return(
				<div className="controlBox">
	               	 <div className="head">
	               	 	<h1>计划表单</h1>
	               	 	<p>你可以在这里制定你的工作计划</p>
	               	 </div>
	               	 <div className="form">
	               	 	<p>
							<label>标题：</label>
							
							<Input placeholder="给目标起个名字" onChange={this.title.bind(this)}/>
						</p>
						<p>
							<label>起止日期:</label>
							<br />
    						<RangePicker onChange ={this.onChange.bind(this)}/>
						</p>
						<p>
							<label>目标描述:</label>
							
							
							<textarea rows="5" cols="80" onChange ={this.content.bind(this)}></textarea>
							
						</p>
						<Button type="primary" onClick = {this.setplan.bind(this)}>提交</Button>
	               	 </div>
				</div>
		)
	}
}

let mapStateToProps = (state) =>{
//	console.log(state);
	return{
		ajaxStatus:state.checkReducer.status,
		ajaxResult:state.checkReducer.result == undefined ? [] : state.checkReducer.result.news

	}
}
//把组件，状态，方法发射出去（代替export default class Component）
export default connect(mapStateToProps,actions)(SetPlanComponent);
import React,{Component} from 'react'
import { Button,Icon,Rate,Modal } from 'antd';

import {connect} from 'react-redux'
import * as actions from './employeeAction';

class Employee extends Component{
	state = {
		adminPermission:0,
	}
	componentWillMount(){
		this.props.getadmin()
		this.setState({
			adminPermission:window.localStorage.Permission,
		})
	}
	error(){
		Modal.error({
			 title: '错误提示',
    		 content: '你不是又酷又帅气能旋转跳跃飞舞的鱼露，你没权操作'
		})
	}
	success(){
		Modal.success({
		    title: '温馨提示',
		    content: '你已经成功操作',
		});
	}
	delectclick(aid){
		if(this.state.adminPermission==1){
			this.props.dismissal(aid).then(function(){
				this.props.getadmin().then(function(){
					this.success();
					
				}.bind(this))
			}.bind(this));
		}else{
			this.error();
			console.log(this.state.adminPermission)
		}
	}
	render(){
		return(
				<div className="controlBox">
					<div className="head">
						<h1>在职员工信息</h1>
	               	 	<p>你可以查看到先公司的在员工信息,,以及他们的权限</p>
					</div>
	               	 <div className="listbox">
	               	 	<table>
	               	 		<thead>
               	 				<tr>
               	 					<th>工号</th>
               	 					<th>人员</th>
               	 					<th>权限</th>
               	 					<th>绩效</th>
               	 					<th>操作</th>
               	 				</tr>
	               	 		</thead>
	               	 		<tbody>
	               	 			{
	               	 				this.props.ajaxResult.map(item => {
	               	 					return (
	               	 						<tr key={item.aid}>
			               	 					<td>{item.aid}</td>
			               	 					<td>{item.username}</td>
			               	 					<td>{item.permission}</td>
			               	 					<td><Rate disabled defaultValue={item.rate} /></td>
			               	 					<td>
			               	 						<Button type="danger" onClick={this.delectclick.bind(this,item.aid)}><Icon type="close" />解雇</Button>
			               	 					</td>
			               	 				</tr>
	               	 					)
	               	 				})
	               	 			}
               	 				
               	 			</tbody>
	               	 	</table>
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
export default connect(mapStateToProps,actions)(Employee);
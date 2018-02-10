import React,{Component} from 'react'
import { Button,Icon,Rate,Pagination,Modal } from 'antd';

import {connect} from 'react-redux'
import * as actions from './editAction';

class EditComponent extends Component{
	
	componentWillMount(){
		this.props.selectPage()
		this.setState({
			adminPermission:window.localStorage.Permission,
		})
	}
	state = {
		current:1,
		price:'',
		city:'',
		title:'',
		adminPermission:0,
	}
	onChange = (page) => {
   		this.setState({
      		current: page,
    	});
    	this.props.selectPage(page);
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
	delclick(hid){
		if(this.state.adminPermission==1){
			this.props.deleteHomestray(hid).then(function(){
				this.success();
				
				this.props.selectPage(this.current)
			}.bind(this))
			
		}else{
			this.error();
		}
	}
	saveclick(hid,hcity,htitle,hprice){
		var city = this.state.city;
		var price = this.state.price;
		var title = this.state.title;
		city = city != '' ? this.state.city : hcity;
		price = price != '' ? this.state.price : hprice;
		title = title != '' ? this.state.title : htitle;
		if(this.state.adminPermission==1){
			this.props.editHomestay(hid,city,this.state.price,this.state.title).then(function(){
				this.success()
			}.bind(this))
		}else{
			this.error();
		}
	}
	editTab(event){
		if(event.target.tagName=='TD'&&(event.target.className!='1'&&event.target.className!='5')){
//			console.log(event.target);
			let input = document.createElement('input');
            input.type = 'text';
            input.value = event.target.innerText;
			event.target.innerHTML = '';
            event.target.appendChild(input);
            input.focus();
            
            var self = this;
            
            input.onblur = function(){
//          	console.log(this.parentNode.className);
            	if(this.parentNode.className=='2'){
            		self.setState({
            			title:this.value,
            		})
            	}else if(this.parentNode.className=='3'){
            		self.setState({
            			price:this.value,
            		})
            	}else if(this.parentNode.className=='4'){
            		self.setState({
            			city:this.value,
            		})
            	}
            	this.parentNode.innerHTML = this.value;
            }
            
            
		}
	}
	render(){
		return(
			<div className="controlBox">
				<div className="head">
					<h1>编辑民宿信息</h1>
               	 	<p>你可以在这里修改已上线的民宿信息,或者删除信息错误的民宿</p>
				</div>
				<div style={{marginLeft:'30px'}}>
				 <Pagination current={this.state.current} onChange={this.onChange.bind(this)} total={170} />
				</div>
               	 
               	 <div className="listbox">
               	 	<table>
               	 		<thead>
           	 				<tr>
           	 					<th>序号</th>
           	 					<th>酒店名称</th>
           	 					<th>价格</th>
           	 					<th>城市</th>
           	 					<th>操作</th>
           	 				</tr>
               	 		</thead>
               	 		<tbody onClick={this.editTab.bind(this)}>
               	 			{
               	 				this.props.ajaxResult.map((item,idx) => {
               	 					return (
               	 						<tr key={item.hid}>
		               	 					<td className='1'>{idx+1}</td>
		               	 					<td className='2'>{item.title}</td>
		               	 					<td className='3'>{item.price}</td>
		               	 					<td className='4'>{item.city}</td>
		               	 					<td className="5">
		               	 						<Button type="primary" onClick={this.saveclick.bind(this,item.hid,item.city,item.title,item.price)}><Icon type="check" />保存</Button>
		               	 						<Button type="danger"  onClick={this.delclick.bind(this,item.hid)}><Icon type="close" />删除</Button>
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
export default connect(mapStateToProps,actions)(EditComponent);
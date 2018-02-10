import React,{Component} from 'react';
import { Row, Col ,Menu, Icon,Modal} from 'antd';
import './control.scss';
import {Link,hashHistory} from 'react-router'

import {connect} from 'react-redux';
import * as actions from './controlAction';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class ControlComponent extends Component{
	state = {
		aidname:'',
		permission:window.localStorage.Permission,
		top:'none',
		public:'none',
	}
	componentWillMount(){
		var aid = window.localStorage.aid;
		if(window.localStorage.Permission=='1'){
			this.setState({
				top:'block',
				public:'none',
			})
		}else if(window.localStorage.Permission=='0'){
			this.setState({
				top:'none',
				public:'block',
			})
		}
		this.props.getaiddatalist(aid).then(function(res){
			
			this.setState({
				aidname:res[0].username||0,
//				permission:res[0].permission||0,
			})
			
			
		}.bind(this));
	}
	error(){
		Modal.error({
			 title: '错误提示',
    		 content: '你不是又酷又帅气能旋转跳跃飞舞的鱼露，你没权进入'
		})
	}
	success(){
		Modal.success({
		    title: '温馨提示',
		    content: '你已经成功操作',
		});
	}
	handleClick(e){
		var self = this;
		if(e.key=='a10'&&this.state.permission=='1'){
			hashHistory.push({
				pathname:'/control/performance'
			})
			
		}else if(e.key=='a10'&&this.state.permission!='1'){
			this.error();
			console.log(this.state.permission)
		}
	 }
	
	render(){
		return(
			 <Row>
			    <Col xs={12} sm={10} md={7} lg={6} xl={5}>
			    	<Menu
				        onClick={this.handleClick.bind(this)}
				        style={{ width: 256 }}
				        defaultSelectedKeys={['1']}
				        defaultOpenKeys={['sub1']}
				        mode="inline"
				      >
				        <SubMenu key="sub1" title={<span><Icon type="form" /><span>工作台</span></span>}>
					        <Menu.Item key="a1"><Link to="/control/setplan">工作备忘录</Link></Menu.Item>
					        <Menu.Item key="a2"><Link to="/control/check">审核业主信息</Link></Menu.Item>
					        <Menu.Item key="a3"><Link to="/control/edit">编辑民宿信息</Link></Menu.Item>
				        </SubMenu>
				        <SubMenu key="sub2" title={<span><Icon type="area-chart" /><span>详情页</span></span>}>
				          	<Menu.Item key="a5"><Link to="/control/getplan">工作计划</Link></Menu.Item>
				        <SubMenu key="sub3" title="分析页">
				            <Menu.Item key="a7"><Link to="/control/sell">营业状态</Link></Menu.Item>
				            <Menu.Item key="a8"><Link to="/control/goodtalk">好评率</Link></Menu.Item>
				        </SubMenu>
				        </SubMenu>
				        <SubMenu key="sub4" title={<span><Icon type="team" /><span>员工详情</span></span>}>
				          <Menu.Item key="a9"><Link to="/control/employee">在职员工</Link></Menu.Item>
				          <Menu.Item key="a10">员工绩效</Menu.Item>
				        </SubMenu>
				     </Menu>
			    	
			    </Col>
			    <Col xs={12} sm={14} md={13} lg={18} xl={19}>
			    	<div className="adminhead">
			    		<ul>
			    			<li>欢迎,管理者<span>{this.state.aidname}</span></li>
			    			<li className="top" style={{display:this.state.top,width:'80px',}}>（最高级)</li>
			    			<li className="public" style={{display:this.state.public,width:'80px',}}>(普通级)</li>
			    			<li><Link to = '/login'>退出登录</Link></li>
			    		</ul>
			    	</div>	
			    	
					{this.props.children}
			    </Col>
			    
			 </Row>
		)
	}
}

//{this.props.children && React.cloneElement(this.props.children, {
//	permission: this.state.permission
//})}
let mapStateToProps = (state) =>{
//	console.log(state);
	return{
		ajaxStatus:state.checkReducer.status,
		ajaxResult:state.checkReducer.result == undefined ? [] : state.checkReducer.result.news

	}
}
//把组件，状态，方法发射出去（代替export default class Component）
export default connect(mapStateToProps,actions)(ControlComponent);
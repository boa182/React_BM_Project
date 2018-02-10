import React,{Component} from 'react'
//引入字体
import {Icon} from 'antd';


//这里不引的话，就用不了Link
import {Link} from 'react-router'
 
export default class HomeComponent extends Component{
	render(){
		return(
				<div>
	                <div className="header clearfix">
	                	<h1 className="fl">
	                		<Icon type="rocket" />
	                		<span>Homestay Master</span>
	                	</h1>
	                	<ul className="fr">
	                		<li><Link to="/login"><Icon type="user" />&nbsp;&nbsp;登录</Link></li>
	                		<li><Link to="/register"><Icon type="usergroup-add" />&nbsp;&nbsp;注册</Link></li>
	                	</ul>
	                </div>
					<div className="contain">{this.props.children}</div>
				</div>
		)
	}
}

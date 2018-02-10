import React,{Component} from 'react';

import { Form, Icon, Input, Button, Checkbox,Alert } from 'antd';
import {Link,hashHistory} from 'react-router'
import {connect} from 'react-redux'

import * as actions from './loginAction';

class LoginComponent extends Component{
	state = {
		username:'',
		password:'',
		display:'none',
	}
	changeA(){
		this.setState({
			username:this.refs.username.value,
			password:this.refs.password.value
		})
	}
	checklogin(){
		var reg=/^[a-zA-Z]{3,7}$/;   
		
		if(reg.test(this.refs.username.value)==true){
			this.setState({
				display:'none'
			})
			
		}else{
			this.setState({
				display:'block'
			})
		}
	}
	login(){
		this.props.loginAdmin(this.state.username,this.state.password).then(function(res){
			
			if(res==false){
				alert("登录失败，请检查用户名或密码")
			}else{
				window.localStorage.aid = res[0].aid
				window.localStorage.Permission = res[0].permission
				alert('登录成功，正在进入..')
				hashHistory.push({
					pathname:'/control',
//					query:{
//						aidnumber:res[0].aid
//					}
				})
				
			}
		})
		
	}
	render(){
		
		return(
			<div className="userbox">
				<div className="snow-container">
					<div className="snow foreground"></div>
					<div className="snow foreground layered"></div>
					<div className="snow middleground"></div>
					<div className="snow middleground layered"></div>
					<div className="snow background"></div>
					<div className="snow background layered"></div>
				</div>
				<div className="form">
					<div className="fl">
						<p>
							<label>username:</label>
							<input type="text"  placeholder="please write.." ref="username" onChange={this.changeA.bind(this)} onBlur={this.checklogin.bind(this)}/>
						</p>
						<div style={{display:this.state.display}}>
							<Alert message="请输入3-7位的纯英文字母" type="error" showIcon/>
						</div>
						<p>
							<label>password:</label>
							<input type="password"  placeholder="please write.." ref="password" onChange={this.changeA.bind(this)}/>
						</p>
						<p>
							<Button type="primary" onClick={this.login.bind(this)}><Icon type="key" />Login</Button>
							<Link to='/register'>new employee?</Link>
						</p>
					</div>
					<div className="welcome fr">
						<span className="bigsize">W</span>elcome to <span className="bigsize">H</span>omestay <span className="bigsize">M</span>aster
						
					</div>
					
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
export default connect(mapStateToProps,actions)(LoginComponent);
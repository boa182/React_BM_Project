import React from 'react'
import {Route,Redirect,IndexRoute} from 'react-router'



//引入字体图标
import {Icon} from 'antd';
import 'antd/dist/antd.css';

import HomeComponent from '../components/home/homeComponent'
import RegisterComponent from '../components/register/registerCompoent'
import LoginComponent from '../components/login/loginComponent'
import ControlComponent from '../components/control/ControlComponent'
//控制台的详情页
import SetPlanComponent from '../components/controldetalist/setPlanComponent'
import GetPlanComponent from '../components/controldetalist/getPlanComponent'
import CheckHomestay from '../components/controldetalist/checkHomestay'
import Employee from '../components/controldetalist/employee'
import Performance from '../components/controldetalist/performance'
import GoodTalk from '../components/controldetalist/GoodTalk'
import Sell from '../components/controldetalist/sell'
import Edit from '../components/controldetalist/editComponent'

const routes = (
	<Route path="/" component={HomeComponent}>	
		<IndexRoute component={LoginComponent}/>
		<Route path="/login" component={LoginComponent}></Route>
		<Route path="/register" component={RegisterComponent}></Route>
		<Route path="/control" component={ControlComponent} >
			<IndexRoute component={SetPlanComponent}/>
			<Route path="/control/setplan" component={SetPlanComponent}></Route>
			<Route path="/control/getplan" component={GetPlanComponent}></Route>
			<Route path="/control/check" component={CheckHomestay}></Route>
			<Route path="/control/employee" component={Employee}></Route>
			<Route path="/control/performance" component={Performance}></Route>
			<Route path="/control/sell" component={Sell}></Route>
			<Route path="/control/goodtalk" component={GoodTalk}></Route>
			<Route path="/control/edit" component={Edit}></Route>
			
		</Route>
	</Route>
	
	
)
export default routes;
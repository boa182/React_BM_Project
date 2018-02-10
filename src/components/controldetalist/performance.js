import React,{Component} from 'react'
import { Rate } from 'antd';

import {connect} from 'react-redux';
import * as actions from './performanceAction';

class Performance extends Component{
	componentWillMount(){
		this.props.getperformance()
	}
	handleChange = (value,aid) => {
//		console.log(value,aid)
		this.props.changeRate(value,aid).then(function(){
			this.props.getperformance()
		}.bind(this))
	}
	render(){
		return(
			<div className="controlBox">
               	<div className="head">
					<h1>员工评分</h1>
               	 	<p>对所有在职的员工进行评分</p>
				</div>
				<div>
					<table className="rbox">
						<thead>
							<tr>
								<th>员工</th>
								<th>评分</th>
							</tr>
						</thead>
						<tbody>
							
								
								{
									this.props.ajaxResult.map(item => {
										return (
											<tr key={item.aid}>
												<td>{item.username}</td>
												<td><Rate onChange={this.handleChange.bind(this,item.aid)} value={item.rate} />
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
//	console.log(state);
	return{
		ajaxStatus:state.checkReducer.status,
		ajaxResult:state.checkReducer.result == undefined ? [] : state.checkReducer.result.news

	}
}
//把组件，状态，方法发射出去（代替export default class Component）
export default connect(mapStateToProps,actions)(Performance);
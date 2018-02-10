import * as ajaxConstants from '../../constaints/ajaxConstants'
import * as performanceConstants from '../../constaints/performanceConstants'

export function getplan(){
	return{
		url:'getplan'
	}
}

export function closePlan(wid){
	return{
		types:[performanceConstants.PERFORMANCE_REQUESTING,performanceConstants.PERFORMANCE_REQUESTED,performanceConstants.PERFORMANCE_REQUESTERROR],
		url:'closeplan',
		data:{
			wid:wid
		}
	}
}
//假如需要传参
//data:{}
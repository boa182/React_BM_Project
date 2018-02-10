import * as ajaxConstants from '../../constaints/ajaxConstants'
import * as performanceConstants from '../../constaints/performanceConstants'

export function getadmin(){
	return{
		url:'getadmin'
	}
}

export function dismissal(aid){
	return{
		types:[performanceConstants.PERFORMANCE_REQUESTING,performanceConstants.PERFORMANCE_REQUESTED,performanceConstants.PERFORMANCE_REQUESTERROR],
		url:'dismissal',
		data:{
			aid:aid,
		}
	}
}
//假如需要传参
//data:{}
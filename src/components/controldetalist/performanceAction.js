import * as ajaxConstants from '../../constaints/ajaxConstants'
import * as performanceConstants from '../../constaints/performanceConstants'


export function getperformance(){
	return{
		url:'getadmin'
	}
}

export function changeRate(aid,value){
	return{
		types:[performanceConstants.PERFORMANCE_REQUESTING,performanceConstants.PERFORMANCE_REQUESTED,performanceConstants.PERFORMANCE_REQUESTERROR],
		url:'changerate',
		data:{aid:aid,rate:value}
	}
}

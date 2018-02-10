import * as ajaxConstants from '../../constaints/ajaxConstants'
import * as performanceConstants from '../../constaints/performanceConstants'

export function setPlan(title,content,deadline){
	console.log(title,content,deadline);
	return{
		types:[performanceConstants.PERFORMANCE_REQUESTING,performanceConstants.PERFORMANCE_REQUESTED,performanceConstants.PERFORMANCE_REQUESTERROR],
		url:'setplan',
		data:{
			title:title,
			content:content,
			deadline:deadline,
		}
	}
}
import * as ajaxConstants from '../../constaints/ajaxConstants'
import * as performanceConstants from '../../constaints/performanceConstants'

export function getcheck(){
	return{
		url:'checkhomestay'
		//假如需要传参
		//data:{}
	}
}

export function deletcheck(hid){
	return{
		types:[performanceConstants.PERFORMANCE_REQUESTING,performanceConstants.PERFORMANCE_REQUESTED,performanceConstants.PERFORMANCE_REQUESTERROR],
		url:'deletcheck',
		data:{
			hid:hid
		}
	}
}

export function insertclick(src,address,budget,city){
	console.log(src,address,budget,city);
	return{
		types:[performanceConstants.PERFORMANCE_REQUESTING,performanceConstants.PERFORMANCE_REQUESTED,performanceConstants.PERFORMANCE_REQUESTERROR],
		url:'insertcheck',
		data:{
			image_src:src,
			title:address,
			price:budget,
			city:city
		}
	}
}

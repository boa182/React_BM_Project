import * as ajaxConstants from '../../constaints/ajaxConstants'
import * as performanceConstants from '../../constaints/performanceConstants'

export function selectPage(page){
	return{
		url:'selectpage',
		data:{page:page}
	}
}
export function deleteHomestray(hid){
	return{
		types:[performanceConstants.PERFORMANCE_REQUESTING,performanceConstants.PERFORMANCE_REQUESTED,performanceConstants.PERFORMANCE_REQUESTERROR],
		url:'delethomestray',
		data:{
			hid:hid
		}
	}
}
export function editHomestay(hid,city,price,title){
	return{
		types:[performanceConstants.PERFORMANCE_REQUESTING,performanceConstants.PERFORMANCE_REQUESTED,performanceConstants.PERFORMANCE_REQUESTERROR],
		url:'edithhomestay',
		data:{
			hid:hid,
			city:city,
			price:price,
			title:title
		}
	}
}
//假如需要传参
//data:{}
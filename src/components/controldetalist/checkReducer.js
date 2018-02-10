import * as ajaxConstants from '../../constaints/ajaxConstants'
//深拷贝原始状态
export default function checkReducer(state={},action){
	
	let newState = JSON.parse(JSON.stringify(state))
	switch(action.type){
		case ajaxConstants.AJAX_REQUESTING:
			newState.status = 0;
			break;
		case ajaxConstants.AJAX_REQUESTED:
			newState.status = 1;
			newState.result = action.result;
			break;
		case ajaxConstants.AJAX_REQUESTERROR:
			newState.status = -1;
			newState.result = action.result;
			break;
		
		
	}
	return newState;
}
//状态正在请求中 0 
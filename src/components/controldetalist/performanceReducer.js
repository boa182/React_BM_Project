import * as performanceConstants from '../../constaints/performanceConstants'

export default function checkReducer(state={},action){
	
	let newState = JSON.parse(JSON.stringify(state))
	switch(action.type){
		case performanceConstants.PERFORMANCE_REQUESTING:
			newState.status = 0;
			break;
		case performanceConstants.PERFORMANCE_REQUESTED:
			newState.status = 1;
			newState.result = action.result;
			break;
		case performanceConstants.PERFORMANCE_REQUESTERROR:
			newState.status = -1;
			newState.result = action.result;
			break;
		
		
	}
	return newState;
}

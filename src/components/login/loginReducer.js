import * as loginConstants from '../../constaints/loginConstants'

export default function loginReducer(state={},action){
	
	let newState = JSON.parse(JSON.stringify(state))
	switch(action.type){
		case loginConstants.LOGIN_REQUESTING:
			newState.status = 0;
			break;
		case loginConstants.LOGIN_REQUESTED:
			newState.status = 1;
			newState.result = action.result;
			break;
		case loginConstants.LOGIN_REQUESTERROR:
			newState.status = -1;
			newState.result = action.result;
			break;
		
		
	}
	return newState;
}

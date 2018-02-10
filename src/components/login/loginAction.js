import * as ajaxConstants from '../../constaints/ajaxConstants'
import * as loginConstants from '../../constaints/loginConstants'

export function loginAdmin(username,password){
	return{
		url:'loginadmin',
		method:'post',
		types:[loginConstants.LOGIN_REQUESTING,loginConstants.LOGIN_REQUESTED,loginConstants.LOGIN_REQUESTERROR],
		data:{
			username:username,
			password:password
		}
	}
}
import * as ajaxConstants from '../../constaints/ajaxConstants'
import * as performanceConstants from '../../constaints/performanceConstants'
import * as loginConstants from '../../constaints/loginConstants'

export function getaiddatalist(aid){
	return{		
		url:'selectaid',
		types:[loginConstants.LOGIN_REQUESTING,loginConstants.LOGIN_REQUESTED,loginConstants.LOGIN_REQUESTERROR],
		data:{aid:aid}
	}
}


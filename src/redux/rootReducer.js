//所有的reducer的汇总
import {combineReducers} from 'redux'

import checkReducer from '../components/controldetalist/checkReducer'
import performanceReducer from '../components/controldetalist/performanceReducer'
import loginReducer from '../components/login/loginReducer'

export default combineReducers({
	checkReducer,
	performanceReducer,
	loginReducer
})


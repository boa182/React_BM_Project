/*
 为什么需要中间件？
 一个确定的纯对象，而例如异步ajax请求，
 可能会包含了很多种的行为（请求中，请求成功，请求失败等···），
 因此我们需要使用中间件将一个不确定的action转变或拆分成多个标准的plain object交由reducer处理。）
 */
//把前端的网络配置引进来
import http from '../utils/httpclient';

import * as ajaxContants from '../constaints/ajaxConstants'
//定义一个方法
export default function middleware(api){
	return function(dispatch){
		return function(action){
			let {type,types,method = 'get',data={},url} =action;

			if(!url){
				return dispatch(action)
			}
			let defaultConstants = [ajaxContants.AJAX_REQUESTING, ajaxContants.AJAX_REQUESTED, ajaxContants.AJAX_REQUESTERROR];
			//如果有就使用传过来的，没有就使用默认的，是由Action.js传过来的
			let [requesting, requested, requesterror] = types ? types : defaultConstants;
			
			api.dispatch({type:requesting});
			if(url){
				return new Promise((resolve, reject) => {
                    http[method](url, data).then(res => {
                        api.dispatch({
                            type: requested,
                            result: JSON.parse(res.text)
                        })
                        resolve(JSON.parse(res.text))
                    }).catch(error => {
                        api.dispatch({
                            type: requesterror,
                            result: error
                        })
                        reject(error)
                    })
                })
//				http[method](url,data).then(res => {
//					console.log(JSON.parse(res.text));
//					api.dispatch({
//						type:requested,
//						result:JSON.parse(res.text)
//					})
//				}).catch(error => {
//					api.dispatch({
//                      type: requesterror,
//                      result:error
//                  })
//				})
			}
		}
	}
}

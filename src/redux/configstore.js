//步骤1
import React from 'react';
import {createStore,applyMiddleware} from 'redux'

//引入中间件，中间件有做什么作用叻？
import middleware from './middleware'

//引入reducer，有什么作用叻？
//一个纯函数，通过对应的action，type执行相对应的方法，从而改变state的值
//接受两个参数，旧状态的state，一个action对象，返回一个新的state
import rootReducer from './rootReducer'


//生成一个store
const store = createStore(rootReducer,applyMiddleware(middleware));

export default store;
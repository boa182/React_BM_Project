import React from 'react'
import ReactDOM from 'react-dom'


//引入路由
import {Router,hashHistory,Route} from 'react-router';
import routes from './router/index'



//引入状态管理
import {Provider} from 'react-redux'

import store from './redux/configStore'

//引入basecss
import './utils/base.scss'


//渲染
ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}/>
    </Provider>,
    document.getElementById('app')
)
//  "start": "webpack-dev-server --devtool eval --progress --host 10.3.136.153 --port 3002 --colors --content-base ./"
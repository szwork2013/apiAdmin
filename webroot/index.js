import React from 'react'
import { render }from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import {appFirstPath} from "./conf/APP"
import Main from './common/Main'
import EmptyContainer from "./components/EmptyContainer"
//import AppManagerRoute from './routes/Appmanager'
//import APIManagerRoute from './routes/ApiManager'
//import {ProductManagerRoute, CategoryManagerRoute, StockManagerRoute } from './routes/ProductManager'
import {NoticPushRoute, AdvertPutRoute, OrderManagerRoute, NewManagerRoute, MemberManagerRoute, RechargeManagerRoute} from "./routes/RenRenGO"
//import ExamineRoute from './routes/Examine'
const routes = {
    path: "/",
    component: Main,
    childRoutes:[
        {
            path: appFirstPath,
            component: EmptyContainer,
            childRoutes:[
                //API后台管理
                //AppManagerRoute,

                //ProductManager
                //ProductManagerRoute, CategoryManagerRoute, StockManagerRoute,

                //RenRenGO
                NoticPushRoute, AdvertPutRoute, OrderManagerRoute, NewManagerRoute, MemberManagerRoute,RechargeManagerRoute,

                //资质审核
                //ExamineRoute
            ]
        }
    ]
}
render(<Router history={browserHistory} routes={routes}/>,document.getElementById("root"));
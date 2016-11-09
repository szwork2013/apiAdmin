import React from 'react'
import { render }from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import Main from './common/Main'
import AppManagerRoute from './routes/Appmanager'
import APIManagerRoute from './routes/ApiManager'
import {ProductManagerRoute, CategoryManagerRoute, StockManagerRoute } from './routes/ProductManager'
import {NoticPushRoute, AdvertPutRoute, OrderManagerRoute, NewManagerRoute, MemberManagerRoute} from "./routes/RenRenGO"
import DefaultPage from "./components/DefaultPage"
//import ExamineRoute from './routes/Examine'
const routes = {
    path: "/",
    component: Main,
    childRoutes: [
        {
            path: "defaultPage",
            component: DefaultPage
        },
        //API后台管理
        AppManagerRoute,

        //ProductManager
        ProductManagerRoute, CategoryManagerRoute, StockManagerRoute,

        //RenRenGO
        NoticPushRoute, AdvertPutRoute, OrderManagerRoute, NewManagerRoute, MemberManagerRoute,

        //资质审核
        //ExamineRoute
    ]
}
render(<Router history={browserHistory} routes={routes}/>,document.getElementById("root"));

//render((
//        <Router history={browserHistory}>
//            <Route path="/" component={Main}>
//                <Route path="appmanager" route={AppManagerRoute}/>
//                <Route path="apimanager" component={APIManager}/>
//                <Route path="postman" component={POSTMan}/>
//                <Route path="apidoc" component={APIDoc}/>
//            </Route>
//        </Router>
//    ),document.getElementById("root")
//)
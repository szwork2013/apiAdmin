import React from 'react'

import EmptyContainer from '../components/EmptyContainer'
import Initfail from '../components/examine/Initfail';
import Recharge from "../components/examine/Recharge";
import Recheck from '../components/examine/Recheck';
import RecheckFail from '../components/examine/RecheckFail';
import Success from '../components/examine/Success';

const Examine = {
    id: "examine",
    title: "资格审核",
    url: "/examine/recharge",
    level: "nav-first-level",
    icon: "fa fa-adjust",
    childRoutes: [
        {
            title: "充值审核",
            path: "recharge",
            component: Recharge,
            url: "/examine/recharge",
            level: "nav-second-level",
            icon: "fa fa-rmb"
        },
        {
            title: "初审失败",
            path: "initfail",
            component: Initfail,
            url: "/examine/initfail",
            level: "nav-second-level",
            icon: "fa fa-times-circle-o"
        },
        {
            title: "充值复核",
            path: "re_check",
            component: Recheck,
            url: "/examine/re_check",
            level: "nav-second-level",
            icon: "fa fa-dot-circle-o"
        },
        {
            title: "充值成功",
            path: "success",
            component: Success,
            url: "/examine/success",
            level: "nav-second-level",
            icon: "fa fa-check-square-o"
        },
        {
            title: "复核失败",
            path: "recheck_fail",
            component: RecheckFail,
            url: "/examine/recheck_fail",
            level: "nav-second-level",
            icon: "fa fa-warning"
        }
    ]
}

const ExamineRoute = {
    path: "examine",
    component: EmptyContainer,
    childRoutes: Examine.childRoutes
}
export default ExamineRoute;
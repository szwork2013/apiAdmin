import React from 'react'

import EmptyContainer from '../components/EmptyContainer'
import Initfail from '../components/examine/Initfail';
import Recharge from "../components/examine/Recharge";
import Recheck from '../components/examine/Recheck';
import RecheckFail from '../components/examine/RecheckFail';
import Success from '../components/examine/Success';

const ExamineRoute = {
    path: "examine",
    component: EmptyContainer,
    childRoutes: [
        {
            path: "recharge",
            component: Recharge
        },
        {
            path: "initfail",
            component: Initfail
        },
        {
            path: "re_check",
            component: Recheck
        },
        {
            path: "success",
            component: Success
        },
        {
            path: "recheck_fail",
            component: RecheckFail
        }
    ]
}
export default ExamineRoute;
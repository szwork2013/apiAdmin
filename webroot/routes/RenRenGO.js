import APPManager from '../components/APPManager'

import ADAuthor from '../components/renrengo/ADAauthor'
import MemberManager from '../components/renrengo/MemberManager'
import NewsList from "../components/renrengo/news_manage/List"
import pushMessage from "../components/renrengo/notice_push/PushMessage"
import orderList from "../components/renrengo/order_manage/List"
import RechargeList from "../components/renrengo/recharge_manage/RechargeList"
import RechargeIndex from "../components/renrengo/recharge_manage/RechargeIndex"

//公告推送
export const NoticPushRoute = {
    path: "notice_push",
    component: APPManager,
    childRoutes: [
        {
            path: "push_message",
            component: pushMessage
        }
    ]
}

//会员管理
export const MemberManagerRoute = {
    path: "member_manage",
    component: MemberManager
}

//新闻管理
export const NewManagerRoute = {
    path: "news_manage",
    component: APPManager,
    childRoutes: [
        {
            path: "list",
            component: NewsList
        }
    ]
}

//广告投放
export const AdvertPutRoute = {
    path: "advert_put",
    component: ADAuthor
}

//订单管理
export const OrderManagerRoute = {
    path: "order_manage",
    component: APPManager,
    childRoutes: [
        {
            path: "list",
            component: orderList
        }
    ]
}

//充值管理
export const RechargeManagerRoute = {
    path: "recharge",
    component: APPManager,
    childRoutes: [
        {
            path: "index",
            component: RechargeIndex
        },
        {
            path: "list",
            component: RechargeList
        }
    ]
}
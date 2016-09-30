import APPManager from '../components/APPManager'
import EmptyContainer from "../components/EmptyContainer"

import ADAuthor from '../components/renrengo/advert_put/Index'
import MemberManager from '../components/renrengo/member_manage/Index'
import MemberEdit from "../components/renrengo/member_manage/Edit"
import NewsList from "../components/renrengo/news_manage/List"
import NewsEdit from "../components/renrengo/news_manage/List_edit"
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
    component: EmptyContainer,
    childRoutes: [
        {
            path: "list",
            component: MemberManager
        },
        {
            path: "edit",
            component: MemberEdit
        }
    ]
}

//新闻管理
export const NewManagerRoute = {
    path: "news_manage",
    component: APPManager,
    childRoutes: [
        {
            path: "list",
            component: NewsList
        },
        {
            path: "edit",
            component: NewsEdit
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
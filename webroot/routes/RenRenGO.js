import EmptyContainer from "../components/EmptyContainer"

import ADAuthor from '../components/renrengo/ADAauthor'
import MemberManager from '../components/renrengo/MemberManager'
import NewsList from "../components/renrengo/news_manage/List"
import pushMessage from "../components/renrengo/notice_push/PushMessage"
import orderList from "../components/renrengo/order_manage/List"
import RechargeList from "../components/renrengo/recharge_manage/RechargeList"
import RechargeIndex from "../components/renrengo/recharge_manage/RechargeIndex"

const appManager = {
    id: "renrengo",
    title: "APP管理",
    url: "/notice_push/push_message",
    level: "nav-first-level",
    icon: "fa fa-binoculars",
    childRoutes: [
        {
            title: "公告推送",
            path: "notice_push",
            component: EmptyContainer,
            url: "/notice_push/push_message",
            level: "nav-second-level",
            icon: "fa fa-send",
            childRoutes: [
                {
                    path: "push_message",
                    component: pushMessage,
                    title: "推送消息",
                    url: "/notice_push/push_message",
                    level: "nav-third-level",
                    icon: "fa fa-th-large"
                }
            ]
        },
        {
            title: "广告投放",
            path: "advert_put",
            component: ADAuthor,
            url: "/advert_put",
            level: "nav-second-level",
            icon: "fa fa-puzzle-piece"
        },
        {
            title: "订单管理",
            path: "order_manage",
            component: EmptyContainer,
            url: "/order_manage/list",
            level: "nav-second-level",
            icon: "fa fa-outdent",
            childRoutes: [
                {
                    title: "订单列表",
                    path: "list",
                    component: orderList,
                    url: "/order_manage/list"
                }
            ]
        },
        {
            title: "新闻管理",
            path: "news_manage",
            component: EmptyContainer,
            url: "/news_manage/list",
            level: "nav-second-level",
            icon: "fa fa-newspaper-o",
            childRoutes: [
                {
                    title: "新闻列表",
                    path: "list",
                    component: NewsList,
                    url: "/news_manage/list",
                    level: "nav-third-level"
                }
            ]
        },
        {
            title: "会员管理",
            path: "member_manage",
            component: MemberManager,
            url: "/member_manage",
            level: "nav-second-level",
            icon: "fa fa-vimeo-square"
        },
        {
            title: "充值管理",
            path: "recharge",
            component: EmptyContainer,
            url: "/recharge",
            level: "nav-second-level",
            icon: "fa fa-adjust",
            childRoutes: [
                {
                    title: "资格充值",
                    path: "index",
                    component: RechargeIndex,
                    url: "/recharge/index",
                    level: "nav-third-level"
                },
                {
                    title: "充值记录",
                    path: "list",
                    component: RechargeList,
                    url: "/recharge/list",
                    level: "nav-third-level"
                }
            ]
        }
    ]
}
//公告推送
export const NoticPushRoute = appManager.childRoutes[0];

//广告投放
export const AdvertPutRoute = appManager.childRoutes[1];

//订单管理
export const OrderManagerRoute = appManager.childRoutes[2];

//新闻管理
export const NewManagerRoute = appManager.childRoutes[3];

//会员管理
export const MemberManagerRoute = appManager.childRoutes[4];

//充值管理
export const RechargeManagerRoute = appManager.childRoutes[5];
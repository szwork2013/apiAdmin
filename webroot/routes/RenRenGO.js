import APPManager from '../components/APPManager'

import ADAuthor from '../components/renrengo/ADAauthor'
import MemberManager from '../components/renrengo/MemberManager'
import NewsList from "../components/renrengo/news_manage/List"
import pushMessage from "../components/renrengo/notice_push/PushMessage"
import orderList from "../components/renrengo/order_manage/List"


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
export const MemberManagerRoute = {
    path: "member_manage",
    component: MemberManager
}
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
export const AdvertPutRoute = {
    path: "advert_put",
    component: ADAuthor
}

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
const setServer = "relative";

var fenxiao_server = {
    relative: "/rest/2.0",
    localhost: "http://fenxiao.localhost.api.yuncangmall.com/rest/2.0",
    prod: "http://fenxiao.api.yuncangmall.com/rest/2.0"
}
var preApi = fenxiao_server[setServer];
var API = {
    public: {
        getLoginInfo: preApi + "/admin/user/get_info",
        getLogout: preApi + "/admin/user/logout",
        getDistrict: preApi + "/user/user/distract",//?parent_code=110000
    },
    fenxiao_order:{
        getOrderList: preApi + "/order/order/get_order_list",
        getFailedList: preApi + "/order/order/get_send_failed_list"
    },
    news_manage: {
        getNewsList: preApi + "/news/news/index",
        getNewsInfo: preApi + "/news/news/edit",
        addNews: preApi + "/news/news/add",
        updateNews: preApi + "/news/news/save"
    },
    member_manager: {
        getMemberList: preApi + "/user/user/index",
        getMemberInfo: preApi + "/user/user/edit",
        updateMember: preApi + "/user/user/save"
    }
}

export default API;

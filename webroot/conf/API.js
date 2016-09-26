const setServer = "localhost";

var fenxiao_server = {
    localhost: "http://fenxiao.localhost.api.yuncangmall.com/rest/2.0",
    prod: "http://fenxiao.api.yuncangmall.com/rest/2.0"
}
var API = {
    fenxiao_order:{
        getOrderList: fenxiao_server[setServer] + "/order/order/get_order_list",
        getFailedList: fenxiao_server[setServer] + "/order/order/get_send_failed_list"
    },
    news_manage: {
        getNewsList: fenxiao_server[setServer] + "/news/news/index"
    }
}

export default API;

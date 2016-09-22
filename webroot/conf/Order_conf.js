//订单支付状态
const StateList = {
    1: "已支付",
    2: "未支付",
    3: "问题订单",
    4: "已退款",
    5: "已取消"
}
//订单同步状态
const SyncStateList = {
    0: "无需推单",
    1: "待推单",
    2: "地区不相符",
    3: "推单中",
    4: "推单成功",
    5: "推单失败",
    6: "已发货"
}

export {
    StateList,
    SyncStateList
}
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
//子订单状态
const SubStatusList = {
    1: "正常",
    2: "已取消",
    3: "已退款"
}
//物流状态
const logiStatusList = {
    0: "未处理",
    1: "已处理",
    2: "已发货",
    3: "已送达"
}
//进货商类型
const BuyerType = {
    1: "进货",
    2: "平移进货"
}
//当当订单状态
const DDOrderState = {
    0: "未提交",
    1: "待审核",
    2: "已驳回",
    3: "已审核",
    4: "已配货",
    5: "已发货",
    6: "已送达",
    7: "交易成功",
    8: "交易终止",
    9: "取消"
}
const DDBids = [100,140,110,103];
export {
    StateList,
    SyncStateList,
    SubStatusList,
    logiStatusList,
    BuyerType,
    DDOrderState,
    DDBids
}
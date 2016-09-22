import React from 'react'
import {render} from 'react-dom'
import DateTimeField from 'react-bootstrap-datetimepicker';

import { BreadCrumb, IBoxTool, LayPage } from '../../../common/Birdie'
import { EditInfo, EditAddress } from './List_edit'
import {StateList,SyncStateList,SubStatusList,logiStatusList,BuyerType,DDOrderState,DDBids} from "../../../conf/Order_conf"
import API from "../../../conf/API";

const orderList = React.createClass({

    getInitialState(){
        return {
            orderList: [],
            count: 0,
            curr: 1
        }
    },
    defaultData:{
        page: 1,
        num: 20
    },
    componentDidMount(){
        this.ajaxOrderList();
    },
    render(){
        var crumbs = [
            {name: "订单管理", url:"/order_manage/list"},
            {name: "订单列表", url: "/order_manage/list"}
        ];
        var {count,orderList,curr} = this.state;

        var {num} = this.defaultData;
        var pages = count%num == 0 ? count/num : parseInt(count/num) + 1;

        return (
            <div className="orderManage_list">
                <BreadCrumb crumbs={crumbs} title="订单管理"/>
                <div className="wrapper wrapper-content animated fadeInRight">
                    <div className="row">
                        <IBoxTool title="订单搜索">
                            <form className="form-horizontal" role="form" ref="searchOrderForm">
                                <div className="row">
                                    <div className="form-group col-sm-3">
                                        <label className="col-sm-4 control-label" htmlFor="order_number">订单号:</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" name="order_number" id="order_number"/>
                                        </div>
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label className="col-sm-4 control-label" htmlFor="sub_order_number">子订单号:</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" name="sub_order_number" id="sub_order_number"/>
                                        </div>
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label className="col-sm-4 control-label" htmlFor="pay_date_begin">开始时间:</label>
                                        <div className="col-sm-8">
                                            <DateTimeField inputFormat="YY-MM-DD" inputProps={{name:"pay_date_begin"}} mode="date"/>
                                        </div>
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label className="col-sm-4 control-label" htmlFor="logistic_number">物流单号:</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" name="logistic_number" id="logistic_number"/>
                                        </div>
                                    </div>


                                    <div className="form-group col-sm-3">
                                        <label className="col-sm-4 control-label" htmlFor="state">订单状态:</label>
                                        <div className="col-sm-8">
                                            <select className="form-control" id="state" name="state">
                                                <option key="state_-1" value="">所有</option>
                                                {
                                                    Object.entries(StateList)
                                                        .map(([key,val]) => {
                                                            return <option key={key+"_state"} value={key}>{val}</option>
                                                        })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label className="col-sm-4 control-label" htmlFor="order_status">子订单状态:</label>
                                        <div className="col-sm-8">
                                            <select className="form-control" id="order_status" name="order_status">
                                                <option key="odStau_-1" value="">所有</option>
                                                {
                                                    Object.entries(SubStatusList).map( ([key,val]) => {
                                                        return <option key={key+"subState"} value={key}>{val}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label className="col-sm-4 control-label" htmlFor="pay_date_end">结束时间:</label>
                                        <div className="col-sm-8">
                                            <DateTimeField inputFormat="YY-MM-DD" inputProps={{name:"pay_date_end"}} mode="date" />
                                        </div>
                                    </div>

                                    <div className="form-group col-sm-3">
                                        <label className="col-sm-4 control-label" htmlFor="logistic_status">物流状态:</label>
                                        <div className="col-sm-8">
                                            <select className="form-control" id="logistic_status" name="logistic_status">
                                                <option key="logis_-1" value="">所有</option>
                                                {
                                                    Object.entries(logiStatusList).map( ([key,val]) => {
                                                        return <option key={key+"_logiState"} value={key}>{val}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label className="col-sm-4 control-label" htmlFor="username">姓名:</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" name="username" id="username"/>
                                        </div>
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label className="col-sm-4 control-label" htmlFor="mobile">手机号:</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" name="mobile" id="mobile"/>
                                        </div>
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label className="col-sm-4 control-label" htmlFor="b_id">供应商:</label>
                                        <div className="col-sm-8">
                                            <select className="form-control" name="b_id" id="b_id">
                                                <option value="">所有</option>
                                                <option value="100">当当商品</option>
                                                <option value="101">云仓商品</option>
                                                <option value="102">云仓1号</option>
                                                <option value="200">河北任邱燕赵家具城</option>
                                                <option value="110">当当图书</option>
                                                <option value="120">当当专供</option>
                                                <option value="130">当当手机</option>
                                                <option value="140">当当预售</option>
                                                <option value="150">当当家纺</option>
                                                <option value="201">北京斯普兰帝商贸有限公司</option>
                                                <option value="202">北京山溪岩茶叶有限公司</option>
                                                <option value="9999">第三方供应商</option>
                                                <option value="999">自营供应商</option>
                                            </select>
                                        </div>
                                    </div>


                                    <div className="form-group col-sm-3">
                                        <label className="col-sm-4 control-label" htmlFor="sync_status">推送状态:</label>
                                        <div className="col-sm-8">
                                            <select className="form-control" id="sync_status" name="sync_status">
                                                <option key="sync_-1" value="">所有</option>
                                                {
                                                    Object.entries(SyncStateList).map( ([key,val]) => {
                                                        return <option value={key} key={key+"sync_state"}>{val}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-sm-2">
                                    <button type="button" onClick={this.searchOrderList} className="btn btn-block btn-info bc-common">搜索</button>
                                </div>
                            </form>
                        </IBoxTool>
                    </div>
                    <div className="row">
                        <IBoxTool title={`总共：${count}商品`}>
                            <table className="table table-bordered order_list_table">
                                <thead>
                                <tr>
                                    <th width="70px">
                                        <input type="checkbox"/>全选
                                    </th>
                                    <th>详细信息</th>
                                    <th width="70px">支付状态</th>
                                    <th width="70px">同步状态</th>
                                    <th width="70px">操作</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    orderList.map( (order,i) => {
                                        return (
                                            <tr key={order.id}>
                                                <td><input type="checkbox" /> {order.id}</td>
                                                <td>
                                                    <div className="well">
                                                        <IBoxTool title={`订单详情:
                                                        订单号:( <font color="red">${order.order_number }</font> ) --
                                                        子订单:( <font color="red">${order.sub_order_number}</font> ) --
                                                        子订单状态：( <font color="red">${SubStatusList[order.order_status]}</font> )`}
                                                                  hide="hide">
                                                            <ul className="order_item_info clearfix">
                                                                <li>订单号:{order.order_number}</li>
                                                                <li>子订单:{order.sub_order_number}</li>
                                                                <li>供货商：云仓百货</li>
                                                                <li>用户名：{order.username}</li>
                                                                <li>会员编号：{order.userid}</li>
                                                                <li>手机号：{order.mobile}</li>
                                                                <li>子订单状态：{SubStatusList[order.order_status]}</li>
                                                                <li>物流名称：{order.logistic_company}</li>
                                                                <li>物流号：{order.logistic_number}</li>
                                                                <li>物流状态：{logiStatusList[order.logistic_status]}</li>
                                                                <li>进货商品类型：{BuyerType[order.buy_type]}</li>
                                                                <li>购物币：{order.amount}</li>
                                                                <li>购物券：{order.suerpoint}</li>
                                                                <li>购物金：{order.saccount}</li>
                                                                <li>进货币：{order.purchase_account}</li>
                                                                <li>退款时间：{order.refund_time}</li>
                                                                <li>子订单运费：{order.logistic_fee}</li>
                                                                {
                                                                    order.logistic_status != 0 && order.state == 1 &&
                                                                    <li>
                                                                        物流信息：
                                                                        <a href="javascript:;" data-value={order.sub_order_number} className="checkshopinfo">
                                                                            点击查询
                                                                        </a>
                                                                    </li>
                                                                }
                                                                {
                                                                    DDBids.includes(order.b_id) && order.dd_state > 2 && order.dd_state != 9 && order.sync_state == 4 && order.state == 1 &&
                                                                    <li>当当订单号： {order.dd_order_number} </li>
                                                                }
                                                                {
                                                                    DDBids.includes(order.b_id) && (order.sync_state == 4 || order.sync_state == 6) && order.state == 1 &&
                                                                    <li>当当订单状态： {DDOrderState[order.dd_state]} </li>
                                                                }
                                                                {
                                                                    DDBids.includes(order.b_id) && (order.sync_state == 4 || order.sync_state == 6) && order.state == 1 && order.dd_state ==2 &&
                                                                    <li>订单失败原因： {order.reject_reason} </li>
                                                                }
                                                                {
                                                                    order.sync_state == 5 && [100,110,140].includes(order.b_id) &&
                                                                    <li>推送失败原因: { order.reject_reason}</li>
                                                                }


                                                                <li>收货时间：{order.receipt_time}</li>
                                                                <li>下单时间：{order.create_date}</li>
                                                                <li>支付时间：{order.pay_date}</li>
                                                                <li>导出状态：{order.is_export == 1?'已导出' : '未导出'}</li>
                                                                <li className="w-100p">地址：{order.address}</li>
                                                            </ul>
                                                        </IBoxTool>
                                                        <table className="table table-bordered order_item_product no_mg">
                                                            <thead>
                                                            <tr>
                                                                <th>图片</th>
                                                                <th>ID</th>
                                                                <th>标题</th>
                                                                <th>单价</th>
                                                                <th>进价</th>
                                                                <th>最大优惠券使用金额</th>
                                                                <th>购买数量</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            {
                                                                order.products.map( (product,i) => {
                                                                    return (
                                                                        <tr key={product.id}>
                                                                            <td>
                                                                                <div className="image">
                                                                                    <img src={product.thumb} />
                                                                                </div>
                                                                            </td>
                                                                            <td>{product.id}</td>
                                                                            <td>{product.title}</td>
                                                                            <td>{product.price}</td>
                                                                            <td>{product.purchase_price}</td>
                                                                            <td>{product.coupon_max_amount}</td>
                                                                            <td>{product.max_buy_num}</td>
                                                                        </tr>
                                                                    )
                                                                })
                                                            }
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </td>
                                                <td>{StateList[order.state]}</td>
                                                <td>{SyncStateList[order.sync_state]}</td>
                                                <td>
                                                    <a className="btn btn-success mb-5" name="info" onClick={this.clickHandle}>编辑</a>
                                                    <a className="btn btn-success" name="address" onClick={this.clickHandle}>编辑地址</a>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </table>
                            <LayPage jump={this.jump} config={{pages: pages,curr: curr, skin: "#1ab394"}}/>
                        </IBoxTool>
                    </div>
                </div>
            </div>
        )
    },
    searchOrderList(){
        var {searchOrderForm} = this.refs;

        var resultData = {};
        var formDataArr = $(searchOrderForm).serializeArray();

        for(var data of formDataArr){
            resultData[data.name] = data.value
        }
        this.ajaxOrderList(resultData);
    },
    jump(curr){
        this.ajaxOrderList({page: curr});
    },
    ajaxOrderList(option){
        var defaultData = this.defaultData;
        $.ajax({
            url: API.fenxiao_order.getOrderList,
            data: Object.assign({},defaultData,option),
            success: function(data){
                if(data.response_data){
                    data = data.response_data;
                    this.setState({
                        orderList: data.list,
                        count: data.count,
                        curr: option && option.page || 1
                    })
                }
            }.bind(this)
        })
    },
    clickHandle: function(event) {

        var name = event.target.name;
        var Template = (name == 'info') && EditInfo || EditAddress;

        var box = document.getElementById('box');
        render(<Template />, box);

        var children;
        box.childNodes.forEach(item => {
            if(item.nodeType == 1) {
                children = item;
            }
        });

        $(children).modal('show');
    }
})

export default orderList;
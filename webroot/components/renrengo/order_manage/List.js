import React from 'react'
import {render} from 'react-dom'

import { BreadCrumb, IBoxTool } from '../../../common/Birdie'
import { EditInfo, EditAddress } from './List_edit'
import {StateList,SyncStateList} from "../../../conf/Order_conf"
import API from "../../../conf/API";

const orderList = React.createClass({

    getInitialState(){
        return {
            orderList: [],
            count: 0,
        }
    },
    componentDidMount(){
        $.ajax({
            url: API.fenxiao_order.getOrderList,
            success: function(data){
                if(data.response_data){
                    data = data.response_data;
                    this.setState({
                        orderList: data.list,
                        count: data.count
                    })
                }
            }.bind(this)
        })
    },
    render(){
        var crumbs = [
            {name: "订单管理", url:"/order_manage/list"},
            {name: "订单列表", url: "/order_manage/list"}
        ];
        var {count,orderList} = this.state;
        return (
            <div className="orderManage_list">
                <BreadCrumb crumbs={crumbs} title="订单管理"/>
                <div className="wrapper wrapper-content animated fadeInRight">
                    <div className="row">
                        <IBoxTool title="订单搜索">
                            <form className="form-horizontal" role="form">
                                <div className="row">
                                    <div className="form-group col-sm-4">
                                        <label className="col-sm-4 control-label" htmlFor="product_ID">商品ID:</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" id="product_ID" placeholder="输入商品ID"/>
                                        </div>
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <label className="col-sm-4 control-label" htmlFor="product_name">商品名称:</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" id="product_name" placeholder="输入商品名称"/>
                                        </div>
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <label className="col-sm-4 control-label" htmlFor="supplier">自营供应商:</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" id="supplier" />
                                        </div>
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <label className="col-sm-4 control-label" htmlFor="status">状态:</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" id="status"/>
                                        </div>
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <label className="col-sm-4 control-label" htmlFor="dangdangID">当当ID:</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" id="dangdangID"/>
                                        </div>
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <label className="col-sm-4 control-label" htmlFor="choseSupplier">供应商选择:</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" id="choseSupplier"/>
                                        </div>
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <label className="col-sm-4 control-label" htmlFor="thirdSupplier">第三方供应商:</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" id="thirdSupplier"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-2">
                                    <button type="submit" className="btn btn-block btn-info bc-common">搜索</button>
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
                                                    <ul className="order_item_info clearfix">
                                                        <li>订单号:{order.order_number}</li>
                                                        <li>子订单:{order.sub_order_number}</li>
                                                        <li>供货商：云仓百货</li>
                                                        <li>用户名：{order.username}</li>
                                                        <li>会员编号：{order.userid}</li>
                                                        <li>手机号：{order.mobile}</li>
                                                        <li>子订单状态：{order.order_status}</li>
                                                        <li>物流名称：{order.logistic_company}</li>
                                                        <li>物流号：{order.logistic_number}</li>
                                                        <li>物流状态：{order.logistic_status}</li>
                                                        <li>进货商品类型：{order.buy_type}</li>
                                                        <li>购物币：{order.amount}</li>
                                                        <li>购物券：{order.suerpoint}</li>
                                                        <li>购物金：{order.saccount}</li>
                                                        <li>进货币：{order.purchase_account}</li>
                                                        <li>退款时间：{order.refund_time}</li>
                                                        <li>子订单运费：{order.logistic_fee}</li>
                                                        <li>物流信息：{order.logistic_status}</li>
                                                        <li>当当订单号： {order.dd_order_number} </li>
                                                        <li>当当订单状态： {order.dd_state} </li>
                                                        <li>收货时间：{order.receipt_time}</li>
                                                        <li>下单时间：{order.create_date}</li>
                                                        <li>支付时间：{order.pay_date}</li>
                                                        <li>导出状态：{order.is_export == 1?'已导出' : '未导出'}</li>
                                                        <li className="w-100p">地址：{order.address}</li>
                                                    </ul>
                                                    <table className="table order_item_product no_mg">
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
                        </IBoxTool>
                    </div>
                </div>
            </div>
        )
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
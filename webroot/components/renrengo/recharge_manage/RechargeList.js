import React from "react"
import { BreadCrumb, IBoxTool } from '../../../common/Birdie'

const RechargeList = React.createClass({

    render(){
        var crumbs = [
            {name: "充值管理", url:"/order_manage/list"},
            {name: "充值记录", url: "/order_manage/list"}
        ];
        return (
            <div className="rechargeList">
                <BreadCrumb crumbs={crumbs} title="充值管理"/>
                <div className="wrapper wrapper-content animated fadeInRight">
                    <div className="row">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                充值记录
                            </div>
                            <div className="panel-body">
                                <table className="table table-bordered">
                                    <thead>
                                    <tr>
                                        <th width="15%">时间</th>
                                        <th width="15%">充值金额</th>
                                        <th width="15%">充值数量</th>
                                        <th width="15%">汇款人姓名</th>
                                        <th width="15%">充值状态</th>
                                        <th width="20%">&nbsp;</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>2016/07/01 20:02</td>
                                        <td>10000</td>
                                        <td>50个</td>
                                        <td>张三</td>
                                        <td>充值成功</td>
                                        <td><a href="#">查看详情 >></a></td>
                                    </tr>
                                    <tr>
                                        <td>2016/07/01 20:02</td>
                                        <td>10000</td>
                                        <td>50个</td>
                                        <td>张三</td>
                                        <td>充值成功</td>
                                        <td><a href="#">查看详情 >></a></td>
                                    </tr>
                                    <tr>
                                        <td>2016/07/01 20:02</td>
                                        <td>10000</td>
                                        <td>50个</td>
                                        <td>张三</td>
                                        <td>充值成功</td>
                                        <td><a href="#">查看详情 >></a></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})
export default RechargeList;
import React from 'react'
import {BreadCrumb} from '../../common/Birdie'

var Initfail = React.createClass({

    render(){
        var crumbs = [
            {name: "资格审核", url:"#"},
            {name: "初审失败", url: "#"}
        ]
        return (
            <div id="initfail" className="">
                <BreadCrumb crumbs={crumbs} title="资格审核"/>

                <div className="wrapper wrapper-content animated fadeInRight">
                    <div className="panel panel-warning">
                        <div className="panel-heading">初审失败</div>
                        <div className="panel-body">
                            <table className="table table-bordered">
                                <thead>
                                <tr>
                                    <th width="15%">提交时间</th>
                                    <th width="15%">公司名称</th>
                                    <th width="10%">充值数量</th>
                                    <th width="10%">打款金额</th>
                                    <th width="10%">转账银行</th>
                                    <th width="10%">打款区域</th>
                                    <th width="10%">汇款人</th>
                                    <th width="15%">转账时间</th>
                                    <th width="10%">状态</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>2016-08-12 12:00:00</td>
                                    <td>俏江南</td>
                                    <td>20</td>
                                    <td>4000</td>
                                    <td>建设银行</td>
                                    <td>大连市朝阳区</td>
                                    <td>李超</td>
                                    <td>2016-08-12 12:00:00</td>
                                    <td>初审失败</td>
                                </tr>
                                <tr>
                                    <td>2016-08-12 12:00:00</td>
                                    <td>俏江南</td>
                                    <td>20</td>
                                    <td>4000</td>
                                    <td>建设银行</td>
                                    <td>大连市朝阳区</td>
                                    <td>李超</td>
                                    <td>2016-08-12 12:00:00</td>
                                    <td>初审失败</td>
                                </tr>
                                <tr>
                                    <td>2016-08-12 12:00:00</td>
                                    <td>俏江南</td>
                                    <td>20</td>
                                    <td>4000</td>
                                    <td>建设银行</td>
                                    <td>大连市朝阳区</td>
                                    <td>李超</td>
                                    <td>2016-08-12 12:00:00</td>
                                    <td>初审失败</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})

export default Initfail;
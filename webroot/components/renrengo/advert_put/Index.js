import React from 'react'
import {BreadCrumb, IBoxTool} from "../../../common/Birdie"

const ADAauthor = React.createClass({
    contextTypes: {
        appFirstPath: React.PropTypes.string
    },
    render(){
        var {appFirstPath} = this.context;
        var crumbs = [
            {name: "广告投放", url:`/${appFirstPath}/advert_put/list`},
            {name: "广告列表", url: `/${appFirstPath}/advert_put/list`}
        ];
        return (
            <div className="advert_put">
                <BreadCrumb crumbs={crumbs} title="广告投放" />
                <div className="wrapper wrapper-content animated fadeInRight">
                    <div className="row">
                        <IBoxTool title="搜索">
                            <div className="form-horizontal">
                                <div className="row">
                                    <div className="form-group col-sm-3">
                                        <label className="col-sm-4 control-label" htmlFor="user_name">用户名称:</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" id="user_name" />
                                        </div>
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label className="col-sm-4 control-label" htmlFor="user_id">用户ID:</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" id="user_id" />
                                        </div>
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label className="col-sm-4 control-label" htmlFor="mobile">手机号:</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" id="mobile" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-2">
                                    <button type="submit" className="btn btn-block btn-info bc-common">搜索</button>
                                </div>
                            </div>
                        </IBoxTool>
                    </div>
                    <div className="row">
                        <IBoxTool title="总共：7546">
                            <table className="table table-bordered order_list_table">
                                <thead>
                                <tr>
                                    <th>用户编号</th>
                                    <th>用户名</th>
                                    <th>手机号</th>
                                    <th>操作</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>123456</td>
                                    <td>天空之城</td>
                                    <td>13611111111</td>
                                    <td>
                                        <a href="#">编辑</a>
                                        <a href="#">查看</a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </IBoxTool>
                    </div>
                </div>
            </div>
        )
    }
})

export default ADAauthor;
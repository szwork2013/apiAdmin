import React from 'react'
import {AutoComplete} from '../../../common/Birdie'

require("../../../statics/less/product.less")

const BaseInfo = React.createClass({

    render(){
        return (
            <div style={{width: "80%",margin: 'auto'}}>
                <form role="form">
                <table className="table table-bordered">
                    <tbody>
                    <tr>
                            <td width="20%">商品ID</td>
                        <td>1234578</td>
                    </tr>
                    <tr>
                        <td>产品渠道</td>
                        <td>
                            <div className="row">
                                <div className="col-sm-3">
                                    <ul className="nav nav-tabs">
                                        <li className="active"><a data-toggle="tab" href="#panel_ziying">自营</a></li>
                                        <li><a data-toggle="tab" href="#panel_gyshang">供应商</a></li>
                                    </ul>
                                    <div ref="tabContent" className="tab-content">
                                        <div id="panel_ziying" className="tab-pane fade in active">
                                            <select className="form-control m-b">
                                                <option value="1">当当自营</option>
                                                <option value="2">当当自营2</option>
                                                <option value="3">当当自营3</option>
                                            </select>
                                        </div>
                                        <div id="panel_gyshang" className="tab-pane fade">
                                            <AutoComplete />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>商品分类</td>
                        <td>
                            <select name="provice" className="form-control w200 fl mr10">
                                <option>用品</option>
                            </select>{" "}
                            <select name="city" className="form-control w200 fl mr10">
                                <option>喂养用品</option>
                            </select>{" "}
                            <select name="area" className="form-control w200 fl">
                                <option>奶瓶</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>商品类型</td>
                        <td>
                            <select className="form-control w200">
                                <option value="1">特产1</option>
                                <option value="2">特产2</option>
                                <option value="3">特产3</option>
                                <option value="4">特产4</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>
                            <select name="provice" className="form-control w200 fl mr10">
                                <option>省</option>
                            </select>{" "}
                            <select name="city" className="form-control w200 fl mr10">
                                <option>市</option>
                            </select>{" "}
                            <select name="area" className="form-control w200 fl">
                                <option>区</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>最大购买数量</td>
                        <td><input className="form-control w200 mr20 fl" /> <span className="help-block">当为0时，不做限制</span> </td>
                    </tr>
                    <tr>
                        <td>品牌</td>
                        <td><input className="form-control w500" />  </td>
                    </tr>
                    <tr>
                        <td>打包数量</td>
                        <td><input className="form-control w500" /> </td>
                    </tr>
                    <tr>
                        <td>物流模板</td>
                        <td>
                            <select className="form-control w200">
                                <option>全国包邮</option>
                                <option>东南包邮</option>
                                <option>西北不送</option>
                            </select>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </form>
                <div className="col-sm-6 ma">
                    <button className="btn btn-block btn-primary">保存</button>
                </div>
            </div>
        )
    }
})
export default BaseInfo;
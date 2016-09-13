import React from 'react'
import {IBoxTool, ColorPicker} from '../../../../common/Birdie'

const PriceAndSpecif = React.createClass({
    render(){
        return (
            <div style={{width: "80%",margin: 'auto'}}>
                <table className="table table-bordered">
                    <tbody>
                    <tr>
                        <td width="20%" style={{verticalAlign: "top",paddingTop: "50px"}}>商品规格</td>
                        <td>
                            <div className="well">
                                <IBoxTool title="颜色">
                                    <div className="well">
                                        <h3>选择标准颜色可增加搜索/导购机会，标准颜色还可以填写颜色备注信息（偏深、偏亮）！ {" "}<a href="#">查看详情</a></h3>
                                        <div className="form-inline">
                                            <div className="form-group">
                                                <input type="checkbox" /> {" "}
                                                <ColorPicker/> {" "}
                                                <input className="form-control" placeholder="备注（如偏深偏浅）" /> {" "}
                                                <img src="http://img3x8.ddimg.cn/24/19/60558918-1_x_4533.jpg" /> {" "}
                                                <a href="#">删除图片</a>
                                            </div>
                                            <div className="form-group">
                                                <input type="checkbox" /> {" "}
                                                <ColorPicker/> {" "}
                                                <input className="form-control" placeholder="备注（如偏深偏浅）" /> {" "}
                                                <img src="http://img3x8.ddimg.cn/24/19/60558918-1_x_4533.jpg" /> {" "}
                                                <button className="btn btn-primary">上传图片</button>
                                            </div>
                                            <div className="form-group">
                                                <input type="checkbox" /> {" "}
                                                <ColorPicker/> {" "}
                                                <input className="form-control" placeholder="备注（如偏深偏浅）" /> {" "}
                                                <img src="http://img3x8.ddimg.cn/24/19/60558918-1_x_4533.jpg" /> {" "}
                                                <button className="btn btn-primary">上传图片</button>
                                            </div>
                                            <div className="form-group">
                                                <input type="checkbox" /> {" "}
                                                <ColorPicker/> {" "}
                                                <input className="form-control" placeholder="备注（如偏深偏浅）" /> {" "}
                                                <img src="http://img3x8.ddimg.cn/24/19/60558918-1_x_4533.jpg" /> {" "}
                                                <button className="btn btn-primary">上传图片</button>
                                            </div>
                                        </div>
                                    </div>
                                </IBoxTool>
                                <IBoxTool title="身高">
                                    <div className="well">
                                        <input type="checkbox" value="48" /> 48cm{" "}
                                        <input type="checkbox" value="48" /> 48cm{" "}
                                        <input type="checkbox" value="48" /> 48cm{" "}
                                    </div>
                                </IBoxTool>
                                <IBoxTool title="规格价格">
                                    <form role="form">
                                    <table className="table table-bordered">
                                        <thead>
                                        <tr>
                                            <th width="8%">颜色</th>
                                            <th width="8%">身高</th>
                                            <th width="8%">零售价</th>
                                            <th width="8%">进货价</th>
                                            <th width="8%">补贴金额</th>
                                            <th width="10%">批发价</th>
                                            <th width="35%">库存</th>
                                            <th width="15%">供应商商品ID</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td rowSpan="2">深紫色</td>
                                            <td>180cm</td>
                                            <td><input className="form-control" /> </td>
                                            <td><input className="form-control" /> </td>
                                            <td><input className="form-control" /> </td>
                                            <td><a href="#">配置批发价</a></td>
                                            <td>
                                                <div className="form-stock">
                                                    北京百货仓： 线下<input className="w30"/>  线上<input className="w30" />
                                                </div>
                                                <div className="form-stock">
                                                    无锡百货仓： 线下<input className="w30"/>  线上<input className="w30" />
                                                </div>
                                                <div className="form-stock">
                                                    广州百货仓： 线下<input className="w30"/>  线上<input className="w30" />
                                                </div>
                                                <div className="form-stock">
                                                    成都百货仓： 线下<input className="w30"/>  线上<input className="w30" />
                                                </div>
                                                <div className="form-stock">
                                                    全国百货仓： 线下<input className="w30"/>  线上<input className="w30" />
                                                </div>
                                            </td>
                                            <td><input className="form-control" defaultValue="12345678"/> </td>
                                        </tr>
                                        <tr>
                                            <td>180cm</td>
                                            <td><input className="form-control" /> </td>
                                            <td><input className="form-control" /> </td>
                                            <td><input className="form-control" /> </td>
                                            <td><a href="#">配置批发价</a></td>
                                            <td>
                                                <div className="form-stock">
                                                    北京百货仓： 线下<input className="w30"/>  线上<input className="w30" />
                                                </div>
                                                <div className="form-stock">
                                                    无锡百货仓： 线下<input className="w30"/>  线上<input className="w30" />
                                                </div>
                                                <div className="form-stock">
                                                    广州百货仓： 线下<input className="w30"/>  线上<input className="w30" />
                                                </div>
                                                <div className="form-stock">
                                                    成都百货仓： 线下<input className="w30"/>  线上<input className="w30" />
                                                </div>
                                                <div className="form-stock">
                                                    全国百货仓： 线下<input className="w30"/>  线上<input className="w30" />
                                                </div>
                                            </td>
                                            <td><input className="form-control" defaultValue="12345678"/> </td>
                                        </tr>

                                        <tr>
                                            <td rowSpan="2">藕色</td>
                                            <td>180cm</td>
                                            <td><input className="form-control" /> </td>
                                            <td><input className="form-control" /> </td>
                                            <td><input className="form-control" /> </td>
                                            <td><a href="#">配置批发价</a></td>
                                            <td>
                                                <div className="form-stock">
                                                    北京百货仓： 线下<input className="w30"/>  线上<input className="w30" />
                                                </div>
                                                <div className="form-stock">
                                                    无锡百货仓： 线下<input className="w30"/>  线上<input className="w30" />
                                                </div>
                                                <div className="form-stock">
                                                    广州百货仓： 线下<input className="w30"/>  线上<input className="w30" />
                                                </div>
                                                <div className="form-stock">
                                                    成都百货仓： 线下<input className="w30"/>  线上<input className="w30" />
                                                </div>
                                                <div className="form-stock">
                                                    全国百货仓： 线下<input className="w30"/>  线上<input className="w30" />
                                                </div>
                                            </td>
                                            <td><input className="form-control" defaultValue="12345678"/> </td>
                                        </tr>
                                        <tr>
                                            <td>180cm</td>
                                            <td><input className="form-control" /> </td>
                                            <td><input className="form-control" /> </td>
                                            <td><input className="form-control" /> </td>
                                            <td><a href="#">配置批发价</a></td>
                                            <td>
                                                <div className="form-stock">
                                                    北京百货仓： 线下<input className="w30"/>  线上<input className="w30" />
                                                </div>
                                                <div className="form-stock">
                                                    无锡百货仓： 线下<input className="w30"/>  线上<input className="w30" />
                                                </div>
                                                <div className="form-stock">
                                                    广州百货仓： 线下<input className="w30"/>  线上<input className="w30" />
                                                </div>
                                                <div className="form-stock">
                                                    成都百货仓： 线下<input className="w30"/>  线上<input className="w30" />
                                                </div>
                                                <div className="form-stock">
                                                    全国百货仓： 线下<input className="w30"/>  线上<input className="w30" />
                                                </div>
                                            </td>
                                            <td><input className="form-control" defaultValue="12345678"/> </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    </form>
                                </IBoxTool>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>一口价及总库存</td>
                        <td>
                            <div className="well">
                                <IBoxTool title="一口价及总库存">
                                    <table className="table table-bordered">
                                        <thead>
                                        <tr>
                                            <th width="13%">零售价</th>
                                            <th width="13%">进货价</th>
                                            <th width="13%">补贴金额</th>
                                            <th width="13%">批发价</th>
                                            <th width="35%">库存</th>
                                            <th width="13%">供应商ID</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><input className="form-control" /> </td>
                                            <td><input className="form-control" /></td>
                                            <td><input className="form-control" /></td>
                                            <td><a href="#">批发配置</a></td>
                                            <td>
                                                <div className="form-stock">
                                                    北京百货仓： 线下<input className="w30"/>  线上<input className="w30" />
                                                </div>
                                                <div className="form-stock">
                                                    无锡百货仓： 线下<input className="w30"/>  线上<input className="w30" />
                                                </div>
                                                <div className="form-stock">
                                                    广州百货仓： 线下<input className="w30"/>  线上<input className="w30" />
                                                </div>
                                                <div className="form-stock">
                                                    成都百货仓： 线下<input className="w30"/>  线上<input className="w30" />
                                                </div>
                                                <div className="form-stock">
                                                    全国百货仓： 线下<input className="w30"/>  线上<input className="w30" />
                                                </div>
                                            </td>
                                            <td>
                                                <input className="form-control" defaultValue="12345678"/>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </IBoxTool>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>原价</td>
                        <td><input className="form-control w200 d_ib"/> 元 </td>
                    </tr>
                    <tr>
                        <td>进货价格</td>
                        <td><input className="form-control w200 d_ib"/> 元 </td>
                    </tr>
                    <tr>
                        <td>购物券抵扣</td>
                        <td><input className="form-control w200 d_ib"/> 元 </td>
                    </tr>
                    <tr>
                        <td>扣点比例</td>
                        <td>0.01% </td>
                    </tr>
                    </tbody>
                </table>
                <button className="btn btn-primary">保存</button>
            </div>
        )
    }
})
export default PriceAndSpecif;
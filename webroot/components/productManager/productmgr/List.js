import React from 'react'
import {render} from 'react-dom'
import {BreadCrumb, IBoxTool, LayPage} from '../../../common/Birdie'
import ProductInfo from './product_info/ProductInfo'
import Ztil from '../../../statics/js/public'

const ProdList = React.createClass({

    render(){
        var crumbs = [
            {name: "商品管理", url:"#"},
            {name: "商品列表", url: "#"}
        ]
        return (
            <div id="product_list" className="">
                <BreadCrumb crumbs={crumbs} title="商品管理"/>
                <div ref="productlist_wraper" className="wrapper wrapper-content animated fadeInRight">
                    <div className="row">
                        <IBoxTool title="商品搜索">
                            <form className="form-horizontal" role="form">
                                <div className="row">
                                    <div className="form-group col-sm-3">
                                        <label className="col-sm-3 control-label" htmlFor="product_ID">商品ID:</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="product_ID" placeholder="输入商品ID"/>
                                        </div>
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label className="col-sm-3 control-label" htmlFor="product_name">商品名称:</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="product_name" placeholder="输入商品名称"/>
                                        </div>
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label className="col-sm-4 control-label" htmlFor="supplier">自营供应商:</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" id="supplier" />
                                        </div>
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label className="col-sm-4 control-label" htmlFor="choseSupplier">供应商选择:</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" id="choseSupplier"/>
                                        </div>
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label className="col-sm-3 control-label" htmlFor="dangdangID">当当ID:</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="dangdangID"/>
                                        </div>
                                    </div>

                                    <div className="form-group col-sm-3">
                                        <label className="col-sm-3 control-label" htmlFor="status">状态:</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="status"/>
                                        </div>
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label className="col-sm-4 control-label" htmlFor="thirdSupplier">第三方供应商:</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" id="thirdSupplier"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-2"><button type="submit" className="btn btn-block btn-primary">搜索</button></div>
                                <div className="col-sm-2"><button type="submit" className="btn btn-block btn-primary">添加商品</button></div>
                            </form>
                        </IBoxTool>
                    </div>
                    <div className="row">
                        <IBoxTool title="总共：7546商品">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th><input type="checkbox"/> 全选</th>
                                    <th>标题</th>
                                    <th>分类</th>
                                    <th>状态</th>
                                    <th>供应商</th>
                                    <th>时间</th>
                                    <th>操作</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><input type="checkbox" />11111111234567</td>
                                    <td>
                                        <img src="http://img3x8.ddimg.cn/24/19/60558918-1_x_4533.jpg"/><br/>
                                        云仓百货抽纸
                                    </td>
                                    <td>包装蔬菜</td>
                                    <td>已上架</td>
                                    <td>云仓</td>
                                    <td>2016-10-12</td>
                                    <td>
                                        <button onClick={this.seeInfo} className="btn btn-primary btn-sm">查看</button> {" "}
                                        <button onClick={this.seeInfo} className="btn btn-primary btn-sm">编辑</button> {" "}
                                        <button className="btn btn-primary btn-sm">下架</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" />11111111234567</td>
                                    <td>
                                        <img src="http://img3x8.ddimg.cn/24/19/60558918-1_x_4533.jpg"/><br/>
                                        云仓百货抽纸
                                    </td>
                                    <td>包装蔬菜</td>
                                    <td>已上架</td>
                                    <td>云仓</td>
                                    <td>2016-10-12</td>
                                    <td>
                                        <button onClick={this.seeInfo} className="btn btn-primary btn-sm">查看</button> {" "}
                                        <button onClick={this.seeInfo} className="btn btn-primary btn-sm">编辑</button> {" "}
                                        <button className="btn btn-primary btn-sm">下架</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" />11111111234567</td>
                                    <td>
                                        <img src="http://img3x8.ddimg.cn/24/19/60558918-1_x_4533.jpg"/><br/>
                                        云仓百货抽纸
                                    </td>
                                    <td>包装蔬菜</td>
                                    <td>已上架</td>
                                    <td>云仓</td>
                                    <td>2016-10-12</td>
                                    <td>
                                        <button onClick={this.seeInfo} className="btn btn-primary btn-sm">查看</button> {" "}
                                        <button onClick={this.seeInfo} className="btn btn-primary btn-sm">编辑</button> {" "}
                                        <button className="btn btn-primary btn-sm">下架</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" />11111111234567</td>
                                    <td>
                                        <img src="http://img3x8.ddimg.cn/24/19/60558918-1_x_4533.jpg"/><br/>
                                        云仓百货抽纸
                                    </td>
                                    <td>包装蔬菜</td>
                                    <td>已上架</td>
                                    <td>云仓</td>
                                    <td>2016-10-12</td>
                                    <td>
                                        <button onClick={this.seeInfo} className="btn btn-primary btn-sm">查看</button> {" "}
                                        <button onClick={this.seeInfo} className="btn btn-primary btn-sm">编辑</button> {" "}
                                        <button className="btn btn-primary btn-sm">下架</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" />11111111234567</td>
                                    <td>
                                        <img src="http://img3x8.ddimg.cn/24/19/60558918-1_x_4533.jpg"/><br/>
                                        云仓百货抽纸
                                    </td>
                                    <td>包装蔬菜</td>
                                    <td>已上架</td>
                                    <td>云仓</td>
                                    <td>2016-10-12</td>
                                    <td>
                                        <button onClick={this.seeInfo} className="btn btn-primary btn-sm">查看</button> {" "}
                                        <button onClick={this.seeInfo} className="btn btn-primary btn-sm">编辑</button> {" "}
                                        <button className="btn btn-primary btn-sm">下架</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" />11111111234567</td>
                                    <td>
                                        <img src="http://img3x8.ddimg.cn/24/19/60558918-1_x_4533.jpg"/><br/>
                                        云仓百货抽纸
                                    </td>
                                    <td>包装蔬菜</td>
                                    <td>已上架</td>
                                    <td>云仓</td>
                                    <td>2016-10-12</td>
                                    <td>
                                        <button onClick={this.seeInfo} className="btn btn-primary btn-sm">查看</button> {" "}
                                        <button onClick={this.seeInfo} className="btn btn-primary btn-sm">编辑</button> {" "}
                                        <button className="btn btn-primary btn-sm">下架</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" />11111111234567</td>
                                    <td>
                                        <img src="http://img3x8.ddimg.cn/24/19/60558918-1_x_4533.jpg"/><br/>
                                        云仓百货抽纸
                                    </td>
                                    <td>包装蔬菜</td>
                                    <td>已上架</td>
                                    <td>云仓</td>
                                    <td>2016-10-12</td>
                                    <td>
                                        <button onClick={this.seeInfo} className="btn btn-primary btn-sm">查看</button> {" "}
                                        <button onClick={this.seeInfo} className="btn btn-primary btn-sm">编辑</button> {" "}
                                        <button className="btn btn-primary btn-sm">下架</button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <LayPage jump={this.jump} config={{pages:10,curr: 5,skin: "#1ab394"}}/>
                        </IBoxTool>
                    </div>
                </div>
                <div ref="productInfo_wraper" className="wrapper wrapper-content"></div>
            </div>
        )
    },
    jump(curr){
        console.log(curr);
    },
    seeInfo(){
        var {productInfo_wraper, productlist_wraper} = this.refs;
        $(productlist_wraper).removeClass("animated fadeInRight").hide();

        render(<ProductInfo/>,productInfo_wraper);
        Ztil.runAnim(productInfo_wraper,"fadeInRight");
    }
})

export default ProdList;
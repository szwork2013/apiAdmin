import React from 'react'
import {render} from 'react-dom'

import API from "../../../conf/API"
import { BreadCrumb, IBoxTool } from '../../../common/Birdie'
import { EditInfo, EditAddress } from './List_edit'

const NewsList = React.createClass({
    getInitialState(){
        return {
            news: [],
            sorts: []
        }

    },
    clickHandle(event){

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
    },
    componentDidMount(){
        $.ajax({
            url: API.news_manage.getNewsList,
            success: function(data){
                if(data.data){
                    data = data.data;
                    this.setState({
                        news: data.list,
                        sorts: data.sort
                    })
                }
            }.bind(this)
        })
    },
    render(){
        var crumbs = [
            {name: "新闻管理", url:"/order_manage/list"},
            {name: "新闻列表", url: "/order_manage/list"}
        ];
        var {news,sorts} = this.state;
        var sortObj = {};
        for(var sort of sorts){
            sortObj[sort.id] = sort.sortName
        }
        return (
            <div>
                <BreadCrumb crumbs={crumbs} title="新闻管理" />
                <div className="wrapper wrapper-content animated fadeInRight">
                    <div className="row">
                        <IBoxTool title="搜索">
                            <div className="form-horizontal">
                                <div className="row">
                                    <div className="form-group col-sm-4">
                                        <label className="col-sm-4 control-label" htmlFor="product_ID">新闻名称:</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" id="product_ID" />
                                        </div>
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <label className="col-sm-4 control-label" htmlFor="product_name">新闻类型:</label>
                                        <div className="col-sm-8">
                                            <select name="sortid" className="form-control">
                                                <option key="sort-1" value="-1">请选择</option>
                                                {
                                                    sorts.map(sort => {
                                                        return (
                                                            <option key={sort.id + "sort"} value={sort.id}>{sort.sortName}</option>
                                                        )
                                                    })
                                                }
                                            </select>
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
                                    <th>标题</th>
                                    <th>类型</th>
                                    <th>创建时间</th>
                                    <th>操作</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    news.map( item => {
                                        return (
                                            <tr key={item.id+"new"}>
                                                <td>
                                                    {item.title}
                                                </td>
                                                <td>
                                                    {sortObj[item.sortid]}
                                                </td>
                                                <td>{item.adddate}</td>
                                                <td>
                                                    <a className="btn btn-success mr-10" name="info" onClick={this.clickHandle}>修改</a>
                                                    <a className="btn btn-success" name="address" onClick={this.clickHandle}>删除</a>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                                <tr>
                                    <td>
                                        关于云仓百货即时通讯工具“仓仓”正式上线的公告
                                    </td>
                                    <td>
                                        最新动态
                                    </td>
                                    <td>2016-09-08 09:56:47</td>
                                    <td>
                                        <a className="btn btn-success mr-10" name="info" onClick={this.clickHandle}>修改</a>
                                        <a className="btn btn-success" name="address" onClick={this.clickHandle}>删除</a>
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

export default NewsList;
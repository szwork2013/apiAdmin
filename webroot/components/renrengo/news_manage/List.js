import React from 'react'
import {render} from 'react-dom'
import {Link} from 'react-router'

import API from "../../../conf/API"
import { BreadCrumb, IBoxTool } from '../../../common/Birdie'
import EditInfo from './List_edit'

const NewsList = React.createClass({
    getInitialState(){
        return {
            pages: "list",
            newID: 0,
            news: [],
            sorts: []
        }

    },
    clickToEdit(id){
        console.log(id);
        this.setState({pages: "edit",newID: id})
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
        var {pages,news,sorts,newID} = this.state;
        var sortObj = {};
        for(var sort of sorts){
            sortObj[sort.id] = sort.sortName
        }
        return (
            <div>
                {
                    pages == "list" && (
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
                                                                <a name="info" onClick={e => {this.clickToEdit(item.id)}}>修改</a>{" "}
                                                                <a name="address" onClick={this.clickHandle}>删除</a>
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
                }
                {
                    pages == "edit" && <EditInfo newID={newID} switchTo={this.switchTo}/>
                }
            </div>
        )
    },
    switchTo: function(view){
        this.setState({
            pages: view
        })
    }
})

export default NewsList;
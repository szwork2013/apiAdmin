import React from 'react'
import {BreadCrumb, IBoxTool, LayPage} from "../../../common/Birdie"
import API from "../../../conf/API"
import {MemberTypes} from "../../../conf/Member_conf"
import {Link} from "react-router"

const MemberManager = React.createClass({

    getInitialState(){
        return {
            members:[],
            total: 0,
            curr: 1
        }
    },
    contextTypes: {
        appFirstPath: React.PropTypes.string
    },
    defaultData:{
        page: 1,
        perPage: 20
    },
    ajaxMemberList(option){

        $.ajax({
            url: API.member_manager.getMemberList,
            data: Object.assign({},this.defaultData,option),
            success: function(data){
                if(data.data){
                    data = data.data;
                    this.setState({
                        members: data.list,
                        total: data.count[0].num,
                        curr: option && option.page || 1
                    })
                }
            }.bind(this)
        })
    },
    componentDidMount(){
        this.ajaxMemberList()
    },
    render(){
        var {appFirstPath} = this.context;
        var {members,total,curr} = this.state;
        var perPage = this.defaultData;
        var crumbs = [
            {name: "会员管理", url:`/${appFirstPath}/member_manage/list`},
            {name: "会员列表", url: `/${appFirstPath}/member_manage/list`}
        ];
        var pages = total%perPage == 0 ? total/perPage : (parseInt(total/perPage) + 1);
        return (
            <div className="member_manager">
                <BreadCrumb crumbs={crumbs} title="会员管理" />
                <div className="wrapper wrapper-content animated fadeInRight">
                    <div className="row">
                        <IBoxTool title="搜索">
                            <div className="form-horizontal">
                                <div className="row">
                                    {/*
                                     <div className="form-group col-sm-3">
                                     <label className="col-sm-4 control-label" htmlFor="user_name">用户名称:</label>
                                     <div className="col-sm-8">
                                     <input type="text" className="form-control" id="user_name" />
                                     </div>
                                     </div>
                                    */}
                                    <div className="form-group col-sm-3">
                                        <label className="col-sm-4 control-label" htmlFor="usernumber">用户编号:</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" id="usernumber" ref="usernumber" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-2">
                                    <button type="button" onClick={this.handleSearch} className="btn btn-block btn-info bc-common">搜索</button>
                                </div>
                            </div>
                        </IBoxTool>
                    </div>
                    <div className="row">
                        <IBoxTool title={`总共：${total}`}>
                            <table className="table table-bordered order_list_table">
                                <thead>
                                <tr>
                                    <th>用户编号</th>
                                    <th>用户名</th>
                                    <th>会员类型</th>
                                    <th>操作</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    members.map( member => {
                                        return (
                                            <tr key={member.number}>
                                                <td>{member.number.slice(0,-1)}</td>
                                                <td>{member.nickname}</td>
                                                <td>{MemberTypes[member.type]}</td>
                                                <td>
                                                    <Link to={"/page/member_manage/edit#"+member.number.slice(0,-1)}>编辑</Link>{" "}
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </table>
                            <LayPage config={{pages: pages,curr: curr,skin: "#19aa8d"}} jump={this.jump}/>
                        </IBoxTool>
                    </div>
                </div>
            </div>
        )
    },
    handleSearch(){
        var {usernumber} = this.refs;
        this.ajaxMemberList({usernumber: usernumber.value})
    },
    jump(curr){
        var data = {
            page: curr
        }
        this.ajaxMemberList(data);
    }
})
export default MemberManager;
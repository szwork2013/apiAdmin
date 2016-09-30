import React from "react"
import {BreadCrumb, IBoxTool, LayPage,SelectGroup} from "../../../common/Birdie"
import API from "../../../conf/API"
import MemberTypes from "../../../conf/Member_conf"

const Edit = React.createClass({
    getInitialState(){
        return {
            member: {
                number: "",
                card_no: "",
                real_name: "",
                bank_name: "",
                id_card: "",
                real_name: "",
                linkphone: ""
            },
            districts: []
        }
    },
    contextTypes: {
        router: React.PropTypes.object,
        appFirstPath: React.PropTypes.string
    },
    ajaxMemberInfo(option){
        $.ajax({
            url: API.member_manager.getMemberInfo,
            data: option,
            success: function(data){
                if(data.data){
                    data = data.data;
                    this.setState({
                        member: Object.assign(
                            {},
                            this.state.member,
                            data.info[0],
                            data.list[0]
                        )
                    })
                    this.getStateDistrict(data.info[0].province,data.info[0].city,data.info[0].area);
                }
            }.bind(this)
        })
    },
    componentDidMount(){

        var {hash} = this.props.location;
        this.ajaxMemberInfo({usernumber: hash.substring(1)});
    },
    getDistricts(parentID){
        return new Promise((resolve,reject) => {
            $.ajax({
                url: API.public.getDistrict,
                data: {
                    parent_code: parentID
                },
                success: function(data){
                    if(data.data){
                        resolve(data.data);
                    }else{
                        reject(data)
                    }
                }
            })
        })
    },
    ajaxDistricts(optionID,selIndex){
        var {districts} = this.state;
        var _this = this;
        this.getDistricts(optionID)
            .then(function(data){
                if(data.length == 0) districts.splice(selIndex+1,3);
                else districts.splice(selIndex+1,3,{list:data});
                _this.setState({
                    districts: districts
                })
            })
    },
    getStateDistrict(province,city,area){
        var getDists = this.getDistricts;
        var _this = this;
        var districts = [];
        getDists(0)
            .then(function(provinces){
                districts.push({
                    list:provinces,
                    curr: province
                })

                getDists(province).then(function(citys){
                    districts.push({
                        list: citys,
                        curr: city
                    })
                    getDists(city).then(function(areas){
                        districts.push({
                            list: areas,
                            curr: area
                        })
                        _this.setState({
                            districts: districts
                        })
                    })
                })
            })
    },
    render(){
        var {appFirstPath} = this.context;
        var {member} = this.state;
        var crumbs = [
            {name: "会员管理", url:`/${appFirstPath}/member_manage/list`},
            {name: "会员列表", url: `/${appFirstPath}/member_manage/list`},
            {name: "会员列表", url: `/${appFirstPath}/member_manage/edit`}
        ];
        var {districts} = this.state;
        return (
            <div className="member_manager">
                <BreadCrumb crumbs={crumbs} title="会员管理" />
                <div className="wrapper wrapper-content animated fadeInRight">
                    <div className="row">
                        <IBoxTool title="会员详情">
                            <div className="form-horizontal">
                                <div className="form-group">
                                    <label className="control-label col-sm-2">会员编号:</label>
                                    <div className="col-sm-8">
                                        <input disabled className="form-control" type="text" value={(member.number+"").slice(0,-1)} name="number" onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-2">注册时间:</label>
                                    <div className="col-sm-8">
                                        <input disabled className="form-control" type="text" value={member.ctime} name="number" onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-2">用户名:</label>
                                    <div className="col-sm-8">
                                        <input type="text" onChange={this.handleChange} name="real_name" value={member.real_name} className="form-control"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-2">身份证号:</label>
                                    <div className="col-sm-8">
                                        <input type="text" onChange={this.handleChange} name="id_card" value={member.id_card} className="form-control"/>
                                    </div>
                                </div>
                                <div className="form-group" ref="district">
                                    <label className="control-label col-sm-2">经营所在地:</label>
                                    <SelectGroup categorys={districts} id="code" value="code" ajaxCategory={this.ajaxDistricts}/>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-2">银行卡:</label>
                                    <div className="col-sm-8">
                                        <input type="text" onChange={this.handleChange} name="card_no" value={member.card_no} className="form-control"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-2">开户行:</label>
                                    <div className="col-sm-3">
                                        <select name="bank_name" className="form-control" onChange={this.handleChange} value={member.bank_name}>
                                            <option value="建设银行">建设银行</option>
                                            <option value="农业银行">农业银行</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label col-sm-2">联系方式:</label>
                                    <div className="col-sm-8">
                                        <input type="text" onChange={this.handleChange} name="linkphone" value={member.linkphone} className="form-control"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-4 tc">
                                        <button type="button" onClick={this.handleSave} className="btn btn-primary">保存修改</button>
                                    </div>
                                </div>
                            </div>
                        </IBoxTool>
                    </div>
                </div>
            </div>
        )
    },
    handleSave(){
        var postData = this.state.member;
        var {district} = this.refs;
        var {appFirstPath,router} = this.context;
        var province = $(district).find("select:eq(0)").val();
        var city = $(district).find("select:eq(1)").val();
        var area = $(district).find("select:eq(2)").val();
        console.log(area);

        $.ajax({
            type: "POST",
            url: API.member_manager.updateMember,
            data: Object.assign({},this.state.member,{
                usernumber: postData.number.slice(0,-1),
                user_id: postData.meuserid,
                province: province,
                city: city,
                area: area
            }),
            success: function(data){
                var routePath = "/" + appFirstPath + "/member_manage/list";
                router.push(routePath);
            }
        })
    },
    handleChange(e){
        var el = e.target;
        var value = el.value;
        var name = el.name;

        this.setState({
            member: Object.assign({},
                this.state.member,
                {
                    [name]:value
                }
            )
        })
    }
})

export default Edit;
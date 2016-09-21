import React from "react"
import { BreadCrumb, SelectGroup} from '../../../common/Birdie'
const RechargeIndex = React.createClass({

    render(){
        var crumbs = [
            {name: "充值管理", url:"/order_manage/list"},
            {name: "资格充值", url: "/order_manage/list"}
        ];
        var categorys = [
            {
                list:[
                    {id:1,value:111,name: 111},
                    {id:2,value:222,name: 222}
                ],
                curr: 1
            },
            {
                list:[
                    {id:1,value:333,name: "aaa"},
                    {id:2,value:444,name: "bbb"}
                ],
                curr: 1
            },
            {
                list:[
                    {id:1,value:333,name: "aaa"},
                    {id:2,value:444,name: "bbb"}
                ],
                curr: 1
            }
        ]
        return (
            <div className="rechargeindex">
                <BreadCrumb crumbs={crumbs} title="充值管理"/>
                <div className="wrapper wrapper-content animated fadeInRight">
                    <div className="row">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                资格充值
                            </div>
                            <div className="panel-body">
                                <div className="form-horizontal">
                                    <div className="form-group">
                                        <label className="control-label col-sm-2 col-md-1">充值金额</label>
                                        <div className="col-sm-4">
                                            <input onBlur={this.blurRechargeNumber} className="form-control" />
                                        </div>
                                        <div className="col-sm-6">
                                            注：请正确填写实际转账金额，若与实际转账金额不符，将无法充值成功
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-sm-2 col-md-1">充值数量</label>
                                        <div className="col-sm-4">
                                            <input disabled ref="rechargeNum" className="form-control" />
                                        </div>
                                        <div className="col-sm-6">
                                            注：充值资格根据您的充值金额决定，会员资格200元（人民币）/个
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-sm-2 col-md-1">转账银行</label>
                                        <div className="col-sm-4">
                                            <input className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-sm-2 col-md-1">转账银行地区</label>
                                        <SelectGroup categorys={categorys}/>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-sm-2 col-md-1">汇款人姓名</label>
                                        <div className="col-sm-4">
                                            <input className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-sm-2 col-md-1">充值时间</label>
                                        <div className="col-sm-4">
                                            <input className="form-control datepicker" />
                                        </div>
                                        <div className="col-sm-6">
                                            注：充值时间以转账银行小票的时间为准，精确到分
                                        </div>
                                    </div>
                                    <div className="form-group tc">
                                        <button className="btn btn-primary">确认提交</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    blurRechargeNumber(e){
        var ele = e.target;
        var {rechargeNum} = this.refs;
        var rechgMoney = ele.value;

        rechargeNum.value = Math.floor(rechgMoney/200);

    }
})
export default RechargeIndex;
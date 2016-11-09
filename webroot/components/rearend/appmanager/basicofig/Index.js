import React from 'react'
import {BreadCrumb,IBoxTool} from "../../../../common/Birdie"

const APP_Index = () => {
    var crumbs = [
        {name: "应用管理", url:"#"},
        {name: "基本配置", url: "#"},
        {name: "基本信息", url: "#"}
    ]
    return (
        <div>
            <BreadCrumb crumbs={crumbs} title="应用管理"/>
            <div className="wrapper wrapper-content animated fadeInDown">
                <div className="row border-bottom white-bg dashboard-header">
                    <div className="col-sm-3">
                        <h2 >欢迎来到后台管理</h2>
                        <small>你有5个任务计划</small>
                        <ul className="list-group clear-list m-t">
                            <li className="list-group-item fist-item">
                                <span className="pull-right">
                                    09:00 pm
                                </span>
                                <span className="label label-success">1</span> 打电话
                            </li>
                            <li className="list-group-item">
                                <span className="pull-right">
                                    10:16 am
                                </span>
                                <span className="label label-info">2</span> 做笔记
                            </li>
                            <li className="list-group-item">
                                <span className="pull-right">
                                    08:22 pm
                                </span>
                                <span className="label label-primary">3</span> debug
                            </li>
                            <li className="list-group-item">
                                <span className="pull-right">
                                    11:06 pm
                                </span>
                                <span className="label label-default">4</span> call phone
                            </li>
                            <li className="list-group-item">
                                <span className="pull-right">
                                    12:00 am
                                </span>
                                <span className="label label-primary">5</span> fs
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-6">
                        <div className="flot-chart dashboard-chart">
                            <div className="flot-chart-content">
                                <div>
                                    <canvas className="flot-base"  width="672" height="180"></canvas>
                                </div>
                            </div>
                        </div>
                        <div className="row text-left">
                            <div className="col-xs-4">
                                <div className="m-l-md">
                                    <span className="h4 font-bold m-t block">$ 406,100</span>
                                    <small className="text-muted m-b block">Sales marketing report</small>
                                </div>
                            </div>
                            <div className="col-xs-4">
                                <span className="h4 font-bold m-t block">$ 150,401</span>
                                <small className="text-muted m-b block">Annual sales revenue</small>
                            </div>
                            <div className="col-xs-4">
                                <span className="h4 font-bold m-t block">$ 16,822</span>
                                <small className="text-muted m-b block">Half-year revenue margin</small>
                            </div>

                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="statistic-box">
                            <h4>
                                Project Beta progress
                            </h4>

                            <p>
                                You have two project with not compleated task.
                            </p>

                            <div className="row text-center">
                                <div className="col-lg-6">
                                    <canvas width="80" height="80"></canvas>
                                    <h5>Kolter</h5>
                                </div>
                                <div className="col-lg-6">
                                    <canvas></canvas>
                                    <h5>Maxtor</h5>
                                </div>
                            </div>
                            <div className="m-t">
                                <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default APP_Index;
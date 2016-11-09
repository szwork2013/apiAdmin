import React from 'react'
import {BreadCrumb,IBoxTool} from "../common/Birdie"

const DefaultPage = React.createClass({
    flotData:null,
    flotOptions: {
        grow: {stepMode:"linear",stepDirection:"up",steps:80},
        grid: {
            hoverable: true,
            clickable: true,
            tickColor: "#d5d5d5",
            borderWidth: 1,
            color: '#d5d5d5'
        },
        colors: ["#1ab394", "#464f88"]
    },
    setFloatData1(){
        var data1 = [
            [0, 4], [1, 8], [2, 5], [3, 10], [4, 4],
            [5, 16], [6, 5], [7, 11], [8, 6], [9, 11],
            [10, 30], [11, 10], [12, 13], [13, 4], [14, 3],
            [15, 3], [16, 6]
        ];
        var data2 = [
            [0, 1], [1, 0], [2, 2], [3, 0],
            [4, 1], [5, 3], [6, 1], [7, 5],
            [8, 2], [9, 3], [10, 2], [11, 1],
            [12, 0], [13, 2], [14, 8], [15, 0],
            [16, 0]
        ];
        this.flotData = [data1, data2];
    },
    chartData:[
        {
            value: 300,
            color:"#a3e1d4",
            highlight: "#1ab394",
            label: "App"
        },
        {
            value: 140,
            color: "#dedede",
            highlight: "#1ab394",
            label: "Software"
        },
        {
            value: 200,
            color: "#b5b8cf",
            highlight: "#1ab394",
            label: "Laptop"
        }
    ],
    chartOptions:{
        scaleShowLabelBackdrop : true,
        scaleBackdropColor : "rgba(255,255,255,0.75)",
        scaleBeginAtZero : true,
        scaleBackdropPaddingY : 1,
        scaleBackdropPaddingX : 1,
        scaleShowLine : true,
        segmentShowStroke : true,
        segmentStrokeColor : "#fff",
        segmentStrokeWidth : 2,
        animationSteps : 100,
        animationEasing : "easeOutBounce",
        animateRotate : true,
        animateScale : false,
    },
    renderFlot(){
        var {taskFlot} = this.refs;
        this.setFloatData1();
        var flotData = this.flotData;
        var flotOption = this.flotOptions;

        $.plot($(taskFlot), flotData, flotOption);
    },
    renderChart(){
        var {chart1, chart2} = this.refs;
        var cxt1 = $(chart1)[0].getContext("2d");
        var cxt2 = $(chart2)[0].getContext("2d");

        var myNewChart1 = new Chart(cxt1).PolarArea(this.chartData,this.chartOptions);
        var myNewChart2 = new Chart(cxt2).PolarArea(this.chartData,this.chartOptions);
    },
    componentDidMount(){
        this.renderFlot();
        this.renderChart();
    },
    render(){

        return (
            <div>
                <BreadCrumb title="后台管理"/>
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
                                    <div ref="taskFlot" style={{width:"627px",height:"180px"}}></div>
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
                                <h4>Project Beta progress</h4>
                                <p className="mb10">You have two project with not compleated task.</p>

                                <div className="row text-center">
                                    <div className="col-lg-6">
                                        <canvas width="80" height="80" ref="chart1"></canvas>
                                        <h5>Kolter</h5>
                                    </div>
                                    <div className="col-lg-6">
                                        <canvas width="80" height="80" ref="chart2"></canvas>
                                        <h5>Maxtor</h5>
                                    </div>
                                </div>
                                <div className="m-t">
                                    <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="wrapper wrapper-content">
                            <div className="row">
                                <div className="col-lg-4">
                                    <IBoxTool title="未完成记录">
                                        <h4>新任务!
                                            <br/>
                                            <small className="m-r"><a> Check the stock price! </a></small>
                                        </h4>
                                    </IBoxTool>
                                    <IBoxTool title="chat email">
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                <p><a className="text-info" href="">@Alan Marry</a> I belive that. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                <small className="block text-muted"><i className="fa fa-clock-o"></i> 1 minuts ago</small>
                                            </li>
                                            <li className="list-group-item">
                                                <p><a className="text-info" href="">@Stock Man</a> Check this stock chart. This price is crazy! </p>

                                                <div className="text-center m">
                                                    <span id="sparkline8"></span>
                                                </div>
                                                <small className="block text-muted"><i className="fa fa-clock-o"></i> 2 hours ago</small>
                                            </li>
                                            <li className="list-group-item">
                                                <p><a className="text-info" href="">@Kevin Smith</a> Lorem ipsum unknown printer took a galley </p>
                                                <small className="block text-muted"><i className="fa fa-clock-o"></i> 2 minuts ago</small>
                                            </li>
                                            <li className="list-group-item ">
                                                <p><a className="text-info" href="">@Jonathan Febrick</a> The standard chunk of Lorem Ipsum</p>
                                                <small className="block text-muted"><i className="fa fa-clock-o"></i> 1 hour ago</small>
                                            </li>
                                            <li className="list-group-item">
                                                <p><a className="text-info" href="">@Alan Marry</a> I belive that. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                <small className="block text-muted"><i className="fa fa-clock-o"></i> 1 minuts ago</small>
                                            </li>
                                            <li className="list-group-item">
                                                <p><a className="text-info" href="">@Kevin Smith</a> Lorem ipsum unknown printer took a galley </p>
                                                <small className="block text-muted"><i className="fa fa-clock-o"></i> 2 minuts ago</small>
                                            </li>
                                        </ul>
                                    </IBoxTool>
                                </div>
                                <div className="col-lg-4">
                                    <IBoxTool title="日常提交">
                                        <div>
                                            <div className="feed-activity-list">

                                                <div className="feed-element">
                                                    <a className="pull-left">
                                                        <img alt="image" className="img-circle" src="img/profile.jpg" />
                                                    </a>

                                                    <div className="media-body ">
                                                        <small className="pull-right">5m ago</small>
                                                        <strong>Monica Smith</strong> posted a new blog. <br/>
                                                        <small className="text-muted">Today 5:60 pm - 12.06.2014</small>

                                                    </div>
                                                </div>

                                                <div className="feed-element">
                                                    <a className="pull-left">
                                                        <img alt="image" className="img-circle" src="img/a2.jpg"/>
                                                    </a>

                                                    <div className="media-body ">
                                                        <small className="pull-right">2h ago</small>
                                                        <strong>Mark Johnson</strong> posted message on <strong>Monica Smith</strong> site. <br/>
                                                        <small className="text-muted">Today 2:10 pm - 12.06.2014</small>
                                                    </div>
                                                </div>
                                                <div className="feed-element">
                                                    <a className="pull-left">
                                                        <img alt="image" className="img-circle" src="img/a3.jpg"/>
                                                    </a>

                                                    <div className="media-body ">
                                                        <small className="pull-right">2h ago</small>
                                                        <strong>Janet Rosowski</strong> add 1 photo on <strong>Monica Smith</strong>. <br/>
                                                        <small className="text-muted">2 days ago at 8:30am</small>
                                                    </div>
                                                </div>
                                                <div className="feed-element">
                                                    <a className="pull-left">
                                                        <img alt="image" className="img-circle" src="img/a4.jpg"/>
                                                    </a>

                                                    <div className="media-body ">
                                                        <small className="pull-right text-navy">5h ago</small>
                                                        <strong>Chris Johnatan Overtunk</strong> started following <strong>Monica Smith</strong>. <br/>
                                                        <small className="text-muted">Yesterday 1:21 pm - 11.06.2014</small>
                                                        <div className="actions">
                                                            <a className="btn btn-xs btn-white"><i className="fa fa-thumbs-up"></i> Like </a>
                                                            <a className="btn btn-xs btn-white"><i className="fa fa-heart"></i> Love</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="feed-element">
                                                    <a className="pull-left">
                                                        <img alt="image" className="img-circle" src="img/a5.jpg"/>
                                                    </a>

                                                    <div className="media-body ">
                                                        <small className="pull-right">2h ago</small>
                                                        <strong>Kim Smith</strong> posted message on <strong>Monica Smith</strong> site. <br/>
                                                        <small className="text-muted">Yesterday 5:20 pm - 12.06.2014</small>
                                                        <div className="well">
                                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                                            Over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                                        </div>
                                                        <div className="pull-right">
                                                            <a className="btn btn-xs btn-white">
                                                                <i className="fa fa-thumbs-up"></i> {"Like "}
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="feed-element">
                                                    <a className="pull-left">
                                                        <img alt="image" className="img-circle" src="img/profile.jpg"/>
                                                    </a>

                                                    <div className="media-body ">
                                                        <small className="pull-right">23h ago</small>
                                                        <strong>Monica Smith</strong> love <strong>Kim Smith</strong>. <br/>
                                                        <small className="text-muted">2 days ago at 2:30 am - 11.06.2014</small>
                                                    </div>
                                                </div>
                                                <div className="feed-element">
                                                    <a className="pull-left">
                                                        <img alt="image" className="img-circle" src="img/a7.jpg"/>
                                                    </a>

                                                    <div className="media-body ">
                                                        <small className="pull-right">46h ago</small>
                                                        <strong>Mike Loreipsum</strong> started following <strong>Monica Smith</strong>. <br/>
                                                        <small className="text-muted">3 days ago at 7:58 pm - 10.06.2014</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="btn btn-primary btn-block m-t"><i className="fa fa-arrow-down"></i> Show More</button>
                                        </div>
                                    </IBoxTool>
                                </div>
                                <div className="col-lg-4">
                                    <IBoxTool title="B2C項目">
                                        <div>
                                            <div className="timeline-item">
                                                <div className="row">
                                                    <div className="col-xs-3 date">
                                                        <i className="fa fa-briefcase"></i>
                                                        6:00 am<br/>
                                                        <small className="text-navy">2 hour ago</small>
                                                    </div>
                                                    <div className="col-xs-7 content no-top-border">
                                                        <p className="m-b-xs"><strong>Meeting</strong></p>
                                                        <p className="mb10">Conference on the sales results for the previous year. Monica please examine sales trends in marketing and products. Below please find the current status of the</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="timeline-item">
                                                <div className="row">
                                                    <div className="col-xs-3 date">
                                                        <i className="fa fa-briefcase"></i>
                                                        6:00 am<br/>
                                                        <small className="text-navy">2 hour ago</small>
                                                    </div>
                                                    <div className="col-xs-7 content">
                                                        <p className="m-b-xs"><strong>Meeting</strong></p>
                                                        <p className="mb10">Conference on the sales results for the previous year. Monica please examine sales trends in marketing and products. Below please find the current status of the</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="timeline-item">
                                                <div className="row">
                                                    <div className="col-xs-3 date">
                                                        <i className="fa fa-briefcase"></i>
                                                        6:00 am<br/>
                                                        <small className="text-navy">2 hour ago</small>
                                                    </div>
                                                    <div className="col-xs-7 content">
                                                        <p className="m-b-xs"><strong>Meeting</strong></p>
                                                        <p className="mb10">Conference on the sales results for the previous year. Monica please examine sales trends in marketing and products. Below please find the current status of the</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="timeline-item">
                                                <div className="row">
                                                    <div className="col-xs-3 date">
                                                        <i className="fa fa-briefcase"></i>
                                                        6:00 am<br/>
                                                        <small className="text-navy">2 hour ago</small>
                                                    </div>
                                                    <div className="col-xs-7 content">
                                                        <p className="m-b-xs"><strong>Meeting</strong></p>
                                                        <p className="mb10">Conference on the sales results for the previous year. Monica please examine sales trends in marketing and products. Below please find the current status of the</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="timeline-item">
                                                <div className="row">
                                                    <div className="col-xs-3 date">
                                                        <i className="fa fa-briefcase"></i>
                                                        6:00 am<br/>
                                                        <small className="text-navy">2 hour ago</small>
                                                    </div>
                                                    <div className="col-xs-7 content">
                                                        <p className="m-b-xs"><strong>Meeting</strong></p>
                                                        <p className="mb10">Conference on the sales results for the previous year. Monica please examine sales trends in marketing and products. Below please find the current status of the</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </IBoxTool>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})
export default DefaultPage;
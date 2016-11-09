import React from 'react'
import {BreadCrumb,IBoxTool} from "../../../../common/Birdie"

const InNet_Accessurl = React.createClass({

    chartBarOption:{
        scaleBeginAtZero : true,
        scaleShowGridLines : true,
        scaleGridLineColor : "rgba(0,0,0,.05)",
        scaleGridLineWidth : 1,
        barShowStroke : true,
        barStrokeWidth : 2,
        barValueSpacing : 5,
        barDatasetSpacing : 1
    },
    chartBarData:{
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,0.8)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(26,179,148,0.5)",
                strokeColor: "rgba(26,179,148,0.8)",
                highlightFill: "rgba(26,179,148,0.75)",
                highlightStroke: "rgba(26,179,148,1)",
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    },
    chartLineData:{
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Example dataset",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 40, 51, 36, 25, 40]
            },
            {
                label: "Example dataset",
                fillColor: "rgba(26,179,148,0.5)",
                strokeColor: "rgba(26,179,148,0.7)",
                pointColor: "rgba(26,179,148,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(26,179,148,1)",
                data: [48, 48, 60, 39, 56, 37, 30]
            }
        ]
    },
    chartLineOption:{
        scaleShowGridLines : true,
        scaleGridLineColor : "rgba(0,0,0,.05)",
        scaleGridLineWidth : 1,
        bezierCurve : true,
        bezierCurveTension : 0.4,
        pointDot : true,
        pointDotRadius : 4,
        pointDotStrokeWidth : 1,
        pointHitDetectionRadius : 20,
        datasetStroke : true,
        datasetStrokeWidth : 2,
        datasetFill : true,
    },
    chartPieData: [
        {
            label: "Sales 1",
            value: 21,
            color: "#d3d3d3",
        },
        {
            label: "Sales 2",
            value: 3,
            color: "#bababa",
        },
        {
            label: "Sales 3",
            value: 15,
            color: "#79d2c0",
        },
        {
            label: "Sales 4",
            value: 52,
            color: "#1ab394",
        }
    ],
    chartPieOption: {
        series: {
            pie: {
                show: true
            }
        },
        grid: {
            hoverable: true
        },
        tooltip: true,
        tooltipOpts: {
            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
            shifts: {
                x: 20,
                y: 0
            },
            defaultTheme: false
        }
    },
    chartDoughData:[
        {
            value: 300,
            color:"#a3e1d4",
            highlight: "#1ab394",
            label: "App"
        },
        {
            value: 50,
            color: "#dedede",
            highlight: "#1ab394",
            label: "Software"
        },
        {
            value: 100,
            color: "#b5b8cf",
            highlight: "#1ab394",
            label: "Laptop"
        }
    ],
    chartDoughOption:{
        segmentShowStroke : true,
        segmentStrokeColor : "#fff",
        segmentStrokeWidth : 2,
        percentageInnerCutout : 45, // This is 0 for Pie charts
        animationSteps : 100,
        animationEasing : "easeOutBounce",
        animateRotate : true,
        animateScale : false,
    },
    componentDidMount(){
        var {barchart,linechart,piechart,doughnutchart} = this.refs;
        var barCxt = $(barchart)[0].getContext("2d");
        var lineCxt = $(linechart)[0].getContext("2d");
        var pieCxt = $(piechart)[0].getContext("2d");
        var doughCxt = $(doughnutchart)[0].getContext("2d");

        var barChart = new Chart(barCxt).Bar(this.chartBarData,this.chartBarOption);
        var lineChart = new Chart(lineCxt).Line(this.chartLineData,this.chartLineOption);
        var pieChart = new Chart(pieCxt).Pie(this.chartPieData,this.chartPieOption);
        var doughChart = new Chart(doughCxt).Doughnut(this.chartDoughData,this.chartDoughOption);
    },
    render(){
        var crumbs = [
            {name: "应用管理", url:"#"},
            {name: "内网配置", url: "#"},
            {name: "访问地址", url: "#"}
        ]
        return (
            <div>
                <BreadCrumb crumbs={crumbs} title="应用管理" />
                <div className="wrapper wrapper-content animated fadeInRight">
                    <div className="row">
                        <div className="col-lg-6">
                            <IBoxTool title="bar char demo">
                                <canvas width="642" height="200" ref="barchart"></canvas>
                            </IBoxTool>
                        </div>
                        <div className="col-lg-6">
                            <IBoxTool title="line char demo">
                                <canvas width="642" height="200" ref="linechart"></canvas>
                            </IBoxTool>
                        </div>
                        <div className="col-lg-6">
                            <IBoxTool title="pie char demo">
                                <canvas width="642" height="200" ref="piechart"></canvas>
                            </IBoxTool>
                        </div>
                        <div className="col-lg-6">
                            <IBoxTool title="Doughnut char demo">
                                <canvas width="642" height="200" ref="doughnutchart"></canvas>
                            </IBoxTool>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})
export default InNet_Accessurl;
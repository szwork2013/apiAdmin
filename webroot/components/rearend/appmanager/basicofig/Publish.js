import React from 'react'
import {BreadCrumb, IBoxTool} from "../../../../common/Birdie"

const APP_Publish = () => {
    var crumbs = [
        {name: "应用管理", url:"#"},
        {name: "基本配置", url: "#"},
        {name: "服务器部署", url: "#"}
    ]
    return (
        <div>
            <BreadCrumb crumbs={crumbs} title="应用管理" />
            <div className="wrapper wrapper-content animated fadeInRight">
                <div className="row">
                    <div className="col-lg-3">
                        <IBoxTool title="收入">
                            <h1 className="no-margins">40 886,200</h1>
                            <div className="stat-percent font-bold text-success">98% <i className="fa fa-bolt"></i></div>
                            <small>Total income</small>
                        </IBoxTool>
                    </div>
                    <div className="col-lg-3">
                        <IBoxTool title="订单">
                            <h1 className="no-margins">40 886,200</h1>
                            <div className="stat-percent font-bold text-danger">38% <i className="fa fa-level-down"></i></div>
                            <small>Total income</small>
                        </IBoxTool>
                    </div>
                    <div className="col-lg-3">
                        <IBoxTool title="访问">
                            <h1 className="no-margins">40 886,200</h1>
                            <div className="stat-percent font-bold text-success">98% <i className="fa fa-bolt"></i></div>
                            <small>Total income</small>
                        </IBoxTool>
                    </div>
                    <div className="col-lg-3">
                        <IBoxTool title="活跃度">
                            <h1 className="no-margins">40 886,200</h1>
                            <div className="stat-percent font-bold text-info">20% <i className="fa fa-level-up"></i></div>
                            <small>Total income</small>
                        </IBoxTool>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default APP_Publish;
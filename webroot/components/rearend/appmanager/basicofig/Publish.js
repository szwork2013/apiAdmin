import React from 'react'
import {BreadCrumb} from "../../../../common/Birdie"

const APP_Publish = () => {
    var crumbs = [
        {name: "应用管理", url:"#"},
        {name: "基本配置", url: "#"},
        {name: "服务器部署", url: "#"}
    ]
    return (
        <div>
            <BreadCrumb crumbs={crumbs} title="应用管理" />
            app publish
        </div>
    )
}

export default APP_Publish;
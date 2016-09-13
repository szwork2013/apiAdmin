import React from 'react'
import {BreadCrumb} from "../../../../common/Birdie"

const APP_Index = () => {
    var crumbs = [
        {name: "应用管理", url:"#"},
        {name: "基本配置", url: "#"},
        {name: "基本信息", url: "#"}
    ]
    return (
        <div>
            <BreadCrumb crumbs={crumbs} title="应用管理"/>
            appmanager Index
        </div>
    )
}
export default APP_Index;
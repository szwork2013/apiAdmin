import React from 'react'
import {BreadCrumb} from "../../../../common/Birdie"

const Accessurl = () => {
    var crumbs = [
        {name: "应用管理", url:"#"},
        {name: "外网配置", url: "#"},
        {name: "访问安全", url: "#"}
    ]
    return (
        <div>
            <BreadCrumb crumbs={crumbs} title="应用管理" />
            access url
        </div>
    )
}
export default Accessurl;
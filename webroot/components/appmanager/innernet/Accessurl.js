import React from 'react'
import {BreadCrumb} from "../../../common/Birdie"
const InNet_Accessurl = () => {
    var crumbs = [
        {name: "应用管理", url:"#"},
        {name: "内网配置", url: "#"},
        {name: "访问地址", url: "#"}
    ]
    return (
        <div>
            <BreadCrumb crumbs={crumbs} title="应用管理" />
            access url
        </div>
    )
}
export default InNet_Accessurl;
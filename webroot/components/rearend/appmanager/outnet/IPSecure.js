import React from 'react'
import {BreadCrumb} from "../../../../common/Birdie"

const IPSecure = () => {
    var crumbs = [
        {name: "应用管理", url:"#"},
        {name: "外网配置", url: "#"},
        {name: "IP安全", url: "#"}
    ]
    return (
        <div>
            <BreadCrumb crumbs={crumbs} title="应用管理" />
            IPＳｅｃｕｒｅ
        </div>
    )
}
export default IPSecure;
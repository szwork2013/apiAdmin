import React from 'react'

import EmptyContainer from "../components/EmptyContainer"
import APP_Index from '../components/rearend/appmanager/basicofig/Index'
import APP_Publish from '../components/rearend/appmanager/basicofig/Publish'
import Accessurl from  '../components/rearend/appmanager/outnet/Accessurl'
import IPSecure from '../components/rearend/appmanager/outnet/IPSecure'
import InNet_Accessurl from '../components/rearend/appmanager/innernet/Accessurl'
import InNet_Securegroup from '../components/rearend/appmanager/innernet/Securegroup'
import InNet_SecretManager from '../components/rearend/appmanager/innernet/SecretManager'

export const apimanager = {
    id: 'apimanager',
    title: "API后台管理",
    url: "/apimanager/basicofig/index",
    level: "nav-first-level",
    icon: "fa fa-joomla",
    childRoutes: [
        {
            id: "apimanager",
            path: "apimanager",
            component: EmptyContainer,
            title: "应用管理",
            url: "/apimanager",
            icon: "fa fa-th-large",
            level: "nav-second-level",
            childRoutes: [
                {
                    id: "basicofig",
                    path: "basicofig",
                    component: EmptyContainer,
                    title: "基本配置",
                    url: "/apimanager/basicofig",
                    level: "nav-third-level",
                    childRoutes: [
                        {
                            id: "baseInfo",
                            path: "index",
                            component: APP_Index,
                            title: "基本信息",
                            url: "/apimanager/basicofig/index",
                        },
                        {
                            id: "publish",
                            path: "publish",
                            component: APP_Publish,
                            title: "服务器部署",
                            url: "/apimanager/basicofig/publish",
                        }
                    ],
                },
                {
                    id: "outnetcofig",
                    path: "outnet",
                    component: EmptyContainer,
                    title: "外网配置",
                    url: "/apimanager/outnet",
                    level: "nav-third-level",
                    childRoutes: [
                        {
                            id: "accessurl",
                            path: "accessurl",
                            component: Accessurl,
                            url: "/apimanager/outnet/accessurl",
                            title: "访问地址"
                        },
                        {
                            id: "ipsecure",
                            path: "ipsecure",
                            component: IPSecure,
                            url: "/apimanager/outnet/ipsecure",
                            title: "IP安全"
                        }
                    ]
                },
                {
                    id: "innernet",
                    path: "innernet",
                    component: EmptyContainer,
                    title: "内网配置",
                    url: "/apimanager/innernet",
                    level: "nav-third-level",
                    childRoutes: [
                        { id: "accessurl", path: "accessurl", component: InNet_Accessurl, url: "/apimanager/innernet/accessurl", title: "访问地址"},
                        { id: "securegroup", path: "securegroup", component: InNet_Securegroup, url: "/apimanager/innernet/securegroup", title: "安全组"},
                        { id: "secretManager", path: "secretManager",component: InNet_SecretManager, url: "/apimanager/innernet/secretmanager", title: "密钥管理"}
                    ]
                }

            ]
        }
    ]
}
const AppManagerRoute = apimanager.childRoutes[0];
export default AppManagerRoute;
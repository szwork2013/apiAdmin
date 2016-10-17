import React from 'react'
import APPManager from '../components/APPManager'
import EmptyContainer from "../components/EmptyContainer"
import ProdList from "../components/productManager/productmgr/List"
import Specif from "../components/productManager/productmgr/Specif"
import Attribute from "../components/productManager/productmgr/Attribute"
import CateList from "../components/productManager/categorymgr/List"
import StockList from '../components/productManager/stockmgr/List'

const ProductManager = {
    id: "allmgr",
    title: "商品管理",
    url: "/productmgr/list",
    level: "nav-first-level",
    icon: "fa fa-vimeo-square",
    childRoutes: [
        {
            title: "商品管理",
            path: "productmgr",
            component: EmptyContainer,
            url: "/productmgr",
            level: "nav-second-level",
            icon: "fa fa-th-large",
            childRoutes: [
                {
                    title: "商品列表",
                    path: "list",
                    component: ProdList,
                    url: "/productmgr/list",
                    level: "nav-third-level",
                    icon: "fa fa-th-large"
                },
                {
                    title: "商品规格",
                    path: "specif",
                    component: Specif,
                    url: "/productmgr/specif",
                    level: "nav-third-level",
                    icon: "fa fa-th-large"
                },
                {
                    title: "商品属性",
                    path: "attr",
                    component: Attribute,
                    url: "/productmgr/attr",
                    level: "nav-third-level",
                    icon: "fa fa-th-large"
                }
            ]
        },
        {
            title: "分类管理",
            path: "categorymgr",
            component: EmptyContainer,
            url: "/categorymgr",
            level: "nav-second-level",
            icon: "fa fa-sitemap",
            childRoutes: [
                {
                    title: "分类列表",
                    path: "list",
                    component: CateList,
                    url: "/categorymgr/list"
                }
            ]
        },
        {
            title: "仓库管理",
            path: "stockmgr",
            component: EmptyContainer,
            url: "/stockmgr",
            level: "nav-second-level",
            icon: "fa fa-cubes",
            childRoutes: [
                {
                    title: "仓库列表",
                    path: "list",
                    component: StockList,
                    url: "/stockmgr/list"
                }
            ]
        }
    ]
}

//商品管理
export const ProductManagerRoute = ProductManager.childRoutes[0];

//分类管理
export const CategoryManagerRoute = ProductManager.childRoutes[1];

//仓库管理
export const StockManagerRoute = ProductManager.childRoutes[2];
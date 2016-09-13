import React from 'react'
import APPManager from '../components/APPManager'
import ProdList from "../components/productManager/productmgr/List"
import Specif from "../components/productManager/productmgr/Specif"
import Attribute from "../components/productManager/productmgr/Attribute"
import CateList from "../components/productManager/categorymgr/List"
import StockList from '../components/productManager/stockmgr/List'

const ProductManagerRoute = {
    path: "productmgr",
    component: APPManager,
    childRoutes: [
        {
            path: "list",
            component: ProdList
        },
        {
            path: "specif",
            component: Specif
        },
        {
            path: "attr",
            component: Attribute
        }
    ]
}
const CategoryManagerRoute = {
    path: "categorymgr",
    component: APPManager,
    childRoutes: [
        {
            path: "list",
            component: CateList
        }
    ]
}
const StockManagerRoute = {
    path: "stockmgr",
    component: APPManager,
    childRoutes: [
        {
            path: "list",
            component: StockList
        }
    ]
}

export { ProductManagerRoute, CategoryManagerRoute, StockManagerRoute}
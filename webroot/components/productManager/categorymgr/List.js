import React from 'react'
import {render} from 'react-dom'
import CategoryEdit from './CategoryEdit'
import {BreadCrumb, IBoxTool, TreeNode} from '../../../common/Birdie'
import Ztil from '../../../statics/js/public'

const CateList = React.createClass({

    render(){
        var crumbs = [
            {name: "商品管理", url:"#"},
            {name: "商品规格", url: "#"}
        ]
        return (
            <div id="category_list">
                <BreadCrumb crumbs={crumbs} title="分类管理"/>
                <div className="wrapper wrapper-content animated fadeInRight">
                    <div className="row">
                        <div className="col-sm-6">
                            <IBoxTool title="分类列表">
                                <TreeNode edit={this.showEdit}/>
                            </IBoxTool>
                        </div>
                        <div ref="catedit_wraper" className="col-sm-6 ui-tab"></div>
                    </div>
                </div>
            </div>
        )
    },
    showEdit(){
        var {catedit_wraper} = this.refs;

        render(<CategoryEdit/>,catedit_wraper);
        Ztil.runAnim(catedit_wraper,"zoomIn")
    }
})

export default CateList;
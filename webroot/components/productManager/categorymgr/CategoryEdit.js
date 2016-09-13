import React from 'react'
import {BreadCrumb, IBoxTool} from '../../../common/Birdie'
import Ztil from '../../../statics/js/public'

import EditBase from './EditBase'
import EditAttr from './EditAttr'
import EditSpecif from './EditSpecif'

const CategoryEdit = React.createClass({

    componentDidMount(){
        Ztil.iCheckInit();
    },
    render(){
        return (
            <IBoxTool title="图书童书 》 编辑">
                <ul ref="navTabs" className="nav nav-tabs">
                    <li className="active">
                        <a data-toggle="tab" href="#panel_base">
                            <tab-heading >
                                基本信息
                            </tab-heading>
                        </a>
                    </li>
                    <li>
                        <a data-toggle="tab" href="#panel_attr">
                        <tab-heading>
                            属性信息
                        </tab-heading></a>
                    </li>
                    <li>
                        <a data-toggle="tab" href="#panel_specif">
                            <tab-heading>
                                规格信息
                            </tab-heading>
                        </a>
                    </li>
                </ul>
                <div ref="tabContent" className="tab-content">
                    <div id="panel_base" className="tab-pane fade in active">
                        <EditBase />
                    </div>
                    <div id="panel_attr" className="tab-pane fade">
                        <EditAttr />
                    </div>
                    <div id="panel_specif" className="tab-pane fade">
                        <EditSpecif />
                    </div>
                </div>
            </IBoxTool>
        )
    }
})
export default CategoryEdit;
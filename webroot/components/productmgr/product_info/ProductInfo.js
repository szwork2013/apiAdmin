import React from 'react'
import BaseInfo from './BaseInfo'
import AttrInfo from './AttrInfo'
import PriceAndSpecif from './PriceAndSpecif'
import ImageInfo from './ImageInfo'
import DetailInfo from './DetailInfo'
import Ztil from '../../../statics/js/public'

const ProductInfo = React.createClass({

    componentDidMount(){
        Ztil.iCheckInit();
    },
    render(){
        return (
            <div className="panel ui-tab">
                <div className="panel-heading">
                    <div className="panel-title m-b-md">商品编辑</div>
                </div>
                <div className="panel-body">
                    <ul className="nav nav-tabs">
                        <li className="active"><a data-toggle="tab" href="#base">基本信息</a></li>
                        <li><a data-toggle="tab" href="#attr">属性信息</a></li>
                        <li><a data-toggle="tab" href="#price">价格/规格信息</a></li>
                        <li><a data-toggle="tab" href="#image">图片信息</a></li>
                        <li><a data-toggle="tab" href="#detail">详细信息</a></li>
                    </ul>
                    <div className="tab-content">
                        <div id="base" className="tab-pane fade in active">
                            <BaseInfo />
                        </div>
                        <div id="attr" className="tab-pane fade">
                            <AttrInfo />
                        </div>
                        <div id="price" className="tab-pane fade">
                            <PriceAndSpecif />
                        </div>
                        <div id="image" className="tab-pane fade">
                            <ImageInfo />
                        </div>
                        <div id="detail" className="tab-pane fade">
                            <DetailInfo />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})
export default ProductInfo;
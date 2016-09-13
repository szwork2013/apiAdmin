import React from 'react'
import {BreadCrumb, IBoxTool} from '../../../common/Birdie'

const EditBase = React.createClass({

    render(){
        return (
            <form className="form-horizontal">
                <div className="form-group">
                    <label className="control-label col-sm-2">分类名称:</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="hr-line-dashed"></div>
                <div className="form-group">
                    <label className="control-label col-sm-2">缩略图地址:</label>
                    <div className="col-sm-8">
                        <span style={{border: "1px solid #DDD",display: "inline-block"}}><img src="http://img3x8.ddimg.cn/24/19/60558918-1_x_4533.jpg"/></span>
                    </div>
                </div>
                <div className="hr-line-dashed"></div>
                <div className="form-group">
                    <label className="control-label col-sm-2">状态:</label>
                    <div className="col-sm-8">
                        <div className="radio">
                            <label>
                                <input type="radio" name="status" value="1"/>
                                {" "}启用
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" name="status" value="2"/>
                                {" "}禁用
                            </label>
                        </div>
                    </div>
                </div>
                <div className="hr-line-dashed"></div>
                <div className="form-group">
                    <label className="col-sm-2">&nbsp;</label>
                    <div className="col-sm-8">
                        <button className="btn btn-primary">保存</button>
                    </div>
                </div>
            </form>
        )
    }
})

export default EditBase;
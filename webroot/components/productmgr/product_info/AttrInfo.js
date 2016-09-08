import React from 'react'
import Ztil from '../../../statics/js/public'

const AttrInfo = React.createClass({

    render(){
        return (
            <div style={{width: "80%",margin: 'auto'}}>
                <table className="table table-bordered">
                    <tbody>
                    <tr>
                        <td width="20%">属性1</td>
                        <td><input type="text" className="form-control w500" /> </td>
                    </tr>
                    <tr>
                        <td width="20%">属性2</td>
                        <td>
                            <select className="form-control w200">
                                <option value="1">选项1</option>
                                <option value="2">选项21</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td width="20%">属性3</td>
                        <td>
                            <label className="mr15"><input name="attr3" value="1" type="radio"/> 选项1</label>
                            <input name="attr3" value="2" type="radio"/> 选项2
                        </td>
                    </tr>
                    </tbody>
                </table>
                <button className="btn btn-primary">保存</button>
            </div>
        )
    }
})
export default AttrInfo;
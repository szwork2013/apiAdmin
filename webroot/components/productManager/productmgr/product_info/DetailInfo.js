import React from 'react'

const DetailInfo = React.createClass({

    render(){
        return (
            <div style={{width: "80%",margin: 'auto'}}>
                <table className="table table-bordered">
                    <tbody>
                    <tr>
                        <td width="15%">标题</td>
                        <td><input className="form-control w500" /> </td>
                    </tr>
                    <tr>
                        <td>关键词</td>
                        <td><textarea className="form-control w500" ></textarea> </td>
                    </tr>
                    <tr>
                        <td>描述</td>
                        <td><textarea className="form-control w500" ></textarea> </td>
                    </tr>
                    <tr>
                        <td>内容</td>
                        <td><textarea className="form-control w500" ></textarea> </td>
                    </tr>
                    </tbody>
                </table>
                <button className="btn btn-primary">保存</button>
            </div>
        )
    }
})
export default DetailInfo;
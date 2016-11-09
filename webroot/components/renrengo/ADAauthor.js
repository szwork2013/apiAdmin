import React from 'react'
import {BreadCrumb, IBoxTool} from "../../common/Birdie"

const ADAauthor = React.createClass({

    render(){
        return (
            <div className="ad_pu">
                <BreadCrumb title="广告投放" />
                <div className="wrapper wrapper-content animated fadeInRight">
                    <div className="row">
                        <div className="col-lg-6">
                            <IBoxTool title="ad list">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </IBoxTool>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})

export default ADAauthor;
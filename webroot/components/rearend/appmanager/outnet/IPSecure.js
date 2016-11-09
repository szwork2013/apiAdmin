import React from 'react'
import {BreadCrumb, IBoxTool} from "../../../../common/Birdie"

const IPSecure = () => {
    var crumbs = [
        {name: "应用管理", url:"#"},
        {name: "外网配置", url: "#"},
        {name: "IP安全", url: "#"}
    ]
    return (
        <div>
            <BreadCrumb crumbs={crumbs} title="应用管理" />
            <div className="wrapper wrapper-content animated fadeInRight">
                <div className="row">
                    <div className="col-lg-4">
                        <IBoxTool title="base button style">
                            <p>
                                <button type="button" className="btn btn-w-m btn-default">Default</button>
                                <button type="button" className="btn btn-w-m btn-primary">Primary</button>
                                <button type="button" className="btn btn-w-m btn-success">Success</button>
                                <button type="button" className="btn btn-w-m btn-info">Info</button>
                                <button type="button" className="btn btn-w-m btn-warning">Warning</button>
                                <button type="button" className="btn btn-w-m btn-danger">Danger</button>
                                <button type="button" className="btn btn-w-m btn-white">Danger</button>
                                <button type="button" className="btn btn-w-m btn-link">Link</button>
                            </p>
                        </IBoxTool>
                    </div>
                    <div className="col-lg-4">
                        <IBoxTool title="button size">
                            <p>
                                <button type="button" className="btn btn-primary btn-lg">Large button</button>
                                <button type="button" className="btn btn-default btn-lg">Large button</button>
                                <br/>
                                <button type="button" className="btn btn-primary">Default button</button>
                                <button type="button" className="btn btn-default">Default button</button>
                                <br/>
                                <button type="button" className="btn btn-primary btn-sm">Small button</button>
                                <button type="button" className="btn btn-default btn-sm">Small button</button>
                                <br/>
                                <button type="button" className="btn btn-primary btn-xs">Mini button</button>
                                <button type="button" className="btn btn-default btn-xs">Mini button</button>
                            </p>
                        </IBoxTool>
                    </div>
                    <div className="col-lg-4">
                        <IBoxTool title="outline button">
                            <p>
                                <button type="button" className="btn btn-outline btn-default">Default</button>
                                <button type="button" className="btn btn-outline btn-primary">Primary</button>
                                <button type="button" className="btn btn-outline btn-success">Success</button>
                                <button type="button" className="btn btn-outline btn-info">Info</button>
                                <button type="button" className="btn btn-outline btn-warning">Warning</button>
                                <button type="button" className="btn btn-outline btn-danger">Danger</button>
                                <button type="button" className="btn btn-outline btn-link">Link</button>
                            </p>
                            <button type="button" className="btn btn-block btn-outline btn-primary">Primary</button>
                        </IBoxTool>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <IBoxTool title="3D Button style">
                            <button className="btn btn-primary dim btn-large-dim" type="button"><i className="fa fa-money"></i></button>
                            <button className="btn btn-warning dim btn-large-dim" type="button"><i className="fa fa-warning"></i></button>
                            <button className="btn btn-danger  dim btn-large-dim" type="button"><i className="fa fa-heart"></i></button>
                            <button className="btn btn-primary  dim btn-large-dim" type="button"><i className="fa fa-dollar"></i>6</button>
                            <button className="btn btn-info  dim btn-large-dim btn-outline" type="button"><i className="fa fa-ruble"></i></button>
                            <button className="btn btn-primary dim" type="button"><i className="fa fa-money"></i></button>
                            <button className="btn btn-warning dim" type="button"><i className="fa fa-warning"></i></button>
                            <button className="btn btn-primary dim" type="button"><i className="fa fa-check"></i></button>
                            <button className="btn btn-success  dim" type="button"><i className="fa fa-upload"></i></button>
                            <button className="btn btn-info  dim" type="button"><i className="fa fa-paste"></i></button>
                            <button className="btn btn-warning  dim" type="button"><i className="fa fa-warning"></i></button>
                            <button className="btn btn-default  dim " type="button"><i className="fa fa-star"></i></button>
                            <button className="btn btn-danger  dim " type="button"><i className="fa fa-heart"></i></button>

                            <button className="btn btn-outline btn-primary dim" type="button"><i className="fa fa-money"></i></button>
                            <button className="btn btn-outline btn-warning dim" type="button"><i className="fa fa-warning"></i></button>
                            <button className="btn btn-outline btn-primary dim" type="button"><i className="fa fa-check"></i></button>
                            <button className="btn btn-outline btn-success  dim" type="button"><i className="fa fa-upload"></i></button>
                            <button className="btn btn-outline btn-info  dim" type="button"><i className="fa fa-paste"></i></button>
                            <button className="btn btn-outline btn-warning  dim" type="button"><i className="fa fa-warning"></i></button>
                            <button className="btn btn-outline btn-danger  dim " type="button"><i className="fa fa-heart"></i></button>
                        </IBoxTool>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default IPSecure;
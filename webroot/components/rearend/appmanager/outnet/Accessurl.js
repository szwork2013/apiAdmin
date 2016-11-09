import React from 'react'
import {BreadCrumb, IBoxTool} from "../../../../common/Birdie"

const Accessurl = React.createClass({

    render(){
        var crumbs = [
            {name: "应用管理", url:"#"},
            {name: "外网配置", url: "#"},
            {name: "访问安全", url: "#"}
        ]
        return (
            <div>
                <BreadCrumb crumbs={crumbs} title="应用管理" />
                <div className="wrapper wrapper-content animated fadeindown">
                    <div className="row">
                        <div className="col-lg-7">
                            <IBoxTool title="基本表单">
                                <div className="row">
                                    <div className="col-sm-6 b-r"><h3 className="m-t-none m-b">Sign in</h3>
                                        <p className="pb10">Sign in today for more expirience.</p>
                                        <form role="form" className="ng-pristine ng-valid">
                                            <div className="form-group">
                                                <label>Email</label> <input placeholder="Enter email" className="form-control" type="email"/>
                                            </div>
                                            <div className="form-group">
                                                <label>Password</label> <input placeholder="Password" className="form-control" type="password"/>
                                            </div>
                                            <div>
                                                <button className="btn btn-sm btn-primary pull-right m-t-n-xs" type="submit"><strong>Log in</strong></button>
                                                <label className="">
                                                    <div className="icheckbox_square-green">
                                                        <input  type="checkbox"/>
                                                    </div> Remember me
                                                </label>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-sm-6"><h4>Not a member?</h4>

                                        <p>You can create an account:</p>

                                        <p className="text-center">
                                            <a href=""><i className="fa fa-sign-in big-icon"></i></a>
                                        </p>
                                    </div>
                                </div>
                            </IBoxTool>
                        </div>
                        <div className="col-lg-5">
                            <IBoxTool title="Horizontal 表单">
                                <form className="form-horizontal">
                                    <p className="pb10">Sign in today for more expirience.</p>

                                    <div className="form-group"><label className="col-lg-2 control-label">Email</label>

                                        <div className="col-lg-10">
                                            <input placeholder="Email" className="form-control" type="email"/>
                                            <span className="help-block m-b-none">Example block-level help text here.</span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-2 control-label">Password</label>
                                        <div className="col-lg-10"><input placeholder="Password" className="form-control" type="password"/></div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-lg-offset-2 col-lg-10">
                                            <div className="checkbox">
                                                <div className="icheckbox_square-green checked"></div>
                                                <i></i> Remember me
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-lg-offset-2 col-lg-10">
                                            <button className="btn btn-sm btn-white" type="submit">Sign in</button>
                                        </div>
                                    </div>
                                </form>
                            </IBoxTool>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})

export default Accessurl;
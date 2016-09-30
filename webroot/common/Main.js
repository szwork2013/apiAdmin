import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import Header from './Header'
import {appFirstPath} from "../conf/APP"
import API from "../conf/API"
require("../statics/less/renrengo.less");
require("../statics/less/product.less")

const Main = React.createClass({
    contextTypes: {
        router: React.PropTypes.object
    },
    childContextTypes: {
        appFirstPath: React.PropTypes.string
    },
    getChildContext(){
        return {
            appFirstPath: appFirstPath
        }
    },
    getLoginInfo(){
        $.ajax({
            url: API.public.getLoginInfo,
            success: function(data){
                if(data.response_data){
                    data = data.response_data;
                    $("#login_username").text(data.real_name);
                }else{
                    alert(data.error_msg);
                    //this.context.router.push("/login")
                    window.location.href = "/login.html";
                }
            }.bind(this)
        })
    },
    componentDidMount(){
        var {pathname} = this.props.location;
        this.getLoginInfo();
        if(pathname == "/"){
            this.context.router.push(`/${appFirstPath}/member_manage/list`);
        }
    },
    render(){
        return (
            <div id="wrapper">
                <Header {...this.props} appFirstPath={appFirstPath}/>
                <div className="nav">
                    <Navigation {...this.props} appFirstPath={appFirstPath}/>
                </div>
                <div id="page-wrapper" className="gray-bg">
                    <div>
                        {this.props.children}
                    </div>
                    <div className="footer">
                        <Footer/>
                    </div>
                </div>
            </div>
        )
    }
})
export default Main;
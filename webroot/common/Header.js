import React from 'react'
import {Link} from 'react-router'
import NavMap from '../conf/NavMap';
import API from "../conf/API"
require("../statics/less/header.less");

const Header = React.createClass({

    render(){

        var {appFirstPath,location} = this.props;
        var {pathname} = location,
            liArr = [];
        var appFirstPath = appFirstPath == "" ? "" : "/" + appFirstPath;
        var urlFirstPathReg = /\/([a-zA-Z0-9_]+)\/?/;
        var urlFirstPath = urlFirstPathReg.exec(pathname.replace(appFirstPath,"")),
            urlFirstPath = urlFirstPath && urlFirstPath[1];

        for(var key in NavMap){
            var nav = NavMap[key];

            var className = "";
            if(key == "allmgr" && ["productmgr","categorymgr","stockmgr"].includes(urlFirstPath)){
                className = "active";
            }else if(key == "renrengo" && ["notice_push","advert_put","order_manage","news_manage","member_manage","recharge"].includes(urlFirstPath)){
                className = "active";
            }else if(urlFirstPath == key){
                className = "active";
            }
            liArr.push(<li key={nav.id} className={className}>
                        <Link to={appFirstPath + nav.url}><i className={nav.icon}></i><span className="nav-label">{nav.title}</span></Link>
                    </li>)
        }

        return (
            <header id="header" className="animated fadeInDown">
                <div className="navbar-header">
                    <a href="#" className="navbar-brand">云仓管理</a>
                </div>
                <div>
                    <ul className="nav navbar-nav">
                        {liArr}
                    </ul>
                </div>
                <div className="welcomeUser">
                    welcome: <span id="login_username"></span>
                    <button onClick={this.logout} className="btn btn-primary btn-sm">退出</button>
                </div>
            </header>
        )
    },
    logout(){
        $.ajax({
            url: API.public.getLogout,
            success: function(data){
                if(!data.error_code){
                    window.location.href = "/login.html";
                }else{
                    alert(data.error_msg);
                }
            }
        })
    }
})
export default Header;
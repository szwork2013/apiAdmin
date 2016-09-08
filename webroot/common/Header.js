import React from 'react'
import {Link} from 'react-router'
import NavMap from '../conf/NavMap';
require("../statics/less/header.less");

const Header = React.createClass({

    render(){

        var {pathname} = this.props.location,
            liArr = [];
        var urlFirstPathReg = /\/([a-zA-Z0-9]+)\/?/;
        var urlFirstPath = urlFirstPathReg.exec(pathname),
            urlFirstPath = urlFirstPath && urlFirstPath[1];

        for(var key in NavMap){
            var nav = NavMap[key];

            var className = "";
            if(["productmgr","categorymgr","stockmgr"].includes(urlFirstPath) && key == "allmgr"){
                className = "active";
            }else if(urlFirstPath == key){
                className = "active";
            }
            liArr.push(<li key={nav.id} className={className}>
                        <Link to={nav.url}><i className={nav.icon}></i><span className="nav-label">{nav.title}</span></Link>
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
            </header>
        )
    }
})
export default Header;
import React from 'react'
import {Link} from 'react-router'
import MiniSidebar from "./MiniSidebar"
import NavMap from '../conf/NavMap'


const Navigation = React.createClass({
    componentDidMount(){
        console.log("did mount");
    },
    render(){
        var {pathname} = this.props.location,navigation;

        var urlFirstPathReg = /\/([a-zA-Z0-9_]+)\/?/;
        var urlFirstPath = urlFirstPathReg.exec(pathname),
            urlFirstPath = urlFirstPath && urlFirstPath[1];

        if(["productmgr","categorymgr","stockmgr"].includes(urlFirstPath)){
            urlFirstPath = "allmgr";
        }
        if(["notice_push","advert_put","order_manage","news_manage","member_manage","recharge"].includes(urlFirstPath)){
            urlFirstPath = "renrengo";
        }
        var navs = NavMap[urlFirstPath];
        return (
            <nav id="left_nav" className="navbar-default navbar-static-side" role="navigation">
                <div className="sidebar-collapse">
                    <ul className="nav" id="side-menu">
                        <li>
                            <MiniSidebar />
                        </li>
                        <li className="nav-header">
                            <div style={{textAlign:"center"}}>
                                <strong style={{fontSize:"18px",color:"#23c6c8"}}>{navs.title}</strong>
                            </div>
                        </li>
                        {
                            navs.subs.map((nav,i) => {
                                var {subs,url,level,icon} = nav,
                                    subChildren = "",
                                    arrow = "",
                                    link = <Link data-link="link" to={url}>
                                            <i className={icon}></i><span className="nav-label">{nav.title}</span>{arrow}
                                        </Link>
                                if(subs && subs.length > 0){
                                    subChildren = <Navigation_item key={nav.id + "_" + i} {...this.props} subs={subs} url={url} level={level} collspan={this.collspan}/>;
                                    arrow = <span className="fa arrow"></span>;
                                    link = <a data-link="a" onClick={this.collspan} href="javascript:;">
                                            <i className={icon}></i><span className="nav-label">{nav.title}</span>{arrow}
                                        </a>
                                }
                                return (
                                    <li key={"li" + nav.id + "_" + i } className={pathname.startsWith(url) ? "active" : ""}>
                                        {link}
                                        {subChildren}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </nav>
        )
    },
    collspan(event){
        var curTart = event.currentTarget;
        $(curTart).next().collapse("toggle");
        $(curTart).parent().toggleClass("active");
    }
})

const Navigation_item = React.createClass({

    render(){
        var {props} = this,
            {pathname} = props.location,
            {collspan,subs,url,level} = props,
            subsChildren = "";
        if(subs == undefined) subs = [];
        if(subs && subs.length>0){

            subsChildren = subs.map((item,i) => {
                var nav_ul = "",
                    arrow = "",
                    link = <Link data-link="link" to={ item.url }>{item.title}{arrow}</Link>;
                if(item.subs && item.subs.length > 0){
                    nav_ul = <Navigation_item {...props} subs={item.subs} url={item.url} level={item.level}/>;
                    arrow = <span className="fa arrow"></span>;
                    link = <a data-link="a" onClick={collspan} href="javascript:;">{item.title}{arrow}</a>;
                }
                return (
                    <li key={"_"+ i} className={pathname.startsWith(item.url) ? "active" : ""}>
                        {link}
                        {nav_ul}
                    </li>
                )
            })
        }

        return (
            <ul className={"nav collapse " + level + (pathname.startsWith(url) ? " in" : "")}>
                {subsChildren}
            </ul>
        )
    }
})

export default Navigation;
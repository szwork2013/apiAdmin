import React from 'react'
import Navigation from './Navigation'
import NavMap from '../conf/NavMap'
import Footer from './Footer'
import Header from './Header'
require("../statics/less/renrengo.less");
require("../statics/less/product.less")

const Main = React.createClass({
    contextTypes: {
        router: React.PropTypes.object
    },
    componentDidMount(){
        var {pathname} = this.props.location;
        if(pathname == "/"){
            this.context.router.push("/defaultPage");
        }
    },
    render(){
        return (
            <div id="wrapper">
                <Header {...this.props}/>
                <div className="nav">
                    <Navigation {...this.props}/>
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
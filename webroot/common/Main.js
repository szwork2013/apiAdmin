import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import Header from './Header'
require("../statics/less/renrengo.less");

const Main = React.createClass({
    componentDidMount(){

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
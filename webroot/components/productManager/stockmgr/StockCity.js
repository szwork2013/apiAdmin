import React from 'react'
import {IBoxTool, AreaPicker} from '../../../common/Birdie'

const StockCity = React.createClass({

    render(){

        return (
            <IBoxTool title="选择区域">
                <AreaPicker />
            </IBoxTool>
        )
    }
})
export default StockCity;
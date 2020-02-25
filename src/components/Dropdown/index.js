import React, { Component } from 'react'
import {Item} from './Item/index'



export default class extends Component{
     render() {
        let { dataArr } = this.props

        function  handleData(arr){

            return arr.map((data, n) => {
                return <Item data={data} key={n}/>
            });
        }

        let showHTMLData = handleData(dataArr)

        return <div className="dropdown">
            {showHTMLData}
        </div>
    }
}


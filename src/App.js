import React,  { Component } from 'react';
import Dropdown   from './components/Dropdown';

import './App.css';

export default class extends Component{
    state = {
        data: getData(),
        hasShowed: false
    }

    showDropdown = (e)=>{

        this.setState({
            hasShowed: !this.state.hasShowed
        })
    }
    render() {
        let showDropdown = null
        if(this.state.hasShowed){
            showDropdown =  <Dropdown dataArr={this.state.data}/>
        }
        return <div className="app">
          <button onClick={this.showDropdown}> Menu Dropdown</button>
            {showDropdown}
        </div>
    }
}










function getData() {
    return [
        {
            id: 3,
            parentId: null,
            name: 'name3',
            children: [
                {
                    id: 3.1,
                    parentId: 3,
                    name: 'name3.1'
                }
            ]
        },

        {
            id: 2,
            parentId: null,
            name: 'name2'
        },

        {
            id: 1,
            parentId: null,
            name: 'name1',
            children: [
                {
                    id: 1.1,
                    parentId: 1,
                    name: 'name1.1'
                }
            ]
        },
        {
            id: 4,
            parentId: null,
            name: 'name1',
            children: [
                {
                    id: 4.1,
                    parentId: 4,
                    name: 'name4.1',
                    children: [
                        {
                            id: '4.1.1',
                            parentId: 4.1,
                            name: 'name4.1.1',
                        }
                    ]
                },

                {
                    id: 4.2,
                    parentId: 4,
                    name: 'name4.2',

                },

                {
                    id: 4.3,
                    parentId: 4,
                    name: 'name4.3',

                },

            ]
        }

    ]
}

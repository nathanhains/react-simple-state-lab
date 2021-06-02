import React from 'react'
export default class Cell extends React.Component{
    constructor(props){
        super()
        this.state = {color: props.value}
    }

    render(){
        return <div onClick={()=> {this.setState({
            color: '#333'
        })}} className="cell" style={{backgroundColor: `${this.state.color}`}}></div>
    }
}
import React from "react";


class Bike extends React.Component{

    constructor(){
        super();
        this.state={color:"Red"}
    }
    render(){
        return<div>
        <h1>My bike color is {this.state.color}</h1>
        <button onClick={()=>{this.setState({color:"blue"})}}>Change</button>
        </div>
    }
}
export default Bike; 
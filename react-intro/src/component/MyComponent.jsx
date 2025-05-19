import React, { Component } from "react";

// class MyComponent extends React.Component
class MyComponent extends Component{
    render(){
        let username = "sejal";
        return(
            <div>
                <h1>Hello ME</h1>
                <h1>My Name Is {username}</h1>
                <h1>I am {this.props.age}</h1>
                </div>
        )   
    }
}
export default MyComponent;